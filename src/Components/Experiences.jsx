import { Link } from "react-router-dom";

const projects = [
  {
    id: "grower",
    to: "/GROWER",
    title: "GROWER Labs",
    subtitle:
      "Grid Resilience, Outage, Weather, Emergency Response · Georgia Tech",
    role: "Data pipeline & dashboard team lead",
    period: "Jan 2025 – present",
    featured: true,
    summary:
      "Built and operate a daily Python data processing pipeline that ingests multi-provider outage CSVs from S3, standardizes messy columns and county names via per-state mappings, computes SAIDI and SAIFI metrics, formats output for both visualization and long term analytics, and publishes production ready outputs to S3 via GitHub Actions with parallel runs per state. I also contribute to and lead the design to the GROWER dashboard, improving clarity, adding historical metrics tracking, and keeping releases in line with daily automated refreshes.",
    tags: ["Python", "AWS S3", "GitHub Actions", "JavaScript", "React"],
    image: `${import.meta.env.BASE_URL}images/grower/grower_county_3d.png`,
    imageAlt: "GROWER dashboard chart for North Carolina SAIDI",
  },
  {
    id: "csync",
    to: "/CSync",
    title: "CSync",
    subtitle: "College application management platform",
    role: "Co-founder & full-stack developer",
    period: "May 2025 – Aug 2025",
    featured: true,
    summary:
      "Full-stack college application management, organization, and tracking platform with React, Node, MongoDB, and Auth0.",
    tags: ["React", "Node", "MongoDB", "Auth0"],
    image: null,
    imageAlt: "",
  },
  {
    id: "hospital",
    to: "/HospitalDBMS",
    title: "Hospital database system",
    subtitle: "Full Stack Project",
    role: "Lead engineer",
    period: "Nov 2025 – Dec 2025",
    featured: false,
    summary:
      "End-to-end hospital operations platform with React, Node, and MySQL: stored procedures, validation, and modular UI with Tailwind.",
    tags: ["React", "MySQL", "Node"],
    image: null,
    imageAlt: "",
  },
  {
    id: "gtpl",
    to: "/GTPL",
    title: "Georgia Tech Propulsive Landers (GTPL)",
    subtitle: "",
    role: "GNC vice-lead (former algorithms developer)",
    period: "Aug 2024 – May 2025",
    featured: false,
    summary:
      "Custom state-space model and LQR control; hybrid spline path planning; peer-reviewed AIAA paper and conference presentation.",
    tags: ["Python", "C++"],
    image: null,
    imageAlt: "t",
  },
  {
    id: "wandersync",
    to: "/WanderSync",
    title: "WanderSync",
    subtitle: "Collaborative travel management Android app",
    role: "Full-stack developer & database lead",
    period: "Sep 2024 – Dec 2024",
    featured: false,
    summary:
      "Agile team delivery of a Firebase-backed Android app: schema design, security rules, and XML/Java UI for trips and collaborators.",
    tags: ["Java", "Firebase", "Android", "Google Firebase"],
    image: null,
    imageAlt: "",
  },
  {
    id: "ssrl",
    to: "/SSRL",
    title: "SSRL @ UGA",
    subtitle: "Small Satellite Research Lab at the University of Georgia",
    role: "Mission operations · MEMESat-1",
    period: "Spring 2024",
    featured: false,
    summary:
      "Java orbital simulations to validate tracking algorithms and extend ground-station windows; mission ops documentation.",
    tags: ["Java", "Simulation"],
    image: null,
    imageAlt: "",
  },
  {
    id: "astro",
    to: "/Astrophotography",
    title: "Astrophotography",
    subtitle: "Personal",
    role: "Hobby · deep sky imaging",
    period: "2022 – present",
    featured: false,
    summary:
      "Deep-sky imaging including Orion, Heart, Soul, and Tadpoles nebulae.",
    tags: ["Photography"],
    image: null,
    imageAlt: "",
  },
];

function ProjectCard({ project, large }) {
  const inner = (
    <>
      <div className="flex flex-1 flex-col gap-4 p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          {project.featured && (
            <span className="rounded-full bg-[var(--color-accent-muted)] px-3 py-1 text-sm font-semibold text-[var(--color-accent)]">
              Featured
            </span>
          )}
          <span className="text-sm text-[var(--color-muted)]">
            {project.period}
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-base text-[var(--color-muted)]">
            {project.subtitle}
          </p>
          <p className="mt-2 text-base font-medium text-[var(--color-text)]">
            {project.role}
          </p>
        </div>
        <p className="text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        {project.to ? (
          <span className="mt-auto inline-flex items-center gap-1 text-base font-semibold text-[var(--color-accent)]">
            View details
            <span aria-hidden>→</span>
          </span>
        ) : (
          <p className="mt-auto text-sm text-[var(--color-muted)]">
            Details available on resume and in coursework portfolio.
          </p>
        )}
      </div>
      {project.image && (
        <div
          className={
            large
              ? "relative min-h-[220px] border-t border-[var(--color-border)] sm:min-h-[260px] sm:border-l sm:border-t-0 lg:min-h-[min(22rem,50vh)] lg:w-[46%] lg:shrink-0 lg:border-l lg:border-t-0"
              : "relative aspect-[4/3] w-full shrink-0 overflow-hidden border-t border-[var(--color-border)] sm:aspect-auto sm:min-h-[220px] sm:border-t-0 sm:border-l md:w-[42%]"
          }
        >
          <img
            src={project.image}
            alt={project.imageAlt || ""}
            width={640}
            height={400}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </>
  );

  const className = [
    "card-surface group flex overflow-hidden transition hover:shadow-[var(--shadow-md)]",
    project.image
      ? large
        ? "flex-col lg:flex-row"
        : "flex-col sm:flex-row"
      : "flex-col",
  ].join(" ");

  if (project.to) {
    return (
      <Link
        to={project.to}
        className={className}
        aria-label={`${project.title}: view details`}
      >
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}

const Experiences = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-page section-y">
        <header className="mb-14 max-w-4xl">
          <p className="section-label mb-2">Experience</p>
          <h2 className="heading-section mb-3">Projects & leadership</h2>
        </header>

        <div className="mb-10 flex flex-col gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} large />
          ))}
        </div>

        <h3 className="mb-5 text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
          More experience
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} large={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
