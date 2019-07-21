import React from 'react';
import './card-lists.styles.css'
import {Card} from '../card/card.components';
export const CardList = props => (
  
    <div className="card-list"> { props.monsters.map(m => (

        <Card key={m.id} monsters={m}></Card>
        ))
        }</div>
        

);