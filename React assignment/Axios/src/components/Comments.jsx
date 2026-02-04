import React, { useState, useEffect } from "react";
import getcomment from "../services/getcomment.js";
// import "./comment.css";
import Addcomment from "./Addcomment.js";
import { useContext } from "react";
import { commentContext } from "../context/comment_context.jsx";

const Comments = () => {
  const { comments, setcomments, expandedIndex, setExpandedIndex } =
    React.useContext(commentContext);

  useEffect(() => {
    getcomment().then((response) => {
      setcomments(response.data.comments);
      console.log(response.data.comments);
    });
  }, []);

  const handleViewDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleStartCooking = (commentName) => {
    alert(`Started cooking: ${commentName}`);
  };

  return (
    <div className="comments-container">
      <h1>comments</h1>

      <div className="comments-grid">
        {comments.map((comment, index) => (
          <div
            key={index}
            className={`comment-card ${expandedIndex === index ? "expanded" : ""}`}
          >
            {comment.image && (
              <img
                src={comment.image}
                alt={comment.name}
                className="comment-image"
              />
            )}
            <div className="comment-content">
              <h2 className="comment-name">{comment.name}</h2>

              {comment.cuisine && (
                <p className="comment-info">
                  <strong>Cuisine:</strong> {comment.cuisine}
                </p>
              )}

              {comment.difficulty && (
                <p className="comment-info">
                  <strong>Difficulty:</strong> {comment.difficulty}
                </p>
              )}

              {comment.servings && (
                <p className="comment-info">
                  <strong>Servings:</strong> {comment.servings}
                </p>
              )}

              {comment.prepTime && (
                <p className="comment-info">
                  <strong>Prep:</strong> {comment.prepTime}
                </p>
              )}

              {comment.cookTime && (
                <p className="comment-info">
                  <strong>Cook:</strong> {comment.cookTime}
                </p>
              )}

              {expandedIndex === index && comment.ingredients && (
                <div className="comment-ingredients">
                  <strong>Ingredients:</strong>
                  <ul>
                    {comment.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}

              {expandedIndex === index && comment.instructions && (
                <div className="comment-instructions">
                  <strong>Instructions:</strong>
                  <ol>
                    {comment.instructions.map((instruction, idx) => (
                      <li key={idx}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="comment-buttons">
                <button
                  className="btn btn-view"
                  onClick={() => handleViewDetails(index)}
                >
                  {expandedIndex === index ? "Hide Details" : "View Details"}
                </button>
                <button
                  className="btn btn-cook"
                  onClick={() => handleStartCooking(comment.name)}
                >
                  Start Cooking
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Addcomment />
    </div>
  );
};

export default Comments;
