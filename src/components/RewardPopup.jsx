import { useState, useEffect } from 'react'

const RewardPopup = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Cek apakah modal sudah pernah ditampilkan sebelumnya
    const hasSeenModal = localStorage.getItem('hasSeenRewardModal')

    if (!hasSeenModal) {
      setIsVisible(true)
      localStorage.setItem('hasSeenRewardModal', 'true')

      // Auto close setelah 5 detik
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] border-2 border-blue-400 rounded-xl max-w-md w-full p-6 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white hover:text-blue-300 text-xl"
        >
          ×
        </button>

        {/* Diamond Animation */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-xl"></div>

        {/* Content */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="./public/diamond-icon.png"
              alt="Diamond"
              className="w-20 h-20 animate-bounce"
            />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">SELAMAT!</h2>
          <p className="text-blue-200 mb-4">
            Anda mendapatkan hadiah 1000 Diamonds!
          </p>

          <div className="bg-blue-900/40 border border-blue-500 rounded-lg py-3 px-6 mb-6">
            <span className="text-3xl font-bold text-yellow-300">1000</span>
            <span className="text-xl text-white"> Diamonds</span>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold text-white hover:brightness-110 transition"
          >
            Klaim Hadiah
          </button>
        </div>
      </div>
    </div>
  )
}

export default RewardPopup
