import "./App.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Shop() {
  
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
