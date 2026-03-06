import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Borders = () => {
  const borders = (tokens as any).borders || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Borders</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
        {borders.map((b: any) => (
          <div key={b.name} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ 
              width: '100%', 
              height: '80px', 
              border: `${b.weight}px solid ${b.color}`,
              borderRadius: '4px'
            }} />
            <div>
              <div style={{ fontWeight: 'bold' }}>{b.name}</div>
              <div style={{ color: '#666', fontSize: '0.85rem' }}>{b.weight}px • {b.color}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
