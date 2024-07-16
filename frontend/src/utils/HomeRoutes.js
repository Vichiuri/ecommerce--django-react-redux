export function SaveHomeRoute(path) {
  if (path) {
    localStorage.setItem("last_route", path);
  }
}

export function getHomeRoute() {
  return localStorage.getItem("last_route");
}
