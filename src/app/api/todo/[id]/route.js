import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma";

async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("Database connection failed");
  }
}

export const GET = async (req) => {
  try {
    const id = req.url.split("/todo/")[1];
    await main();
    const item = await prisma.todolist.findUnique({
      where: { id },
    });

    if (!item) NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "successful", item }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ...error, message: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req) => {
  try {
    const id = req.url.split("/todo/")[1];
    const { todo } = await req.json();
    await main();
    const item = await prisma.todolist.update({
      where: { id },
      data: { todo },
    });
    return NextResponse.json(
      { message: "update successful", item },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { ...error, message: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req) => {
  try {
    const id = req.url.split("/todo/")[1];
    await main();
    const item = await prisma.todolist.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "delete successful", item },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { ...error, message: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
