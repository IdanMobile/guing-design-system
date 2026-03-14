// LightDarkModeToggle.tsx
import React, { useState } from 'react';

export interface LightDarkModeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * The state of the button
   */
  state?: 'default' | 'pressed' | 'disabled';
  /**
   * Additional class names for styling
   */
  className?: string;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(({
  size = 'medium',
  variant = 'default',
  state = 'default',
  className = '',
  ...props
}, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    if (state !== 'disabled') {
      setIsDarkMode(!isDarkMode);
    }
  };

  const styles = {
    button: {
      backgroundColor: state === 'disabled' ? 'var(--color-disabled)' : isDarkMode ? 'var(--color-section)' : 'var(--color-white-white)',
      color: state === 'disabled' ? 'var(--color-disabled-text)' : isDarkMode ? 'var(--color-icons-1)' : 'var(--color-text)',
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      padding: size === 'small' ? '8px 12px' : size === 'large' ? '16px 24px' : '12px 18px',
      cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-inter-medium-*)',
      fontSize: '14px',
      fontWeight: 500,
      borderRadius: '4px',
      transition: 'background-color 0.3s, color 0.3s',
    },
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles.button}
      onClick={handleClick}
      disabled={state === 'disabled'}
      {...props}
    >
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
});

export default LightDarkModeToggle;