import ProjectPage from "./Components/ProjectPage";
import ProjectImageGallery from "./Components/ProjectImageGallery";

const gallery = [
  {
    src: "/portfolio/images/astro/lagoon.png",
    alt: "Lagoon Nebula",
    label: "Lagoon Nebula (M8)",
    when: "June 2025",
  },
  {
    src: "/portfolio/images/astro/orion.png",
    alt: "Orion Nebula",
    label: "Orion Nebula (M42)",
    when: "December 2024",
  },
  {
    src: "/portfolio/images/astro/tadpoles.png",
    alt: "Tadpoles Nebula",
    label: "Tadpoles Nebula (IC 410)",
    when: "November 2024",
  },
  {
    src: "/portfolio/images/astro/heart-and-soul.png",
    alt: "Heart and Soul Nebula region",
    label: "Heart & Soul Nebula",
    when: "September 2024",
  },
  {
    src: "/portfolio/images/astro/eclipse.png",
    alt: "Solar eclipse",
    label: "Total solar eclipse timelapse",
    when: "April 2024",
  },
  {
    src: "/portfolio/images/astro/moon.png",
    alt: "Moon",
    label: "Lunar surface",
    when: "October 2023",
  },
];

const Astrophotography = () => {
  return (
    <ProjectPage
      title="Astrophotography"
      subtitle="Deep-sky imaging"
      role="Personal project · hobby"
      period="2022 – present"
      tags={["Astrophotography"]}
      links={[]}
      about={
        <>
          <p>
            In December 2022 I watched the Geminid meteor shower and started
            photographing the night sky. Since then I have spent many cold,
            clear nights in the mountains tuning mounts, exposure lengths, and
            processing to pull faint detail out of light-polluted or turbulent
            skies.
          </p>
          <p>
            Some of my favorite targets so far include the Orion Nebula, Lagoon
            Nebula, and a growing library of wide-field and deep-sky frames
            built through trial, error, and repetition.
          </p>
        </>
      }
    >
      <>
        <h2>Gallery</h2>
        <p className="mb-6 text-base text-[var(--color-muted)] sm:text-lg">
          Click an image for a larger view.
        </p>
        <ProjectImageGallery
          items={gallery}
          gridClassName="project-gallery project-gallery--three"
          showFigcaptions
        />
      </>
    </ProjectPage>
  );
};

export default Astrophotography;
