// TextField.tsx
import React, { forwardRef } from 'react';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
   * 'enabled', 'disabled'.
   */
  state?: 'enabled' | 'disabled';
  /**
   * Additional className for custom styling.
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
    padding: size === 'sm' ? '4px 8px' : size === 'lg' ? '12px 16px' : '8px 12px',
    backgroundColor: variant === 'flat' ? 'var(--color-dialog-sections)' : variant === 'stroked' ? 'var(--color-buttons-input)' : 'var(--color-white-white)',
    border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
    borderRadius: '4px',
    color: state === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-body-text)',
    cursor: state === 'disabled' ? 'not-allowed' : 'text',
    outline: 'none',
    fontFamily: 'var(--font-inter-regular-*)',
    fontSize: '14px',
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
