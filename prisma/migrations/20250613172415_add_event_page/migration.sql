-- AlterTable
ALTER TABLE "EventRegistration" ADD COLUMN     "accommodationNeeded" BOOLEAN,
ADD COLUMN     "dietaryRequirements" TEXT,
ADD COLUMN     "specialRequests" TEXT,
ADD COLUMN     "transportationNeeded" BOOLEAN;
