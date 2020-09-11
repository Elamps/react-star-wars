import React from 'react';
import { Link } from 'react-router-dom';
import './oship.css';


const StarshipPage = (props) => {
  
  const starship = props.getStarship(props.match.params.idx);
  
  return (
    <div className='StarshipPage'>
      {starship ?
        <div className='StarshipPage-starship'>
          <span>Name:</span>
          <span>{starship.name}</span>
          <span>Model:</span>
          <span>{starship.model}</span>
          <span>It costs this much!:</span>
          <span>{starship.cost_in_credits}</span>
          <span>How Many Parsecs?:</span>
          <span>{starship.hyperdrive_rating}</span>
          <Link to='/'>Go Back</Link>
        </div>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};

export default StarshipPage;