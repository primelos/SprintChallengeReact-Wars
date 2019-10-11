import React, {useState, useEffect} from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import './StarWars.css';

let image = `https://starwarsblog.starwars.com/wp-content/uploads/2019/08/rise-of-skywalker-poster-tall.jpg`

const JediCard = (props) => {
    const { birth, eye, gender, hair, tall, weight, name } = props
    return(
      
        <div className='newCard'>
        <Card inverse>
          <CardImg width="100%" src={image} alt="Card image cap" />
          <CardImgOverlay>
            <span className='name'>{name} Bio:</span>
            <CardText className='name'>Was born in the year {birth}.
            </CardText>
            <CardText className='name'>Here are the characters specs : 
            </CardText>
            <CardText>
              <small className="text-muted">
              <ul className='list'>
                <li>Eye color: {eye}</li>
                <li>Hair color: {hair}</li>
                <li>Weight: {weight}kg</li>
                <li>Height: {tall}cm</li>
                <li>Gender: {gender}</li>
            </ul>

              </small>
            </CardText>
          </CardImgOverlay>
        </Card>
        </div>
        
    )
}
export default JediCard;
