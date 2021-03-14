export const getCurrentTime = (): string => {
  return new Date().toTimeString().substr(0, 5);
};