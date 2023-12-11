import React from 'react';

const Index = () => {
  const headerStyle = {
    backgroundImage: "url('https://png.pngtree.com/background/20230520/original/pngtree-3d-animation-picture-image_2671589.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <header className="flex justify-center items-center" style={headerStyle}>
        <div className="text-5xl font-bold mb-4">Sonal Mittal</div>
        <p className="text-lg mb-8">I am a passionate developer creating awesome things.</p>
        <a href="#portfolio" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">View My Work</a>
      </header>

      <section id="portfolio" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">My Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-400">Description of Project 1.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-400">Description of Project 2.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-400">Description of Project 3.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
          <p className="text-lg mb-8">Feel free to reach out to me for collaboration or any inquiries.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Contact Me</a>
            <p className="text-gray-400">or</p>
            <a href="#" className="text-blue-500 hover:underline">View Resume</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-400 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
