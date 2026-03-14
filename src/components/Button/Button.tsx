import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi-function' | 'pressed' | 'disabled' | 'icon';
  /**
   * The size of the button.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional className for styling overrides.
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'md',
  className,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
    backgroundColor: variant === 'default' ? 'var(--color-primary-buttons)' :
                    variant === 'flat' ? 'transparent' :
                    variant === 'stroked' ? 'transparent' :
                    variant === 'basic' ? 'var(--color-buttons-secondary-button)' :
                    variant === 'toggle' ? 'var(--color-selected-secondary-button)' :
                    variant === 'multi-function' ? 'var(--color-primary-primary-button)' :
                    variant === 'pressed' ? 'var(--color-hover)' :
                    variant === 'disabled' ? 'var(--color-disabled)' :
                    'var(--color-icons-1)',
    color: variant === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-white-white)',
    border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
    borderRadius: '4px',
    cursor: variant === 'disabled' ? 'not-allowed' : 'pointer',
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
      disabled={variant === 'disabled'}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
export default Button;
