import React from 'react';
import tokens from '../../design-tokens/tokens.json';
import { TypographyToken } from '../../design-tokens';

export const Typography = () => {
  const typography: TypographyToken[] = (tokens as any).typography || [];

  const grouped: Record<string, TypographyToken[]> = {};
  typography.forEach((t) => {
    const cat = t.category || 'General';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(t);
  });

  const toKebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Typography</h1>
      {typography.length === 0 ? (
        <p style={{ color: '#666' }}>No typography tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        Object.entries(grouped).map(([category, catTypo]) => (
          <div key={category} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
              {category}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {catTypo.map((text: TypographyToken) => (
                <div key={text.name} style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '1.5rem' }}>
                  <div style={{
                    fontFamily: text.fontFamily,
                    fontSize: `${text.fontSize}px`,
                    fontWeight: text.fontWeight,
                    lineHeight: text.lineHeight as any,
                    letterSpacing: text.letterSpacing ? `${text.letterSpacing}px` : 'normal',
                    textTransform: text.textTransform as any || 'none',
                    color: text.color || 'inherit',
                    marginBottom: '0.75rem',
                  }}>
                    The quick brown fox jumps over the lazy dog
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>{text.name}</span>
                    <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                    <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>{text.fontFamily}</span>
                    <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                    <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>{text.fontSize}px</span>
                    <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                    <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>w{text.fontWeight}</span>
                    <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                    <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>lh: {text.lineHeight}</span>
                    {text.letterSpacing !== undefined && text.letterSpacing !== 0 && (
                      <>
                        <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                        <span style={{ fontSize: '0.8rem', color: '#888', fontFamily: 'monospace' }}>ls: {text.letterSpacing}px</span>
                      </>
                    )}
                    {text.textTransform && (
                      <>
                        <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                        <span style={{ fontSize: '0.8rem', color: '#888', fontFamily: 'monospace' }}>{text.textTransform}</span>
                      </>
                    )}
                  </div>
                  <div style={{ color: '#aaa', fontSize: '0.7rem', fontFamily: 'monospace', marginTop: '0.25rem' }}>--font-{toKebab(text.name)}</div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
