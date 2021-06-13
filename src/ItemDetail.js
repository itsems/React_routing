import "./App.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function ItemDetail({match}) {
  // console.log(match.params.id);
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  }
  
  return (
    <div>
      <h1>Item</h1>
        <h2>{item.category} / </h2>
        <h3>{item.title}</h3>
      
    </div>
  );
}

export default ItemDetail;
