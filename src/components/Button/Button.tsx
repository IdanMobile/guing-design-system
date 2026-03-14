// Button.tsx
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

/**
 * Button variants available in the design system.
 */
export type ButtonVariant = 'default' | 'flat' | 'stroked' | 'basic' | 'icon';

/**
 * Button sizes available in the design system.
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Props for the Button component.
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The variant of the button.
   */
  variant?: ButtonVariant;
  /**
   * The size of the button.
   */
  size?: ButtonSize;
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names for styling.
   */
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-inter-medium-*)',
      fontSize: '14px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
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
      icon: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary-buttons)',
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
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      color: 'var(--color-disabled-text)',
      cursor: 'not-allowed',
    },
  };

  const variantStyle = styles.variants[variant];
  const sizeStyle = styles.sizes[size];
  const disabledStyle = disabled ? styles.disabled : {};

  return (
    <button
      ref={ref}
      className={className}
      style={{
        ...styles.base,
        ...variantStyle,
        ...sizeStyle,
        ...disabledStyle,
      }}
      disabled={disabled}
      {...props}
    />
  );
});

export default Button;
export { Button };