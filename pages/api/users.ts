// pages/api/users/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/mongoose';
import User from '@/lib/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching users', error });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, email } = req.body;
      const newUser = new User({ name, email });
      await newUser.save();
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating user', error });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
