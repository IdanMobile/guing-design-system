// LightDarkModeToggle.tsx
import React, { useState } from 'react';

interface LightDarkModeToggleProps {
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
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional class name for styling
   */
  className?: string;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(({
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
      backgroundColor: isDarkMode ? 'var(--color-section)' : 'var(--color-dialog-sections-master-table)',
      color: isDarkMode ? 'var(--color-icons-1)' : 'var(--color-text)',
      padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
      border: variant === 'stroked' ? '2px solid var(--color-divider-stroke)' : 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-large-header-*)',
      fontSize: 'var(--font-large-header-*)',
      fontWeight: 600,
    },
  };

  return (
    <button
      ref={ref}
      style={styles.button}
      className={className}
      onClick={handleToggle}
      disabled={disabled}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
});

export default LightDarkModeToggle;
export { LightDarkModeToggle };