import ProjectPage from "./Components/ProjectPage";
import ProjectImageGallery from "./Components/ProjectImageGallery";

const screens = [
  {
    src: "/portfolio/images/wandersync/home.png",
    alt: "WanderSync home screen",
    label: "Home",
  },
  {
    src: "/portfolio/images/wandersync/Accomodations.png",
    alt: "WanderSync accommodations screen",
    label: "Accommodations",
  },
  {
    src: "/portfolio/images/wandersync/Logistics.png",
    alt: "WanderSync logistics screen",
    label: "Logistics",
  },
  {
    src: "/portfolio/images/wandersync/Destinations.png",
    alt: "WanderSync destinations screen",
    label: "Destinations",
  },
  {
    src: "/portfolio/images/wandersync/Dining.png",
    alt: "WanderSync dining screen",
    label: "Dining",
  },
  {
    src: "/portfolio/images/wandersync/Community.png",
    alt: "WanderSync community screen",
    label: "Community",
  },
];

const WanderSync = () => {
  return (
    <ProjectPage
      title="WanderSync"
      subtitle="Collaborative Android travel management app"
      role="Full-stack developer & database lead · 6-member Agile team"
      period="Sep 2024 – Dec 2024"
      tags={["Java", "Android", "XML", "Google Firebase"]}
      links={[
        {
          href: "https://charleskimbac.github.io/test/",
          label: "Project blog",
        },
        {
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7266677771534249984/",
          label: "LinkedIn post",
        },
      ]}
      about={
        <>
          <p>
            WanderSync is a collaborative travel-management Android app built
            with Java, XML, and Google Firebase. Over the course of the project,
            the team delivered trip CRUD, collaborator invites, and itinerary
            sharing with real-time sync and authentication.
          </p>
          <p>
            I focused on the data layer and contracts between Firebase and the
            UI: how schemas, rules, and client modules stay in sync as features
            grew across two-week Agile sprints.
          </p>
        </>
      }
      highlightSections={[
        {
          title: "Contributions",
          items: [
            "Led Firebase data modeling, security rules, and service-style interfaces behind trip and user flows, improving query efficiency and enabling authenticated, real-time access.",
            "Applied singleton and observer-style structure on the client to keep trip, invite, and itinerary modules decoupled and easier to extend.",
            "Contributed to planning and integration across a six-person team using iterative sprints and shared review of schema and UI changes.",
          ],
        },
      ]}
    >
      <>
        <h2>Screenshots</h2>
        <p className="mb-6 text-base text-[var(--color-muted)] sm:text-lg">
          Tap a screen for a larger view.
        </p>
        <ProjectImageGallery
          items={screens}
          gridClassName="project-gallery-phone"
        />
      </>
    </ProjectPage>
  );
};

export default WanderSync;
