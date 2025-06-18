/*
  Warnings:

  - Added the required column `datePinned` to the `kudocard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "kudocard" ADD COLUMN     "datePinned" TIMESTAMP(3) NOT NULL;
