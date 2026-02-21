import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Instagram, Mail } from "lucide-react";
import featuredFish from "@/assets/featured-fish.png";

const INSTAGRAM_DM = "https://ig.me/m/ateef_sbk";

const FeaturedProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 font-body text-sm tracking-wider uppercase"
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={featuredFish}
                alt="Featured — The Golden Koi Collection"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 -z-10 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Featured Collection
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground tracking-wide mb-6 leading-tight">
              The Golden Koi
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Our signature resin art piece inspired by the majestic koi — symbol of perseverance and strength. Each piece is hand-poured with premium resin, real gold leaf, and finished to perfection.
            </p>

            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold">
                ₹350
              </span>
              <span className="font-body text-xs text-muted-foreground tracking-wider uppercase">
                Limited Edition · Free Delivery
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={INSTAGRAM_DM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 font-body text-xs uppercase tracking-[0.12em] py-3.5 px-6 rounded-full btn-gold-gradient text-primary-foreground font-semibold hover:-translate-y-0.5 hover:shadow-luxury active:translate-y-0 transition-all duration-300"
              >
                <ShoppingBag size={15} />
                Buy Now on Instagram
              </a>
              <a
                href="mailto:Ateef.freestyle@gmail.com?subject=Order%20Inquiry%20-%20Golden%20Koi"
                className="flex items-center justify-center gap-2 font-body text-xs uppercase tracking-[0.12em] py-3.5 px-6 rounded-full border border-border/50 bg-card/20 backdrop-blur-md text-foreground/80 hover:bg-card/40 hover:text-foreground hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={15} />
                Email Us
              </a>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <a
                href="https://www.instagram.com/ateef_sbk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-xs tracking-wider"
              >
                <Instagram size={16} />
                @ateef_sbk
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-border/30 pt-8">
              {[
                { label: "Material", value: "Premium Resin" },
                { label: "Finish", value: "Gold Leaf" },
                { label: "Delivery", value: "All India" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
