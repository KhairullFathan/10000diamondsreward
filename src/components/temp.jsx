const VideoCard = ({ thumbnail, title, views }) => {
  return (
    <div className="relative bg-[#1e293b] rounded-md overflow-hidden shadow-md border border-blue-500 hover:border-blue-400 transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px]">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover aspect-video"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition">
          <div className="w-16 md:w-20 hover:scale-110 transition-transform">
            <img src="./public/play.png" alt="Play" className="w-full" />
          </div>
        </div>

        {/* View Count */}
        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          👁 {views.toLocaleString()}
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm md:text-base font-medium leading-snug line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  )
}

const Videos = () => {
  const videoData = [
    {
      thumbnail: './public/v01.jpg',
      title:
        'ALLSTAR Events Preview | Dino Planet Adventure & Unlock Valuable Rewards',
      views: 12729,
    },
    {
      thumbnail: './public/v02.jpg',
      title:
        'Secret of the Empress | Zetian Fun Cartoon | Celestial Empress | Mobile Legends',
      views: 19832,
    },
    {
      thumbnail: './public/v03.jpg',
      title: 'Hero Spotlight | Zetian | Celestial Empress',
      views: 31449,
    },
    {
      thumbnail: './public/v04.jpg',
      title: 'New Game Mode Preview | Battle Royale in Mobile Legends',
      views: 24567,
    },
    {
      thumbnail: './public/v05.jpg',
      title: 'Season 25 Highlights | Best Plays and Moments',
      views: 18945,
    },
    {
      thumbnail: './public/v06.jpg',
      title: "Behind the Scenes | Making of Zetian's Character Design",
      views: 15678,
    },
  ]

  return (
    <section className="py-4 sm:py-6 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#2563eb]/40 to-[#0f172a]/80 px-3 sm:px-4 py-1 sm:py-2 border-l-4 border-blue-400 shadow-sm rounded-r">
            <div className="w-8 sm:w-10 h-8 sm:h-10">
              <img
                src="./public/videos.svg"
                className="w-full"
                alt="Videos Icon"
              />
            </div>
            <h2 className="text-blue-200 text-sm sm:text-lg font-semibold uppercase tracking-wide">
              VIDEOS
            </h2>
          </div>
          <button className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm flex items-center gap-1">
            View All <span className="text-sm sm:text-lg">→</span>
          </button>
        </div>

        {/* Video Navigation */}
        <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 gap-4 scrollbar-hide">
          {['For You', 'Hot', 'Heroes', 'Patch', 'Skins'].map((tab, index) => (
            <button
              key={tab}
              className={`whitespace-nowrap pb-2 px-1 ${
                index === 0
                  ? 'border-b-2 border-blue-500 text-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="whitespace-nowrap pb-2 text-blue-400 ml-2">
            MORE
          </button>
        </div>

        {/* Video Grid - 3 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videoData.map((video, index) => (
            <VideoCard
              key={index}
              thumbnail={video.thumbnail}
              title={video.title}
              views={video.views}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Videos
