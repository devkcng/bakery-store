/*
  Warnings:

  - A unique constraint covering the columns `[order_id]` on the table `ShippingInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ProductTopping" DROP CONSTRAINT "ProductTopping_product_id_fkey";

-- DropForeignKey
ALTER TABLE "RecipeDetail" DROP CONSTRAINT "RecipeDetail_warehouse_id_fkey";

-- CreateTable
CREATE TABLE "_ProductToProductTopping" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeDetailToWareHouse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductTopping_AB_unique" ON "_ProductToProductTopping"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductTopping_B_index" ON "_ProductToProductTopping"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeDetailToWareHouse_AB_unique" ON "_RecipeDetailToWareHouse"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeDetailToWareHouse_B_index" ON "_RecipeDetailToWareHouse"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ShippingInfo_order_id_key" ON "ShippingInfo"("order_id");

-- AddForeignKey
ALTER TABLE "_ProductToProductTopping" ADD CONSTRAINT "_ProductToProductTopping_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductTopping" ADD CONSTRAINT "_ProductToProductTopping_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductTopping"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeDetailToWareHouse" ADD CONSTRAINT "_RecipeDetailToWareHouse_A_fkey" FOREIGN KEY ("A") REFERENCES "RecipeDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeDetailToWareHouse" ADD CONSTRAINT "_RecipeDetailToWareHouse_B_fkey" FOREIGN KEY ("B") REFERENCES "WareHouse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
