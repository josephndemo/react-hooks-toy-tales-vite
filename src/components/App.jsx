import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";
import ToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toyData) => setToys(toyData));
  }, []);

  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteToy(id) {
    const updatedToys = toys.filter((toy) => toy.id !== id);
    setToys(updatedToys);
  }

  function handleLikeToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <div id="toy-header">
        <img
          src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
          alt="toy header"
        />
      </div>
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <div id="toy-collection">
        {toys.map((toy) => (
          <ToyCard
            key={toy.id}
            toy={toy}
            onDelete={handleDeleteToy}
            onLike={handleLikeToy}
          />
        ))}
      </div>
    </>
  );
}

export default App;