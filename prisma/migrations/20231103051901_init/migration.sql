-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
