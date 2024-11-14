// pages/users.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface IUser {
  _id: string;
  name: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setUsers(users.filter(user => user._id !== id));
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new">Create New User</Link>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>{user.name}</strong> ({user.email}) &nbsp;
            <Link href={`/users/${user._id}`}>View</Link>
            &nbsp;
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
