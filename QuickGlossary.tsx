interface GlossaryTerm {
  term: string;
  definition: string;
}

export function QuickGlossary() {
  const terms: GlossaryTerm[] = [
    {
      term: "Banning Order",
      definition:
        "A government restriction that confined individuals to specific areas, prohibited them from gatherings, and censored their speech—often without trial.",
    },
    {
      term: "State of Emergency",
      definition:
        "A declaration giving security forces sweeping powers to detain, censor, and suppress dissent, often invoked during periods of mass resistance.",
    },
    {
      term: "Detention without Trial",
      definition:
        "The practice of imprisoning individuals indefinitely without formal charges or court proceedings, widely used to silence activists.",
    },
    {
      term: "Censorship",
      definition:
        "Government control over media, publications, and artistic expression to suppress anti-apartheid messaging and prevent dissent.",
    },
    {
      term: "Surveillance",
      definition:
        "Systematic monitoring of activists, organizations, and communities through informants, wiretaps, and infiltration by security police.",
    },
    {
      term: "Pass Laws",
      definition:
        "Regulations requiring Black South Africans to carry identity documents restricting their movement and employment, a cornerstone of apartheid control.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-[#1f2937] text-center mb-12">
          Quick Glossary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.map((item) => (
            <div
              key={item.term}
              className="bg-[#f7f4ef] rounded-lg p-6 border-l-4 border-[#b45309]"
            >
              <h3 className="font-serif text-[#1f2937] mb-2">{item.term}</h3>
              <p className="text-[#1f2937]/80 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
