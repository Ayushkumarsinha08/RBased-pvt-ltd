-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('CONFERENCE', 'WORKSHOP', 'SEMINAR', 'NETWORKING_EVENT');

-- CreateTable
CREATE TABLE "EventRegistration" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "eventType" "EventType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventRegistration_pkey" PRIMARY KEY ("id")
);
