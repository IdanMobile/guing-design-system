// LightDarkModeToggle.tsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Additional class names for styling
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

  const toggleMode = () => {
    if (!disabled) {
      setIsDarkMode(!isDarkMode);
    }
  };

  const styles = {
    base: {
      padding: size === 'small' ? '8px 12px' : size === 'large' ? '16px 24px' : '12px 18px',
      backgroundColor: isDarkMode ? 'var(--color-section)' : 'var(--color-dialog-sections-master-table)',
      color: isDarkMode ? 'var(--color-icons-1)' : 'var(--color-text)',
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: 600,
      borderRadius: '4px',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <button
      ref={ref}
      style={styles.base}
      onClick={toggleMode}
      className={className}
      disabled={disabled}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
});

LightDarkModeToggle.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['default', 'flat', 'stroked']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default LightDarkModeToggle;
export { LightDarkModeToggle };