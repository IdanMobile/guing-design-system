import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Sizes = () => {
  const sizes = (tokens as any).sizes || [];

  const toKebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Sizes</h1>
      {sizes.length === 0 ? (
        <p style={{ color: '#666' }}>No size tokens found.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '2rem' }}>
          {sizes.map((s: any) => (
            <div key={s.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ width: `${Math.min(s.value, 150)}px`, height: `${Math.min(s.value, 150)}px`, background: '#764ba2', borderRadius: '4px' }} />
              <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{s.name}</div>
              <div style={{ color: '#555', fontFamily: 'monospace', fontSize: '0.8rem' }}>{s.value}px</div>
              <div style={{ color: '#aaa', fontFamily: 'monospace', fontSize: '0.7rem' }}>--size-{toKebab(s.name)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
