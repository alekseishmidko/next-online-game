import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";

export default async function Home() {
  const g = await prisma.game.findMany();
  console.log(g, "games");
  return (
    <>
      <Button>sds</Button>
    </>
  );
}
