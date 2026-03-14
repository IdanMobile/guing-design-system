// LightDarkModeToggle.tsx
import React, { useState } from 'react';

export interface LightDarkModeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the toggle button.
   * 'sm' for small, 'md' for medium, 'lg' for large.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the toggle button.
   * 'default' for standard, 'flat' for flat design.
   */
  variant?: 'default' | 'flat';
  /**
   * The initial state of the toggle button.
   * true for dark mode, false for light mode.
   */
  initialState?: boolean;
  /**
   * Additional class names for custom styling.
   */
  className?: string;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(({
  size = 'md',
  variant = 'default',
  initialState = false,
  className,
  ...props
}, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(initialState);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '4px 8px' : size === 'lg' ? '12px 24px' : '8px 16px',
    backgroundColor: isDarkMode ? 'var(--color-section)' : 'var(--color-dialog-sections)',
    color: isDarkMode ? 'var(--color-icons-1)' : 'var(--color-body-text)',
    border: variant === 'flat' ? 'none' : `1px solid var(--color-divider-stroke)` ,
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles}
      onClick={handleToggle}
      {...props}
    >
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
});

LightDarkModeToggle.displayName = 'LightDarkModeToggle';

export { LightDarkModeToggle };
export default LightDarkModeToggle;
