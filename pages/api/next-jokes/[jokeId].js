import { jokes } from "@/lib/data";

export default function handler(request, response) {
  console.log(request.query);
  // const jokeId = request.query.jokeId;
  const { jokeId } = request.query;

  const joke = jokes.find((joke) => joke.id === jokeId);

  if (!joke) {
    response.status(404).json({ status: "Not Found" });
    return;
  }

  response.json(joke);
}
