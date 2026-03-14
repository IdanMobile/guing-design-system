// Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant to apply different styles
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi' | 'pressed' | 'disabled' | 'icon';
  /**
   * Size of the button
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional className for custom styling
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
    backgroundColor: variant === 'default' ? 'var(--color-primary-buttons)' :
                     variant === 'flat' ? 'transparent' :
                     variant === 'stroked' ? 'var(--color-white-white)' :
                     variant === 'basic' ? 'var(--color-buttons-input)' :
                     variant === 'toggle' ? 'var(--color-hover)' :
                     variant === 'multi' ? 'var(--color-selected-1)' :
                     variant === 'pressed' ? 'var(--color-selected-secondary-button)' :
                     variant === 'disabled' ? 'var(--color-disabled)' :
                     'var(--color-icons-1)',
    color: variant === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-body-text)',
    border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
    borderRadius: '4px',
    cursor: variant === 'disabled' ? 'not-allowed' : 'pointer',
    opacity: variant === 'disabled' ? 0.6 : 1,
    transition: 'background-color 0.3s',
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles}
      disabled={variant === 'disabled'}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
export type { ButtonProps };
export default Button;
