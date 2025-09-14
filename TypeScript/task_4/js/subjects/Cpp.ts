// Cpp subject + declaration merging (experienceTeachingC)
namespace Subjects {
  // Declaration merging: add an optional field to Teacher
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
