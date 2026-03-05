// LightDarkModeToggle.tsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface LightDarkModeToggleProps {
  /**
   * The size of the toggle button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the toggle button
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * The initial state of the toggle button
   */
  initialState?: 'light' | 'dark';
  /**
   * Additional class names to apply to the button
   */
  className?: string;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(({
  size = 'medium',
  variant = 'default',
  initialState = 'light',
  className,
}, ref) => {
  const [mode, setMode] = useState<'light' | 'dark'>(initialState);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      ref={ref}
      className={classNames('light-dark-mode-toggle', className, {
        'light-mode': mode === 'light',
        'dark-mode': mode === 'dark',
        [`size-${size}`]: size,
        [`variant-${variant}`]: variant,
      })}
      onClick={toggleMode}
      style={{
        backgroundColor: mode === 'light' ? 'var(--color-white)' : 'var(--color-section)',
        color: mode === 'light' ? 'var(--color-text-field)' : 'var(--color-icons-1)',
        fontSize: size === 'small' ? '12px' : size === 'large' ? '18px' : '14px',
        border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      }}
    >
      {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
});

LightDarkModeToggle.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['default', 'flat', 'stroked']),
  initialState: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
};

export default LightDarkModeToggle;
export { LightDarkModeToggle };