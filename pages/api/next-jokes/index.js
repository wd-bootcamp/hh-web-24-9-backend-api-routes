import { jokes } from "@/lib/data";

export default function handler(request, response) {
  console.log("requesting data inside api route");
  response.status(200).json(jokes);
}
