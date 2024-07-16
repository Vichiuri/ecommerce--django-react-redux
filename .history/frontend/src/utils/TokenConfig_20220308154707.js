export default function (getState) {
  //const token
  const token = getState().authReducer.token;

  let config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
    config.headers['Auth'] = `Token ${token}`
    config.headers['Distributor'] = 7
  }
  return config;
}
