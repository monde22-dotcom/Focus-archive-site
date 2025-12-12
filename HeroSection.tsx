import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-[#f7f4ef]">
      <div className="relative bg-gradient-to-br from-[#374151] to-[#1f2937] py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white font-serif mb-6 text-5xl">
            Focus: Political Repression in Southern Africa
          </h1>
          <p className="text-white/90 mb-8 text-xl max-w-3xl mx-auto">
            A beginner-friendly guide to people, places, laws, and events connected to political repression across Southern Africa.
          </p>
          <button className="bg-[#b45309] hover:bg-[#92400e] text-white px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#b45309] focus:ring-offset-2">
            Start exploring
          </button>
        </div>
      </div>
    </section>
  );
}