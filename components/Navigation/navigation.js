"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronDown, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { PiHandbagLight } from "react-icons/pi";
import Brand from "@/components/Brand/brand";
import { useCart } from "@/components/Cart/CartProvider";
import { siteConfig } from "@/lib/siteConfig";
import s from "./navigation.module.css";

export default function Navigation({ categories = [] }) {
  const [menu, setMenu] = useState(false);
  const [dd, setDd] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const inputRef = useRef(null);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { setMenu(false); setDd(false); setSearch(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => { if (search) inputRef.current?.focus(); }, [search]);

  const closeAll = () => { setMenu(false); setDd(false); setSearch(false); };
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const submit = (e) => {
    e.preventDefault();
    const term = q.trim();
    closeAll();
    setQ("");
    router.push(term ? `/products?q=${encodeURIComponent(term)}` : "/products");
  };

  return (
    <>
      <div className={s.top}>{siteConfig.announcement}</div>
      <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
        <nav className={`container ${s.nav}`} aria-label="Navigation principale">
          <Brand onClick={closeAll} />

          <ul className={`${s.links} ${menu ? s.open : ""}`}>
            {siteConfig.nav.map((l) => {
              const hasMega = l.mega && categories.length > 0;
              return (
                <li key={l.href} className={s.item}
                  onMouseEnter={hasMega ? () => setDd(true) : undefined}
                  onMouseLeave={hasMega ? () => setDd(false) : undefined}
                  onFocus={hasMega ? () => setDd(true) : undefined}
                  onBlur={hasMega ? (e) => { if (!e.currentTarget.contains(e.relatedTarget)) setDd(false); } : undefined}>
                  <Link href={l.href} onClick={closeAll} className={`${s.link} ${isActive(l.href) ? s.active : ""}`}>
                    {l.label}
                    {hasMega && <FiChevronDown size={14} className={s.chev} />}
                  </Link>

                  {hasMega && (
                    <>
                      <div className={`${s.mega} ${dd ? s.showMega : ""}`}>
                        <div className={s.panel}>
                          <Link href="/products" onClick={closeAll} className={s.all}>Tous les produits</Link>
                          {categories.map((c) => (
                            <Link key={c.slug} href={`/products?cat=${c.slug}`} onClick={closeAll}>
                              <span>{c.label}</span><small>{c.count}</small>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <ul className={s.subs}>
                        {categories.map((c) => (
                          <li key={c.slug}>
                            <Link href={`/products?cat=${c.slug}`} onClick={closeAll}>{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>

          <div className={s.right}>
            <button className={s.icon} onClick={() => setSearch((v) => !v)} aria-label="Rechercher un produit" aria-expanded={search}>
              <FiSearch size={21} />
            </button>
            <Link href="/panier" className={s.icon} onClick={closeAll} aria-label={`Panier, ${count} article(s)`}>
              <PiHandbagLight size={24} />
              {count > 0 && <span className={s.badge}>{count}</span>}
            </Link>
            <button className={`${s.icon} ${s.burger}`} onClick={() => setMenu((v) => !v)} aria-label="Menu" aria-expanded={menu}>
              {menu ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {search && (
          <div className={s.search}>
            <form className={`container ${s.searchForm}`} onSubmit={submit} role="search">
              <FiSearch size={18} />
              <input ref={inputRef} type="search" value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="Rechercher une crème, un sérum, un parfum…" aria-label="Rechercher" />
              <button type="submit" className="btn btn-primary">Rechercher</button>
            </form>
          </div>
        )}
      </header>
    </>
  );
}