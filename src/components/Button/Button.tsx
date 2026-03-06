// Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'icon';
  /**
   * If true, the button will be in a pressed state.
   */
  pressed?: boolean;
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
  pressed = false,
  disabled = false,
  className = '',
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      padding: '10px 20px',
      borderRadius: '4px',
      fontSize: 'var(--font-secondery-text)',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    variants: {
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
        color: 'var(--color-primary-buttons)',
        border: '1px solid var(--color-primary-buttons)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons-input)',
        color: 'var(--color-text-field)',
      },
      icon: {
        backgroundColor: 'transparent',
        color: 'var(--color-header-icons)',
        padding: '10px',
      },
    },
    states: {
      pressed: {
        backgroundColor: 'var(--color-hover)',
      },
      disabled: {
        backgroundColor: 'var(--color-disabled)',
        color: 'var(--color-disabled-text)',
        cursor: 'not-allowed',
      },
    },
  };

  const variantStyle = styles.variants[variant];
  const stateStyle = disabled ? styles.states.disabled : pressed ? styles.states.pressed : {};

  return (
    <button
      ref={ref}
      style={{ ...styles.base, ...variantStyle, ...stateStyle }}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
export default Button;
