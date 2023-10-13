import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("Database connection failed");
  }
}

export const GET = async (req, res) => {
  try {
    await main();
    const list = await prisma.todolist.findMany();
    return res.status(200).json({ message: "successfull", list });
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
};

export const POST = async (req, res) => {
  try {
    console.log("post");
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
};
