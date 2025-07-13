import { useState, useEffect } from 'react'

const DiamondRewardModal = ({ onClaimReward }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenModal = false

    if (!hasSeenModal) {
      setIsVisible(true)
      // localStorage.setItem('hasSeenRewardModal', 'true')

      // const timer = setTimeout(() => {
      //   setIsVisible(false)
      // }, 5000)

      // return () => clearTimeout(timer)
    }
  }, [])

  const handleClaim = () => {
    setIsVisible(false)
    onClaimReward() // This will trigger the login modal from Header
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] border-2 border-blue-400 rounded-xl max-w-md w-full p-6 relative overflow-hidden animate-popUp">
        {/* Diamond Effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-xl"></div>

        {/* Content */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/diamond-icon.png"
              alt="Diamond reward"
              className="w-20 h-20 animate-bounce"
            />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">
            CONGRATULATIONS!
          </h2>
          <p className="text-blue-200 mb-4">
            You've received a reward of 1000 Diamonds!
          </p>

          <div className="bg-blue-900/40 border border-blue-500 rounded-lg py-3 px-6 mb-6">
            <span className="text-3xl font-bold text-yellow-300">1000</span>
            <span className="text-xl text-white"> Diamonds</span>
          </div>

          <button
            onClick={handleClaim}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold text-white hover:brightness-110 transition-all duration-300 hover:shadow-lg"
          >
            Claim Reward
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiamondRewardModal
