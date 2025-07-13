const Hero = () => {
  return (
    <section className="relative">
      <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6">
        {/* Grid layout yang responsif */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-1 md:grid-rows-2 gap-3 text-white">
          {/* Hero utama - ukuran sama dengan yang lain di mobile */}
          <div className="aspect-video md:aspect-auto md:col-span-2 lg:col-span-3 md:row-span-2">
            <img
              src="/hero-academy.jpg"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              alt="Game Academy"
            />
            {/* Overlay text untuk mobile */}
            {/* <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#0f172a]/80 to-transparent flex flex-col justify-end p-3 sm:p-4 text-white text-center font-helvetica">
              <h3 className="text-base sm:text-lg font-bold">Game Academy</h3>
              <p className="text-xs sm:text-sm text-blue-200">
                Learn game strategies
              </p>
            </div> */}
          </div>

          {/* Item-item sekunder */}
          <HeroItem
            image="/hero-ranking.jpg"
            title="Hero Ranking"
            subtitle="Hero strength ranking"
            mdColStart="3"
            lgColStart="4"
          />

          <HeroItem
            image="/payment.jpg"
            title="Payment"
            subtitle="Recharge methods"
            mdColStart="4"
            lgColStart="5"
          />

          <HeroItem
            image="/redeem.jpg"
            title="Redeem"
            subtitle="Redeem game awards"
            mdColStart="3"
            lgColStart="4"
            mdRowStart="2"
          />

          <HeroItem
            image="/fan-art.jpg"
            title="Fan Art"
            subtitle="Player created designs"
            mdColStart="4"
            lgColStart="5"
            mdRowStart="2"
          />
        </div>
      </div>
    </section>
  )
}

// Komponen terpisah untuk item hero untuk mengurangi duplikasi kode
const HeroItem = ({
  image,
  title,
  subtitle,
  mdColStart,
  lgColStart,
  mdRowStart,
}) => {
  return (
    <div
      className={`relative aspect-video md:aspect-auto overflow-hidden rounded-lg shadow-lg 
      md:col-start-${mdColStart} lg:col-start-${lgColStart} 
      ${mdRowStart ? `md:row-start-${mdRowStart}` : ''}`}
    >
      <img src={image} className="w-full h-full object-cover" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent flex flex-col justify-end p-3 sm:p-4 text-white text-center font-helvetica">
        <h3 className="text-base sm:text-lg font-bold">{title}</h3>
        <p className="text-xs sm:text-sm text-blue-200">{subtitle}</p>
      </div>
    </div>
  )
}

export default Hero
