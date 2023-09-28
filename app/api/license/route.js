import { NextResponse } from 'next/server';
import LicenseJson from '@/public/data/licenses.json';

export async function GET() {
    // console.log(res);
    return NextResponse.json(LicenseJson);
}