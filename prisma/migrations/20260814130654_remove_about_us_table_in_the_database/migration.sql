/*
  Warnings:

  - You are about to drop the `aboutus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `aboutus` DROP FOREIGN KEY `AboutUs_productDiversity_fkey`;

-- DropTable
DROP TABLE `aboutus`;
