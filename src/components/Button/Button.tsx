// Button.tsx
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'icon';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className = '',
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      padding: '10px 20px',
      borderRadius: '4px',
      fontFamily: 'var(--font-inter-medium-*)',
      fontSize: '14px',
      fontWeight: 500,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background-color 0.3s',
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
        border: '1px solid var(--color-primary-buttons)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons-input)',
        color: 'var(--color-text-field)',
        border: 'none',
      },
      icon: {
        backgroundColor: 'transparent',
        color: 'var(--color-icons-1)',
        border: 'none',
        padding: '10px',
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
  };

  return (
    <button
      ref={ref}
      style={{
        ...styles.base,
        ...styles.variants[variant],
        ...styles.sizes[size],
      }}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
export default Button;
