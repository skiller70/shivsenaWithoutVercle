import { NextResponse } from "next/server";




export default function GET(req, res) {
 new NextResponse(200).json({ name: 'John Doe' });
}