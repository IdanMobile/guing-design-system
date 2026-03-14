// MultiFunctionButton.tsx
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

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

const MultiFunctionButton = forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(
  ({ size = 'medium', variant = 'default', disabled = false, className, ...props }, ref) => {
    const styles = {
      base: {
        fontFamily: 'var(--font-text-body)',
        color: 'var(--color-text)',
        backgroundColor: 'var(--color-buttons-input)',
        border: 'none',
        padding: '10px 20px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      },
      size: {
        small: { fontSize: '12px', padding: '8px 16px' },
        medium: { fontSize: '14px', padding: '10px 20px' },
        large: { fontSize: '16px', padding: '12px 24px' },
      },
      variant: {
        default: { backgroundColor: 'var(--color-primary-buttons)' },
        flat: { backgroundColor: 'transparent', border: '1px solid var(--color-divider-stroke)' },
        stroked: { backgroundColor: 'transparent', border: '2px solid var(--color-primary-buttons)' },
        basic: { backgroundColor: 'var(--color-white-white)' },
      },
    };

    return (
      <button
        ref={ref}
        style={{
          ...styles.base,
          ...styles.size[size],
          ...styles.variant[variant],
        }}
        disabled={disabled}
        className={className}
        {...props}
      />
    );
  }
);

export { MultiFunctionButton };
export default MultiFunctionButton;
