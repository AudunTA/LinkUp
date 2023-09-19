export function userStatus() {
  const token = localStorage.getItem("token");
  return token;
}
