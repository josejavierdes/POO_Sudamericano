-- CreateTable
CREATE TABLE "Creatura" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "lastSee" TEXT NOT NULL,
    "countLastSee" INTEGER NOT NULL DEFAULT 1,
    "extinct" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Creatura_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Creatura_name_key" ON "Creatura"("name");
