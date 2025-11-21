import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";

function ShopCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="#" className="block">
        {/* Product Image Placeholder */}
        <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center mb-6">
          <div className="text-gray-400 text-sm">Product Image</div>
          
          {/* Hover Overlay - covers only image */}
          <div
            className={`absolute inset-0 bg-violet-700/90 flex items-center justify-center p-8 transition-opacity duration-300 z-10 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="text-white text-sm leading-relaxed text-center max-w-md">
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-base mb-2">{product.overlayTitle}</h4>
                <p className="text-white/90">{product.overlayDescription}</p>
                {product.overlayHighlights && (
                  <ul className="text-white/90 text-left mt-4 space-y-1 list-disc list-inside">
                    {product.overlayHighlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-black text-lg font-normal mb-2 text-center">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-black text-base font-normal text-center mb-8">
          ${product.price}
        </p>
      </Link>
    </div>
  );
}

function Shops() {
  const products = [
    {
      name: 'The Parent\'s Guide',
      price: '28',
      overlayTitle: 'THE PARENT\'S GUIDE',
      overlayDescription: 'Civic Seeds: A Parent\'s Guide to Growing Powerful Citizens. This guide helps families understand their power — the power to raise curious, compassionate, courageous children and the power to strengthen their communities. Teaches values, leadership, communication, and civic understanding at home.',
      overlayHighlights: [
        'how the U.S. democracy works',
        'which skills make strong citizens',
        'how to raise kids who think, care, and act',
        'how families build community together'
      ]
    },
    {
      name: 'The Workbook',
      price: '15',
      overlayTitle: 'THE WORKBOOK',
      overlayDescription: 'The Civic Seeds Power Parenting Workbook. A hands-on companion to build daily family habits around values, connection, communication, resilience, leadership, and responsibility.',
      overlayHighlights: [
        'practice new skills in small steps',
        'strengthen communication',
        'build confidence and courage',
        'turn family time into family power'
      ]
    },
    {
      name: 'The Children\'s Book',
      price: '15',
      overlayTitle: 'CHILDREN\'S BOOK',
      overlayDescription: '"A Day in Our City: How We Use Our Shared World." A joyful, child-friendly tour of public spaces and infrastructure.',
      overlayHighlights: [
        'what public infrastructure is',
        'who keeps communities running',
        'how teamwork keeps everyone safe',
        'why we take care of our community'
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-20 px-6 relative">
      {/* Cart Bubble - Fixed on right side */}
      <Link to="/cart" className="fixed top-20 right-20 z-50">
        <div className="bg-white rounded-full px-3 py-2 flex items-center gap-2 border border-gray-200 hover:bg-violet-700 duration-300 cursor-pointer ease-in-out hover:scale-105 group">
          <TiShoppingCart className="text-black group-hover:text-white text-2xl duration-300" />
          <span className="font-semibold text-lg group-hover:text-white duration-300">Cart</span>
        </div>
      </Link>

      <div className="max-w-7xl mx-auto">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-12 md:gap-16">
          {products.map((product, index) => (
            <ShopCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shops;
