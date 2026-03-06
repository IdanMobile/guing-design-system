import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Spacing = () => {
  const gaps = (tokens as any).gaps || [];
  const sizes = (tokens as any).sizes || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Spacing (Gaps & Sizes)</h1>
      
      <h2 style={{ fontSize: '1.2rem', margin: '2rem 0 1rem' }}>Gaps</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {gaps.map((g: any) => (
          <div key={g.name} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ width: '150px', fontWeight: 'bold' }}>{g.name}</div>
            <div style={{ width: `${g.value}px`, height: '20px', background: '#667eea', borderRadius: '2px' }} />
            <div style={{ color: '#666' }}>{g.value}px</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '1.2rem', margin: '3rem 0 1rem' }}>Sizes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '2rem' }}>
        {sizes.map((s: any) => (
          <div key={s.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ width: `${s.value}px`, height: `${s.value}px`, background: '#764ba2', borderRadius: '4px' }} />
            <div style={{ fontWeight: 'bold' }}>{s.name}</div>
            <div style={{ color: '#666' }}>{s.value}px</div>
          </div>
        ))}
      </div>
    </div>
  );
};
