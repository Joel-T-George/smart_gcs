import React, { useEffect, useState } from 'react';

const TitleBar: React.FC = () => {
  // const [response, setResponse] = useState('');

  useEffect(() => {
    console.log(window.electron)
  }, []);

  return (
    <div className="title-bar">
      <div className="title" onDoubleClick={() => window.electron.send('window-maximize')}>
        My Electron App
      </div>
      <div className="window-controls">
        <button onClick={() => window.electron.send('window-minimize')}>─</button>
        <button onClick={() => window.electron.send('window-maximize')}>⬜</button>
        <button onClick={() => window.electron.send('window-close')}>✕</button>
      </div>
    </div>
  );
};

export default TitleBar;
