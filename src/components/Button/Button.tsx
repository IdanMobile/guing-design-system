// Button.tsx
import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'icon';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class name for styling.
   */
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-inter-medium-*)',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: '10px 20px',
      display: 'inline-block',
      textAlign: 'center',
      transition: 'background-color 0.3s',
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
      border: '1px solid var(--color-primary-buttons)',
    },
    basic: {
      backgroundColor: 'var(--color-buttons-input)',
      color: 'var(--color-text-field)',
      border: 'none',
    },
    icon: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-buttons)',
      border: 'none',
      padding: '10px',
    },
    small: {
      fontSize: '12px',
      padding: '8px 16px',
    },
    medium: {
      fontSize: '14px',
      padding: '10px 20px',
    },
    large: {
      fontSize: '16px',
      padding: '12px 24px',
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      color: 'var(--color-disabled-text)',
      cursor: 'not-allowed',
    },
  };

  const variantStyle = styles[variant];
  const sizeStyle = styles[size];
  const disabledStyle = disabled ? styles.disabled : {};

  return (
    <button
      ref={ref}
      style={{
        ...styles.base,
        ...variantStyle,
        ...sizeStyle,
        ...disabledStyle,
      }}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'flat', 'stroked', 'basic', 'icon']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
export { Button };