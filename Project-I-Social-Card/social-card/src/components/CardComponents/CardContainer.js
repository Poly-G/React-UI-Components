import React from 'react';
import './Card.css';

// card sub content
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div>
        <CardBanner />
        <CardContent />
    </div>
  )
}

export default CardContainer
