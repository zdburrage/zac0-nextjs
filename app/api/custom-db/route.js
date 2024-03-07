import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export const GET = (async function customDBLogin(req) {
  try {
    const res = new NextResponse();

    const fakeUserUUID = uuidv4();

    return NextResponse.json({
        user_id: fakeUserUUID,
        nickname: `${fakeUserUUID}@example.com`
      }, res);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
});