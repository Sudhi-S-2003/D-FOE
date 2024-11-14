// pages/users/[id].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface IUser {
  _id: string;
  name: string;
  email: string;
}

const UserPage = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Email: {user?.email}</p>
      <button onClick={() => router.push(`/users/${user?._id}/edit`)}>Edit</button>
    </div>
  );
};

export default UserPage;
