import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Gradients = () => {
  const gradients = (tokens as any).gradients || [];

  const renderGradient = (g: any) => {
    const stops = g.stops.map((s: any) => `\${s.color} \${Math.round(s.position * 100)}%`).join(', ');
    const angle = g.gradientType === 'radial' ? 'circle at center' : 'to bottom right';
    return `\${g.gradientType}-gradient(\${angle}, \${stops})`;
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Gradients</h1>
      {gradients.length === 0 ? (
        <p style={{ color: '#666' }}>No gradients found.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {gradients.map((g: any) => (
            <div key={g.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ 
                width: '100%', 
                height: '120px', 
                background: renderGradient(g), 
                borderRadius: '12px',
                border: '1px solid #eee',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }} />
              <div style={{ fontWeight: 'bold' }}>{g.name}</div>
              <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{g.category || 'Gradient'}</div>
              <div style={{ color: '#888', fontSize: '0.75rem', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {g.stops.map((s: any) => s.color).join(' → ')}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
