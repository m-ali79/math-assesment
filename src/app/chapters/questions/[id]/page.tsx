import { db } from "@/app/lib/db";
// import { MathJax } from "better-react-mathjax";

type params = {
  id: string;
};

export default async function Page({ id }: params) {
  const firstQs = await db.questions.findMany();
  return (
    <div>
      <div className="m-8">
        {firstQs.map((q) => (
          <p key={q.id}>{q.content}</p>
        ))}
        Length : {firstQs.length}
      </div>
    </div>
  );
}
