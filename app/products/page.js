import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Products() {
  const categories = [
    {
      id: 1,
      img: "/fondproduct1.png",
      title: "Crèmes & Laits Corporels",
      slug: "cremes",
    },
    {
      id: 2,
      img: "/fondproduct2.png",
      title: "Savons & Brumes pour le Corps",
      slug: "soap",
    },
    {
      id: 3,
      img: "/fondproduct3.png",
      title: "Soins du Visage",
      slug: "face",
    },
    {
      id: 4,
      img: "/fondproduct4.png",
      title: "Gommages & Huiles Corporelles",
      slug: "gommages-huiles",
    },
    {
      id: 5,
      img: "/fondproduct5.png",
      title: "Soins Capillaires",
      slug: "cheveux",
    },
    {
      id: 6,
      img: "/fondproduct6.png",
      title: "Soins Intimes & Hygiène Dentaire",
      slug: "soins-intimes-bucco",
    },
    {
      id: 7,
      img: "/mainfond2.png",
      title: "Divers",
      slug: "autres",
    },
    {
      id: 8,
      img: "/fondproduct8.png",
      title: "Vitamines & Compléments",
      slug: "vitamines",
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Choisissez l'excellence, catégorie par catégorie
      </h1>

      

      <section className={styles.content}>
        {categories.map((cat) => (
          <Link
            href={`/products/${cat.slug}`}
            className={styles.box}
            key={cat.id}
          >
            <Image
              src={cat.img}
              alt={cat.title}
              width={500}
              height={500}
              className={styles.img}
            />

            <div className={styles.overlay}>
              <h3 className={styles.box_title}>
                {cat.title}
              </h3>

              <span className={styles.link}>
                Découvrir →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}