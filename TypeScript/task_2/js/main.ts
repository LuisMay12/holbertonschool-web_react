// 5. Advanced types Part 1

// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Factory
type Employee = Director | Teacher;

function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// --- Example checks ---
const e1 = createEmployee(200);
const e2 = createEmployee(1000);
const e3 = createEmployee('$500');

console.log(e1.constructor.name); // Teacher
console.log(e2.constructor.name); // Director
console.log(e3.constructor.name); // Director


// 6. Creating functions specific to employees

// Type predicate: narrows Employee -> Director
function isDirector(employee: Employee): employee is Director {
  return employee instanceof Director;
}

// Executes the right work method based on type
function executeWork(employee: Employee): string {
  return isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
}

// --- Expected result ---
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
