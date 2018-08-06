export const baseUrl = "http://localhost:3000";

export const generateEndPoint = (endPoint: string): string => {
  return `${baseUrl}/${endPoint}`;
};
type filterType = {
  key: string;
  value: string;
};

export const ObjectFilter = (object: Object, filter: filterType): Object => {
  const { key, value } = filter;
  return Object.keys(object)
    .filter(objectKey => object[objectKey][key] == value)
    .reduce((carryObj, objectKey) => {
      carryObj[objectKey] = object[objectKey];
      return carryObj;
    }, {});
};
