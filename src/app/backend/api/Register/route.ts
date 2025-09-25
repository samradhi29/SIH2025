import { NextRequest, NextResponse } from 'next/server';
import { dbconnect } from '@/app/lib/dbconnect';
import User from '@/app/Models/Registermodel';
import { hash } from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.password ||
      !data.confirmPassword ||
      data.password !== data.confirmPassword ||
      !data.agreeTerms
    ) {
      return NextResponse.json(
        { message: 'Invalid data or passwords do not match or terms not agreed' },
        { status: 400 }
      );
    }

    await dbconnect();

    // Check if email already registered
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'Email is already registered' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(data.password, 10);

    // Create new user document
    const user = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
   
      password: hashedPassword,
      agreeTerms: data.agreeTerms,
    });

    await user.save();

    return NextResponse.json(
      { message: 'User registered successfully', userId: user._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
