import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Shadows = () => {
  const shadows = (tokens as any).shadows || [];

  const getShadowStyle = (s: any) => {
    return s.shadows.map((sh: any) => `${sh.type === 'inner' ? 'inset ' : ''}${sh.offsetX}px ${sh.offsetY}px ${sh.blur}px ${sh.spread}px rgba(0,0,0,${sh.opacity})`).join(', ');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Shadows</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '3rem' }}>
        {shadows.map((s: any) => (
          <div key={s.name} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ 
              width: '100%', 
              height: '120px', 
              backgroundColor: 'white', 
              borderRadius: '8px',
              boxShadow: getShadowStyle(s)
            }} />
            <div>
              <div style={{ fontWeight: 'bold' }}>{s.name}</div>
              <div style={{ color: '#999', fontSize: '0.75rem', fontFamily: 'monospace' }}>{getShadowStyle(s)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
