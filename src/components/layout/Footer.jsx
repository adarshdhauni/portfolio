import Container from "@/components/layout/Container";
import { SITE_CONFIG } from "@/constants/siteConfig";

const Footer = () => {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights
            reserved.
          </p>

          <p>Built with React, Vite & Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
