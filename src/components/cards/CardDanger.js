import React      from 'react';
import DangerIcon from '../../assets/icons/DangerIcon';

const CardDanger = () => {
  return (
    <article className="Card--Danger">
      <DangerIcon/>
      <div className="Card__text-wrapper">
        <p><strong>A </strong></p>
        <p>D </p>
      </div>
    </article>
  );
};

export default CardDanger;