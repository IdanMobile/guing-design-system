// TextField.tsx
import React, { forwardRef } from 'react';

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The size of the text field.
   * 'sm' for small, 'md' for medium, 'lg' for large.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the text field.
   * 'default', 'flat', 'stroked', 'basic'.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * The state of the text field.
   * 'default', 'pressed', 'disabled'.
   */
  state?: 'default' | 'pressed' | 'disabled';
  /**
   * Additional class name for custom styling.
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'md',
  variant = 'default',
  state = 'default',
  className,
  ...props
}, ref) => {
  const sizeStyles: Record<TextFieldProps['size'], React.CSSProperties> = {
    sm: { fontSize: '12px', padding: '8px' },
    md: { fontSize: '14px', padding: '10px' },
    lg: { fontSize: '16px', padding: '12px' },
  };

  const variantStyles: Record<TextFieldProps['variant'], React.CSSProperties> = {
    default: { backgroundColor: 'var(--color-buttons-input)', color: 'var(--color-body-text)' },
    flat: { backgroundColor: 'transparent', color: 'var(--color-text)' },
    stroked: { border: '1px solid var(--color-divider-stroke)', color: 'var(--color-body-text)' },
    basic: { backgroundColor: 'var(--color-white-white)', color: 'var(--color-body-text)' },
  };

  const stateStyles: Record<TextFieldProps['state'], React.CSSProperties> = {
    default: {},
    pressed: { borderColor: 'var(--color-primary-3)' },
    disabled: { backgroundColor: 'var(--color-disabled)', color: 'var(--color-disabled-text)', cursor: 'not-allowed' },
  };

  const styles: React.CSSProperties = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...stateStyles[state],
    borderRadius: '4px',
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
  };

  return (
    <input
      ref={ref}
      style={styles}
      className={className}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
export type { TextFieldProps };