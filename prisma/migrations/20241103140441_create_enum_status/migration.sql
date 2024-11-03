/*
  Warnings:

  - Changed the type of `order_status` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `processing_status` on the `OrderDetailProcess` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Oven` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `shipping_status` on the `ShippingInfo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `payment_method` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'CANCELED', 'DELIVERED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('SUCCESS', 'PENDING', 'FAILED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('PAYPAL', 'VNPAY');

-- CreateEnum
CREATE TYPE "ShippingStatus" AS ENUM ('IN_TRANSIT', 'DELIVERED');

-- CreateEnum
CREATE TYPE "ProcessingStatus" AS ENUM ('WAITING', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "OvenStatus" AS ENUM ('AVAILABLE', 'IN_USE');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "order_status",
ADD COLUMN     "order_status" "OrderStatus" NOT NULL;

-- AlterTable
ALTER TABLE "OrderDetailProcess" DROP COLUMN "processing_status",
ADD COLUMN     "processing_status" "ProcessingStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Oven" DROP COLUMN "status",
ADD COLUMN     "status" "OvenStatus" NOT NULL;

-- AlterTable
ALTER TABLE "ShippingInfo" DROP COLUMN "shipping_status",
ADD COLUMN     "shipping_status" "ShippingStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "payment_method",
ADD COLUMN     "payment_method" "PaymentMethod" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "PaymentStatus" NOT NULL;
