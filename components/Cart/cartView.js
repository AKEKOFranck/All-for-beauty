"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/format";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";
import s from "./cartView.module.css";

const fields = [
  { name: "nom", label: "Nom complet", type: "text", required: true, placeholder: "Ex : Awa Koné" },
  { name: "telephone", label: "Téléphone", type: "tel", required: true, placeholder: "Votre numéro WhatsApp" },
  { name: "ville", label: "Ville / Commune", type: "text", required: true, placeholder: "Ex : Cocody, Abidjan" },
  { name: "adresse", label: "Adresse de livraison", type: "text", required: false, placeholder: "Quartier, repère…" },
];

export default function CartView() {
  const { items, ready, total, setQty, remove, clear } = useCart();
  const [step, setStep] = useState("cart"); // cart | form | done
  const [form, setForm] = useState({ nom: "", telephone: "", ville: "", adresse: "", livraison: siteConfig.deliveryOptions[0].value, note: "" });
  const [ref, setRef] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const orderRef = `CMD-${Date.now().toString().slice(-6)}`;
    const lines = items.map((i, n) => `${n + 1}. ${i.nom} x${i.qty} — ${formatPrice(i.prix * i.qty)}`);
    const delivery = siteConfig.deliveryOptions.find((d) => d.value === form.livraison)?.label;
    const msg = [
      `🧾 *FACTURE ${orderRef}*`,
      `📅 ${new Date().toLocaleDateString("fr-FR")}`,
      "",
      `👤 *Client* : ${form.nom}`,
      `📞 ${form.telephone}`,
      `📍 ${form.ville}${form.adresse ? ` — ${form.adresse}` : ""}`,
      `🚚 ${delivery}`,
      "",
      "*Articles*",
      ...lines,
      "",
      `*TOTAL : ${formatPrice(total)}*`,
      form.note ? `\n📝 ${form.note}` : "",
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
    setRef(orderRef);
    clear();
    setStep("done");
  };

  if (!ready) return <div className={s.empty}>Chargement…</div>;

  if (step === "done")
    return (
      <div className={s.empty}>
        <FiCheckCircle size={44} className={s.ok} />
        <h2>Commande envoyée</h2>
        <p>Votre facture {ref} a été transmise sur WhatsApp. Nous revenons vers vous très vite.</p>
        <Link href="/products" className="btn btn-primary">Continuer mes achats</Link>
      </div>
    );

  if (!items.length)
    return (
      <div className={s.empty}>
        <FiShoppingBag size={44} />
        <h2>Votre panier est vide</h2>
        <p>Découvrez nos produits et ajoutez vos coups de cœur.</p>
        <Link href="/products" className="btn btn-primary">Voir les produits</Link>
      </div>
    );

  return (
    <div className={s.layout}>
      <ul className={s.items}>
        {items.map((i) => (
          <li key={i.id} className={s.item}>
            <div className={s.thumb}><Image src={i.image} alt={i.nom} fill sizes="90px" /></div>
            <div className={s.info}>
              <Link href={`/products/${i.slug}`}>{i.nom}</Link>
              <span>{formatPrice(i.prix)}</span>
              <div className={s.qty}>
                <button type="button" onClick={() => setQty(i.id, i.qty - 1)} aria-label="Moins"><FiMinus /></button>
                <b>{i.qty}</b>
                <button type="button" onClick={() => setQty(i.id, i.qty + 1)} aria-label="Plus"><FiPlus /></button>
              </div>
            </div>
            <div className={s.line}>
              <b>{formatPrice(i.prix * i.qty)}</b>
              <button type="button" onClick={() => remove(i.id)} aria-label="Retirer" className={s.del}><FiTrash2 /></button>
            </div>
          </li>
        ))}
      </ul>

      <aside className={s.summary}>
        <h2>Récapitulatif</h2>
        <div className={s.total}><span>Total</span><b>{formatPrice(total)}</b></div>

        {step === "cart" ? (
          <div className={s.actions}>
            <button className="btn btn-primary" onClick={() => setStep("form")}>C’est bon, valider ma commande</button>
            <Link href="/products" className="btn btn-outline">Ajouter d’autres produits</Link>
          </div>
        ) : (
          <form onSubmit={submit} className={s.form}>
            {fields.map((f) => (
              <label key={f.name}>
                {f.label}
                <input {...f} value={form[f.name]} onChange={onChange} />
              </label>
            ))}
            <label>
              Mode de livraison
              <select name="livraison" value={form.livraison} onChange={onChange}>
                {siteConfig.deliveryOptions.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
              </select>
            </label>
            <label>
              Note (facultatif)
              <textarea name="note" rows={3} value={form.note} onChange={onChange} placeholder="Une précision pour votre commande ?" />
            </label>
            <button type="submit" className="btn btn-primary"><FaWhatsapp /> Envoyer ma facture sur WhatsApp</button>
            <button type="button" className="btn btn-outline" onClick={() => setStep("cart")}>Retour au panier</button>
          </form>
        )}
      </aside>
    </div>
  );
}