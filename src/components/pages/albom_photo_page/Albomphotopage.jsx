import React from 'react'
import { useParams } from "react-router-dom";
import Usercontext from '../../context/Usercontext'

function Albomphotopage() {

  const { photo } = Usercontext();
  const { albomid } = useParams();

  const albomsPhotos = photo.filter((element) => element.albumId == albomid);


  return (
    <div>
      <ul>
        {albomsPhotos.map((element) => (
          <div key={element.id}>
            <li>{element.title}</li>
            <img src={element.url}></img>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Albomphotopage