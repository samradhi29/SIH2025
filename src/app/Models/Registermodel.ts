import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  agreeTerms: boolean;
}

const UserSchema: Schema = new Schema<IUser>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  agreeTerms: { type: Boolean, required: true },
});


const User = models.User || model<IUser>('User', UserSchema);

export default User;
