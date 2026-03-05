// TextField.tsx
import React, { forwardRef, InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the text field
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * If true, the text field will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles = {
    base: {
      padding: '8px 12px',
      borderRadius: '4px',
      border: '1px solid',
      fontFamily: 'var(--font-inter-regular-*)',
      fontSize: '14px',
      lineHeight: '20px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    size: {
      small: {
        fontSize: '12px',
        padding: '6px 10px',
      },
      medium: {},
      large: {
        fontSize: '16px',
        padding: '10px 14px',
      },
    },
    variant: {
      default: {
        backgroundColor: 'var(--color-buttons-input)',
        borderColor: 'var(--color-divider)',
      },
      flat: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      stroked: {
        backgroundColor: 'var(--color-white)',
        borderColor: 'var(--color-divider-stroke)',
      },
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      borderColor: 'var(--color-disabled-text)',
      color: 'var(--color-disabled-text)',
      cursor: 'not-allowed',
    },
  };

  const combinedStyles = {
    ...styles.base,
    ...styles.size[size],
    ...styles.variant[variant],
    ...(disabled ? styles.disabled : {}),
  };

  return (
    <input
      ref={ref}
      style={combinedStyles}
      className={className}
      disabled={disabled}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
