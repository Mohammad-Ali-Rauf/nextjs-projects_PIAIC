"use client"
import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-10 bg-gray-100 rounded-lg shadow-md h-full">
        <h1 className="text-6xl font-bold text-gray-700 mb-8">Contact Me</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-800 block mb-2 text-xl">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border text-xl border-gray-300 rounded focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-800 block mb-2 text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border text-xl border-gray-300 rounded focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="text-gray-800 block mb-2 text-lg">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-2 border text-xl border-gray-300 rounded focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-gray-800 block mb-2 text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 border text-xl border-gray-300 rounded focus:outline-none focus:border-teal-500"
            ></textarea>
          </div>
          <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;