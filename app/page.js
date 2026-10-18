import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiAward, FiGlobe, FiHeart, FiMapPin } from "react-icons/fi";
import { PiHeartLight, PiLeafLight, PiShieldCheckLight, PiTruckLight } from "react-icons/pi";
import HeroSlider from "@/components/HeroSlider/heroSlider";
import BestSellers from "@/components/BestSellers/bestSellers";
import Testimonials from "@/components/Testimonials/testimonials";
import { getCategories, getProducts } from "@/lib/products";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";
import s from "./page.module.css";

export const metadata = {
  title: `${siteConfig.name} | Soins de beauté & cosmétiques naturels premium`,
  alternates: { canonical: "/" },
};

const featureIcons = { truck: PiTruckLight, shield: PiShieldCheckLight, leaf: PiLeafLight, heart: PiHeartLight };
const reasonIcons = { leaf: PiLeafLight, globe: FiGlobe, award: FiAward };

export default function Home() {
  const categories = getCategories();
  const products = getProducts();
  const best = siteConfig.bestSellers
    .map((b) => {
      const p = products.find((x) => x.id === b.id);
      return p && { ...p, badge: b.badge, rating: b.rating };
    })
    .filter(Boolean);

  return (
    <>
      <HeroSlider slides={siteConfig.hero.slides} script={siteConfig.hero.script} interval={siteConfig.hero.interval} />

      <section className={s.features}>
        <div className={`container ${s.featGrid}`}>
          {siteConfig.features.map((f) => {
            const Icon = featureIcons[f.icon];
            return (
              <div key={f.title} className={s.feat}>
                <Icon size={38} />
                <div><h3>{f.title}</h3><p>{f.text}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section container">
        <div className={s.rowHead}>
          <div>
            <span className="eyebrow">Nos catégories</span>
            <h2 className="title">Tout ce dont votre peau a besoin, en un seul lieu</h2>
          </div>
          <Link href="/products" className={s.more}>Voir tout <FiArrowRight /></Link>
        </div>
        <div className={s.cats}>
          {categories.map((c) => (
            <Link key={c.slug} href={`/products?cat=${c.slug}`} className={s.cat}>
              <div className={s.catImg}>
                <Image src={siteConfig.categoryInfo[c.slug]?.image || c.cover} alt={c.label}
                  fill sizes="(max-width:560px) 84px, (max-width:900px) 50vw, 25vw" />
              </div>
              <div className={s.catBody}>
                <div>
                  <h3>{c.label}</h3>
                  <p>{siteConfig.categoryInfo[c.slug]?.tagline}</p>
                </div>
                <span className={s.go}><FiArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={s.best}>
        <div className={`container ${s.bestGrid}`}>
          <div>
            <span className="eyebrow">Nos meilleures ventes</span>
            <h2 className="title">Les incontournables</h2>
            <p className="lead">Découvrez les produits les plus appréciés par notre communauté.</p>
            <Link href="/products" className="btn btn-primary">Voir toute la sélection <FiArrowRight /></Link>
          </div>
          <BestSellers items={best} />
        </div>
      </section>

      <section className="section container">
        <div className={s.center}>
          <span className="eyebrow">Notre engagement</span>
          <h2 className="title">Pourquoi choisir nos produits ?</h2>
        </div>
        <div className={s.whyGrid}>
          {siteConfig.reasons.map((r) => {
            const Icon = reasonIcons[r.icon];
            return (
              <div key={r.title} className={s.why}>
                <span><Icon size={24} /></span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={`container ${s.about}`}>
        <div className={s.aboutMain}>
          <div className={s.visual}>
            <div className={s.visualImg}>
              <Image src={siteConfig.aboutImage} alt={siteConfig.name} fill sizes="(max-width:620px) 60vw, 25vw" />
            </div>
            <div className={`${s.quote} script`}>
              <span>{siteConfig.about.quote}</span>
              <FiHeart size={16} />
            </div>
          </div>
          <div className={s.aboutText}>
            <h2>{siteConfig.about.title}</h2>
            <p>{siteConfig.about.text}</p>
            <Link href="/about" className="btn btn-primary">En savoir plus <FiArrowRight /></Link>
          </div>
        </div>
        <div className={s.trust}>
          <h2 className={s.trustTitle}>Ils nous font confiance</h2>
          <Testimonials items={siteConfig.testimonials} />
        </div>
      </section>

      <section className="container">
        <div className={s.cta}>
          <h2 className="title">Une question ? Parlons-en.</h2>
          <p>Recevez des conseils beauté personnalisés, directement sur WhatsApp.</p>
          <div className={s.ctaBtns}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaWhatsapp size={18} /> Nous contacter
            </a>
            <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className={`btn ${s.ghost}`}>
              <FiMapPin size={16} /> Trouvez-nous sur la carte
            </a>
          </div>
        </div>
      </section>
    </>
  );
}