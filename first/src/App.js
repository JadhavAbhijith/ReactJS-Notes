import './App.css';
import Seed from './Seed';
import Seed2 from './Seed2';
import Empdata from './Empdata';
import User from './User';
import Hello from './Hello';
import Hello1 from './Hello1';
import Emprops from './Emprops';
import Studprops from './Studprops';
import ThisPropsDemo from './ThisPropsDemo';
import MyCar from './MyCar';
import WelcomeMessage from './WelcomeMessage';
import FunctionWithProps from './FunctionWithProps';
import MyClassComponent from './MyClassComponent';
import MyOtherComponent from './MyOtherComponent';

function App() {

  const name = "Abhijith Jadhav";

  const user = "Guest";

  return (
    <div>

       {/* FunctionWithProps Example (with const name)*/}
      <FunctionWithProps value={name}/>


      
      {/* <pre><h1>Seed Infotech</h1>
      <h2>Hello Seed</h2>
      <p>Infotech</p></pre> */}




      {/* <Seed/>
      <Seed2/>
      <Empdata/>
      <User/>
      <Hello/> */}




      {/* <Hello1 name="Anagha"/>
      <Hello1 name="Anusha"/>
      <Hello1 name="Dhanalakshmi"/>
      <Hello1 name="Sneha"/> */}




      {/* <Emprops name="Vishnu"
               id="291"
               project="Front End"
               salary="35,000"/>





      <Studprops roll="003"
                 name="Darshan"
                 grade="A"
                 result="Pass"/>
      



      <ThisPropsDemo name="Rahul" tool="Props"/> */}



      <MyCar/>




      <WelcomeMessage/>


      <Message user={user}/>



      <MyClassComponent/>

      {/* <MyOtherComponent/> */}

      <Seed2/>
      
    </div>
  );
}

const Message = ({user}) => <h2>Welcome {user}!</h2>

export default App;
