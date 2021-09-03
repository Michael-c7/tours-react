import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
      <h1>Loading...</h1>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;
