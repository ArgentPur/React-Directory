import React from 'react';

import { Card } from '../card/card.component.jsx';

import './cardlist.styles.css';

export const CardList = props =>  (
    <div className= 'card-list'>
        {props.members.map(member => (
            <Card key={member.id} member= {member}/>
        ))}
</div>

)
 

export default CardList;