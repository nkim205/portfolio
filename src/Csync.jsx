import ProjectPage from "./Components/ProjectPage";

const Csync = () => {
  return (
    <ProjectPage
      title="CSync"
      subtitle="College application management platform"
      role="Co-founder & full-stack developer"
      period="May 2025 – Aug 2025"
      tags={[
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Auth0",
        "REST APIs",
        "TailwindCSS",
      ]}
      links={[
        {
          href: "https://heroic-empanada-14fa99.netlify.app/",
          label: "View Live App",
        },
      ]}
      about={
        <>
          <p>
            CSync helps students track and manage college applications in one
            place. The product pairs a React client with a Node/Express API,
            MongoDB, and Auth0-backed JWT authentication. So, users get a
            single, secure place for deadlines, materials, and status.
          </p>
          <p>
            On the frontend, reusable Tailwind-styled components and
            asynchronous data loading keep the experience responsive on
            different devices; the backend emphasizes validation and predictable
            API contracts so the client stays thin and maintainable.
          </p>
        </>
      }
      highlightSections={[
        {
          title: "Key highlights",
          items: [
            "Implemented JWT-based authentication with Auth0 and Express middleware for authorization, validation, and consistent error handling.",
            "Improved perceived performance through rate limiting, caching, and middleware refactors—substantially faster querying and fewer hung requests.",
            "Deployed on Render and Netlify with strong uptime; built in Agile sprints with Git-based workflow and code review.",
          ],
        },
      ]}
    ></ProjectPage>
  );
};

export default Csync;
