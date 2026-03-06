import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Icons = () => {
  const icons = (tokens as any).icons || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Icons</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '2rem' }}>
        {icons.map((icon: any) => (
          <div key={icon.name} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid #eee',
            borderRadius: '8px'
          }}>
            <div dangerouslySetInnerHTML={{ __html: atob(icon.svg) }} style={{ width: '32px', height: '32px' }} />
            <div style={{ fontSize: '0.75rem', fontWeight: '500', textAlign: 'center', wordBreak: 'break-all' }}>{icon.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
