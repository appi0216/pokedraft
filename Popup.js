import React from 'react';

const Popup = ({ onClose }) => {
  const handleStartClick = () => {
    const audio = new Audio('Character Select OST Extended - Pokemon Unite.mp3');
    audio.play().catch((error) => {
      console.error('Error playing sound:', error);
    });
    onClose(); // Close the popup
  };

  return (
    <div style={popupStyle}>
      <div style={popupContentStyle}>
        <h2>サイトの説明</h2>
        <p>このサイトでは、ポケモンユナイトのドラフトを開始できます。</p>
        <button onClick={handleStartClick}>ドラフトを開始</button>
      </div>
    </div>
  );
};

const popupStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const popupContentStyle = {
  backgroundColor: '#333333',
  padding: '20px',
  borderRadius: '5px',
  textAlign: 'center',
};

export default Popup;