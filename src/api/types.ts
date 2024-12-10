export type Organization = {
  id: string;
  name: string;
  description: string;
};

export type Employee = {
  id: string;
  orgId: string;
  name: string;
  surname: string;
  age: number;
  position: string;
};
