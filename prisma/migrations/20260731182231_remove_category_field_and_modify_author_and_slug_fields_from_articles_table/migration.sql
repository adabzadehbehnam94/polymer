/*
  Warnings:

  - You are about to drop the column `categoryId` on the `articles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `articles` DROP FOREIGN KEY `Articles_categoryId_fkey`;

-- DropIndex
DROP INDEX `Articles_categoryId_fkey` ON `articles`;

-- AlterTable
ALTER TABLE `articles` DROP COLUMN `categoryId`,
    MODIFY `slug` VARCHAR(191) NULL,
    MODIFY `author` VARCHAR(191) NULL;
