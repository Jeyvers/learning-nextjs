import React from 'react';

const Header = () => {
  return (
    <div>
      <h1 className='title'>
        <span>WebDev</span> News
      </h1>
      {/* CSS in JavaScript */}
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
