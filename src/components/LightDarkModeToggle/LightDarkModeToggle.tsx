// LightDarkModeToggle.tsx
import React, { useState } from 'react';

interface LightDarkModeToggleProps {
  /**
   * The size of the toggle button
   * 'small' | 'medium' | 'large'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the toggle button
   * 'default' | 'flat' | 'stroked'
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * The initial state of the toggle button
   * true for dark mode, false for light mode
   */
  initialState?: boolean;
  /**
   * Additional className for custom styling
   */
  className?: string;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(({
  size = 'medium',
  variant = 'default',
  initialState = false,
  className = '',
}, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(initialState);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { padding: '4px 8px', fontSize: '12px' };
      case 'large':
        return { padding: '12px 24px', fontSize: '18px' };
      default:
        return { padding: '8px 16px', fontSize: '14px' };
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'flat':
        return { backgroundColor: isDarkMode ? 'var(--color-section)' : 'var(--color-white)', border: 'none' };
      case 'stroked':
        return { backgroundColor: 'transparent', border: `1px solid ${isDarkMode ? 'var(--color-section)' : 'var(--color-divider-stroke)'}` };
      default:
        return { backgroundColor: isDarkMode ? 'var(--color-section)' : 'var(--color-white)', border: `1px solid ${isDarkMode ? 'var(--color-divider-stroke)' : 'var(--color-divider-stroke)'}` };
    }
  };

  const styles = {
    button: {
      ...getSizeStyles(),
      ...getVariantStyles(),
      color: isDarkMode ? 'var(--color-icons-1)' : 'var(--color-text)',
      cursor: 'pointer',
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
    >
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
});

export { LightDarkModeToggle };
export default LightDarkModeToggle;
