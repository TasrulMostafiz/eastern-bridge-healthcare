import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;