import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchItems } from '../../store/search';
import { useHistory } from 'react-router-dom';
import { getSearchedArtists } from "../../store/search";
import { Link } from 'react-router-dom';


export default function SearchPage () {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const artists = useSelector(state => state.searchedArtists)

  const [input, setInput] = useState('');

  const search = (e) => {
    e.preventDefault();
    if(!input) return;
    let searchedWords = input.split(' ');
    let newWords = searchedWords.join("%20");
    console.log(newWords)
    dispatch(getSearchedArtists(newWords));
  };


return (
  <div>
    <form onSubmit={search}>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button type="submit">Search</button>
    </form>
    <div>
        {artists.artists.items.map((artist) => {
            return (
                <Link key={`${artist.id}`} to={`/artists/${artist.id}`}>
                    <img className="artist__image_container" key={artist.images[0].url} src={artist.images[0].url}></img>
                </Link>
            )
        })}
    </div>
  </div>
  );
}