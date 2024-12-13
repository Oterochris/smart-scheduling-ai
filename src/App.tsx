import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">CrewLink</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#industries" className="text-gray-700 hover:text-blue-600">Industries</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <div>
              <a href="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white">Login</a>
              <a href="/signup" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Get Started</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Intelligent Crew Scheduling for Industry Leaders</h1>
        <p className="text-xl text-gray-600 mb-8">AI-powered scheduling solution for construction, maintenance, and industrial operations</p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Start Free Trial</button>
          <button className="px-8 py-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">Watch Demo</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Smart Scheduling</h3>
              <p className="text-gray-600">AI-powered scheduling optimization for maximum efficiency</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Real-time Updates</h3>
              <p className="text-gray-600">Instant notifications and schedule adjustments</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Resource Management</h3>
              <p className="text-gray-600">Optimize crew and equipment allocation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8">Get in touch with our team and see CrewLink in action</p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-gray-100">Contact Sales</button>
        </div>
      </section>
    </div>
  )
}

export default App