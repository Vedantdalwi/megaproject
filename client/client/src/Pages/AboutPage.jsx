import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Learn more about our company, our values, and our commitment to serving our customers.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto mt-12 p-6">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Welcome to our company! We are dedicated to providing the best services to our customers. Our mission is to help you achieve your goals through our comprehensive solutions and exceptional support.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <h3 className="text-3xl font-semibold text-center text-blue-600 mb-8">Our Mission</h3>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            Our mission is to empower individuals and businesses to navigate the complexities of the insurance industry with ease. We strive to provide transparent, reliable, and personalized services to help you manage your policies effectively and achieve your financial goals.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm2 12a2 2 0 11-4 0 2 2 0 014 0zm1-6a1 1 0 01-1 1H8a1 1 0 010-2h2V7a1 1 0 112 0v1z"/></svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Integrity</h4>
              <p className="text-gray-600 mt-2">
                We value honesty and transparency in all our dealings with customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v3a2 2 0 002 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 002-2V5a2 2 0 00-2-2H5zm3 10H6v-2h2v2zm6 0h-2v-2h2v2zm0-4H6V5h8v4z"/></svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Commitment</h4>
              <p className="text-gray-600 mt-2">
                Our team is dedicated to providing the best solutions for our clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M12 2a4 4 0 00-8 0v8.5a4 4 0 002 3.45V17h2v-3h2v3h2v-2.05a4 4 0 002-3.45V2zm-4 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Excellence</h4>
              <p className="text-gray-600 mt-2">
                We aim to exceed expectations with every service we provide.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2024 Insurance Management System. All rights reserved.</p>
          <p>Crafted with <span className="text-red-500">♥</span> by Your Company</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
