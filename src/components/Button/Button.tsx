// Button.tsx
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * - 'default': Standard button with background color.
   * - 'flat': Button with no background color.
   * - 'stroked': Button with a border.
   * - 'basic': Simple text button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling.
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
    base: {
      padding: '10px 20px',
      borderRadius: '4px',
      fontSize: 'var(--font-large-header-fontSize)',
      fontWeight: 'var(--font-large-header-fontWeight)',
      lineHeight: 'var(--font-large-header-lineHeight)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background-color 0.3s, border-color 0.3s',
    },
    default: {
      backgroundColor: 'var(--color-primary-buttons)',
      color: 'var(--color-white)',
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
      border: '2px solid var(--color-primary-buttons)',
    },
    basic: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-buttons)',
      border: 'none',
    },
  };

  const variantStyle = styles[variant];

  return (
    <button
      ref={ref}
      className={className}
      style={{ ...styles.base, ...variantStyle }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
export { Button };