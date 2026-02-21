import { motion } from "framer-motion";
import iconNecklace from "@/assets/icon-necklace.png";
import iconKeychain from "@/assets/icon-keychain.png";
import iconRing from "@/assets/icon-ring.png";
import iconBracelet from "@/assets/icon-bracelet.png";
import iconEarrings from "@/assets/icon-earrings.png";
import iconHomedecor from "@/assets/icon-homedecor.png";

const categories = [
  { icon: iconNecklace, name: "Necklaces" },
  { icon: iconKeychain, name: "Keychains" },
  { icon: iconRing, name: "Rings" },
  { icon: iconBracelet, name: "Bracelets" },
  { icon: iconEarrings, name: "Earrings" },
  { icon: iconHomedecor, name: "Home Decor" },
];

const Categories = () => {
  return (
    <section className="relative z-10 py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Browse By
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-wide">
            Categories
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass rounded-xl py-5 px-3 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-luxury hover:border-primary/30 cursor-pointer"
            >
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-10 h-10 object-contain"
                draggable={false}
              />
              <span className="font-body text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                {cat.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
