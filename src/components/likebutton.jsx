import React, { useState } from 'react';

const LikeButton = ({isLiked: initialLiked}) => {

  const [isLiked, setIsLiked] = useState(initialLiked);

  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };


  const buttonStyle = {
    backgroundColor: isLiked ? '#ff4d4d' : '#ccc', 
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button onClick={toggleLike} style={buttonStyle}>
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
