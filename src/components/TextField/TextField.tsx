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
  variant?: 'outlined' | 'filled';
  /**
   * Whether the text field is disabled
   */
  disabled?: boolean;
  /**
   * Custom class name for styling
   */
  className?: string;
}

/**
 * A basic text input field for user input.
 */
const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'outlined',
  disabled = false,
  className,
  ...props
}, ref) => {
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
});

export default TextField;
export { TextField };

// CSS (Assumed to be in a separate CSS/SCSS file)
// .text-field {
//   font-family: var(--font-inter-regular);
//   color: var(--color-text);
//   border: 1px solid var(--color-divider-stroke);
//   padding: 8px;
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
//   background-color: var(--color-white);
// }
// .text-field--filled {
//   background-color: var(--color-buttons-input);
// }
// .text-field--disabled {
//   background-color: var(--color-disabled);
//   color: var(--color-disabled-text);
//   cursor: not-allowed;
// }
