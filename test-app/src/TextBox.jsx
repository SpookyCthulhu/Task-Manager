import React, { useState } from 'react';

const TextBox = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        width: '200px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        style={{
          border: 'none',
          outline: 'none',
          fontSize: '16px',
          width: '100%',
        }}
      />
    </div>
  );
};

export default TextBox;
