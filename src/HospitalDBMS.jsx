import ProjectPage from "./Components/ProjectPage";
import ProjectImageGallery from "./Components/ProjectImageGallery";

const previewImage = [
  {
    src: `${import.meta.env.BASE_URL}images/DBMS.png`,
    alt: "Emergency Room Database Management System: room-wise view with patient, room, department, and staff columns",
    label: "Room-wise ER view",
  },
];

const HospitalDBMS = () => {
  return (
    <ProjectPage
      title="Emergency Room Database Management System"
      subtitle="Full-stack hospital operations project"
      role="Lead engineer"
      period="Nov 2025 – Dec 2025"
      tags={["React", "Node.js", "MySQL", "TailwindCSS", "REST APIs"]}
      links={[]}
      about={
        <>
          <p>
            A web application for browsing and driving day-to-day hospital
            operations: staff explore live relational data through table views,
            run predefined procedures, and interact with the database through a
            single, cohesive UI instead of ad hoc SQL.
          </p>
          <p>
            <strong className="font-semibold text-[var(--color-text)]">
              Scope:
            </strong>{" "}
            End-to-end design from schema and MySQL logic to a React front end
            and Node API layer, enabling workflows such as room-wise rollups
            that join patients, rooms, departments, and assigned clinicians for
            situational awareness in an emergency-room context.
          </p>
        </>
      }
      highlightSections={[
        {
          title: "Contributions",
          items: [
            "Architected the full stack (React, Node, MySQL) and owned major feature slices as lead engineer, keeping the UI modular with Tailwind-styled components.",
            "Implemented MySQL stored procedures and parameterized queries to centralize business logic, tighten security boundaries, and avoid duplicating SQL across the Node layer.",
            "Added client and server-side validation to enforce formats and domain rules early, cutting unnecessary round trips and keeping operations reliable.",
            "Delivered read-heavy views that combine entities (e.g., patient, room, department, doctor, nurse) so operators can scan assignments and act from one screen.",
          ],
        },
      ]}
    >
      <>
        <h2>Interface preview</h2>
        <p className="mb-6 text-base text-[var(--color-muted)] sm:text-lg">
          Click the screenshot to view it larger.
        </p>
        <ProjectImageGallery
          items={previewImage}
          gridClassName="project-gallery project-gallery--single"
          wrapperClassName="max-w-6xl"
        />
      </>
    </ProjectPage>
  );
};

export default HospitalDBMS;
