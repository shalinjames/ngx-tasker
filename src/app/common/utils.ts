export const baseUrl = "http://localhost:3000";

export const generateEndPoint = (endPoint: string): string => {
  return `${baseUrl}/${endPoint}`;
};
