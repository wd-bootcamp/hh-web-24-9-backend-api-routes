export default function handler(request, response) {
  console.log(request.query);
  response.end("in complicated route");
}
