//import logo from './logo.svg';
import './App.css';
//create a function to create a component
function Header(props){
  
  return (
    <header>
      <h1>Hi</h1>
    </header>
   );
}
function Main(props){
  console.log(props)
  return (
    <section>
      <p>This is {props.name} learning React.js</p>
      <ul style={{textAlign:"left"}}>
      {props.hobbies.map((hobby) => (
        <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
    </section>
   );
}

function Footer(props){
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
   );
}

const hobbies = [
  "Music",
  "Reading"
];

const hobbyObjects = hobbies.map((hobby, i) => ({id: i, title: hobby}))

hobbies.map((hobby) => console.log(hobby));

function App() {
  return (
    <div className="App">

      <Header />
      <Main name= "Sonya" hobbies={hobbyObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
    
  );
}

export default App;
