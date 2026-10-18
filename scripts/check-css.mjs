import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = ["app", "components", "lib"].filter(existsSync).flatMap(walk).filter((f) => /\.(js|jsx)$/.test(f));
const exts = ["", ".js", ".jsx", ".json", ".css"];
let problems = 0;
const report = (msg) => { console.log(msg); problems++; };

for (const f of files) {
  const src = readFileSync(f, "utf8");

  if (!src.trim()) { report(`VIDE : ${f}`); continue; }

  const hasNamedExports = /export\s+(function|const)\s/.test(src);
  const isRouteFile = /(^|[\\/])(page|layout|not-found)\.(js|jsx)$/.test(f);
  const isComponent = f.startsWith("components");
  const needsDefault = isRouteFile || (isComponent && !hasNamedExports);

  if (needsDefault && !/export\s+default/.test(src)) report(`PAS D'EXPORT DEFAULT : ${f}`);

  for (const m of src.matchAll(/from\s+["'](\.[^"']+)["']/g)) {
    if (!exts.some((e) => existsSync(resolve(dirname(f), m[1] + e)))) report(`MANQUANT : ${f}  ->  ${m[1]}`);
  }
  for (const m of src.matchAll(/from\s+["']@\/([^"']+)["']/g)) {
    if (!exts.some((e) => existsSync(resolve(m[1] + e)))) report(`MANQUANT : ${f}  ->  @/${m[1]}`);
  }
}

console.log(problems ? `\n${problems} problème(s) trouvé(s).` : "Tout est valide ✅");