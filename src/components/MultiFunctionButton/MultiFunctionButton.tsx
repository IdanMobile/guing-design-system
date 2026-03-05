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
   * Additional class name for styling
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
      fontFamily: 'var(--font-secondery-text)',
      fontSize: '20px',
      fontWeight: 600,
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-text)',
    },
    size: {
      small: {
        padding: '5px 10px',
        fontSize: '14px',
      },
      medium: {
        padding: '10px 20px',
        fontSize: '16px',
      },
      large: {
        padding: '15px 30px',
        fontSize: '18px',
      },
    },
    variant: {
      default: {
        backgroundColor: 'var(--color-primary-buttons)',
        border: 'none',
      },
      flat: {
        backgroundColor: 'transparent',
        border: 'none',
      },
      stroked: {
        backgroundColor: 'transparent',
        border: '2px solid var(--color-primary-buttons)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons-input)',
        border: 'none',
      },
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      cursor: 'not-allowed',
      color: 'var(--color-disabled-text)',
    },
  };

  const combinedStyles = {
    ...styles.base,
    ...styles.size[size],
    ...styles.variant[variant],
    ...(disabled ? styles.disabled : {}),
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