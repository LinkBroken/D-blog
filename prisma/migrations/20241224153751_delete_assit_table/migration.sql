/*
  Warnings:

  - You are about to drop the `Assist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Assist" DROP CONSTRAINT "Assist_userId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "image" TEXT NOT NULL;

-- DropTable
DROP TABLE "Assist";
