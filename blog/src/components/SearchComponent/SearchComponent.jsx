import { useState } from "react";

import "./SearchComponent.css";
import { SearchBar } from "./SearchBar/SearchBar.jsx";
import { SearchResultsList } from "./SearchResultsList/SearchResultsList.jsx";

function SearchComponent({setMusicAdded}) {
  const [results, setResults] = useState([]);
  const [content,setContent]=useState();

  return (
    <div className="SearchComponent" style={{position:"absolute",zIndex:"99"}}>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} setContent={setContent} />
        {results && results.length > 0 &&
            <SearchResultsList
                setMusicAdded={setMusicAdded}
                results={results}
                setResults={setResults}
                content={content}
                setContent={setContent}
            />}
      </div>
    </div>
  );
}

export default SearchComponent;
