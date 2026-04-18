const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)]"
      role="contentinfo"
    >
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-base text-[var(--color-muted)]">
          <p className="text-lg font-medium text-[var(--color-text)]">
            Nathan Donghyun Kim
          </p>
          <p>Computer Science · Georgia Institute of Technology</p>
        </div>
        <nav
          className="flex flex-wrap gap-x-6 gap-y-2 text-base"
          aria-label="Footer links"
        >
          <a
            href="https://github.com/nkim205"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nathan-kim-7816b22bb/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href="mailto:kimnathan0324@gmail.com" className="footer-link">
            Email
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="footer-link"
          >
            Resume
          </a>
        </nav>
      </div>
      <div className="border-t border-[var(--color-border)] py-4">
        <p className="container-page text-left text-sm text-[var(--color-muted)]">
          © {year} Nathan Kim ·{" "}
          <a
            href="https://github.com/nkim205/portfolio"
            target="_blank"
            rel="noreferrer"
            className="footer-link inline"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
