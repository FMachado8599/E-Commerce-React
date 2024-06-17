import React from 'react';

const PriceRange = ({ min, max, step, minValue, maxValue, onMinChange, onMaxChange }) => {
  return (
    <div className="price-range">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={onMinChange}
        className="thumb thumb-left"
        style={{ zIndex: minValue > max - 100 && '5' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={onMaxChange}
        className="thumb thumb-right"
      />
      <div className="slider">
        <div className="track"></div>
        <div className="range" style={{ left: `${(minValue / max) * 100}%`, right: `${100 - (maxValue / max) * 100}%` }}></div>
      </div>
      <div className="values">
        <span>${minValue.toFixed(2)}</span>
        <span>${maxValue.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default PriceRange;