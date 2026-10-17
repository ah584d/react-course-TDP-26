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
          {users.map((user) => (
            // TODO 1: Render a <button> for each user.
            // It should select the user on click, get the "active" class when
            // it is the selected user, and show a ⭐ next to premium users.
            <p key={user.name}>{user.name}</p>
          ))}
        </div>
      </div>

      <div className="user-profile-display">
        <div className="user-profile">
          <h2>
            {selectedUser.name}
            {/* TODO 2: Show the <span className="badge">🌟 Premium</span> only for premium users. */}
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
