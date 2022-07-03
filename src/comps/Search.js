import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";

const Search = ({ placeholder, data }) => {
    const [filterData, setFilterData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.artist.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilterData([]);
        } else {
            setFilterData(newFilter);
        }
    };

    const clearInput = () => {
        setFilterData([]);
        setWordEntered("");
    }

    return (
        <div className="finder">
            <div className="search">
                <div className="searchInputs">
                    <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                    <div className="searchIcon">{filterData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}</div>
                </div>
                {filterData.length !== 0 && (
                    <div className="dataResult">
                        {filterData.slice(0, 10).map((value, key) => {
                            return (
                                <a className="dataItem" href={value.info} target="_blank">
                                    <p>{value.album}</p>
                                </a>
                            )
                        })}
                    </div>   
                )}
           </div>     
        </div>
    )
}

export default Search;