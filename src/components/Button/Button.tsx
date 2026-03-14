// Button.tsx
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * - 'default': Standard button with background color.
   * - 'flat': Button with no background color.
   * - 'stroked': Button with a border.
   * - 'basic': Minimal button with no styling.
   * - 'icon': Button intended for icon use.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'icon';
  /**
   * The size of the button.
   * - 'sm': Small button.
   * - 'md': Medium button.
   * - 'lg': Large button.
   */
  size?: 'sm' | 'md' | 'lg';
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
  size = 'md',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
    fontSize: size === 'sm' ? '12px' : size === 'lg' ? '18px' : '14px',
    backgroundColor: variant === 'default' ? 'var(--color-primary-buttons)' : 'transparent',
    border: variant === 'stroked' ? '1px solid var(--color-primary-buttons)' : 'none',
    color: variant === 'flat' || variant === 'icon' ? 'var(--color-primary-buttons)' : 'var(--color-white-white)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 0.3s, color 0.3s',
    borderRadius: '4px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
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

export { Button };
export default Button;
