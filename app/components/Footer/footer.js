import styles from "./footer.module.css";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Footer() {
  return (
      <footer className={styles.footer}>
       <a href="tel:+2250102030405">
        <RiCustomerService2Line className={styles.icon} />
        <p className={styles.text}>
          Contactez nous pour plus d'informations
        </p>
       </a>

    
          
      </footer>
  );
}
