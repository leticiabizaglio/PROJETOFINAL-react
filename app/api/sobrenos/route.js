import { NextResponse } from "next/server";

import axios from "axios";

const url = process.env.BASE_URL + "/sobrenos";

export async function GET() {
    try {
        const response = await axios.get(url);
        return NextResponse.json(response.data);
    } catch (error) {
        const params = await request.json();

        try {
            const response = await axios.post(url, params);
            return NextResponse.json(response.data);
        } catch (error) {
            console.log("[ORDER_POST]", error);
            return new NextResponse("Erro interno do servidor!", { status: 500 });
        }
    }
}
export async function POST(request) {
    const body = await request.json();
  
    try {
      const response = await axios.post(url, body);
  
      return NextResponse.json(response.data);
    } catch (error) {
      console.log("[ORDER_POST]", error);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }