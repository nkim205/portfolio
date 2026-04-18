import ProjectPage from "./Components/ProjectPage";
import ProjectImageGallery from "./Components/ProjectImageGallery";

const galleryItems = [
  {
    src: `${import.meta.env.BASE_URL}images/grower/grower_state_3d.png`,
    alt: "South Eastern states 3D outage visualization",
    label: "Southeast states — 3D view",
  },
  {
    src: `${import.meta.env.BASE_URL}images/grower/grower_state_2d.png`,
    alt: "South Eastern states 2D outage visualization",
    label: "Southeast states — 2D view",
  },
  {
    src: `${import.meta.env.BASE_URL}images/grower/grower_county_3d.png`,
    alt: "County-level 3D visualization",
    label: "County view — 3D",
  },
  {
    src: `${import.meta.env.BASE_URL}images/grower/grower_county_2d.png`,
    alt: "County-level 2D visualization",
    label: "County view — 2D",
  },
];

const GROWER = () => {
  return (
    <ProjectPage
      title="GROWER Lab"
      role="Data pipeline & dashboard team lead (Georgia Tech)"
      period="Jan 2025 – present"
      tags={["Python", "AWS S3", "GitHub Actions", "JavaScript", "React"]}
      links={[
        {
          href: "https://nkim205.github.io/grower-dashboard/",
          label: "Power outage dashboard",
        },
        {
          href: "https://www.linkedin.com/company/poweroutage/posts/?feedView=all",
          label: "GROWER on LinkedIn",
        },
      ]}
      about={
        <>
          <p>
            I work with the Grid Resilience, Outage, Weather, and Emergency
            Response (GROWER) lab at Georgia Tech on nationwide outage
            analytics. My time is split between a Python ingestion and
            standardization pipeline for heterogeneous utility data feeds and
            modular front-end work that powers our public dashboard.
          </p>
          <p>
            The pipeline uses a dictionary-driven architecture, regex, and fuzzy
            matching to align naming and formatting across providers, reducing
            parsing errors and keeping output schemas stable for downstream
            metrics and maps. The lab is continuing to push toward more
            responsive, near real-time views with partner teams as new data
            sources come online.
          </p>
        </>
      }
      highlightSections={[
        {
          title: "Impacts & contributions",
          items: [
            "Owned end-to-end pipeline development for multi-state runs: extending standardization for new provider variants, implementing unit testing keyed by state and date, and full AWS S3 retrievals and uploads with automated daily jobs and error checking.",
            "Optimized S3 retrieval schemas to cut per-state data transfers by more than 80% while keeping outputs compatible with historical analytics.",
            "Implemented historical metrics calculations and durable storage so analysts can compare trends over time alongside daily refreshes.",
            "Lead dashboard design and releases, improving clarity, adding historical metrics views, and keeping the UI aligned with automated pipeline output.",
          ],
        },
      ]}
    >
      <>
        <h2>Dashboard samples</h2>
        <p className="mb-6 text-base text-[var(--color-muted)] sm:text-lg">
          Click a thumbnail to view it larger.
        </p>
        <ProjectImageGallery
          items={galleryItems}
          gridClassName="project-gallery"
        />
      </>
    </ProjectPage>
  );
};

export default GROWER;
