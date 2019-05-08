import React from 'react';
import './Header.css';

// import Header sub components
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

 const HeaderContainer = () => {
  return (
    <div>
      <ImageThumbnail />
      <div>
        <HeaderTitle />
      </div>
    </div>
  )
}

export default HeaderContainer