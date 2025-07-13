const NewsItem = ({
  image = '',
  title = '',
  views = '',
  datetime = '',
  category = 'Guide',
}) => {
  return (
    <div className="flex flex-col sm:flex-row border border-blue-500 bg-gradient-to-b from-[#1e3a8a]/20 to-[#0f172a]/60 shadow-md overflow-hidden h-full">
      {/* Image Container - Full width on mobile, fixed width on desktop */}
      <div className="w-full sm:w-1/3 aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow w-full sm:w-2/3">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex-grow"></div> {/* Spacer to push metadata down */}
        <div className="flex justify-between items-center mt-2">
          <div className="text-white text-xs px-2 py-1 border border-[#1e3a8a] rounded bg-[#1e3a8a]/30">
            {category}
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-300">
            <span>👁 {views} </span>
            <span>
              {new Date(datetime).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const News = () => {
  const newsData = [
    {
      image: '/patch.jpg',
      title: '1.9.90 PATCH NOTES',
      views: '23,884',
      datetime: '2025-06-18 16:00:00',
      category: 'Patch',
    },
    {
      image: '/soaring.jpg',
      title:
        'Soaring Phoenix | New Hero Zetian Theme Song | Mobile Legends: Bang Bang',
      views: '11,098',
      datetime: '2025-06-14 00:00:00',
      category: 'Music',
    },
    {
      image: '/new-hero.jpg',
      title: 'New Hero Zetian Art Design Concept',
      views: '2,861',
      datetime: '2025-06-11 00:00:00',
      category: 'Art',
    },
    {
      image: '/zetian.jpg',
      title: 'Zetian Advanced Guide',
      views: '10,222',
      datetime: '2025-06-18 16:00:00',
      category: 'Guide',
    },
    {
      image: '/get-new.jpg',
      title: 'GET NEW HERO ZETIAN FOR FREE',
      views: '9,981',
      datetime: '2025-06-12 16:00:00',
      category: 'Promo',
    },
    {
      image: '/revamped.jpg',
      title: 'Revamped Kimmy Advanced Guide Long',
      views: '62,953',
      datetime: '2025-04-23 16:00:00',
      category: 'Guide',
    },
  ]

  return (
    <section className="py-6 px-4 sm:px-6 bg-[#0f172a]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#2563eb]/40 to-[#0f172a]/80 px-4 py-2 border-l-4 border-blue-400 shadow-sm rounded-r">
            <div className="w-10 h-10">
              <img src="/news.svg" className="w-full" alt="News Icon" />
            </div>
            <h2 className="text-blue-200 text-lg font-semibold uppercase tracking-wide">
              NEWS
            </h2>
          </div>
          <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </button>
        </div>

        {/* News Navigation */}
        <div className="flex overflow-x-auto pb-2 mb-6 gap-4 border-b border-slate-700 scrollbar-hide">
          {['For You', 'Patch', 'Events', 'Esports', 'Bulletin'].map(
            (tab, index) => (
              <button
                key={tab}
                className={`pb-2 whitespace-nowrap px-1 ${
                  index === 0
                    ? 'border-b-2 border-blue-500 text-blue-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* News Grid - 2 columns, 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsData.map((news, index) => (
            <NewsItem
              key={index}
              image={news.image}
              title={news.title}
              views={news.views}
              datetime={news.datetime}
              category={news.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
