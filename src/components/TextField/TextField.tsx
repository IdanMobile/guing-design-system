// TextField.tsx
import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Size of the text field
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Variant of the text field
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * State of the text field
   */
  state?: 'default' | 'disabled' | 'error';
  /**
   * Additional class name for styling
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
  const styles = {
    base: {
      fontFamily: 'var(--font-inter-regular)',
      padding: size === 'sm' ? '8px' : size === 'md' ? '12px' : '16px',
      borderRadius: '4px',
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      backgroundColor: state === 'disabled' ? 'var(--color-disabled)' :
        state === 'error' ? 'var(--color-error)' :
        variant === 'flat' ? 'var(--color-buttons-input)' : 'var(--color-dialog-sections)',
      color: state === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-body-text)',
      cursor: state === 'disabled' ? 'not-allowed' : 'text',
    },
  };

  return (
    <input
      ref={ref}
      className={className}
      style={styles.base}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
