// Button.tsx
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  disabled = false,
  size = 'medium',
  className = '',
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-large-header)',
      fontSize: '20px',
      fontWeight: 600,
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      display: 'inline-block',
    },
    variants: {
      default: {
        backgroundColor: 'var(--color-primary-buttons)',
        color: 'var(--color-white)',
        border: 'none',
      },
      flat: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary-buttons)',
        border: 'none',
      },
      stroked: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary-buttons)',
        border: '2px solid var(--color-primary-buttons)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons-input)',
        color: 'var(--color-text)',
        border: 'none',
      },
    },
    sizes: {
      small: {
        padding: '5px 10px',
        fontSize: '14px',
      },
      medium: {
        padding: '10px 20px',
        fontSize: '16px',
      },
      large: {
        padding: '15px 30px',
        fontSize: '18px',
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
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
export { Button };