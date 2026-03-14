// MultiFunctionButton.tsx
import React from 'react';

export interface MultiFunctionButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be in a pressed state.
   * @default false
   */
  pressed?: boolean;
  /**
   * If true, the button will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const MultiFunctionButton = React.forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(
  ({ size = 'md', variant = 'default', pressed = false, disabled = false, className, ...props }, ref) => {
    const styles: React.CSSProperties = {
      padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
      backgroundColor: disabled
        ? 'var(--color-disabled)'
        : pressed
        ? 'var(--color-hover)'
        : variant === 'flat'
        ? 'var(--color-selected-secondary-button)'
        : variant === 'stroked'
        ? 'transparent'
        : 'var(--color-primary-buttons)',
      color: disabled ? 'var(--color-disabled-text)' : 'var(--color-text)',
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-inter-medium-*)',
      fontSize: '14px',
      fontWeight: 500,
      transition: 'background-color 0.3s',
    };

    return (
      <button
        ref={ref}
        className={className}
        style={styles}
        disabled={disabled}
        {...props}
      />
    );
  }
);

export { MultiFunctionButton };
export default MultiFunctionButton;
