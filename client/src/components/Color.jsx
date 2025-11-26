import React, { useEffect, useState } from 'react';

const ColorPreview = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light', isLightMode);
  }, [isLightMode]);

  const colors = [
    { name: 'Primary', var: '--color-primary' },
    { name: 'Secondary', var: '--color-secondary' },
    { name: 'Danger', var: '--color-danger' },
    { name: 'Warning', var: '--color-warning' },
    { name: 'Success', var: '--color-success' },
    { name: 'Info', var: '--color-info' },
    { name: 'Text', var: '--color-text' },
    { name: 'Muted Text', var: '--color-text-muted' },
    { name: 'Highlight', var: '--color-highlight' },
    { name: 'Border', var: '--color-border' },
    { name: 'Border Muted', var: '--color-border-muted' },
    { name: 'Background', var: '--color-bg' },
    { name: 'Background Light', var: '--color-bg-light' },
    { name: 'Background Dark', var: '--color-bg-dark' },
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Theme Color Preview</h1>
        <button
          className="px-4 py-2 rounded shadow border"
          style={{
            backgroundColor: 'var(--color-bg-light)',
            color: 'var(--color-text)',
            borderColor: 'var(--color-border)'
          }}
          onClick={() => setIsLightMode(!isLightMode)}
        >
          Toggle {isLightMode ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colors.map((c) => (
          <div
            key={c.var}
            className="rounded-xl p-4 shadow-md border"
            style={{
              backgroundColor: c.var.includes('bg') ? 'var(' + c.var + ')' : 'var(--color-bg-light)',
              borderColor: 'var(--color-border)',
              color: c.var.includes('text') || c.var.includes('highlight') ? 'var(' + c.var + ')' : 'var(--color-text)'
            }}
          >
            <div className="mb-2 font-semibold text-lg" style={{ color: 'var(--color-text)' }}>{c.name}</div>
            <div
              className="w-full h-12 rounded"
              style={{ backgroundColor: 'var(' + c.var + ')' }}
            ></div>
            <div className="mt-2 text-sm break-all">{c.var}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPreview;