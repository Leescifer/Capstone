import React from 'react'




const createAccount = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
    {/* Left Section */}
    <div className="bg-blue-900 text-white p-8 md:w-1/3 flex flex-col justify-center">
      <h2 className="text-lg font-semibold">Username Requirements</h2>
      <ul className="text-sm mt-2">
        <li>Minimum of 6 characters</li>
        <li>At least one uppercase letter (e.g., A-Z)</li>
        <li>At least one special symbol (e.g., @ # $ % ^ & * !)</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6">Password Requirements</h2>
      <ul className="text-sm mt-2">
        <li>Minimum of 8 characters</li>
        <li>At least one uppercase letter (e.g., A-Z)</li>
        <li>At least one lowercase letter (e.g., a-z)</li>
        <li>At least one special symbol (e.g., @ # $ % ^ & *)</li>
        <li>At least one number (e.g., 0-9)</li>
      </ul>
    </div>

    {/* Right Section */}
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <div className="relative">
              <input type="text" className="w-full border rounded-md p-2 pr-10" />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">🔵</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input type="password" className="w-full border rounded-md p-2 pr-10" />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">👁</span>
            </div>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm">
              I accept the <a href="#" className="text-blue-600">terms of service</a> and <a href="#" className="text-blue-600">privacy policy</a>.
            </p>
          </div>

          <button className="w-full bg-blue-900 text-white py-2 rounded-md">Sign Up</button>
        </form>
        
        <p className="text-center text-sm mt-4">
          Already have an account? <a href="#" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default createAccount