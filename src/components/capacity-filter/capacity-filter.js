'use client';
import React, { useEffect, useState } from 'react';
import styles from './capacity-filter.module.css'; // Import the CSS for styling
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';

const CapacityFilter = ({ min = 0, max = 100, step = 1 }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const searchParams = useSearchParams();
  const router = useRouter();
  // Handlers for min and max sliders
  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
  };
  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
  };
  const debouncedMinValue = useDebounce(minValue, 500);
  const debouncedMaxValue = useDebounce(maxValue, 500);
  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (debouncedMinValue > 0 || debouncedMaxValue < 100) {
      currentParams.set('capacity[gte]', minValue); // Only set 'isNew' if a value is selected
      currentParams.set('capacity[lte]', maxValue); // If it's "All Products", remove the filter
    } else {
      currentParams.delete('capacity[gte]');
      currentParams.delete('capacity[lte]');
    }
    // Push the updated URL with searchParams to the router
    router.replace(`/danh-sach-san-pham/?${currentParams.toString()}`);
  }, [debouncedMinValue, debouncedMaxValue]);

  return (
    <div className={styles.sliderContainer}>
      <label className={styles.sliderLabel}>
        Công suất: <span> {minValue}</span> - <span> {maxValue}</span>
      </label>

      {/* Slider range track */}
      <div className={styles.rangeSlider}>
        {/* Min slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          className={`${styles.slider} ${styles.minSlider}`}
          onChange={handleMinChange}
        />
        {/* Max slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          className={styles.slider}
          onChange={handleMaxChange}
        />

        {/* Tooltip for min and max sliders */}
        <div
          className={styles.tooltip}
          style={{ left: `${((minValue - min) / (max - min)) * 100}%` }}
        >
          {minValue}
        </div>
        <div
          className={styles.tooltip}
          style={{ left: `${((maxValue - min) / (max - min)) * 100}%` }}
        >
          {maxValue}
        </div>
      </div>
    </div>
  );
};

export default CapacityFilter;
