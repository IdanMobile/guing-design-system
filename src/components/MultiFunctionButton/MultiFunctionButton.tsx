// MultiFunctionButton.tsx
import React, { useState } from 'react';
import { forwardRef, ButtonHTMLAttributes } from 'react';

interface MultiFunctionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   * @default 'default'
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be in a pressed state
   * @default false
   */
  pressed?: boolean;
  /**
   * If true, the button will be disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional className for styling
   */
  className?: string;
}

const MultiFunctionButton = forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  size = 'medium',
  variant = 'default',
  pressed = false,
  disabled = false,
  className = '',
  ...props
}, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const styles = {
    button: {
      padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
      backgroundColor: disabled ? 'var(--color-disabled)' : isDarkMode ? 'var(--color-section)' : 'var(--color-white)',
      color: disabled ? 'var(--color-disabled-text)' : 'var(--color-text)',
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: pressed ? 0.8 : 1,
      transition: 'background-color 0.3s, color 0.3s',
    }
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles.button}
      onClick={handleToggleDarkMode}
      disabled={disabled}
      {...props}
    >
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
});

export { MultiFunctionButton };
export default MultiFunctionButton;
