import CartView from "@/components/Cart/cartView";

export const metadata = {
  title: "Mon panier",
  description: "Vérifiez votre panier et envoyez votre commande sur WhatsApp.",
  robots: { index: false, follow: true },
};

export default function PanierPage() {
  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Commande</span>
        <h1 className="title">Mon panier</h1>
      </header>
      <CartView />
    </div>
  );
}