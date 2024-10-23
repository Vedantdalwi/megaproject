

export default function HomePage() {
  return (
      <div className="bg-gray-50 min-h-screen flex flex-col justify-between mt-[200px] ">
          {/* Header Section */}
          <header className="bg-blue-600 text-white py-8">
              <div className="container mx-auto text-center">
                  <h1 className="text-5xl font-bold">Insurance Management System</h1>
                  <p className="mt-4 text-xl">Your one-stop solution to manage all your insurance policies effectively.</p>
                  <a href="#features" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                      Learn More
                  </a>
              </div>
          </header>

          {/* Main Content Section */}
          <main className="container mx-auto mt-12 p-6 flex-grow">
              <section className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Platform</h2>
                  <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                      Our Insurance Management System helps you manage, track, and review your insurance policies in one place.
                      Whether you're looking to view policy details, track upcoming premiums, or understand policies better, we've got you covered.
                  </p>
              </section>

              {/* Features Section */}
              <section id="features" className="mt-12">
                  <h3 className="text-3xl font-semibold text-center text-blue-600 mb-8">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm2 12a2 2 0 11-4 0 2 2 0 014 0zm1-6a1 1 0 01-1 1H8a1 1 0 010-2h2V7a1 1 0 112 0v1z"/></svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800">Track All Policies</h4>
                          <p className="text-gray-600 mt-2">View and manage all your insurance policies in one centralized location.</p>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v3a2 2 0 002 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 002-2V5a2 2 0 00-2-2H5zm3 10H6v-2h2v2zm6 0h-2v-2h2v2zm0-4H6V5h8v4z"/></svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800">Premium Reminders</h4>
                          <p className="text-gray-600 mt-2">Get notified of upcoming premium payments to avoid missing due dates.</p>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1a9 9 0 100 18A9 9 0 0010 1zm0 17a8 8 0 110-16 8 8 0 010 16zm-2-8V8h4v2h3a7 7 0 10-14 0h3zM7 13v2H5v-2h2z"/></svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800">Detailed Policy Info</h4>
                          <p className="text-gray-600 mt-2">Access complete details for each insurance policy at any time.</p>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M12 2a4 4 0 00-8 0v8.5a4 4 0 002 3.45V17h2v-3h2v3h2v-2.05a4 4 0 002-3.45V2zm-4 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800">Easy Policy Management</h4>
                          <p className="text-gray-600 mt-2">Update and manage all your policies with a user-friendly interface.</p>
                      </div>
                  </div>
              </section>
          </main>

          {/* Footer Section */}
          <footer className="bg-gray-800 text-white py-8">
              <div className="container mx-auto text-center">
                  <p className="mb-2">© 2024 Insurance Management System. All rights reserved.</p>
                  <p>Designed with <span className="text-red-500">♥</span> by Your Company</p>
              </div>
          </footer>
      </div>
  );
}
