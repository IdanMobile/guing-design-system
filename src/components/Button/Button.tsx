// Button.tsx
import React, { forwardRef } from 'react';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi-function' | 'pressed' | 'disabled' | 'icon';
  /**
   * The size of the button.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'md',
  className,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
    backgroundColor: variant === 'default' ? 'var(--color-primary-buttons)' :
                     variant === 'flat' ? 'var(--color-buttons-input)' :
                     variant === 'stroked' ? 'transparent' :
                     variant === 'basic' ? 'var(--color-buttons-secondary-button)' :
                     variant === 'toggle' ? 'var(--color-hover)' :
                     variant === 'multi-function' ? 'var(--color-selected-1)' :
                     variant === 'pressed' ? 'var(--color-selected-menu-list)' :
                     variant === 'disabled' ? 'var(--color-disabled)' :
                     'var(--color-icons-1)',
    color: variant === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-body-text)',
    border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
    borderRadius: '4px',
    cursor: variant === 'disabled' ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-inter-medium-*)',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles}
      disabled={variant === 'disabled'}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
export default Button;
