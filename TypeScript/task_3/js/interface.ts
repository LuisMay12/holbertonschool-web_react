// Types for rows used by the CRUD library

export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
