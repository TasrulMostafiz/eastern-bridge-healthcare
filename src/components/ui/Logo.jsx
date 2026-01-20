import React from 'react';
import logo from '../../assets/logo.png'; 

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img
        src={logo}
        alt="Eastern Bridge Healthcare"
        className="h-12 w-auto object-contain"
        onError={(e) => {
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60' viewBox='0 0 120 60'%3E%3Crect width='120' height='60' fill='%230F2D5F' rx='8'/%3E%3Ctext x='60' y='35' font-family='Arial' font-size='14' fill='white' text-anchor='middle' font-weight='bold'%3EEASTERN BRIDGE%3C/text%3E%3C/svg%3E";
        }}
      />
      <div className="hidden md:block">
        <h1 className="text-xl font-bold text-gray-900">EASTERN BRIDGE</h1>
        <p className="text-sm text-blue-600 font-medium">HEALTHCARE</p>
      </div>
    </div>
  );
};

export default Logo;