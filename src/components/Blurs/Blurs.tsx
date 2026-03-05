import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Blurs = () => {
  const blurs = (tokens as any).blurs || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Blurs</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '3rem' }}>
        {blurs.map((b: any) => (
          <div key={b.name} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative', width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)' 
              }} />
              <div style={{ 
                position: 'absolute', 
                inset: '20px', 
                background: 'rgba(255,255,255,0.3)', 
                backdropFilter: b.blurType === 'background' ? `blur(\${b.radius}px)` : 'none',
                filter: b.blurType === 'layer' ? `blur(\${b.radius}px)` : 'none',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.4)'
              }} />
            </div>
            <div>
              <div style={{ fontWeight: 'bold' }}>{b.name}</div>
              <div style={{ color: '#666' }}>{b.blurType} - {b.radius}px</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
