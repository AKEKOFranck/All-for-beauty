import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { GiCampCookingPot } from "react-icons/gi";
import { FaTruckPlane } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  const dataFullProducts = [
  "Essentiels Corps",
  "Rituel Hydratation",
  "Éclat du Visage",
  "Soin Perfecteur",
  "Rituel Capillaire",
  "Nutrition Cheveux",
  "Intimité & Douceur",
  "Éclat du Sourire",
  "Fraîcheur Dentaire",
  "Vitalité & Énergie",
  "Compléments Bien-être"
]

const dataInfoProducts = [
  {
    id:1,
    ico: <GiCampCookingPot /> ,
     title: "Pureté des Ingrédients Naturels",
    description: "Des formules douces et puissantes, enrichies en actifs naturels sélectionnés pour révéler l’éclat de votre peau."
  },

   {
    id:2,
    ico:<FaTruckPlane />,
     title: "Sélection Premium Importée des États-Unis",
    description: "Des soins de qualité internationale, soigneusement choisis pour leur efficacité et leurs résultats visibles."
  },

   {
    id:3,
    ico:<RiCustomerService2Fill />,
   title: "Expérience Client d’Exception",
    description: "Un accompagnement personnalisé et un service réactif pour vous offrir une expérience beauté unique et haut de gamme."
  }
]

  return (
      <main className={styles.main}>
       <section className={styles.section1}>
         <h1 className={styles.title}>Prenez soin de vous, naturellement</h1>
<p className={styles.description}>
Une sélection de produits doux et efficaces pour une peau saine, lumineuse et rayonnante.
</p>
<p className={styles.description}>
 faites défiler pour découvrir toute notre gamme.
</p>

<div className={styles.card_icon}> <MdKeyboardDoubleArrowDown />
 </div>
       </section>

       <section className={styles.section2}>
        
        <div className={styles.second_content}>
         <h2 className={styles.second_title}>Tout ce Dont Votre Peau a Besoin, en Un Seul Lieu</h2>
         <ul className={styles.list}>
          {dataFullProducts.map((product, index) => (
            <li key={index} className={styles.listItem}>
              {product}
            </li>
          ))}
         </ul>
        </div>
        <div className={styles.second_content}>
           <Image
            src="/mainfond2.png"
            alt="Image de la section 2"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
         
       </section>




       <section className={styles.section3}>

        <h2 className={styles.third_title}>Pourquoi Choisir Nos Produits ?</h2>
        <div className={styles.third_content}>
           {dataInfoProducts.map((info) => (
            <div key={info.id} className={styles.third_card}>
              <div className={styles.card_icon}>{info.ico}</div>
              <h3 className={styles.card_title}>{info.title}</h3>
              <p className={styles.card_description}>{info.description}</p>
            </div>
           ))}
        </div>


       </section>

       <section className={styles.section4}>
           <div className={styles.third_content}>
             <h2 className={styles.fourth_title}>
              Profitez d’offres exclusives
             </h2>
           <Image
            src="/mainfond3.png"
            alt="Image de la section 2"
            width={500}
            height={500}
            className={styles.fourth_image}
          />
          <h2 className={styles.fourth_title}> Découvrez nos nouveautés </h2>
           <Image
            src="/mainfond4.png"
            alt="Image de la section 2"
            width={500}
            height={500}
            className={styles.fourth_image}
          />
          <h2 className={styles.fourth_title}>Recevez des conseils beauté personnalisés.</h2>
           <Image
            src="/mainfond5.png"
            alt="Image de la section 2"
            width={500}
            height={500}
            className={styles.fourth_image}
          />
        </div>
       </section>

       <section className={styles.section1}>
         <h1 className={styles.title}>
  Révélez votre beauté naturelle avec nos soins d'exception
</h1>

<Link href="/products" className={styles.link}>
  Découvrir la collection
</Link>
       </section>
      </main>
  );
}
