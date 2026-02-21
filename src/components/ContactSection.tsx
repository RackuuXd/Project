import { motion } from "framer-motion";
import { Mail, Youtube, Instagram } from "lucide-react";

const contacts = [
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@ateef_uddin?si=lULsNcFjThBT7CHH",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/ateef_sbk?igsh=MTVzdG5hdGY3c25sbw==",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:Ateef.freestyle@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-wide mb-12">
            Contact Us
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl px-8 py-6 flex items-center gap-4 w-full sm:w-auto transition-all duration-300 hover:shadow-luxury hover:border-primary/30 group"
            >
              <c.icon className="w-6 h-6 text-primary transition-colors" />
              <span className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                {c.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
