// Button.tsx
import React from 'react';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'icon';
  /**
   * The size of the button.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'md',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
    backgroundColor: variant === 'default' ? 'var(--color-primary-buttons)' :
                     variant === 'flat' ? 'transparent' :
                     variant === 'stroked' ? 'transparent' :
                     variant === 'basic' ? 'var(--color-buttons-secondary-button)' :
                     'transparent',
    color: variant === 'default' ? 'var(--color-white-white)' :
           variant === 'flat' ? 'var(--color-primary-buttons)' :
           variant === 'stroked' ? 'var(--color-primary-buttons)' :
           variant === 'basic' ? 'var(--color-white-white)' :
           'var(--color-primary-buttons)',
    border: variant === 'stroked' ? '1px solid var(--color-primary-buttons)' : 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-inter-medium-*)',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
export default Button;
