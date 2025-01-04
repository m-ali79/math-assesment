import Link from "next/link";
import { db } from "../lib/db";

export default async function Page() {
  const getAllChapters = await db.chapter.findMany();

  return (
    <div>
      {getAllChapters.map((c) => (
        <Link href={`chapters/questions/${c.id}`} key={c.id}>
          {c.name}
        </Link>
      ))}
    </div>
  );
}
