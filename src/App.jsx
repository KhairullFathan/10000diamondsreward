import Header from './components/Header'
import Hero from './components/Hero'
import News from './components/News'
import Heroes from './components/Heroes'
import Videos from './components/Videos'
// import RewardPopup from './components/RewardPopup'

const App = () => {
  return (
    <>
      {/* <RewardPopup /> */}
      {/* <!-- Header --> */}
      <Header />
      {/* <!-- Main Hero Section --> */}
      <Hero />
      {/* <!-- News Section --> */}
      <News />
      {/* <!-- Hero Section --> */}
      <Heroes />
      {/* <!-- Videos Section --> */}
      <Videos />
      {/* <!-- Footer --> */}
      <footer className="bg-slate-900 border-t border-slate-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Terms Of Service
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                📘
              </a>
              <a href="#" className="hover:text-white">
                🐦
              </a>
              <a href="#" className="hover:text-white">
                📷
              </a>
              <a href="#" className="hover:text-white">
                🎵
              </a>
              <a href="#" className="hover:text-white">
                📺
              </a>
              <a href="#" className="hover:text-white">
                🎮
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
