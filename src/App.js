import './App.css';
import Countries from './components/Countries';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}




/* <Countries></Countries> */
/* function Countries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data =>  setCountries(data));
  },[])
  return (
    <div>
      <h2>Travelling Around The World!!!</h2>
      <h3>Countries Available:{countries.length}</h3>
      {
        countries.map(country=><Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
   )
}
function Country(props) {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <p>Capital:{props.capital}</p>
     </div>
   )
} */

export default App;
