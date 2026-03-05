// Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be in a pressed state.
   */
  pressed?: boolean;
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the button will display an icon.
   */
  icon?: boolean;
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  pressed = false,
  disabled = false,
  icon = false,
  className = '',
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-large-header)',
      fontSize: 'var(--font-large-header-size)',
      fontWeight: 'var(--font-large-header-weight)',
    },
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
      border: `1px solid var(--color-primary-buttons)`,
      color: 'var(--color-primary-buttons)',
    },
    basic: {
      backgroundColor: 'var(--color-buttons-input)',
      color: 'var(--color-text-field)',
    },
    pressed: {
      backgroundColor: 'var(--color-hover)',
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      color: 'var(--color-disabled-text)',
      cursor: 'not-allowed',
    },
    icon: {
      padding: '10px',
    },
  };

  const combinedStyles = {
    ...styles.base,
    ...styles[variant],
    ...(pressed && styles.pressed),
    ...(disabled && styles.disabled),
    ...(icon && styles.icon),
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

export { Button };
export default Button;
