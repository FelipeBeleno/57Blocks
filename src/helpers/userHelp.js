export const defaulUser = () => {
  let user = localStorage.getItem('user');
  if (user !== undefined || user !== null) {
    localStorage.setItem('user', '{"user":"57Blocks", "pass": "devdev"}');
  }
};
