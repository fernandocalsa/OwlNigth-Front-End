const sessionTime = 60 * 60 * 2000;

export const sessionExpired = () => {
  const sessionStartTime = localStorage.getItem('sessionStartTime');
  if (sessionStartTime) {
    const currentTime = new Date().getTime();
    const sessionElapsed = currentTime - parseInt(sessionStartTime, 10);
    return sessionElapsed > sessionTime;
  }
  return true;
};

export const setSessionStartTime = () => {
  const currentTime = new Date().getTime();
  localStorage.setItem('sessionStartTime', currentTime.toString());
};
