export const getCurrentTime = () => {
  return new Date().toTimeString().substr(0, 5);
};