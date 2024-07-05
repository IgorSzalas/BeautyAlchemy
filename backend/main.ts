import { app, port } from "./config";

app.get("/", (req: any, res: any) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
