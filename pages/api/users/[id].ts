// pages/api/users/[id].ts
import User from '@/lib/models/User';
import connectToDatabase from '@/lib/mongoose';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching user', error });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting user', error });
    }
  } else if (req.method === 'PUT') {
    try {
      const { name, email } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating user', error });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
