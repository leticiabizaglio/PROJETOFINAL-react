import { NextResponse } from "next/server";

import axios from "axios";

const url = process.env.BASE_URL + "/personagens";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const name = searchParams.get("nome");

    const newURL = name ? `${url}?nome=${name}`: url;

    try {
        const response = await axios.get(newURL);
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_POST]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
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