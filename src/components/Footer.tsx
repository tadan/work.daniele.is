import { Link } from "react-router-dom";

const Footer = () => {
  const emailSubject = "Let's work together";
  const emailBody = "Hi Daniele,%0A%0AI'm interested in working with you on a project. I'd love to discuss how we can collaborate to bring innovative ideas to life through prototyping and design.%0A%0ALooking forward to hearing from you!%0A%0ABest regards";

  return (
    <footer className="w-full py-12 px-4 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        <nav className="flex flex-wrap justify-center gap-8">
          <Link
            to="/projects"
            className="text-lg text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            Projects
          </Link>
          <a
            href={`mailto:work@daniele.is?subject=${emailSubject}&body=${emailBody}`}
            className="text-lg text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            Mail
          </a>
          <a
            href="https://daniele.is/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/danieletatasciore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            LinkedIn
          </a>
        </nav>
        <p className="text-base text-muted-foreground">
          © Daniele Tatasciore
        </p>
      </div>
    </footer>
  );
};

export default Footer;