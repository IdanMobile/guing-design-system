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
   * The state of the text field
   */
  state?: 'default' | 'error' | 'disabled';
  /**
   * Additional class names to apply to the text field
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'outlined',
  state = 'default',
  className,
  ...props
}, ref) => {
  const textFieldClass = classNames(
    'text-field',
    `text-field--${size}`,
    `text-field--${variant}`,
    `text-field--${state}`,
    className
  );

  return (
    <input
      ref={ref}
      className={textFieldClass}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

export { TextField };
export default TextField;

// CSS (Assuming a CSS-in-JS solution or a preprocessor is used)
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
//   border: 1px solid var(--color-primary-text-field);
// }
// .text-field--filled {
//   background-color: var(--color-buttons-input);
// }
// .text-field--standard {
//   border-bottom: 1px solid var(--color-divider-stroke);
// }
// .text-field--error {
//   border-color: var(--color-error);
//   color: var(--color-red-error);
// }
// .text-field--disabled {
//   background-color: var(--color-disabled);
//   color: var(--color-disabled-text);
// }
