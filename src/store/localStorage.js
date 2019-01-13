const STATE = 'userSession'

let initialSession = {
  username: '',
  token: '',
}

export const loadUserSession = () => {
  try {
    const serializedState = localStorage.getItem(STATE);
    if (serializedState === null) {
      return initialSession;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initialSession;
  }
};

export const saveUserSession = (username, token) => {
  try {
    const serializedState = JSON.stringify({username, token});
    localStorage.setItem(STATE, serializedState);
  } catch {
    // ignore write errors
  }
};
