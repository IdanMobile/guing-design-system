// LightDarkModeToggle.tsx
import React, { useState } from 'react';

interface LightDarkModeToggleProps {
  /**
   * The size of the toggle button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the toggle button
   */
  variant?: 'default' | 'outlined' | 'text';
  /**
   * The initial state of the toggle button
   */
  initialState?: 'light' | 'dark';
  /**
   * Additional class name for styling
   */
  className?: string;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(({
  size = 'medium',
  variant = 'default',
  initialState = 'light',
  className = '',
}, ref) => {
  const [mode, setMode] = useState<'light' | 'dark'>(initialState);

  const handleToggle = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const styles = {
    button: {
      padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 24px' : '8px 16px',
      backgroundColor: mode === 'light' ? 'var(--color-white)' : 'var(--color-section)',
      color: mode === 'light' ? 'var(--color-text)' : 'var(--color-icons-1)',
      border: variant === 'outlined' ? `1px solid var(--color-divider-stroke)` : 'none',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.3s, color 0.3s',
    } as React.CSSProperties,
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles.button}
      onClick={handleToggle}
    >
      {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
});

export default LightDarkModeToggle;
export { LightDarkModeToggle };