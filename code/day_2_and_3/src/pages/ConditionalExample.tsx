import { useState } from "react";
import { Link } from "react-router-dom";
import "./ConditionalExample.css";

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

function ConditionalExample() {
  const [users] = useState<User[]>(sampleUsers);
  const [selectedUser, setSelectedUser] = useState<User>(sampleUsers[0]);

  return (
    <div className="conditional-example">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>Conditional Rendering: Premium Badge</h1>

      <div className="info-box">
        <h3>🎯 Exercise: Show Premium Badge</h3>
        <p>
          This example demonstrates <strong>conditional rendering</strong> using
          the logical AND operator (<code>&&</code>).
        </p>
        <p>
          <strong>Task:</strong> Show a "Premium Badge" only if{" "}
          <code>user.isPremium</code> is true.
        </p>
      </div>

      <div className="demo-container">
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
    </div>
  );
}

export default ConditionalExample;
