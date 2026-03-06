import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Grids = () => {
  const grids = (tokens as any).layoutGrids || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Layout Grids</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {grids.map((g: any) => (
          <div key={g.name} style={{ borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{g.name}</h2>
            <div style={{ 
              width: '100%', 
              height: '100px', 
              background: '#f9f9f9', 
              borderRadius: '8px',
              display: 'flex',
              gap: '10px',
              padding: '0 10px'
            }}>
              {g.grids.map((grid: any, i: number) => (
                <div key={i} style={{ 
                  flex: 1, 
                  height: '100%', 
                  background: 'rgba(255,0,0,0.05)', 
                  borderLeft: '1px solid rgba(255,0,0,0.1)',
                  borderRight: '1px solid rgba(255,0,0,0.1)'
                }} />
              ))}
            </div>
            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#888' }}>
              {g.grids.map((grid: any) => `\${grid.pattern} \${grid.count || ''} columns / \${grid.gutterSize || 0}px gutter`).join(' | ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
