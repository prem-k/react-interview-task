import React from 'react';

function Layout(props) {
  return (
    <div className="default-layout">
        <div>{props.children}</div> 
    </div>
  );
}

export default Layout;
