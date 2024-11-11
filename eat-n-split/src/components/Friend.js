export default function Friend({ data, onFriendSelection }) {
  return (
    <div
      className={`friend-container ${
        data.isSelected ? "friend-is-selected" : null
      }`}
    >
      <img src={data.imageUrl} alt={data.imageUrl} className="friend-image" />
      <span className="friend-name">{data.name}</span>
      <span className="friend-balance">
        {data.balance === 0 ? (
          <span>You and {data.name} are even</span>
        ) : data.balance > 0 ? (
          <span className="friend-balance-green">
            {data.name} owes you {data.balance.toFixed(2)} francs
          </span>
        ) : (
          <span className="friend-balance-red">
            You owe {data.name} {Math.abs(data.balance).toFixed(2)} francs
          </span>
        )}
      </span>
      <button
        className="friend-selection-button"
        onClick={() => onFriendSelection(data.id)}
      >
        {data.isSelected ? "Close" : "Select"}
      </button>
    </div>
  );
}
