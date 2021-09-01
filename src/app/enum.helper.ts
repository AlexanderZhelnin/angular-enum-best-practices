export enum WorkEnum
{
  waite = 0,
  starting = 1,
  work = 2,
  complete = 3
}

export function enumValues(e: object): any[]
{
  const mas = Object.values(e);
  return mas.splice(mas.length / 2, mas.length);
}
