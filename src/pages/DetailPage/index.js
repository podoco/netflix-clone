import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios';

//검색하여 나온 영화들 중 하나를 클릭시 => 상세페이지 구현
export default function DetailPage() {

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  console.log('movieid', movieId);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${movieId}`
      )
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  //데이터가 없다면
  if (!movie) return <div>...loading</div>;

  //있다면
  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  )

}
