import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from '../../api/axios';

export default function SearchPage() {

  const [searchResults, setSearchResults] = useState([]);


  console.log('useLocation()', useLocation());
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("q")

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?query=${searchTerm}`
      )
      console.log("ㅁ", request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div></div>
  )
}
