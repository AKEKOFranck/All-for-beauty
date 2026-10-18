"use client";
import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProductCard from "@/components/ProductCard/productCard";
import s from "./productsGrid.module.css";

const norm = (t = "") => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export default function ProductsGrid({ products, categories, initialCategory = "all", initialQuery = "", autoFocus = false }) {
  const [cat, setCat] = useState(initialCategory);
  const [q, setQ] = useState(initialQuery);

  const filtered = useMemo(() => {
    const term = norm(q);
    return products.filter((p) =>
      (cat === "all" || p.category === cat) &&
      (!term || norm(p.nom).includes(term) || norm(p.description).includes(term)));
  }, [products, cat, q]);

  const chips = [{ slug: "all", label: "Tous", count: products.length }, ...categories];

  return (
    <>
      <div className={s.tools}>
        <div className={s.chips} role="tablist">
          {chips.map((c) => (
            <button key={c.slug} role="tab" aria-selected={cat === c.slug}
              className={cat === c.slug ? s.on : ""} onClick={() => setCat(c.slug)}>
              {c.label} <small>{c.count}</small>
            </button>
          ))}
        </div>
        <label className={s.search}>
          <FiSearch />
          <input type="search" placeholder="Rechercher un produit…" value={q}
            onChange={(e) => setQ(e.target.value)} autoFocus={autoFocus} />
        </label>
      </div>
      <p className={s.count}>{filtered.length} produit{filtered.length > 1 ? "s" : ""}</p>
      {filtered.length ? (
        <div className={s.grid}>{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      ) : (
        <p className={s.none}>Aucun produit ne correspond à votre recherche.</p>
      )}
    </>
  );
}