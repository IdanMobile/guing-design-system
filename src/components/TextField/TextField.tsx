// TextField.tsx
import React, { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the text field
   * - 'default': default background
   * - 'light': light background
   * - 'dark': dark background
   */
  variant?: 'default' | 'light' | 'dark';
  /**
   * The size of the text field
   * - 'small': small size
   * - 'medium': medium size
   * - 'large': large size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the text field will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles = {
    base: {
      border: '1px solid',
      borderRadius: '4px',
      padding: '8px 12px',
      fontFamily: 'var(--font-inter-regular-*)',
      fontSize: '14px',
      outline: 'none',
      width: '100%',
    },
    variants: {
      default: {
        backgroundColor: 'var(--color-dialog-sections-master-table)',
        borderColor: 'var(--color-divider-stroke)',
      },
      light: {
        backgroundColor: 'var(--color-white)',
        borderColor: 'var(--color-divider-stroke)',
      },
      dark: {
        backgroundColor: 'var(--color-section)',
        borderColor: 'var(--color-divider-stroke)',
      },
    },
    sizes: {
      small: {
        fontSize: '12px',
        padding: '6px 10px',
      },
      medium: {
        fontSize: '14px',
        padding: '8px 12px',
      },
      large: {
        fontSize: '16px',
        padding: '10px 14px',
      },
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      color: 'var(--color-disabled-text)',
      cursor: 'not-allowed',
    },
  };

  return (
    <input
      ref={ref}
      className={className}
      style={{
        ...styles.base,
        ...styles.variants[variant],
        ...styles.sizes[size],
        ...(disabled ? styles.disabled : {}),
      }}
      disabled={disabled}
      {...props}
    />
  );
});

export default TextField;
export { TextField };