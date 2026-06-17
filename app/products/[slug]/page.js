import Image from "next/image";
import styles from "./page.module.css";
import products from "@/lib/data/produits.json"
import { notFound } from "next/navigation";
import WhatsAppButton from "@/app/components/whatsAppBtn/page";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";


export async function generateStaticParams() {
  return products.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ProductsDetails({params}) {
  
      const { slug } = await params;

  const category = products.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div >
       {notFound}
      </div>
    );
  }

  return (
    <div className={styles.main}>

      {/* Hero / Header */}
      <div className={styles.hero}>
        <Link href={"/products"} className={styles.heroTitle}>
          {category.category}
          <BiSolidLeftArrow />
        </Link>
        <div className={styles.heroDivider} />
      </div>

      {/* Grid */}
      <div className={styles.content}>
        <div className={styles.grid}>
          {category.products.map((item) => (
            <div className={styles.card} key={item.id}>

              {/* Image */}
              <div className={styles.imageWrapper}>
                {item.pic ? (
                  <Image
                    src={item.pic}
                    alt={item.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.placeholderIcon}>✦</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <h2 className={styles.cardName}>{item.name}</h2>
                <p className={styles.cardDesc}>{item.desc}
                 
                </p>

                <div className={styles.cardFooter}>
                  <span className={styles.cardPrice}>
                    {item.price} FCFA
                  </span>
                  <WhatsAppButton product={item}  />
                </div>
                 {item.id}

                {/* Signature gold line */}
                <div className={styles.goldLine} />
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}



