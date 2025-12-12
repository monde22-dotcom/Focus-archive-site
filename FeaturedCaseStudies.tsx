export function FeaturedCaseStudies() {
  return (
    <section className="bg-[#f7f4ef] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-[#1f2937] text-center mb-12">
          Featured Case Studies
        </h2>

        {/* Two side-by-side blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Attacks on Women */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-serif text-[#1f2937] mb-4">
              Theme: Attacks on Women
            </h3>
            <p className="text-[#1f2937]/80 leading-relaxed mb-6">
              During the apartheid era, women were frequently targeted through
              home raids, detention, and sexual violence. This case study
              examines gendered patterns of repression and how women's
              testimonies reveal the domestic sphere as a site of political
              conflict.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-[#374151] text-white px-3 py-1 rounded-full">
                gender
              </span>
              <span className="bg-[#374151] text-white px-3 py-1 rounded-full">
                violence
              </span>
              <span className="bg-[#374151] text-white px-3 py-1 rounded-full">
                home raids
              </span>
            </div>
          </div>

          {/* Soweto Uprising */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-serif text-[#1f2937] mb-4">
              Event: Soweto Uprising (1976)
            </h3>
            <p className="text-[#1f2937]/80 leading-relaxed mb-6">
              On June 16, 1976, students in Soweto protested against the
              imposition of Afrikaans as a medium of instruction. Police opened
              fire, killing hundreds of young people. The uprising became a
              turning point in the struggle against apartheid education
              policies.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-[#374151] text-white px-3 py-1 rounded-full">
                student protest
              </span>
              <span className="bg-[#374151] text-white px-3 py-1 rounded-full">
                police violence
              </span>
              <span className="bg-[#374151] text-white px-3 py-1 rounded-full">
                education
              </span>
            </div>
          </div>
        </div>

        {/* Chris Hani - full width below */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="font-serif text-[#1f2937] mb-4">
            Person: Chris Hani
          </h3>
          <p className="text-[#1f2937]/80 leading-relaxed mb-6">
            Chris Hani, General Secretary of the South African Communist Party
            and former chief of staff of Umkhonto we Sizwe, was assassinated in
            April 1993, nearly derailing South Africa's transition to democracy.
            His death sparked mass protests and highlighted tensions during the
            negotiation period. Hani's vision for a post-apartheid society
            remains influential in contemporary South African politics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[#1f2937] mb-3">Related Places</h4>
              <ul className="list-disc list-inside text-[#1f2937]/80 space-y-1">
                <li>Boksburg, Gauteng (assassination site)</li>
                <li>Soweto</li>
                <li>Lesotho (exile)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#1f2937] mb-3">Related Organisations</h4>
              <ul className="list-disc list-inside text-[#1f2937]/80 space-y-1">
                <li>South African Communist Party (SACP)</li>
                <li>Umkhonto we Sizwe (MK)</li>
                <li>African National Congress (ANC)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
