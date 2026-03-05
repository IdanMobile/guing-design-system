// MultiFunctionButton.tsx
import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface MultiFunctionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button, determining its style.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names for styling.
   */
  className?: string;
}

const MultiFunctionButton = React.forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(
  ({ variant = 'default', size = 'medium', disabled = false, className, children, ...props }, ref) => {
    const buttonClass = classNames(
      'multi-function-button',
      `multi-function-button--${variant}`,
      `multi-function-button--${size}`,
      { 'multi-function-button--disabled': disabled },
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { MultiFunctionButton };
export default MultiFunctionButton;

// CSS (Assumed to be in a separate .css or .scss file)
// .multi-function-button {
//   font-family: var(--font-secondery-text);
//   color: var(--color-text);
//   background-color: var(--color-buttons-input);
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// }
// .multi-function-button--default { background-color: var(--color-primary-buttons); }
// .multi-function-button--flat { background-color: transparent; }
// .multi-function-button--stroked { border: 1px solid var(--color-divider-stroke); }
// .multi-function-button--basic { background-color: var(--color-section); }
// .multi-function-button--small { font-size: var(--font-inter-12-regular); padding: 5px 10px; }
// .multi-function-button--medium { font-size: var(--font-inter-14-med-button); padding: 10px 20px; }
// .multi-function-button--large { font-size: var(--font-large-header); padding: 15px 30px; }
// .multi-function-button--disabled { background-color: var(--color-disabled); cursor: not-allowed; }
