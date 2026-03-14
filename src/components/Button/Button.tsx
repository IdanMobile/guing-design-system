import React from 'react';

/**
 * Button component props
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * If true, the button will be in a pressed state
   */
  pressed?: boolean;
  /**
   * If true, the button will be disabled
   */
  disabled?: boolean;
  /**
   * If true, the button will include an icon
   */
  withIcon?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

/**
 * Button component
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'md',
  pressed = false,
  disabled = false,
  withIcon = false,
  className,
  children,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    backgroundColor: variant === 'default' ? 'var(--color-primary-buttons)' : 'var(--color-buttons-secondary-button)',
    color: 'var(--color-text)',
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
    border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: 'var(--font-large-header-*)',
    transition: 'background-color 0.3s',
    ...(pressed && { backgroundColor: 'var(--color-hover)' }),
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles}
      disabled={disabled}
      {...props}
    >
      {withIcon && <span style={{ marginRight: '8px' }}>🔍</span>}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
