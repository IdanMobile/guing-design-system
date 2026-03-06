import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Elevations = () => {
  const elevations = (tokens as any).elevations || [];

  const getShadowStyle = (s: any) => {
    return s.shadows.map((sh: any) => `${sh.type === 'inner' ? 'inset ' : ''}${sh.offsetX}px ${sh.offsetY}px ${sh.blur}px ${sh.spread}px rgba(0,0,0,${sh.opacity})`).join(', ');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Elevations</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '4rem' }}>
        {elevations.map((e: any) => (
          <div key={e.name} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ 
              width: '100%', 
              height: '120px', 
              backgroundColor: 'white', 
              borderRadius: '12px',
              boxShadow: getShadowStyle(e)
            }} />
            <div>
              <div style={{ fontWeight: 'bold' }}>{e.name}</div>
              <div style={{ color: '#999', fontSize: '0.7rem' }}>{e.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
