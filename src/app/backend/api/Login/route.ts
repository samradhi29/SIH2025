// src/app/backend/api/Login/route.ts
import { NextRequest, NextResponse } from 'next/server';

import bcrypt from 'bcryptjs';
import User from '@/app/Models/Registermodel'
import { dbconnect } from '@/app/lib/dbconnect';


export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
    }

    
  dbconnect();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    }

    
    return NextResponse.json({ message: 'Login successful!', user: { email: user.email } }, { status: 200 });

  } catch (error: any) {
    console.error('Login Error:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
