import Friend from "./Friend";

export default function FriendsList({ friends, onFriendSelection }) {
  return (
    <div className="friends-list-container">
      {friends.map((friend) => (
        <Friend
          data={friend}
          onFriendSelection={onFriendSelection}
          key={friend.id}
        />
      ))}
    </div>
  );
}
