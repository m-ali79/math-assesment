import { db } from "./db";
import { chapter1Data } from "./data";

async function main() {
  const chapter = await db.chapter.create({
    data: {
      name: chapter1Data.name,
      questions: {
        create: chapter1Data.questions.map((q) => ({
          content: q.question,
          category: q.category,
          options: q.options,
          answer: q.answer,
        })),
      },
    },
  });

  console.log(
    `${chapter.name} created successfully with questions and answers`
  );
}

const justExecute = async () => {
  await main();
};

justExecute();
