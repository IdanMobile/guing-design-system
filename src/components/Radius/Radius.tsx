import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Radius = () => {
  const radius = (tokens as any).radius || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Border Radius</h1>
      {radius.length === 0 ? (
        <p style={{ color: '#666' }}>No radius tokens found.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
          {radius.map((r: any) => (
            <div key={r.name} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                width: '100%', 
                height: '100px', 
                backgroundColor: '#f0f0f0', 
                borderRadius: `${r.topLeft}px ${r.topRight}px ${r.bottomRight}px ${r.bottomLeft}px`,
                border: '1px solid #ddd'
              }} />
              <div>
                <div style={{ fontWeight: 'bold' }}>{r.name}</div>
                <div style={{ color: '#666', fontSize: '0.85rem' }}>{r.value}px</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
