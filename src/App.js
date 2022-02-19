import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img src="https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767__480.png"
          className='img-fluid w-80' alt="take-off-rocket-image"/>
        </div>

      </div>
    </div>
  );
}

export default App;
