// MultiFunctionButton.tsx
import React, { ButtonHTMLAttributes } from 'react';

interface MultiFunctionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

const MultiFunctionButton = React.forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
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
      fontSize: 'var(--font-secondery-text-*)',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.3s',
    },
    size: {
      small: {
        padding: '5px 10px',
      },
      medium: {
        padding: '10px 20px',
      },
      large: {
        padding: '15px 30px',
      },
    },
    variant: {
      default: {
        backgroundColor: 'var(--color-primary-buttons)',
        color: 'var(--color-white)',
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
        color: 'var(--color-text)',
      },
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      color: 'var(--color-disabled-text)',
    }
  };

  const combinedStyles = {
    ...styles.base,
    ...styles.size[size],
    ...styles.variant[variant],
    ...(disabled && styles.disabled),
  };

  return (
    <button
      ref={ref}
      style={combinedStyles}
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