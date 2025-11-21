import React from 'react';

function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 py-8 border-b border-gray-200">
      {/* Product Image */}
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 flex items-center justify-center flex-shrink-0">
        <div className="text-gray-400 text-xs">Image</div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
        <div className="flex-1">
          <h3 className="text-black text-lg font-normal mb-1">{item.name}</h3>
          <p className="text-gray-600 text-base">${item.price}</p>
        </div>

        {/* Quantity and Remove */}
        <div className="flex items-center gap-6">
          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors"
              disabled={item.quantity <= 1}
            >
              <span className="text-gray-600">−</span>
            </button>
            <span className="text-black text-base w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors"
            >
              <span className="text-gray-600">+</span>
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-black text-sm underline transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

