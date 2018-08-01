export type ListEntry = {
  title: string;
  belongTo: string;
};

export type List = {
  [param: string]: ListEntry;
};
