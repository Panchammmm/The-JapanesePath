import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-muted/30 mt-auto">
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-3">NihongoPath</h3>
          <p className="text-sm text-muted-foreground">
            A structured path to mastering Japanese, from N5 to N3.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/levels" className="hover:text-primary transition-colors">JLPT Levels</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Disclaimer</h3>
          <p className="text-sm text-muted-foreground">
            This site is not affiliated with or endorsed by the Japan Foundation or JLPT. All content is for educational purposes only.
          </p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} NihongoPath. Built for learners.
      </div>
    </div>
  </footer>
);

export default Footer;
