// TextField.tsx
import React, { forwardRef } from 'react';

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The size of the text field.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the text field.
   */
  variant?: 'outlined' | 'filled';
  /**
   * The state of the text field.
   */
  state?: 'default' | 'error' | 'disabled';
  /**
   * Additional className for styling overrides.
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'md',
  variant = 'outlined',
  state = 'default',
  className,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '4px 8px' : size === 'md' ? '8px 12px' : '12px 16px',
    border: variant === 'outlined' ? '1px solid var(--color-divider-stroke)' : 'none',
    backgroundColor: variant === 'filled' ? 'var(--color-buttons-input)' : 'transparent',
    color: state === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-body-text)',
    cursor: state === 'disabled' ? 'not-allowed' : 'text',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body-*)',
    fontSize: '14px',
    lineHeight: '20px',
  };

  return (
    <input
      ref={ref}
      className={className}
      style={styles}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
export type { TextFieldProps };