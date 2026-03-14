import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * Button variant
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi' | 'pressed' | 'disabled' | 'icon';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'default', size = 'md', className, ...props }, ref) => {
  const styles = {
    base: {
      padding: '8px 16px',
      borderRadius: '4px',
      fontFamily: 'var(--font-inter-medium-*)',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    variants: {
      default: {
        backgroundColor: 'var(--color-primary-buttons)',
        color: 'var(--color-white-white)',
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
        color: 'var(--color-body-text)',
      },
      toggle: {
        backgroundColor: 'var(--color-section)',
        color: 'var(--color-white-white)',
      },
      multi: {
        backgroundColor: 'var(--color-green-success)',
        color: 'var(--color-white-white)',
      },
      pressed: {
        backgroundColor: 'var(--color-hover)',
        color: 'var(--color-white-white)',
      },
      disabled: {
        backgroundColor: 'var(--color-disabled)',
        color: 'var(--color-disabled-text)',
        cursor: 'not-allowed',
      },
      icon: {
        backgroundColor: 'transparent',
        color: 'var(--color-icons-1)',
      },
    },
    sizes: {
      sm: {
        padding: '4px 8px',
        fontSize: '12px',
      },
      md: {
        padding: '8px 16px',
        fontSize: '14px',
      },
      lg: {
        padding: '12px 24px',
        fontSize: '16px',
      },
    },
  };

  const variantStyle = styles.variants[variant];
  const sizeStyle = styles.sizes[size];

  return (
    <button
      ref={ref}
      className={className}
      style={{ ...styles.base, ...variantStyle, ...sizeStyle }}
      disabled={variant === 'disabled'}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
export default Button;
