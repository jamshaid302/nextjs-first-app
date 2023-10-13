import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

// prisma commands
// npx prisma db push
// npx prisma studio   http://localhost:5555/
// npm install @prisma/client
// npx prisma generate
