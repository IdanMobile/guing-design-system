// MultiFunctionButton.tsx
import React, { forwardRef } from 'react';

interface MultiFunctionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * Can be 'default', 'primary', 'secondary', or 'danger'.
   */
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
  /**
   * The size of the button.
   * Can be 'sm', 'md', or 'lg'.
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

const MultiFunctionButton = forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  variant = 'default',
  size = 'md',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
    backgroundColor: disabled ? 'var(--color-disabled)' :
      variant === 'primary' ? 'var(--color-primary-buttons)' :
      variant === 'secondary' ? 'var(--color-buttons-secondary-button)' :
      variant === 'danger' ? 'var(--color-error)' : 'var(--color-buttons-input)',
    color: disabled ? 'var(--color-disabled-text)' : 'var(--color-white-white)',
    border: variant === 'default' ? '1px solid var(--color-divider-stroke)' : 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-inter-medium-*)',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'background-color 0.3s',
  };

  return (
    <button
      ref={ref}
      style={styles}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export default MultiFunctionButton;
export { MultiFunctionButton };
export type { MultiFunctionButtonProps };