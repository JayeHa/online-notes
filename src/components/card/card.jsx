import React from 'react';
import styles from './card.module.css'

const Card = ({card}) => {
    return (
        <div>
            {card.id}
        </div>
    );
};

export default Card;