interface PrimaryCategory {
  title: string;
  description: string;
}

interface SecondaryCategory {
  title: string;
  description: string;
}

export function BrowseArchive() {
  const primaryCategories: PrimaryCategory[] = [
    {
      title: "People",
      description: "Activists, victims, officials, witnesses.",
    },
    {
      title: "Places",
      description: "Countries, cities, prisons, sites of protest.",
    },
    {
      title: "Events",
      description: "Protests, massacres, trials, states of emergency.",
    },
  ];

  const secondaryCategories: SecondaryCategory[] = [
    {
      title: "Archival descriptions",
      description: "Item-level summaries and contexts.",
    },
    {
      title: "Authority records",
      description: "Standard names for people and organisations.",
    },
    {
      title: "Archival institutions",
      description: "Holding repositories and partners.",
    },
    {
      title: "Functions",
      description: "What institutions do, e.g., policing, censorship.",
    },
    {
      title: "Subjects",
      description: "Themes such as detention, torture, surveillance.",
    },
    {
      title: "Digital objects",
      description: "Scans, photos, PDFs, audio, video.",
    },
  ];

  return (
    <section className="bg-[#f7f4ef] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-[#1f2937] text-center mb-4">
          Browse the Archive
        </h2>
        <p className="text-[#1f2937]/80 text-center mb-12 max-w-2xl mx-auto">
          Explore archival materials organized by categories designed for
          first-time visitors.
        </p>

        {/* Primary Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {primaryCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <h3 className="font-serif text-[#1f2937] mb-3">
                {category.title}
              </h3>
              <p className="text-[#1f2937]/80 mb-6 leading-relaxed">
                {category.description}
              </p>
              <button className="w-full bg-[#b45309] hover:bg-[#92400e] text-white px-6 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#b45309] focus:ring-offset-2">
                Browse
              </button>
            </div>
          ))}
        </div>

        {/* Secondary Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <h4 className="font-serif text-[#1f2937] mb-2">
                {category.title}
              </h4>
              <p className="text-[#1f2937]/80 mb-4 leading-relaxed">
                {category.description}
              </p>
              <button className="w-full bg-white hover:bg-[#f7f4ef] border border-[#b45309] text-[#b45309] px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#b45309] focus:ring-offset-2">
                Browse
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
