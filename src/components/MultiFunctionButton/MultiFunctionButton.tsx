// MultiFunctionButton.tsx
import React, { forwardRef, ButtonHTMLAttributes } from 'react';

interface MultiFunctionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names for styling.
   */
  className?: string;
}

const MultiFunctionButton = forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className = '',
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-inter-medium-*)',
      fontSize: '14px',
      fontWeight: 500,
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      display: 'inline-block',
    },
    variants: {
      default: {
        backgroundColor: 'var(--color-primary-buttons)',
        color: 'var(--color-white)',
      },
      flat: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary-buttons)',
      },
      stroked: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary-buttons)',
        border: '1px solid var(--color-primary-buttons)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons-input)',
        color: 'var(--color-buttons-text-field)',
      },
    },
    sizes: {
      small: {
        padding: '5px 10px',
        fontSize: '12px',
      },
      medium: {
        padding: '10px 20px',
        fontSize: '14px',
      },
      large: {
        padding: '15px 30px',
        fontSize: '16px',
      },
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      color: 'var(--color-disabled-text)',
      cursor: 'not-allowed',
    },
  };

  const combinedStyles = {
    ...styles.base,
    ...styles.variants[variant],
    ...styles.sizes[size],
    ...(disabled && styles.disabled),
  };

  return (
    <button
      ref={ref}
      style={combinedStyles}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
});

export { MultiFunctionButton };
export default MultiFunctionButton;
