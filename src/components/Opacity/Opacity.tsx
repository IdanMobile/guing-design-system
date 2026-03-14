import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Opacity = () => {
  const opacity = (tokens as any).opacity || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Opacity</h1>
      {opacity.length === 0 ? (
        <p style={{ color: '#666' }}>No opacity tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2rem' }}>
          {opacity.map((o: any) => (
            <div key={o.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{
                width: '100%',
                height: '80px',
                background: '#667eea',
                opacity: o.opacity,
                borderRadius: '8px'
              }} />
              <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{o.name}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 0.75rem', alignItems: 'center' }}>
                <span style={{ color: '#555', fontFamily: 'monospace', fontSize: '0.8rem' }}>{Math.round(o.opacity * 100)}%</span>
                {o.blendMode && (
                  <>
                    <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                    <span style={{ color: '#888', fontFamily: 'monospace', fontSize: '0.8rem' }}>blend: {o.blendMode.toLowerCase()}</span>
                  </>
                )}
                {o.rotation !== undefined && o.rotation !== 0 && (
                  <>
                    <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                    <span style={{ color: '#888', fontFamily: 'monospace', fontSize: '0.8rem' }}>rotate: {o.rotation}°</span>
                  </>
                )}
              </div>
              {o.category && (
                <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{o.category}</div>
              )}
              <div style={{ color: '#aaa', fontFamily: 'monospace', fontSize: '0.7rem' }}>--opacity-{o.name.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
