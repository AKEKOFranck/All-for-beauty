import ProductsGrid from "@/components/ProductsGrid/productsGrid";
import { getCategories, getProducts } from "@/lib/products";

export const metadata = {
  title: "Nos Produits — soins, crèmes, sérums, parfums et vitamines",
  description: "Parcourez tous nos produits cosmétiques : soins visage, crèmes corps, gommages, savons, soins capillaires, parfums et compléments.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage({ searchParams }) {
  const { cat, q, focus } = await searchParams;
  const categories = getCategories();
  const initial = categories.some((c) => c.slug === cat) ? cat : "all";
  const query = typeof q === "string" ? q : "";
  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Boutique</span>
        <h1 className="title">Nos Produits</h1>
        <p className="lead">Filtrez par catégorie ou recherchez un produit précis.</p>
      </header>
      <ProductsGrid key={`${initial}-${query}`} products={getProducts()} categories={categories}
        initialCategory={initial} initialQuery={query} autoFocus={focus === "1"} />
    </div>
  );
}