"use client";
import { useState } from "react";
import Image from "next/image";
import s from "./productGallery.module.css";

export default function ProductGallery({ images, alt }) {
  const [i, setI] = useState(0);
  const list = images.length ? images : ["/logoCos.svg"];
  return (
    <div>
      <div className={s.main}><Image src={list[i]} alt={alt} fill priority sizes="(max-width:820px) 100vw, 50vw" /></div>
      {list.length > 1 && (
        <div className={s.thumbs}>
          {list.map((src, n) => (
            <button key={src} onClick={() => setI(n)} className={n === i ? s.on : ""} aria-label={`Image ${n + 1}`}>
              <Image src={src} alt="" fill sizes="72px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}