-- DropForeignKey
ALTER TABLE "kudocard" DROP CONSTRAINT "kudocard_kudoboardId_fkey";

-- DropForeignKey
ALTER TABLE "kudocomment" DROP CONSTRAINT "kudocomment_kudocardKudocardId_fkey";

-- AddForeignKey
ALTER TABLE "kudocard" ADD CONSTRAINT "kudocard_kudoboardId_fkey" FOREIGN KEY ("kudoboardId") REFERENCES "kudoboard"("KudoboardId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kudocomment" ADD CONSTRAINT "kudocomment_kudocardKudocardId_fkey" FOREIGN KEY ("kudocardKudocardId") REFERENCES "kudocard"("KudocardId") ON DELETE CASCADE ON UPDATE CASCADE;
