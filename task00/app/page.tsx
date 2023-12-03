import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Your Awesome Website</h1>
          <p className="text-lg mb-8">
            Explore the latest in web development, discover innovative solutions, and stay connected with the tech community.
          </p>
          <a
            href="#explore-section" // Replace with the actual section ID you want to scroll to
            className="bg-white text-teal-500 hover:bg-teal-600 py-2 px-6 rounded-full font-bold transition duration-300"
          >
            Explore Now
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ filter: 'blur(4px)' }}>
          <Image src="/main-image.jpg" layout="fill" objectFit="cover" objectPosition="center" alt="CODING IMAGE" />
        </div>
      </div>

      <div id="explore-section" className="bg-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Explore Exciting Features</h2>
          <p className="text-gray-600 mb-8">
            Dive into a world of possibilities with our cutting-edge features designed to enhance your web experience.
          </p>
          {/* Add more content and features here */}
        </div>
      </div>
    </div>
  );
};

export default Home;