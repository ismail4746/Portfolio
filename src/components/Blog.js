import React from 'react';
import article1 from '../assets/article1.png';
import article2 from '../assets/article2.png';
import article3 from '../assets/article3.png';
import article4 from '../assets/article4.png';

// Sample Medium articles data
const mediumArticles = [
  {
    id: 1,
    title: "Comparative Analysis of Decentralized Architectures: Federated Learning vs. IoT Systems",
    excerpt: "A detailed analysis comparing decentralized architectures, focusing on Federated Learning and IoT systems.",
    date: "September 28, 2024",
    image: article1,
    link: "https://medium.com/@muhammadismail4746/comparative-analysis-of-decentralized-architectures-federated-learning-vs-iot-systems-54b52cf6a13e",
   
  },
  {
    id: 2,
    title: "A Beginner’s Guide to MongoDB Aggregation: Efficient Data Processing",
    excerpt: "This article provides an in-depth look at MongoDB aggregation and how it can be used for efficient data processing.",
    date: "September 27, 2024",
    image: article2,
    link: "https://medium.com/@muhammadismail4746/a-beginners-guide-to-mongodb-aggregation-efficient-data-processing-368572fc4ae9",
  },
  {
    id: 3,
    title: "Building a Dropbox Integration with Express.js: A Step-by-Step Guide",
    excerpt: "Learn how to integrate Dropbox into your Express.js application with this comprehensive step-by-step guide.",
    date: "July 30, 2024",
    image: article3, // Use smaller image
    link: "https://medium.com/@muhammadismail4746/building-a-dropbox-integration-with-express-js-a-step-by-step-guide-3b9672d5320a",
  },
  
  {
    id: 4,
    title: "A Journey Through My Web Development Projects",
    excerpt: "Reflecting on my journey as a web developer, highlighting key projects and learning experiences along the way.",
    date: "July 30, 2024",
    image: article4,
    link: "https://medium.com/@muhammadismail4746/my-portfolio-a-journey-through-my-web-development-projects-63ec61c56558",    
  },
];

const Blog = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #001F3F, #003F5C)' }} className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-16 tracking-wide uppercase">
          My Articles on Medium
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediumArticles.map((article) => (
            <div
              key={article.id}
              className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-44 object-cover" // Adjusted height for smaller box
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-2">{article.excerpt}</p>
                <p className="text-white text-sm mb-4">{article.date}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-500 text-white px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-teal-600"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
