// pages/users/[id]/edit.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface IUser {
  _id: string;
  name: string;
  email: string;
}

const EditUserPage = () => {
  const router = useRouter();
  const { id } = router.query;  // Get user ID from the URL
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!id) return; // If there's no user ID in the URL, do nothing

    const fetchUser = async () => {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      setUser(data);
      setName(data.name);
      setEmail(data.email);
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedUser = {
      name,
      email,
    };

    const res = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });

    if (res.ok) {
      router.push('/users'); // Redirect back to the users list after successful update
    } else {
      alert('Error updating user');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit User</h1>
      {user && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update User</button>
        </form>
      )}
    </div>
  );
};

export default EditUserPage;
