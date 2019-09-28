import { sayGreeting } from "./sayGreeting";

describe('index.ts', () => {
  test('it can pass', () => {
    sayGreeting("hello");
  });
});