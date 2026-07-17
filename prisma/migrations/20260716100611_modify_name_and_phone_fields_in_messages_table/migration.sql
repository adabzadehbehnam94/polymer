/*
  Warnings:

  - Made the column `name` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `messages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `messages` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL;
