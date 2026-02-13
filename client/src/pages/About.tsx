import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <Navigation />
      {/* Scrolling Ticker */}
      <div className="bg-blue-600 text-white py-4 overflow-hidden border-b-4 border-black">
        <div className="flex animate-scroll">
          <span className="font-bold text-lg whitespace-nowrap">OPEN FOR WORK /// FULL STACK DEVELOPMENT /// UI/UX DESIGN /// WEB3 READY</span>
          <span className="font-bold text-lg whitespace-nowrap">OPEN FOR WORK /// FULL STACK DEVELOPMENT /// UI/UX DESIGN /// WEB3 READY</span>
        </div>
      </div>
      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Profile Image */}
          <div className="border-4 border-black bg-gray-200 aspect-square overflow-hidden">
            <img
              src="/images/pfp.jpg"
              alt="Beshoy Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right: Content */}
          <div>
            <h2 className="text-6xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk' }}>
              WHO AM I?
            </h2>
            <p className="text-lg mb-8 leading-relaxed font-medium">
              I am Arhan. A creative developer who believes the web has become too sanitized. I bring personality back to code.
            </p>
            {/* Bullet Points */}
            <ul className="space-y-4 mb-12 text-base font-medium">
              <li className="flex gap-3">
                <span className="font-bold">▪</span>
                <span>Specialized in Designing and Web Development</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">▪</span>
                <span>Obsessed with Perfection and AI</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">▪</span>
                <span>3+ years of shipping code that works</span>
              </li>
            </ul>
            {/* Status Badges */}
            <div className="flex gap-4 flex-wrap">
              <div className="border-3 border-black px-4 py-2 font-bold text-sm">
                [ LOCATION: REMOTE ]
              </div>
              <div className="border-3 border-black px-4 py-2 font-bold text-sm bg-green-300">
                [ STATUS: AVAILABLE ]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}