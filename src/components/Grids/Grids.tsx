import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Grids = () => {
  const grids = (tokens as any).layoutGrids || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Layout Grids</h1>
      {grids.length === 0 ? (
        <p style={{ color: '#666' }}>No layout grid tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {grids.map((g: any) => (
            <div key={g.name} style={{ padding: '1.5rem', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.25rem' }}>{g.name}</div>
              {g.category && (
                <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase', marginBottom: '1rem' }}>{g.category}</div>
              )}
              <div style={{
                width: '100%',
                height: '80px',
                background: '#f9f9f9',
                borderRadius: '8px',
                display: 'flex',
                gap: '4px',
                padding: '4px',
                marginBottom: '1rem'
              }}>
                {Array.from({ length: Math.min(g.grids[0]?.count || 4, 12) }).map((_: any, i: number) => (
                  <div key={i} style={{
                    flex: 1,
                    height: '100%',
                    background: 'rgba(102,126,234,0.08)',
                    borderLeft: '1px solid rgba(102,126,234,0.15)',
                    borderRight: '1px solid rgba(102,126,234,0.15)',
                    borderRadius: '4px'
                  }} />
                ))}
              </div>
              {g.grids.map((grid: any, i: number) => (
                <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>{grid.pattern}</span>
                  {grid.count !== undefined && (
                    <>
                      <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                      <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>{grid.count === -1 ? 'auto' : grid.count} cols</span>
                    </>
                  )}
                  {grid.sectionSize !== undefined && (
                    <>
                      <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                      <span style={{ fontSize: '0.8rem', color: '#888', fontFamily: 'monospace' }}>section: {grid.sectionSize}px</span>
                    </>
                  )}
                  {grid.gutterSize !== undefined && (
                    <>
                      <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                      <span style={{ fontSize: '0.8rem', color: '#888', fontFamily: 'monospace' }}>gutter: {grid.gutterSize}px</span>
                    </>
                  )}
                  {grid.alignment && (
                    <>
                      <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{"·"}</span>
                      <span style={{ fontSize: '0.8rem', color: '#888', fontFamily: 'monospace' }}>align: {grid.alignment.toLowerCase()}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
