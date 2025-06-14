/*
  Warnings:

  - A unique constraint covering the columns `[email,date,eventType]` on the table `EventRegistration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `EventRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContactMessage" DROP CONSTRAINT "ContactMessage_userId_fkey";

-- AlterTable
ALTER TABLE "EventRegistration" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "EventRegistration_userId_idx" ON "EventRegistration"("userId");

-- CreateIndex
CREATE INDEX "EventRegistration_date_idx" ON "EventRegistration"("date");

-- CreateIndex
CREATE UNIQUE INDEX "EventRegistration_email_date_eventType_key" ON "EventRegistration"("email", "date", "eventType");

-- AddForeignKey
ALTER TABLE "ContactMessage" ADD CONSTRAINT "ContactMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRegistration" ADD CONSTRAINT "EventRegistration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
