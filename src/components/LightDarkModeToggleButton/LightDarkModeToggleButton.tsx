// LightDarkModeToggleButton.tsx
import React, { useState } from 'react';

interface LightDarkModeToggleButtonProps {
  /**
   * The size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   * @default 'default'
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * If true, the button will be disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional class name for styling
   */
  className?: string;
}

const LightDarkModeToggleButton = React.forwardRef<HTMLButtonElement, LightDarkModeToggleButtonProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
}, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setIsDarkMode(!isDarkMode);
    }
  };

  const styles = {
    button: {
      padding: size === 'small' ? '8px 12px' : size === 'large' ? '16px 24px' : '12px 18px',
      border: variant === 'stroked' ? `1px solid var(--color-divider-stroke)` : 'none',
      backgroundColor: isDarkMode ? 'var(--color-section)' : 'var(--color-white-white)',
      color: isDarkMode ? 'var(--color-icons-1)' : 'var(--color-text)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background-color 0.3s, color 0.3s',
    },
  };

  return (
    <button
      ref={ref}
      style={styles.button}
      onClick={handleClick}
      className={className}
      disabled={disabled}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
});

export default LightDarkModeToggleButton;
export { LightDarkModeToggleButton };