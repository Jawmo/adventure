export function apiURL(path: string) {
  // TODO: Figure out a good way to change this on deploy
  return new URL(path, "http://api.adventure.test");
}
