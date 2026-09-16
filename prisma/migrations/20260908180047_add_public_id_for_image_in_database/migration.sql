/*
  Warnings:

  - You are about to drop the column `Application` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `Application` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `Details` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `WorkingHours` on the `setting` table. All the data in the column will be lost.
  - Added the required column `imagePublicId` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagePublicId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logoPublicId` to the `Setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `backgroundPublicId` to the `SliderAds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articles` ADD COLUMN `imagePublicId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `categories` DROP COLUMN `Application`,
    ADD COLUMN `application` VARCHAR(191) NULL,
    ADD COLUMN `imagePublicId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `Application`,
    DROP COLUMN `Details`,
    ADD COLUMN `application` VARCHAR(191) NULL,
    ADD COLUMN `details` VARCHAR(191) NULL,
    ADD COLUMN `imagePublicId` VARCHAR(191) NOT NULL,
    ADD COLUMN `video` VARCHAR(191) NULL,
    ADD COLUMN `videoPublicId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `setting` DROP COLUMN `WorkingHours`,
    ADD COLUMN `logoPublicId` VARCHAR(191) NOT NULL,
    ADD COLUMN `workingHours` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `sliderads` ADD COLUMN `backgroundPublicId` VARCHAR(191) NOT NULL,
    ADD COLUMN `logoPublicId` VARCHAR(191) NULL;
