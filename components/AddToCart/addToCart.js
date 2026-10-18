"use client";
import { useState } from "react";
import { FiCheck, FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import { useCart } from "@/components/Cart/CartProvider";
import s from "./addToCart.module.css";

export default function AddToCart({ product, compact = false }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);

  const handle = () => {
    add({ id: product.id, slug: product.slug, nom: product.nom, prix: product.prix, image: product.image }, qty);
    setDone(true);
    setTimeout(() => setDone(false), 1600);
  };

  if (compact)
    return (
      <button className={s.compact} onClick={handle} aria-label={`Ajouter ${product.nom} au panier`}>
        {done ? <FiCheck size={15} /> : <FiShoppingBag size={15} />}
      </button>
    );

  return (
    <div className={s.row}>
      <div className={s.qty}>
        <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Moins"><FiMinus /></button>
        <b>{qty}</b>
        <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Plus"><FiPlus /></button>
      </div>
      <button className="btn btn-primary" onClick={handle}>
        {done ? <><FiCheck /> Ajouté au panier</> : <><FiShoppingBag /> Ajouter au panier</>}
      </button>
    </div>
  );
}