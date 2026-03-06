// Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi-function' | 'pressed' | 'disabled' | 'icon';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  className,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-large-header)',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
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
        border: '1px solid var(--color-primary-buttons)',
        color: 'var(--color-primary-buttons)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons-input)',
        color: 'var(--color-buttons-text-field)',
      },
      toggle: {
        backgroundColor: 'var(--color-section)',
        color: 'var(--color-white)',
      },
      'multi-function': {
        backgroundColor: 'var(--color-green-success)',
        color: 'var(--color-white)',
      },
      pressed: {
        backgroundColor: 'var(--color-hover)',
        color: 'var(--color-white)',
      },
      disabled: {
        backgroundColor: 'var(--color-disabled)',
        color: 'var(--color-disabled-text)',
        cursor: 'not-allowed',
      },
      icon: {
        backgroundColor: 'transparent',
        color: 'var(--color-icons-1)',
        padding: '10px',
      },
    },
    sizes: {
      small: {
        fontSize: '12px',
        padding: '8px 16px',
      },
      medium: {
        fontSize: '14px',
        padding: '10px 20px',
      },
      large: {
        fontSize: '16px',
        padding: '12px 24px',
      },
    },
  };

  const combinedStyles = {
    ...styles.base,
    ...styles.variants[variant],
    ...styles.sizes[size],
  };

  return (
    <button
      ref={ref}
      className={className}
      style={combinedStyles}
      disabled={variant === 'disabled'}
      {...props}
    />
  );
});

export default Button;
export { Button };