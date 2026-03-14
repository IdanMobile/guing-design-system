// Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * - 'default': Standard button
   * - 'flat': Button with no elevation
   * - 'stroked': Button with a border
   * - 'basic': Minimal button
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
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
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles = {
    default: {
      backgroundColor: 'var(--color-primary-buttons)',
      color: 'var(--color-white-white)',
      border: 'none',
    },
    flat: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-buttons)',
      border: 'none',
    },
    stroked: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-buttons)',
      border: '1px solid var(--color-primary-buttons)',
    },
    basic: {
      backgroundColor: 'var(--color-buttons-input)',
      color: 'var(--color-body-text)',
      border: 'none',
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      color: 'var(--color-disabled-text)',
      border: 'none',
      cursor: 'not-allowed',
    },
  };

  const variantStyle = disabled ? styles.disabled : styles[variant];

  return (
    <button
      ref={ref}
      className={className}
      style={{
        padding: '10px 20px',
        borderRadius: '4px',
        fontFamily: 'var(--font-inter-medium-*)',
        fontSize: '14px',
        fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...variantStyle,
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
export default Button;
