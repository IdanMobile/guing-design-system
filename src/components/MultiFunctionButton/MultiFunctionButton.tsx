// MultiFunctionButton.tsx
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

export interface MultiFunctionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const MultiFunctionButton = forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-inter-medium-*)',
      fontSize: 'var(--font-text-body-*)',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      backgroundColor: disabled ? 'var(--color-disabled)' : 'var(--color-primary-buttons)',
      color: 'var(--color-white-white)',
      transition: 'background-color 0.3s',
    },
    size: {
      small: {
        fontSize: 'var(--font-inter-12-regular-*)',
        padding: '8px 16px',
      },
      medium: {
        fontSize: 'var(--font-text-body-*)',
        padding: '10px 20px',
      },
      large: {
        fontSize: 'var(--font-large-header-*)',
        padding: '12px 24px',
      },
    },
    variant: {
      default: {
        backgroundColor: 'var(--color-primary-buttons)',
      },
      flat: {
        backgroundColor: 'transparent',
        border: '1px solid var(--color-divider-stroke)',
      },
      stroked: {
        backgroundColor: 'var(--color-white-white)',
        border: '1px solid var(--color-primary-buttons)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons-input)',
      },
    },
  };

  return (
    <button
      ref={ref}
      className={className}
      style={{
        ...styles.base,
        ...styles.size[size],
        ...styles.variant[variant],
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export default MultiFunctionButton;
export { MultiFunctionButton };