import { db } from "@/app/lib/db";
// import { MathJax } from "better-react-mathjax";
import Options from "@/app/components/options";

type params = {
  id: string;
};

export default async function Page({ id }: params) {
  const firstQs = await db.questions.findFirst();

  return (
    <div>
      <div className="m-8">
        <p>{firstQs?.content}</p>

        <Options
          options={
            firstQs!.options as { a: string; b: string; c: string; d: string }
          }
          answer={firstQs!.answer}
        />
      </div>
    </div>
  );
}
