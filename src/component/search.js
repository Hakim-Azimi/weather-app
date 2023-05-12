import "./search.css";
import { MdLocationOn, MdLocationSearching, MdSearch } from "react-icons/md";
const Search = ({submitHandler, cityHandler, data, searchTerm, locationHandler}) => {


  return (
    <div className="search-division">
      <nav>
        <h1> Waether App</h1>
        <div className="nav-location">
          <div className="city-icon">
            <MdLocationOn className="mdlocation" />
          </div>
          <div className="current-location">
            <p>current location</p>
            <h4>
              { data &&
 `${data.name} - 
 ${data.sys.country}`}
              
             
            </h4>
          </div>
        </div>
      </nav>
      <main>
        <h1>The Only Weather App You need</h1>
        <div className="white-line"></div>
        <form onSubmit={submitHandler} className="search-box">
          <input
            value={searchTerm}
            onChange={cityHandler}
            type="text"
            placeholder="Enter location"
          />

          <MdSearch onClick={submitHandler} className="search-icon" />

          <MdLocationSearching onClick={locationHandler} className="location-search" />
        </form>
      </main>
    </div>
  );
};

export default Search;
