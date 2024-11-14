// app/user/page.tsx

import React from 'react';

const UserPage = async () => {
  // Fetch data from the API route
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  return (
    <div>
      <h1>User Page</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default UserPage;
