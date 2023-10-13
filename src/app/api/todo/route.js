import prisma from "../../../../prisma";
import { NextRequest, NextResponse } from "next/server";

async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("Database connection failed");
  }
}

export const GET = async (req) => {
  try {
    await main();
    const list = await prisma.todolist.findMany();
    return NextResponse.json({ message: "successful", list }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ...error, message: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req) => {
  try {
    const { todo } = await req.json();
    await main();
    const item = await prisma.todolist.create({ data: { todo } });
    return NextResponse.json({ message: "successfull", item }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ...error, message: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
