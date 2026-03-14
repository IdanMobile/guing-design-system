import React from 'react';
import tokens from '../../design-tokens/tokens.json';
import { ColorToken } from '../../design-tokens';

export const Colors = () => {
  const colors: ColorToken[] = (tokens as any).colors || [];

  const grouped: Record<string, ColorToken[]> = {};
  colors.forEach((c) => {
    const cat = c.category || 'General';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(c);
  });

  const toKebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Colors</h1>

      {colors.length === 0 && (
        <p style={{ color: '#666' }}>No colors found. Sync tokens from Figma to see them here.</p>
      )}

      {Object.entries(grouped).map(([category, catColors]) => (
        <div key={category} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
            {category}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {catColors.map((color: ColorToken) => (
              <div key={color.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{
                  width: '100%',
                  height: '80px',
                  backgroundColor: color.value,
                  borderRadius: '8px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }} />
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{color.name}</div>
                <div style={{ color: '#555', fontSize: '0.8rem', fontFamily: 'monospace' }}>{color.value}</div>
                <div style={{ color: '#aaa', fontSize: '0.7rem', fontFamily: 'monospace' }}>--color-{toKebab(color.name)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
