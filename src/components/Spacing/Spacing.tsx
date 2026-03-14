import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Spacing = () => {
  const gaps = (tokens as any).gaps || [];
  const sizes = (tokens as any).sizes || [];

  const toKebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Spacing (Gaps & Sizes)</h1>

      <h2 style={{ fontSize: '1rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Gaps</h2>
      {gaps.length === 0 ? (
        <p style={{ color: '#666' }}>No gap tokens found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
          {gaps.map((g: any) => (
            <div key={g.name} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '140px', fontWeight: 'bold', fontSize: '0.9rem' }}>{g.name}</div>
              <div style={{ width: `${g.value}px`, height: '20px', background: '#667eea', borderRadius: '2px' }} />
              <div style={{ color: '#555', fontFamily: 'monospace', fontSize: '0.8rem' }}>{g.value}px</div>
              <div style={{ color: '#aaa', fontFamily: 'monospace', fontSize: '0.7rem' }}>--gap-{toKebab(g.name)}</div>
            </div>
          ))}
        </div>
      )}

      <h2 style={{ fontSize: '1rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Sizes</h2>
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
