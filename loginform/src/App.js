// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className='bgImg' src='https://img.freepik.com/free-photo/colorful-geometric-paper-object-pack_23-2148547826.jpg?ga=GA1.1.980739427.1725951671&semt=ais_incoming' alt ="backgroundimg"/>
          <form className='formBox'>
            <div className='loginText'>Login</div>
            <input type='text' placeholder='First name'/><br/>
            <input type='text' placeholder='Second name'/><br/>
            <input type ="email" placeholder='Enter you Email'/><br/>
            <input type='password' placeholder='Password'/><br/>
            <button className='btn'>Submit</button>
            </form>        
    </div>
  );
}

export default App;
