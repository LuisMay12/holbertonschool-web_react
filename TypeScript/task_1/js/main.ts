// 1. Let's build a Teacher interface

// Interface with readonly names, optional yearsOfExperience, and “open” properties
interface Teacher {
  readonly firstName: string;        // set only at initialization
  readonly lastName: string;         // set only at initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;        // optional
  location: string;
  [propName: string]: any;
}

// Example from the task
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // extra property allowed by the index signature
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

// Quick check
console.log(printTeacher('John', 'Doe'));

// Interface that describes the *instance* shape of StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface that describes the *constructor* of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
