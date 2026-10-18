"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import s from "./testimonials.module.css";

export default function Testimonials({ items }) {
  const [i, setI] = useState(0);
  const n = items.length;
  if (!n) return null;
  const t = items[i];
  const go = (d) => setI((c) => (c + d + n) % n);

  return (
    <div>
      <figure className={s.card}>
        <span className={s.avatar} aria-hidden="true">{t.name.charAt(0)}</span>
        <div>
          <blockquote>“{t.text}”</blockquote>
          <figcaption>
            <b>{t.name}</b>
            <span className={s.stars} aria-label={`${t.rating} sur 5`}>
              {Array.from({ length: t.rating }, (_, k) => <FaStar key={k} />)}
            </span>
          </figcaption>
        </div>
      </figure>
      {n > 1 && (
        <div className={s.nav}>
          <button onClick={() => go(-1)} aria-label="Avis précédent"><FiChevronLeft /></button>
          <div className={s.dots}>
            {items.map((x, k) => (
              <button key={x.name + k} onClick={() => setI(k)} className={k === i ? s.on : ""} aria-label={`Avis ${k + 1}`} />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Avis suivant"><FiChevronRight /></button>
        </div>
      )}
    </div>
  );
}