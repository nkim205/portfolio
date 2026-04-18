import ProjectPage from "./Components/ProjectPage";
import ProjectImageGallery from "./Components/ProjectImageGallery";

const teamPhoto = [
  {
    src: `${import.meta.env.BASE_URL}images/gtpl.jpg`,
    alt: "Propulsive Landers team and rocket hardware",
    label: "GTPL team & hardware",
  },
];

const GTPL = () => {
  return (
    <ProjectPage
      title="Propulsive Landers (GTPL)"
      subtitle="Georgia Tech · VTOL rocket GNC"
      role="GNC vice-lead (formerly algorithms developer)"
      period="Aug 2024 – May 2025"
      tags={["Python", "C++", "Controls", "Path planning", "AIAA"]}
      links={[
        {
          href: "https://www.gtpropulsivelanders.org/",
          label: "Team website",
        },
        {
          href: "https://arc.aiaa.org/doi/10.2514/6.2025-99477",
          label: "AIAA publication",
        },
      ]}
      about={
        <>
          <p>
            Georgia Tech Propulsive Landers develops guidance, navigation, and
            control for VTOL-class rockets. I worked on spline-based path
            planning and gimbal-command translation, with results accepted for
            presentation at the AIAA Region 2 Conference (April 2025). The
            published paper,{" "}
            <a
              className="italic"
              href="https://arc.aiaa.org/doi/10.2514/6.2025-99477"
            >
              Spline-Based Flight Path Planning and Following for Aerial
              Navigation
            </a>
            , documents the spline formulation and flight-path following work in
            full.
          </p>
          <p>
            After becoming the GNC vice-lead, I co-lead the development of our
            state space model and LQR rocket control scheme.
          </p>
        </>
      }
      highlightSections={[
        {
          title: "Contributions & outcomes",
          items: [
            "Co-led the initial state space model and an LQR control loop.",
            "Designed a hybrid spline path planner, blending Hermite and Bézier properties to cut path-planning computation time and memory versus prior approaches.",
            "Authored and presented peer-reviewed AIAA research on spline-based flight-path planning and following for aerial navigation.",
          ],
        },
      ]}
    ></ProjectPage>
  );
};

export default GTPL;
