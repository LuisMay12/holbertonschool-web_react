/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert row, capture generated ID
const newRowID: RowID = CRUD.insertRow(row);

// Update with age
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);
