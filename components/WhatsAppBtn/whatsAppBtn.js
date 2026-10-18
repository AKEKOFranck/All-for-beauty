import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/siteConfig";
import s from "./whatsAppBtn.module.css";

export default function WhatsAppBtn() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={s.btn} aria-label="Discuter sur WhatsApp">
      <FaWhatsapp size={28} />
    </a>
  );
}