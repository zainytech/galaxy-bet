import logo from './logo.svg';
import { Helmet } from "react-helmet"
import './App.css';
import Home from './Comp/Home'
import Routes from './Routes.js';

function App() {
  return (
    <>
    {/* <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
          async
        ></script>
        <script src="/path/to/resource.js" type="text/javascript" />
      </Helmet> */}

    <div className="App">   
    <Routes/>
    </div>
    </>
  );
}

export default App;
