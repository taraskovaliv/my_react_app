import React from 'react';
import './Search.css';

function Search() {
    return (
        <div className="Search">
            <form>
                <label className="SearchText"> Введіть запит </label>
                <input type="text" name="query"/>
                <input type="submit" value="Шукати"/>
            </form>
        </div>
    );
}

export default Search;