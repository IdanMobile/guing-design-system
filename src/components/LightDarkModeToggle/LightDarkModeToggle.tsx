// LightDarkModeToggle.tsx
import React, { useState, forwardRef } from 'react';

interface LightDarkModeToggleProps {
  /**
   * The size of the toggle button. Can be 'small', 'medium', or 'large'.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the toggle button. Can be 'default', 'flat', or 'stroked'.
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * If true, the toggle button is disabled.
   */
  disabled?: boolean;
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const LightDarkModeToggle = forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className = '',
}, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsDarkMode(!isDarkMode);
    }
  };

  const styles = {
    button: {
      padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 24px' : '8px 16px',
      backgroundColor: isDarkMode ? 'var(--color-section)' : 'var(--color-white)',
      color: isDarkMode ? 'var(--color-icons-1)' : 'var(--color-text)',
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.3s, color 0.3s',
    },
  };

  return (
    <button
      ref={ref}
      style={styles.button}
      onClick={handleToggle}
      className={className}
      disabled={disabled}
    >
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
});

export default LightDarkModeToggle;
export { LightDarkModeToggle };