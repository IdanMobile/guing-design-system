// LightDarkModeToggle.tsx
import React, { useState } from 'react';

interface LightDarkModeToggleProps {
  /**
   * The size of the toggle button.
   * Can be 'small', 'medium', or 'large'.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the toggle button.
   * Can be 'default', 'flat', or 'stroked'.
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * The initial state of the toggle button.
   * Can be 'light' or 'dark'.
   */
  initialState?: 'light' | 'dark';
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(
  ({ size = 'medium', variant = 'default', initialState = 'light', className }, ref) => {
    const [mode, setMode] = useState<'light' | 'dark'>(initialState);

    const toggleMode = () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const styles = {
      button: {
        backgroundColor: mode === 'light' ? 'var(--color-white)' : 'var(--color-section)',
        color: mode === 'light' ? 'var(--color-text)' : 'var(--color-icons-1)',
        border: variant === 'stroked' ? `1px solid var(--color-divider-stroke)` : 'none',
        padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 24px' : '8px 16px',
        fontSize: size === 'small' ? '12px' : size === 'large' ? '20px' : '14px',
        cursor: 'pointer',
        borderRadius: '4px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s, color 0.3s',
      },
    };

    return (
      <button
        ref={ref}
        style={styles.button}
        className={className}
        onClick={toggleMode}
      >
        {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    );
  }
);

export { LightDarkModeToggle };
export default LightDarkModeToggle;
