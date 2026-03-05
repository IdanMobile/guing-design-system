// TextField.tsx
import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the text field
   */
  variant?: 'outlined' | 'filled' | 'standard';
  /**
   * If true, the text field will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the text field
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ size = 'medium', variant = 'outlined', disabled = false, className, ...props }, ref) => {
    const textFieldClass = classNames(
      'text-field',
      `text-field--${size}`,
      `text-field--${variant}`,
      { 'text-field--disabled': disabled },
      className
    );

    return (
      <input
        ref={ref}
        className={textFieldClass}
        disabled={disabled}
        {...props}
      />
    );
  }
);

export { TextField };
export default TextField;

// CSS (Assuming CSS Modules or a similar setup)
// .text-field {
//   font-family: var(--font-inter-regular);
//   color: var(--color-text);
//   background-color: var(--color-white);
//   border: 1px solid var(--color-divider-stroke);
//   padding: 8px;
//   border-radius: 4px;
//   transition: border-color 0.3s ease;
// }
// .text-field--small {
//   font-size: 12px;
// }
// .text-field--medium {
//   font-size: 14px;
// }
// .text-field--large {
//   font-size: 16px;
// }
// .text-field--outlined {
//   border: 1px solid var(--color-primary-text-field);
// }
// .text-field--filled {
//   background-color: var(--color-buttons-input);
// }
// .text-field--standard {
//   border-bottom: 1px solid var(--color-divider-stroke);
//   border-radius: 0;
// }
// .text-field--disabled {
//   color: var(--color-disabled-text);
//   background-color: var(--color-disabled);
//   cursor: not-allowed;
// }
