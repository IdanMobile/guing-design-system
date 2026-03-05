// Button.tsx
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * - 'default': Standard button style
   * - 'flat': Button with no elevation
   * - 'stroked': Button with a border
   * - 'basic': Minimal button style
   * - 'icon': Button with an icon
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'icon';
  /**
   * The size of the button.
   * - 'small': Small button
   * - 'medium': Medium button
   * - 'large': Large button
   */
  size?: 'small' | 'medium' | 'large';
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
  size = 'medium',
  pressed = false,
  disabled = false,
  className = '',
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      padding: '8px 16px',
      fontSize: 'var(--font-inter-smi-bold-*)',
      borderRadius: '4px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
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
        border: '1px solid var(--color-primary-buttons)',
        color: 'var(--color-primary-buttons)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons-input)',
        color: 'var(--color-buttons-text-field)',
      },
      icon: {
        backgroundColor: 'transparent',
        color: 'var(--color-icons-1)',
      },
    },
    sizes: {
      small: {
        padding: '4px 8px',
        fontSize: 'var(--font-bold-small-text-*)',
      },
      medium: {
        padding: '8px 16px',
        fontSize: 'var(--font-inter-smi-bold-*)',
      },
      large: {
        padding: '12px 24px',
        fontSize: 'var(--font-large-header-*)',
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

  return (
    <button
      ref={ref}
      style={{
        ...styles.base,
        ...styles.variants[variant],
        ...styles.sizes[size],
        ...(pressed && styles.states.pressed),
        ...(disabled && styles.states.disabled),
      }}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
export { Button };