-- CreateTable
CREATE TABLE "Book" (
    "bookId" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "publishDate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tag" (
    "tagId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TagsOnBooks" (
    "bookId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    PRIMARY KEY ("bookId", "tagId"),
    CONSTRAINT "TagsOnBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("bookId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TagsOnBooks_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("tagId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_bookId_key" ON "Book"("bookId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_tagId_key" ON "Tag"("tagId");
