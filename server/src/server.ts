import app from "./app";

const port: number = 5000;

app.listen(port, (): void => console.log(`running on port ${port}`));
