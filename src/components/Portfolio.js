import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Generator from '../assets/images/generator.png';
import Cuisine from '../assets/images/project1.png'
import Care from '../assets/images/project2.png'


function Portfolio() {
  return (
    <div class='row'>Projects
 <Card style={{ width: '18rem' }}>
      <Card.Img className="Generator" src={Generator} />
      <Card.Body>
        <Card.Title>Password Generator</Card.Title>
        <Card.Text>
          This challenge is Password Generator it will ask what type of character you would like to implement in your new password and it will render a random Password.
        </Card.Text>
        <Button variant="primary"><a href="https://ymoraille88.github.io/Password-Generator/Links to an external site."></a>Password Generator Link</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img className="Cuisine" src={Cuisine} />
      <Card.Body>
        <Card.Title>Cuisine Meets Cocktail</Card.Title>
        <Card.Text>
          This project was one of the best Project I've worked on.  It's a website for people who works a lot and don't have time to think about what thei about to eat and drink.  This website generates different food and cocktail for a great dinner.
        </Card.Text>

        <Button variant="primary"><a href="https://belengigante.github.io/cuisine-meets-cocktails/Links to an external site."></a>Cuisine Meet Cocktail Link</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className="Cuisine" src={Care} />
      <Card.Body>
        <Card.Title>Express Urgent Care</Card.Title>
        <Card.Text>
          Urgent Care is a Website to make it easier for patient to be able to set an appointment, to have their health record.  
        </Card.Text>
        <Button variant="primary"><a href="https://enigmatic-tundra-51864.herokuapp.com/Links to an external site."></a>Express Urgent Care Link</Button>
      </Card.Body>
    </Card>
</div>



   
  );
}
export default Portfolio