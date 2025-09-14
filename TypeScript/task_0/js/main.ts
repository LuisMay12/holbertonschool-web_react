// 0. Creating an interface for a student

// Interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'San Francisco',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Paris',
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render table with firstName + location
function renderTable(students: readonly Student[]): void {
  const table: HTMLTableElement = document.createElement('table');
  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  students.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    const locationCell: HTMLTableCellElement = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.append(firstNameCell, locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) {
    body.appendChild(table);
  }
}

// Ensure DOM is ready before appending
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => renderTable(studentsList));
} else {
  renderTable(studentsList);
}
