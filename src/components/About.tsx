export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#111111] text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            The Architects of Your Growth
          </h2>
          <p className="text-[#888888] mb-4">
            We are not a marketing agency. We are strategic growth partners for
            the region&apos;s most elite creative professionals. We believe your
            primary focus should be on your craft, not on the relentless,
            distracting, and often undignified chase for the next client.
          </p>
          <p className="text-[#888888]">
            Our role is to build a protective moat around your brand, ensuring
            your reputation for quality is matched by an equal measure of
            prestige and opportunity.
          </p>
        </div>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className="w-[150px] h-[150px] bg-gray-500 rounded-full mb-4"></div>
            <h3 className="font-bold">Suhas</h3>
            <p className="text-sm text-[#888888]">Founder & Strategic Partner</p>
          </div>
          <div className="text-center">
            <div className="w-[150px] h-[150px] bg-gray-500 rounded-full mb-4"></div>
            <h3 className="font-bold">Syed Matheen Shah</h3>
            <p className="text-sm text-[#888888]">Founder & Strategic Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
}