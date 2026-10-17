import { useState } from "react";

interface User {
  name: string;
  isPremium: boolean;
}

const sampleUsers: User[] = [
  { name: "Avraham", isPremium: true },
  { name: "Sarah", isPremium: false },
  { name: "David", isPremium: false },
  { name: "Rachel", isPremium: false },
  { name: "Yoav", isPremium: true },
];

export default function ConditionalRendering() {
  const [users] = useState<User[]>(sampleUsers);
  const [selectedUser, setSelectedUser] = useState<User>(sampleUsers[0]);

  return (
    <div className="conditional-rendering">
      <div className="user-selector">
        <h3>Select a User:</h3>
        <div className="user-buttons">
          {users.map((user, index) => (
            <button
              key={`${index}-${user.name}`}
              onClick={() => setSelectedUser(user)}
              className={selectedUser.name === user.name ? "active" : ""}
            >
              {user.name} {user.isPremium ? "⭐" : ""}
            </button>
          ))}
        </div>
      </div>

      <div className="user-profile-display">
        <div className="user-profile">
          <h2>
            {selectedUser.name}
            {selectedUser.isPremium && (
              <span className="badge">🌟 Premium</span>
            )}
          </h2>
          <div className="user-status">
            <p>
              <strong>Premium Status:</strong>{" "}
              <span
                className={
                  selectedUser.isPremium ? "premium-yes" : "premium-no"
                }
              >
                {selectedUser.isPremium ? "Active" : "Not Active"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
