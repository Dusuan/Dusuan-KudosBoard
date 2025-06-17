/*
  Warnings:

  - Added the required column `description` to the `kudocard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "kudocard" ADD COLUMN     "description" TEXT NOT NULL;
