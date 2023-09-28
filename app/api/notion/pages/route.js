import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Client } from '@notionhq/client';

export async function POST(request) {
    const headersList = headers();
    const key = headersList.get('Authorization')
    const keyArr = key.split(" ");
    const req = await request.json();

    const notion = new Client({ auth: keyArr[1] });

    const res = await notion.pages.create(req);
    // console.log(res);
    return NextResponse.json(res);
}