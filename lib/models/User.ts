import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the User document
interface IUser extends Document {
  name: string;
  email: string;
  createdAt: Date;
}

// Define the User schema
const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create the User model, checking if it already exists to avoid re-definition
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
