import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import s from "./brand.module.css";

export default function Brand({ onClick }) {
  return (
    <Link href="/" className={s.brand} onClick={onClick} aria-label={`${siteConfig.name} — accueil`}>
        <Image src={siteConfig.logo} alt="" width={64} height={64} className={s.logo} priority />      <span className={s.text}>
        <span className={s.name}>{siteConfig.name}</span>
        <span className={s.tag}>{siteConfig.brandTagline}</span>
      </span>
    </Link>
  );
}