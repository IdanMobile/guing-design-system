// LightDarkModeToggle.tsx
import React, { useState } from 'react';
import classNames from 'classnames';

interface LightDarkModeToggleProps {
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * If true, the button will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the button
   */
  className?: string;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(
  ({ size = 'medium', variant = 'default', disabled = false, className }, ref) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClick = () => {
      if (!disabled) {
        setIsDarkMode(!isDarkMode);
      }
    };

    return (
      <button
        ref={ref}
        className={classNames(
          'light-dark-mode-toggle',
          `light-dark-mode-toggle--${size}`,
          `light-dark-mode-toggle--${variant}`,
          { 'light-dark-mode-toggle--disabled': disabled },
          className
        )}
        onClick={handleClick}
        disabled={disabled}
        style={{
          backgroundColor: isDarkMode ? 'var(--color-section)' : 'var(--color-dialog-sections-master-table)',
          color: isDarkMode ? 'var(--color-icons-1)' : 'var(--color-text)',
          fontFamily: 'var(--font-large-header-*)',
          fontSize: '20px',
          fontWeight: 600,
          padding: '10px 20px',
          border: variant === 'stroked' ? '2px solid var(--color-divider-stroke)' : 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    );
  }
);

export default LightDarkModeToggle;
export { LightDarkModeToggle };