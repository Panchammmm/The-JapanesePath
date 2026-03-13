import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => (
  <footer className="border-t bg-muted/30 mt-auto">
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🇯🇵</span>
            <h3 className="font-semibold text-base tracking-wide">
              NihongoPath
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your structured path from beginner to intermediate — covering
            grammar, kanji, vocabulary, and JLPT practice from N5 to N3.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-3 font-medium tracking-widest">
            日本語学習
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/levels"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                JLPT Levels
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacypolicy"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div>
          <h3 className="font-semibold mb-3">Disclaimer</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            NihongoPath is an independent educational resource and is not
            affiliated with the Japan Foundation or the official JLPT
            organization. All content is original and provided for learning
            purposes only.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} NihongoPath. Built for learners.
        <p className="mt-2 text-xs text-muted-foreground/60">
          Designed & developed by{" "}
          <a
            href="https://pancham-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors"
          >
            Pancham Sardar
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
