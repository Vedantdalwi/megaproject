import React from 'react';

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Discover our range of services designed to meet your needs and help you succeed.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto mt-12 p-6">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Our services are tailored to provide you with the best possible experience. We prioritize quality, customization, and support to ensure your satisfaction.
          </p>
        </section>

        {/* Services Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6h6V7z" /><path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v6a2 2 0 002 2v2h1.5v-2H6v2h8v-2h.5v2H16v-2a2 2 0 002-2V7a2 2 0 00-2-2H4zm0 2v6h12V7H4z" clipRule="evenodd"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">High-quality Products</h3>
            <p className="text-gray-600 mt-2">
              We offer only the highest-quality products designed to meet your business and personal needs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-10a2 2 0 11-4 0 2 2 0 014 0zm3 4a3 3 0 00-6 0h6z" clipRule="evenodd" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Customized Solutions</h3>
            <p className="text-gray-600 mt-2">
              We provide tailored solutions to ensure that your business gets the specific services it needs.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 8a6 6 0 0111.775-1H18v2h-4.225A6 6 0 012 8zM0 8a8 8 0 1116 0 8 8 0 11-16 0z"/><path d="M2 12a6 6 0 0111.775-1H18v2h-4.225A6 6 0 012 12z"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">24/7 Customer Support</h3>
            <p className="text-gray-600 mt-2">
              Our dedicated support team is available around the clock to help you whenever you need assistance.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M12 8V6a4 4 0 00-8 0v2H3a1 1 0 000 2h1v4H3a1 1 0 000 2h1v1a2 2 0 002 2h8a2 2 0 002-2v-1h1a1 1 0 100-2h-1v-4h1a1 1 0 100-2h-1V6a6 6 0 00-6-6v2a4 4 0 00-4 4v2h6z"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Comprehensive Training</h3>
            <p className="text-gray-600 mt-2">
              We offer in-depth training to ensure you fully understand how to use our services to their fullest potential.
            </p>
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

export default ServicesPage;

