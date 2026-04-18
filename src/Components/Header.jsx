import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "About", sectionId: "about-me" },
  { label: "Work", sectionId: "experiences" },
  { label: "Skills", sectionId: "skills" },
  { label: "Education", sectionId: "education" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const homeRoute = () => {
    navigate("/");
    closeMenu();
  };

  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md">
      <div className="container-page flex h-[3.75rem] items-center justify-between gap-4 md:h-[4.25rem]">
        <Link
          to="/"
          className="min-h-[44px] min-w-[44px] content-center text-lg font-semibold tracking-tight text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] md:text-xl"
          onClick={closeMenu}
        >
          Nathan Kim
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <button
            type="button"
            className="nav-link min-h-[44px] px-3"
            onClick={homeRoute}
          >
            Home
          </button>
          {navItems.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              type="button"
              className="nav-link min-h-[44px] px-3"
              onClick={() => goToSection(sectionId)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Menu</span>
          {menuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            <button
              type="button"
              className="nav-link-mobile min-h-[48px] w-full rounded-lg px-3 text-left"
              onClick={homeRoute}
            >
              Home
            </button>
            {navItems.map(({ label, sectionId }) => (
              <button
                key={sectionId}
                type="button"
                className="nav-link-mobile min-h-[48px] w-full rounded-lg px-3 text-left"
                onClick={() => goToSection(sectionId)}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
