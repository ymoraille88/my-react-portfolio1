import Alert from 'react-bootstrap/Alert';
import ProfilePicture from '../assets/images/profilepic.jpeg';
function Home() {
  return (
    <div>
    <Alert variant="success">
      <Alert.Heading>Yves-Henry Moraille</Alert.Heading>
      <h4>Full Stack Software Engineer</h4>
      <img className='ProfilePicture' alt='home' src={ProfilePicture}></img>
      <hr />
      <p className="mb-0">
       Welcome to my Portfolio, where you will be able to get to know me and get to see some of the projects that I've worked on.
      </p>
    </Alert>
     
     </div>
  );
}

export default Home;