import styles from "./page.module.css";

export default function Boutique() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>All For Beauty</h1>
          <p className={styles.subtitle}>
            Votre future référence en produits cosmétiques et de soins en Côte d’Ivoire.
            Nous mettons à votre disposition des produits de qualité sélectionnés
            avec soin pour répondre à vos besoins de beauté et de bien-être.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>À propos de All For Beauty</h2>

          <p className={styles.text}>
            All For Beauty est une entreprise ivoirienne spécialisée dans la vente
            de produits cosmétiques, de soins du visage, du corps, des cheveux,
            ainsi que de produits d’hygiène et de bien-être.
          </p>

          <p className={styles.text}>
            Notre boutique sera prochainement installée en Côte d’Ivoire avec pour
            mission de proposer à sa clientèle des produits authentiques,
            efficaces et adaptés à différents types de peau et de besoins.
          </p>

          <p className={styles.text}>
            Une partie de nos produits est directement importée des États-Unis afin
            de garantir leur qualité, leur originalité et leur conformité aux
            standards internationaux. Nous accordons une importance particulière à
            la satisfaction de nos clients en offrant des produits fiables et un
            service de proximité.
          </p>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Comment commander ?</h2>

          <div className={styles.steps}>
            <div className={styles.card}>
              <span className={styles.number}>1</span>
              <h3>Choisissez vos produits</h3>
              <p>
                Parcourez notre catalogue et sélectionnez les articles qui vous
                intéressent.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.number}>2</span>
              <h3>Cliquez sur Commander</h3>
              <p>
                Lorsque vous cliquez sur le bouton « Commander », vous êtes
                automatiquement redirigé vers le WhatsApp officiel de la boutique.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.number}>3</span>
              <h3>Validation de la commande</h3>
              <p>
                Quelques informations vous seront demandées afin de confirmer
                votre commande et de préparer votre livraison.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.number}>4</span>
              <h3>Livraison rapide</h3>
              <p>
                Après validation, votre commande est traitée puis livrée dans les
                meilleurs délais selon votre localisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}