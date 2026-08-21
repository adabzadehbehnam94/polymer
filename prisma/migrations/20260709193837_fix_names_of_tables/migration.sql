/*
  Warnings:

  - You are about to drop the column `publisheAt` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `Application` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `Application` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `Details` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `WorkingHours` on the `setting` table. All the data in the column will be lost.
  - You are about to drop the column `fristname` on the `users` table. All the data in the column will be lost.
  - Added the required column `firstname` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articles` DROP COLUMN `publisheAt`,
    ADD COLUMN `publishedAt` DATETIME(3) NULL;


-- AlterTable
ALTER TABLE `users` DROP COLUMN `fristname`,
    ADD COLUMN `firstname` VARCHAR(191) NOT NULL;
