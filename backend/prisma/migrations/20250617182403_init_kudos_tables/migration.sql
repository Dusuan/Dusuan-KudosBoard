-- CreateTable
CREATE TABLE "kudoboard" (
    "KudoboardId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "img" TEXT,

    CONSTRAINT "kudoboard_pkey" PRIMARY KEY ("KudoboardId")
);

-- CreateTable
CREATE TABLE "kudocard" (
    "KudocardId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL,
    "isPinned" BOOLEAN NOT NULL,
    "kudoboardId" INTEGER NOT NULL,

    CONSTRAINT "kudocard_pkey" PRIMARY KEY ("KudocardId")
);

-- CreateTable
CREATE TABLE "kudocomment" (
    "KudocommentId" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "kudocardKudocardId" INTEGER,

    CONSTRAINT "kudocomment_pkey" PRIMARY KEY ("KudocommentId")
);

-- AddForeignKey
ALTER TABLE "kudocard" ADD CONSTRAINT "kudocard_kudoboardId_fkey" FOREIGN KEY ("kudoboardId") REFERENCES "kudoboard"("KudoboardId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kudocomment" ADD CONSTRAINT "kudocomment_kudocardKudocardId_fkey" FOREIGN KEY ("kudocardKudocardId") REFERENCES "kudocard"("KudocardId") ON DELETE SET NULL ON UPDATE CASCADE;
