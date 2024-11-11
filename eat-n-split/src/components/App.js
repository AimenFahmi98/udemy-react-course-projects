import { useState } from "react";
import FriendsList from "./FriendsList";
import BillSpliter from "./BillSpliter";
import FriendAdder from "./FriendAdder";

const initialFriendsList = [
  {
    id: 1,
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQEN1gCeRTVCUA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703955665835?e=2147483647&v=beta&t=uXp9F4S11_AsLjirk-QaaDNIbgSGwHytr7sRDX-8B4Q",
    name: "Aimen",
    balance: -7.45,
    isSelected: false,
  },
  {
    id: 2,
    imageUrl:
      "https://pbs.twimg.com/profile_images/1438184107222179843/oz7v4lAo_400x400.jpg",
    name: "Hatim",
    balance: 20.95,
    isSelected: true,
  },
  {
    id: 3,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgykgwLHTZPmxsK7leSgoU-al6IVYZi4waKw&s",
    name: "Anthony",
    balance: 0,
    isSelected: false,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriendsList);

  function handleFriendSelection(id) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === id) {
          return friend.isSelected
            ? { ...friend, isSelected: false }
            : { ...friend, isSelected: true };
        } else {
          return { ...friend, isSelected: false };
        }
      })
    );
  }

  function handleBillSplit(id, newBalance) {
    setFriends(
      friends.map((friend) =>
        friend.id === id ? { ...friend, balance: newBalance } : { ...friend }
      )
    );
  }

  function handleAddFriend(name, imageUrl) {
    setFriends((friends) => [
      ...friends,
      {
        id: Date.now(),
        name: name,
        imageUrl: imageUrl,
        balance: 0,
        isSelected: false,
      },
    ]);
  }

  return (
    <div className="container">
      <div className="friend-management-container">
        <FriendsList
          friends={friends}
          onFriendSelection={handleFriendSelection}
        />
        <FriendAdder onAddFriend={handleAddFriend} />
      </div>
      <BillSpliter friends={friends} onBillSplit={handleBillSplit} />
    </div>
  );
}
