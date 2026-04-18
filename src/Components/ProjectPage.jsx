import { Link } from "react-router-dom";

/**
 * @typedef {{ title: string; items: string[] }} HighlightSection
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {string} props.role
 * @param {string} props.period
 * @param {string[]} [props.tags]
 * @param {{ href: string; label: string; external?: boolean }[]} [props.links]
 * @param {import("react").ReactNode} [props.about]
 * @param {HighlightSection[]} [props.highlightSections]
 * @param {import("react").ReactNode} [props.children]
 */
const ProjectPage = ({
  title,
  subtitle,
  role,
  period,
  tags = [],
  links = [],
  about,
  highlightSections = [],
  children,
}) => {
  const hasAbout = about != null;
  const hasHighlights = highlightSections.length > 0;
  const hasMedia = Boolean(children);
  const hasNarrowContent = hasAbout || hasHighlights;
  const hasBody = hasNarrowContent || hasMedia;

  const twoColumnLayout = hasAbout && hasHighlights;

  return (
    <article className="pb-24 pt-12 text-left md:pb-32 md:pt-16">
      <div className="container-page">
        <Link
          to="/"
          className="mb-10 inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-[var(--color-muted)] transition hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          <span aria-hidden>←</span> Back to home
        </Link>

        <header className="border-b border-[var(--color-border)] pb-12">
          <p className="section-label mb-2">{period}</p>
          <h1 className="heading-display mb-4 w-full max-w-none">{title}</h1>
          {subtitle && (
            <p className="mb-3 max-w-none text-xl text-[var(--color-muted)]">
              {subtitle}
            </p>
          )}
          <p className="max-w-none text-xl font-medium text-[var(--color-text)] sm:text-2xl">
            {role}
          </p>
          {tags.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-3">
              {tags.map((t) => (
                <li key={t}>
                  <span className="chip">{t}</span>
                </li>
              ))}
            </ul>
          )}
          {links.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="btn-secondary min-h-12"
                    {...(link.external !== false
                      ? {
                          target: "_blank",
                          rel: "noreferrer",
                        }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </header>

        {hasBody && (
          <div className="mt-14 space-y-14 md:space-y-16">
            {hasNarrowContent && (
              <div
                className={
                  twoColumnLayout
                    ? "grid w-full grid-cols-1 items-stretch gap-12 lg:gap-14 xl:grid-cols-2 xl:gap-x-12 2xl:gap-x-16"
                    : "flex w-full flex-col gap-12 md:gap-14"
                }
              >
                {hasAbout && (
                  <section
                    className="flex min-h-0 min-w-0 flex-col xl:h-full"
                    aria-labelledby="project-about-heading"
                  >
                    <h2
                      id="project-about-heading"
                      className="project-section-title mb-6"
                    >
                      About the project
                    </h2>
                    <div className="prose-project prose-project--page">
                      {about}
                    </div>
                  </section>
                )}

                {hasHighlights && (
                  <div
                    className={`flex min-h-0 min-w-0 flex-col gap-10 lg:gap-12 xl:h-full ${!hasAbout ? "w-full" : ""}`}
                  >
                    {highlightSections.map((section, i) => (
                      <section
                        key={`${section.title}-${i}`}
                        className="card-surface flex min-h-0 flex-col rounded-xl border border-l-[3px] border-[var(--color-border)] border-l-[var(--color-accent)] p-8 sm:p-10 xl:flex-1"
                        aria-labelledby={`project-highlight-${i}`}
                      >
                        <h2
                          id={`project-highlight-${i}`}
                          className="project-section-title mb-6"
                        >
                          {section.title}
                        </h2>
                        <ul
                          className={`project-highlight-items ${twoColumnLayout ? "project-highlight-items--balanced" : ""}`}
                        >
                          {section.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                )}
              </div>
            )}

            {hasMedia && (
              <div className="project-detail-media project-detail-media--wide w-full min-w-0">
                {children}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectPage;
