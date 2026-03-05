import React from 'react';
import tokens from '../../design-tokens/tokens.json';
import { TypographyToken } from '../../design-tokens';

export const Typography = () => {
  const typography = (tokens as any).typography || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Typography</h1>
      {typography.length === 0 ? (
        <p style={{ color: '#666' }}>No typography tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {typography.map((text: TypographyToken) => (
            <div key={text.name} style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '1.5rem' }}>
              <div style={{ color: '#999', fontSize: '0.75rem', marginBottom: '1rem', fontFamily: 'monospace', textTransform: 'uppercase' }}>
                {text.name} — {text.fontFamily} {text.fontSize}px / {text.lineHeight}
              </div>
              <div style={{
                fontFamily: text.fontFamily,
                fontSize: `${text.fontSize}px`,
                fontWeight: text.fontWeight,
                lineHeight: text.lineHeight as any,
                letterSpacing: text.letterSpacing ? `${text.letterSpacing}px` : 'normal',
                textTransform: text.textTransform as any || 'none',
              }}>
                This is a crazy fox
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
