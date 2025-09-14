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
