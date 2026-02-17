import React from "react";

function ToyCard({ toy, onDelete, onLike }) {
  const { id, name, image, likes } = toy;

  function handleLikeClick() {
    const newLikes = likes + 1;
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then((r) => r.json())
      .then(onLike);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(() => onDelete(id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button 
        className="like-btn" 
        onClick={handleLikeClick}
      >
        Like {"<3"}
      </button>
      <button className="donate-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;