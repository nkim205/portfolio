const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "Python", "SQL", "C"],
  },
  {
    title: "Web & APIs",
    items: [
      "React",
      "Node.js",
      "Express",
      "TailwindCSS",
      "REST APIs",
      "JWT",
      "Auth0",
      "HTML",
    ],
  },
  {
    title: "Data & infra",
    items: [
      "MongoDB",
      "MySQL",
      "Pandas",
      "Docker",
      "Git",
      "Cloud deployment (Render, Netlify)",
      "Google Firebase",
    ],
  },
  {
    title: "Practices",
    items: ["Agile", "System design", "Figma"],
  },
];

const Skills = () => {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-page section-y">
        <header className="mb-12 max-w-4xl">
          <p className="section-label mb-2">Skills</p>
          <h2 className="heading-section mb-3">Tools & stack</h2>
        </header>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-base font-semibold text-[var(--color-text)]">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="chip">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
