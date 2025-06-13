"use client";
import React, { useState } from 'react';
export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });


    if (res.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', companyName: '', message: '' });
    } else {
      const error = await res.json();
      setStatus(`Error: ${error.error}`);
    }
  };

  return (
    <div className="container h-screen pt-50 mx-auto py-12 px-4 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-12">GET IN TOUCH</h1>

        {/* Contact form and company info section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact form */}
          <div className="bg-gradient-to-b h-95 w-full from-gray-950 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  className="w-full px-4 py-3 bg-muted border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-white"
                  required
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className="w-full px-4 py-3 bg-muted border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-white"
                  required
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  value={formData.companyName}
                  onChange={handleChange}
                  name="companyName"
                  className="w-full px-4 py-3 bg-muted border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-white"
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  className="w-full  px-4 py-3 bg-muted border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-white h-42 resize-none"
                  required
                ></textarea>
              </div>
              
              <div>
              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 rounded border-gray-700 focus:ring-2 focus:ring-gray-900 text-blue-400"
                  required
                />
                <label htmlFor="consent" className="text-gray-300 text-sm">
                  Yes, I would like to receive communications by call / email about RBased services.
                </label>
              </div>
              {status && <p className="text-sm mt-2">{status}</p>}
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-muted hover:bg-muted-dark hover:cursor-pointer text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Company information */}
          <div className="bg-transparent p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-semibold mb-6">RBased Pvt Ltd</h2>
              
              <p className="text-gray-300 mb-6">
                We are a leading technology company specializing in innovative solutions for businesses across various industries.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-medium text-blue-400">Why Choose Us</h3>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Expert team with years of industry experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Cutting-edge solutions tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Dedicated support and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Transparent pricing and timely delivery</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-xl font-medium text-blue-400 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-medium">Email:</span> rbasedservice@gmail.com</p>
                <p><span className="font-medium">Phone:</span> +91 8005390053, 7017879339</p>
                <p><span className="font-medium">Address:</span> B-28 A, RAJIV NAGAR, BEGUMPUR,
                OPP. ROHINI SECTOR-22, DELHI-110008</p>
                <p><span className="font-medium">Website:</span> www.rbased.com</p>
              </div>
            </div>
          </div>
        </div> 
</div>
  );
}