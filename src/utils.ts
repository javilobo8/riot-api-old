export function delay(miliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}