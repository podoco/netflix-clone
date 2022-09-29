import './App.css';
import requests from './api/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';



function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLEX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />

    </div >
  );
}

export default App;
