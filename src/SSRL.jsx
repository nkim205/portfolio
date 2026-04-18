import ProjectPage from "./Components/ProjectPage";

const SSRL = () => {
  return (
    <ProjectPage
      title="Small Satellite Research Lab (UGA)"
      subtitle="MEMESat-1 · mission operations"
      role="Mission operations team member"
      period="Spring 2024"
      tags={["Java", "Orbital simulation", "CubeSat"]}
      links={[
        {
          href: "https://smallsat.uga.edu/missions",
          label: "SSRL missions",
        },
      ]}
      about={
        <p>
          I supported the University of Georgia&apos;s Small Satellite Research
          Laboratory on the MEMESat-1 mission. The role mixed hands-on orbital
          analysis with operations and logistics, making sure simulations,
          procedures, and handoffs stayed consistent as the team iterated on
          mission design.
        </p>
      }
      highlightSections={[
        {
          title: "Impact",
          items: [
            "Built Java orbital simulations to validate CubeSat tracking algorithms and improve positional fidelity, helping extend usable ground-station communication windows.",
            "Refined mission-operations documentation so routine workflows were easier to follow and onboard onto.",
          ],
        },
      ]}
    />
  );
};

export default SSRL;
