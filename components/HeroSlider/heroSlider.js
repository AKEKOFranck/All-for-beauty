"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import s from "./heroSlider.module.css";

export default function HeroSlider({ slides, script, interval = 6000 }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;
  const go = useCallback((d) => setI((c) => (c + d + n) % n), [n]);

  useEffect(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => go(1), interval);
    return () => clearInterval(t);
  }, [paused, n, interval, go]);

  return (
    <section className={s.hero} aria-roledescription="carrousel" aria-label="À la une"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((sl, k) => {
        const Heading = k === 0 ? "h1" : "h2";
        return (
          <div key={sl.title} className={`${s.slide} ${k === i ? s.on : ""}`} aria-hidden={k !== i}>
            <Image src={sl.image} alt={sl.title} fill priority={k === 0} sizes="100vw" className={s.bg} />
            <div className={s.shade} />
            <div className={`container ${s.content}`}>
              <span className="eyebrow">{sl.eyebrow}</span>
              <Heading className={s.heading}>{sl.title}</Heading>
              <p className={s.text}>{sl.text}</p>
              <Link href={sl.cta.href} className="btn btn-primary">{sl.cta.label} <FiArrowRight /></Link>
            </div>
          </div>
        );
      })}

      {script && (
        <p className={`${s.script} script`}>{script} <FiHeart size={18} /></p>
      )}

      {n > 1 && (
        <>
          <button className={`${s.arrow} ${s.prev}`} onClick={() => go(-1)} aria-label="Diapositive précédente"><FiChevronLeft size={20} /></button>
          <button className={`${s.arrow} ${s.next}`} onClick={() => go(1)} aria-label="Diapositive suivante"><FiChevronRight size={20} /></button>
          <div className={s.pager}>
            {slides.map((sl, k) => (
              <button key={sl.title} onClick={() => setI(k)} className={k === i ? s.cur : ""} aria-label={`Aller à la diapositive ${k + 1}`}>
                {String(k + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}