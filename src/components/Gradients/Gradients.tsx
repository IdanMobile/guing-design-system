import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Gradients = () => {
  const gradients = (tokens as any).gradients || [];
  const colors = (tokens as any).colors || [];

  const getColorName = (hex: string) => {
    const match = colors.find((c: any) => c.value.toLowerCase() === hex.toLowerCase());
    return match ? match.name : hex;
  };

  const renderGradient = (g: any) => {
    const stops = g.stops.map((s: any) => `\${s.color} \${Math.round(s.position * 100)}%`).join(', ');
    const angle = g.gradientType === 'radial' ? 'circle at center' : 'to bottom right';
    return `\${g.gradientType}-gradient(\${angle}, \${stops})`;
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Gradients</h1>
      {gradients.length === 0 ? (
        <p style={{ color: '#666' }}>No gradients found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {gradients.map((g: any) => (
            <div key={g.name} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', borderBottom: '1px solid #f0f0f0', alignItems: 'flex-start' }}>
              <div style={{
                width: '200px',
                minWidth: '200px',
                height: '100px',
                background: renderGradient(g),
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.08)',
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{g.name}</div>
                {g.category && (
                  <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{g.category}</div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem', marginTop: '0.25rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>type: {g.gradientType}</span>
                  <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                  <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>{g.stops.length} stops</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
                  {g.stops.map((s: any, i: number) => {
                    const colorName = getColorName(s.color);
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: s.color, borderRadius: '2px', border: '1px solid #ddd', opacity: s.opacity }} />
                        <span style={{ fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>
                          {colorName} {Math.round(s.position * 100)}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
