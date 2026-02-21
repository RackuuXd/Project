import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  tags?: string[];
  freeDelivery?: boolean;
  delay?: number;
}

const INSTAGRAM_DM = "https://ig.me/m/ateef_sbk";

const ProductCard = ({ image, name, price, tags = [], freeDelivery = false, delay = 0 }: ProductCardProps) => {
  const handleBuy = () => {
    window.open(INSTAGRAM_DM, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="glass rounded-xl overflow-hidden shadow-card transition-shadow duration-500 group-hover:shadow-luxury">
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-5 md:p-6">
          <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2 tracking-wide">
            {name}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body text-base font-semibold text-primary">{price}</span>
            {freeDelivery && (
              <span className="font-body text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full">
                Free Delivery
              </span>
            )}
          </div>
          {tags.length > 0 && (
            <p className="font-body text-[11px] tracking-wider text-muted-foreground mb-4 leading-relaxed">
              {tags.join(" · ")}
            </p>
          )}
          <div className="flex gap-3">
            <button
              onClick={handleBuy}
              className="flex-1 flex items-center justify-center gap-2 font-body text-xs uppercase tracking-[0.12em] py-3 rounded-lg btn-gold-gradient text-primary-foreground font-semibold hover:-translate-y-0.5 hover:shadow-luxury active:translate-y-0 transition-all duration-300"
            >
              <ShoppingBag size={14} />
              Buy Now
            </button>
            <button
              onClick={handleBuy}
              className="font-body text-xs uppercase tracking-[0.12em] py-3 px-4 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
