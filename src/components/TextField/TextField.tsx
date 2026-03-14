import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

/**
 * TextField component props
 */
export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Size of the text field
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Variant of the text field
   * @default 'default'
   */
  variant?: 'default' | 'outlined' | 'filled';
  /**
   * State of the text field
   * @default 'enabled'
   */
  state?: 'enabled' | 'disabled' | 'error';
  /**
   * Additional class name for styling
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'md',
  variant = 'default',
  state = 'enabled',
  className,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '8px' : size === 'lg' ? '16px' : '12px',
    border: variant === 'outlined' ? '1px solid var(--color-divider-stroke)' : 'none',
    backgroundColor: variant === 'filled' ? 'var(--color-buttons-input)' : 'var(--color-white-white)',
    color: state === 'error' ? 'var(--color-red-error-text-field)' : 'var(--color-body-text)',
    opacity: state === 'disabled' ? 0.5 : 1,
    cursor: state === 'disabled' ? 'not-allowed' : 'text',
    fontFamily: 'var(--font-inter-regular-*)',
    fontSize: '14px',
    lineHeight: '20px',
    width: '100%',
    boxSizing: 'border-box',
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

TextField.displayName = 'TextField';

export { TextField };
export default TextField;
