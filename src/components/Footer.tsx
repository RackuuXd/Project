const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-lg font-semibold tracking-[0.1em] text-foreground">
        ATEEF
      </p>
      <p className="font-body text-xs text-muted-foreground tracking-wider">
        &copy; {new Date().getFullYear()} ATEEF. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
