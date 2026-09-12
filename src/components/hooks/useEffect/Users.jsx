import { useEffect, useState } from "react";

export const Users = () => {
  // Store API data
  const [users, setUsers] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 1. Fetch API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // 2. Check response
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        // 3. Convert response to JSON
        const data = await response.json();

        // 4. Store data in state
        setUsers(data);
      } catch (error) {
        // 5. Handle error
        setError(error.message);
      } finally {
        // 6. Stop loading
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Loading
  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  // Error
  if (error) {
    return (
      <h2 className="text-center mt-10 text-red-500">
        Error: {error}
      </h2>
    );
  }

  // Display data
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Users
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-2">
              {user.name}
            </h2>

            <p className="text-gray-600">
              Username: {user.username}
            </p>

            <p className="text-gray-600">
              Email: {user.email}
            </p>

            <p className="text-gray-600">
              Phone: {user.phone}
            </p>

            <p className="text-gray-600">
              Website: {user.website}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};