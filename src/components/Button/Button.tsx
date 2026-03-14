import React, { ButtonHTMLAttributes } from 'react';

/**
 * Button variants
 */
export type ButtonVariant = 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi-function' | 'pressed' | 'disabled' | 'icon';

/**
 * Button sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button component props
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The variant of the button
   */
  variant?: ButtonVariant;
  /**
   * The size of the button
   */
  size?: ButtonSize;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

/**
 * A customizable button component with multiple variants and sizes.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', className, ...props }, ref) => {
    const styles = {
      base: {
        fontFamily: 'var(--font-inter-medium-*)',
        fontSize: 'var(--font-body-text-*)',
        padding: size === 'sm' ? '8px 12px' : size === 'lg' ? '16px 24px' : '12px 18px',
        borderRadius: '4px',
        border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
        backgroundColor: variant === 'flat' ? 'transparent' : variant === 'disabled' ? 'var(--color-disabled)' : 'var(--color-primary-buttons)',
        color: variant === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-body-text)',
        cursor: variant === 'disabled' ? 'not-allowed' : 'pointer',
        opacity: variant === 'pressed' ? 0.8 : 1,
        transition: 'background-color 0.3s',
      },
      icon: {
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    };

    return (
      <button
        ref={ref}
        className={className}
        style={{ ...styles.base, ...(variant === 'icon' && styles.icon) }}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
