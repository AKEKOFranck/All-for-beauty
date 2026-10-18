"use client";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "@/components/ProductCard/productCard";
import s from "./bestSellers.module.css";

export default function BestSellers({ items }) {
  const ref = useRef(null);
  const scroll = (d) =>
    ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <div className={s.wrap}>
      <button className={`${s.arrow} ${s.prev}`} onClick={() => scroll(-1)} aria-label="Précédent"><FiChevronLeft size={18} /></button>
      <div ref={ref} className={s.track}>
        {items.map((p) => (
          <div key={p.id} className={s.item}><ProductCard product={p} /></div>
        ))}
      </div>
      <button className={`${s.arrow} ${s.next}`} onClick={() => scroll(1)} aria-label="Suivant"><FiChevronRight size={18} /></button>
    </div>
  );
}