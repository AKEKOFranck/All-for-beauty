'use client'
import styles from "../whatsAppBtn/page.module.css"
export default function WhatsAppButton({ product }) {

  const sendToWhatsApp = () => {
    const numero = "2250787558755";

    const message = `
Identifiant : ${product.id}
Produit : ${product.name}
Prix : ${product.price}


*Client :*
*Veuillez remplir les informations*
Nom : 
Numéro :
Localisation :
`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button className={styles.cardBtn} type="button" onClick={sendToWhatsApp}>
                    commander
     </button>
  );
}