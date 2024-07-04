/*
  Warnings:

  - A unique constraint covering the columns `[header]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `header` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "header" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_header_key" ON "Post"("header");
