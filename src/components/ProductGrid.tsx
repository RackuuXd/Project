import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import productKeychain from "@/assets/product-keychain.png";
import productEarrings from "@/assets/product-earrings.png";
import productNecklace from "@/assets/product-necklace.png";
import productGalaxy from "@/assets/product-galaxy.png";
import productCustomKeychain from "@/assets/product-custom-keychain.png";
import productPaperweight from "@/assets/product-paperweight.png";

const products = [
  {
    image: productKeychain,
    name: "Glitter Keychain",
    price: "₹150",
    tags: ["Diamond dust", "3D resin finish"],
    freeDelivery: true,
  },
  {
    image: productEarrings,
    name: "Geode Earrings",
    price: "₹150",
    tags: ["Hypoallergenic", "Lightweight", "Elegant"],
    freeDelivery: true,
  },
  {
    image: productNecklace,
    name: "Floral Necklace",
    price: "₹200",
    tags: ["Real dried flowers", "Crystal clear resin"],
    freeDelivery: true,
  },
  {
    image: productGalaxy,
    name: "Galaxy Pendant",
    price: "₹200",
    tags: ["Deep space finish", "Cosmic tones"],
    freeDelivery: false,
  },
  {
    image: productCustomKeychain,
    name: "Custom Name Keychain",
    price: "₹150",
    tags: ["Personalized", "Any name"],
    freeDelivery: false,
  },
  {
    image: productPaperweight,
    name: "Floral Paperweight",
    price: "₹180",
    tags: ["Real pressed flowers", "Home decor"],
    freeDelivery: false,
  },
];

const ProductGrid = () => {
  return (
    <section id="collection" className="relative z-10 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-wide">
            Handcrafted Resin Art
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.name} {...p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
