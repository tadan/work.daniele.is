import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="w-full py-8 px-4 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        <nav className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-muted-foreground hover:underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          © Daniele Tatasciore
        </p>
      </div>
    </footer>
  );
};

export default Footer;