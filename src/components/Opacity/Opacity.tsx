import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Opacity = () => {
  const opacity = (tokens as any).opacity || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Opacity</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '2rem' }}>
        {opacity.map((o: any) => (
          <div key={o.name} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ 
              width: '100%', 
              height: '80px', 
              background: '#667eea', 
              opacity: o.opacity,
              borderRadius: '8px'
            }} />
            <div>
              <div style={{ fontWeight: 'bold' }}>{o.name}</div>
              <div style={{ color: '#666' }}>{Math.round(o.opacity * 100)}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
