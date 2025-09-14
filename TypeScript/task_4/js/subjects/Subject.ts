// Base Subject class inside the same namespace
namespace Subjects {
  export class Subject {
    protected teacher?: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
