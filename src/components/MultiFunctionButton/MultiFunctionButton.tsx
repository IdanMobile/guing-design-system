// MultiFunctionButton.tsx
import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { CSSProperties } from 'react';

interface MultiFunctionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const styles: Record<string, CSSProperties> = {
  base: {
    fontFamily: 'var(--font-secondery-text)',
    fontSize: '20px',
    fontWeight: 600,
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  default: {
    backgroundColor: 'var(--color-primary-buttons)',
    color: 'var(--color-white)',
  },
  flat: {
    backgroundColor: 'transparent',
    color: 'var(--color-primary-buttons)',
  },
  stroked: {
    backgroundColor: 'transparent',
    border: '2px solid var(--color-primary-buttons)',
    color: 'var(--color-primary-buttons)',
  },
  basic: {
    backgroundColor: 'var(--color-buttons-input)',
    color: 'var(--color-text)',
  },
  disabled: {
    backgroundColor: 'var(--color-disabled)',
    color: 'var(--color-disabled-text)',
    cursor: 'not-allowed',
  },
  small: {
    padding: '5px 10px',
  },
  medium: {
    padding: '10px 20px',
  },
  large: {
    padding: '15px 30px',
  },
};

const MultiFunctionButton = forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(
  ({ size = 'medium', variant = 'default', disabled = false, className, ...props }, ref) => {
    const variantStyle = styles[variant];
    const sizeStyle = styles[size];
    const disabledStyle = disabled ? styles.disabled : {};

    return (
      <button
        ref={ref}
        style={{
          ...styles.base,
          ...variantStyle,
          ...sizeStyle,
          ...disabledStyle,
        }}
        className={className}
        disabled={disabled}
        {...props}
      />
    );
  }
);

export { MultiFunctionButton };
export default MultiFunctionButton;
