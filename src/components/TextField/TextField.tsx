// TextField.tsx
import React, { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the text field
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * The size of the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the text field will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for styling
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
      padding: '8px 12px',
      borderRadius: '4px',
      border: `1px solid var(--color-divider-stroke)`
    },
    variants: {
      default: {
        backgroundColor: 'var(--color-white)',
        color: 'var(--color-text-field)',
      },
      flat: {
        backgroundColor: 'var(--color-buttons-input)',
        color: 'var(--color-text-field)',
        border: 'none',
      },
      stroked: {
        backgroundColor: 'var(--color-white)',
        color: 'var(--color-text-field)',
        border: `2px solid var(--color-primary-buttons)`
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

  const combinedStyles = {
    ...styles.base,
    ...styles.variants[variant],
    ...styles.sizes[size],
    ...(disabled ? styles.disabled : {}),
  };

  return (
    <input
      ref={ref}
      style={combinedStyles}
      disabled={disabled}
      className={className}
      {...props}
    />
  );
});

export default TextField;
export { TextField };