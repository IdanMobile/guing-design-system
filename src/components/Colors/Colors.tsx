import React from 'react';
import tokens from '../../design-tokens/tokens.json';
import { ColorToken } from '../../design-tokens';

export const Colors = () => {
  const colors = (tokens as any).colors || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Colors</h1>
      
      {colors.length === 0 && (
        <p style={{ color: '#666' }}>No colors found. Sync tokens from Figma to see them here.</p>
      )}

      {colors.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
          {colors.map((color: ColorToken) => (
            <div key={color.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ 
                width: '100%', 
                height: '100px', 
                backgroundColor: color.value, 
                borderRadius: '8px',
                border: '1px solid #eee',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }} />
              <div style={{ fontWeight: 'bold' }}>{color.name}</div>
              <div style={{ color: '#666', fontSize: '0.85rem', fontFamily: 'monospace' }}>{color.value}</div>
              {color.category && (
                <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{color.category}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
