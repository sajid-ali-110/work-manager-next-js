import { resolve } from "styled-jsx/css";

async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

export default async function About() {
  await takeTime();
  throw new error("this is manual error");
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
