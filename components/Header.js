import React from 'react';

const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className='title'>
        <span>WebDev</span> News
      </h1>
      {/* CSS in JavaScript */}
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
