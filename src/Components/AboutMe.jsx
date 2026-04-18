const AboutMe = () => {
  const description =
    "Hello! I'm a Computer Science student at Georgia Tech (Information Networks, full-stack development, modeling & simulation). I build scalable web apps, data pipelines, and visualization tools, from React and Node stacks to Python processing for real world outage analytics.";

  return (
    <section className="hero-grid-bg border-b border-[var(--color-border)]">
      <div className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,26rem)] lg:items-start lg:gap-20">
          <div className="max-w-8xl">
            <p className="section-label mb-3">Portfolio</p>
            <h1 className="heading-display mb-4">Nathan Donghyun Kim</h1>
            <p className="body-lead mb-8 max-w-[72rem]">{description}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                className="btn-primary"
                download
              >
                Download resume
              </a>
              <a
                href="https://www.linkedin.com/in/nathan-kim-7816b22bb/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nkim205"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
              <a
                href="mailto:kimnathan0324@gmail.com"
                className="btn-secondary"
              >
                Email
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <img
              src="/portfolio/images/headshot.jpg"
              alt="Nathan Kim"
              width={400}
              height={400}
              className="h-56 w-56 rounded-2xl border border-[var(--color-border)] object-cover shadow-[var(--shadow-md)] sm:h-64 sm:w-64 lg:h-[min(24rem,36vw)] lg:w-[min(24rem,36vw)] xl:h-[26rem] xl:w-[26rem]"
              loading="eager"
              decoding="async"
            />
            <p className="text-left text-base text-[var(--color-muted)]">
              Atlanta, GA · Graduating Dec 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
