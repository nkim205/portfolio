const courses = [
  "Data Structures & Algorithms",
  "Design & Analysis of Algorithms",
  "Computer Organization & Programming",
  "Objects & Design",
  "Database Systems",
  "Computer Systems & Networks",
  "Computer Simulations",
  "Numerical Analysis",
];

const Education = () => {
  return (
    <section className="bg-[var(--color-bg)] pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="container-page">
        <div className="card-surface overflow-hidden">
          <div className="border-b border-[var(--color-border)] bg-[var(--color-elevated)] px-8 py-10 sm:px-12 sm:py-12">
            <p className="section-label mb-2">Education</p>
            <h2 className="heading-section mb-2">
              Georgia Institute of Technology
            </h2>
            <p className="text-xl font-medium text-[var(--color-text)]">
              B.S. Computer Science · Atlanta, GA
            </p>
            <p className="mt-2 text-lg text-[var(--color-muted)]">
              Expected graduation: December 2026
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  GPA
                </dt>
                <dd className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                  3.8 / 4.00
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Honors
                </dt>
                <dd className="mt-1 text-lg text-[var(--color-text)]">
                  Dean&apos;s List (all semesters), Faculty Honors (Spring 2025)
                </dd>
              </div>
            </dl>
          </div>
          <div className="px-8 py-10 sm:px-12 sm:py-12">
            <h3 className="mb-5 text-base font-semibold text-[var(--color-text)]">
              Relevant coursework
            </h3>
            <ul className="columns-1 gap-x-10 gap-y-2 text-base leading-relaxed text-[var(--color-muted)] sm:columns-2">
              {courses.map((c) => (
                <li key={c} className="mb-2 break-inside-avoid">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
