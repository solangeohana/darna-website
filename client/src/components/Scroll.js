import React from 'react';

const Scroll = ({children}) => {
  return (
    <div style={{ overflow: 'scroll',border: 'outset', height: '650px'}}>
      {children}
    </div>
  );
};

export default Scroll;