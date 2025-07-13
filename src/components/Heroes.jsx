const StatBar = ({ label, value }) => {
  return (
    <div>
      <div className="text-xs sm:text-sm text-blue-200 mb-1 flex justify-between">
        <span>{label}</span>
        <span className="text-blue-300">{value}%</span>
      </div>
      <div className="w-full h-1.5 sm:h-2 bg-gray-700 rounded-full">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  )
}

const Heroes = () => {
  return (
    <section className="py-4 sm:py-6 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#2563eb]/40 to-[#0f172a]/80 px-3 sm:px-4 py-1 sm:py-2 border-l-4 border-blue-400 shadow-sm rounded-r">
            <div className="w-8 sm:w-10">
              <img src="./public/hero.svg" className="w-full" alt="Hero Icon" />
            </div>
            <h2 className="text-blue-200 text-sm sm:text-lg font-semibold uppercase tracking-wide">
              HERO
            </h2>
          </div>
          <button className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm flex items-center gap-1">
            View All <span className="text-sm sm:text-lg">→</span>
          </button>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-[#0f172a]/60 rounded-lg text-white">
          {/* Left: Character Image - Full width on mobile, half on desktop */}
          <div className="sm:flex-shrink-0 w-full sm:w-1/2 lg:w-2/5">
            <img
              src="./public/hero_zetian.png"
              alt="Zetian"
              className="object-contain w-full h-auto max-h-80 sm:max-h-none mx-auto"
            />
          </div>

          {/* Right: Hero Info - Full width on mobile, half on desktop */}
          <div className="w-full sm:w-1/2 lg:w-3/5">
            {/* Hero Name */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-200">
              Zetian
            </h1>

            {/* Role Info */}
            <div className="text-blue-300 mt-1 sm:mt-2 text-sm sm:text-lg">
              Mage &middot; <span className="ml-1 sm:ml-2">Damage</span>{' '}
              <span className="ml-1 sm:ml-2">Crowd Control</span>
            </div>

            {/* Skills */}
            <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 overflow-x-auto pb-2 scrollbar-hide">
              {[1, 2, 3, 4].map((skill) => (
                <img
                  key={skill}
                  src={`./public/hero_zetian-s${skill}.png`}
                  alt={`Skill ${skill}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-blue-500/50 hover:border-blue-400 transition flex-shrink-0"
                />
              ))}
            </div>

            {/* Stat Bars */}
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <StatBar label="Durability" value={30} />
              <StatBar label="Offense" value={75} />
              <StatBar label="Ability Effects" value={60} />
              <StatBar label="Difficulty" value={70} />
            </div>

            {/* More Info */}
            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block text-blue-400 hover:text-blue-300 hover:underline text-sm sm:text-base flex items-center gap-1"
              >
                More Info
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Heroes
