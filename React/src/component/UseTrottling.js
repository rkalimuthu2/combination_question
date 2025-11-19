export const trotlle = (fn, delay) => {
  let lastCall = 0;

  return (...args) => {
    const now = Date.now();

    console.log("ki");

    if (now - lastCall < delay) return;
    lastCall = now;
    fn(...args);
  };
};
