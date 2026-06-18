import styles from "./footer.module.css";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsPinMapFill } from "react-icons/bs";


export default function Footer() {
  return (
      <footer className={styles.footer}>
       <a href="tel:+2250102030405">
        <RiCustomerService2Line className={styles.icon} />
        <p className={styles.text}>
          Contactez nous 
        </p>
       </a>

        <a href="https://maps.app.goo.gl/K9p2WaUfdBztz78x7">
        <BsPinMapFill className={styles.icon}  />
        <p className={styles.text}>
          Trouvez-nous sur la carte
        </p>
       </a>

    
          
      </footer>
  );
}
