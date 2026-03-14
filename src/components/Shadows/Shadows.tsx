import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Shadows = () => {
  const shadows = (tokens as any).shadows || [];
  const colors = (tokens as any).colors || [];

  const getColorName = (hex: string) => {
    const match = colors.find((c: any) => c.value.toLowerCase() === hex.toLowerCase());
    return match ? match.name : hex;
  };

  const getShadowStyle = (s: any) => {
    return s.shadows.map((sh: any) => `${sh.type === 'inner' ? 'inset ' : ''}${sh.offsetX}px ${sh.offsetY}px ${sh.blur}px ${sh.spread}px rgba(0,0,0,${sh.opacity})`).join(', ');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Shadows</h1>
      {shadows.length === 0 ? (
        <p style={{ color: '#666' }}>No shadow tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {shadows.map((s: any) => (
            <div key={s.name} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', borderBottom: '1px solid #f0f0f0', alignItems: 'flex-start' }}>
              <div style={{
                width: '140px',
                minWidth: '140px',
                height: '100px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: getShadowStyle(s)
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{s.name}</div>
                {s.category && (
                  <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{s.category}</div>
                )}
                <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>{s.shadows.length} layer{s.shadows.length !== 1 ? 's' : ''}</div>
                {s.shadows.map((sh: any, i: number) => {
                  const colorName = getColorName(sh.color);
                  return (
                    <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 0.75rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'monospace' }}>{sh.type}</span>
                      <span style={{ fontSize: '0.75rem', color: '#ccc' }}>{"·"}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <div style={{ width: '10px', height: '10px', backgroundColor: sh.color, borderRadius: '2px', border: '1px solid #ddd', opacity: sh.opacity }} />
                        <span style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'monospace' }}>{colorName} @{Math.round(sh.opacity * 100)}%</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#ccc' }}>{"·"}</span>
                      <span style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'monospace' }}>offset: {sh.offsetX},{sh.offsetY}</span>
                      <span style={{ fontSize: '0.75rem', color: '#ccc' }}>{"·"}</span>
                      <span style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'monospace' }}>blur: {sh.blur}px</span>
                      <span style={{ fontSize: '0.75rem', color: '#ccc' }}>{"·"}</span>
                      <span style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'monospace' }}>spread: {sh.spread}px</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
