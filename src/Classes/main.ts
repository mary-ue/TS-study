enum StatusStudent {
  enrollee = 'enrollee',
  student = 'student',
  graduate = 'graduate',
  bachelor = 'bachelor',
}

class Person {
  // age?: number;
  constructor(name: string);
  // constructor(name: string, age: number);
  constructor(public readonly name: string) {

  }
}

class Student extends Person {
  static readonly school: string = 'METHED';
  static count: number;
  id: string = Math.random().toString(32).substring(2, 6) + 
                Date.now().toString().substring(9);
  status: StatusStudent = StatusStudent.enrollee;
  #createAt: Date = new Date();
  protected updateAt?: Date;
  // name: string;   можно удалить, т.к. добавили public в конструкторе
  course?: string;
  age?: number;
  _module?: number = 0;

  constructor(name: string);

  constructor(name: string, course: string);

  constructor(name: string, age: number);

  constructor(name: string, course: string,age: number);

  constructor(public readonly name: string, courseOrAge?: string | number, age?: number) {
    super(name);
    // this.name = name;   можно удалить, т.к. добавили public в конструкторе
    if (typeof courseOrAge === 'string') {
      this.course = courseOrAge;
      this.changeStatus(StatusStudent.student);
    }
    if (typeof courseOrAge === 'number') {
      this.age = courseOrAge;
    }

    if (age) {
      this.age = age;
    }

    Student.count++;
  }

  private changeUpdateDate(): void {
    this.updateAt = new Date();
  }

  get info(): string {
    return `${this.name} учится на курсе ${this.course}`;
  }

  set module(module: number) {
    this._module = module;
    this.changeUpdateDate();
  }

  changeStatus(status: StatusStudent): void {
    this.status = status;
    this.changeUpdateDate();
  }

  changeInfo(course: string): void;
  changeInfo(module: number): void;
  changeInfo(course: string, module: number): void;
  changeInfo(courseOrModule: string | number, module?: number): void {
    if (typeof courseOrModule === 'string') {
      this.course = courseOrModule;
    }
    if (typeof courseOrModule === 'number') {
      this.module = courseOrModule;
    }
    if (module) {
      this.module = module;
    }

    this.changeUpdateDate();
  }

  static createStudents(list: string[], course: string): Student[] {
    return list.map(name => new Student(name, course));
  }

  static {
    Student.count = 0;
  }
}

const students = Student.createStudents(['Иван', 'Алексей', 'Ринат'], 'React');
console.log('students: ', students);

// const student1: Student = new Student('Пётр');
// console.log('student1: ', student1);

// const student2: Student = new Student('Дмитрий', 'Frontend');
// console.log('student2: ', student2);

// const student3: Student = new Student('Артур', 18);
// console.log('student3: ', student3);

// const student4: Student = new Student('Геннадий', 'JS', 28);
// student4.changeInfo('TS', 3)
// console.log('student4: ', student4);


