import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import AddToCart from "@/components/AddToCart/addToCart";
import { formatPrice } from "@/lib/format";
import s from "./productCard.module.css";

export default function ProductCard({ product }) {
  return (
    <article className={s.card}>
      <Link href={`/products/${product.slug}`} className={s.media}>
        {product.badge && <span className={s.badge}>{product.badge}</span>}
        <Image src={product.image} alt={product.nom} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" />
      </Link>
      <div className={s.body}>
        <h3><Link href={`/products/${product.slug}`}>{product.nom}</Link></h3>
        {product.rating > 0 && (
          <div className={s.stars} aria-label={`${product.rating} sur 5`}>
            {Array.from({ length: product.rating }, (_, k) => <FaStar key={k} />)}
          </div>
        )}
        <div className={s.foot}>
          <span className={s.price}>{formatPrice(product.prix)}</span>
          <AddToCart product={product} compact />
        </div>
      </div>
    </article>
  );
}