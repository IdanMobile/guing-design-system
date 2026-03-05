// TextField.tsx
import React, { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Background color variant for the text field
   */
  variant?: 'default' | 'dialog' | 'section';
  /**
   * Size of the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the text field is disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ variant = 'default', size = 'medium', disabled = false, className, ...props }, ref) => {
    const backgroundColor = {
      default: 'var(--color-white)',
      dialog: 'var(--color-dialog-sections-master-table)',
      section: 'var(--color-section)',
    }[variant];

    const padding = {
      small: '4px 8px',
      medium: '8px 16px',
      large: '12px 24px',
    }[size];

    const styles = {
      input: {
        backgroundColor,
        padding,
        border: '1px solid var(--color-divider-stroke)',
        borderRadius: '4px',
        fontSize: '14px',
        lineHeight: '20px',
        color: 'var(--color-text)',
        outline: 'none',
        width: '100%',
        boxSizing: 'border-box' as const,
        cursor: disabled ? 'not-allowed' : 'text',
        opacity: disabled ? 0.5 : 1,
      },
    };

    return (
      <input
        ref={ref}
        style={styles.input}
        disabled={disabled}
        className={className}
        {...props}
      />
    );
  }
);

export { TextField };
export default TextField;
