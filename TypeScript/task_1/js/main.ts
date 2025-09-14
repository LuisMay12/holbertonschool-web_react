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
