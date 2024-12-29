/*
  Warnings:

  - Added the required column `dateAdded` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "dateAdded" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Assist" (
    "id" SERIAL NOT NULL,
    "mainImage" TEXT NOT NULL,
    "wrapperImage" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Assist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Assist" ADD CONSTRAINT "Assist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
