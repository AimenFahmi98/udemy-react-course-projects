import { useState } from "react";

export default function FriendAdder({ onAddFriend }) {
  const [friendName, setFriendName] = useState();
  const [imageUrl, setImageUrl] = useState(
    "https://media.istockphoto.com/id/1397556857/vector/avatar-13.jpg?s=612x612&w=0&k=20&c=n4kOY_OEVVIMkiCNOnFbCxM0yQBiKVea-ylQG62JErI="
  );
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {isClicked && (
        <div className="friend-adder-container">
          <span className="form-emoji">👬</span>
          <span className="form-text">Friend Name</span>
          <input
            type="text"
            className="form-input"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
          />

          <span className="form-emoji">🏞</span>
          <span className="form-text">Image URL</span>
          <input
            type="text"
            className="form-input"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <button
            className="friend-adder-button-add-friend"
            onClick={() => onAddFriend(friendName, imageUrl)}
          >
            Add
          </button>
        </div>
      )}
      <div
        className="friend-adder-button-container"
        onClick={() => setIsClicked(!isClicked)}
      >
        <button className="friend-adder-button">
          {isClicked ? "Close" : "Add Friend"}
        </button>
      </div>
    </>
  );
}
