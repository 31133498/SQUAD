import { drizzle } from "@/lib/drizzle";
import { buildings } from "@/lib/drizzle/schema";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl
    const page = searchParams.get('page')
    const perPage = searchParams.get('perPage')
    const pageNum = parseInt(page!) ?? 1
    const perPageNum = parseInt(perPage!) || 10
    console.log(perPageNum)

    if (isNaN(pageNum) || pageNum < 1) {
        return NextResponse.json({
            message: "Invalid query param 'page'"
        }, {
            status: 400
        })
    }

    if (isNaN(perPageNum) || perPageNum < 10) {
        return NextResponse.json({
            message: "Invalid query param 'perPage'"
        }, {
            status: 400
        })
    }

    const result = await drizzle.select({
        id: buildings.id,
        name: buildings.name,
        image: buildings.image,
        images: buildings.images,
        price: buildings.price
    }).from(buildings)

    return NextResponse.json({
        result
    })
}