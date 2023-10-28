"use strict";
var StatusStudent;
(function (StatusStudent) {
    StatusStudent["enrollee"] = "enrollee";
    StatusStudent["student"] = "student";
    StatusStudent["graduate"] = "graduate";
    StatusStudent["bachelor"] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
class Person {
    name;
    // constructor(name: string, age: number);
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    name;
    static school = 'METHED';
    static count;
    id = Math.random().toString(32).substring(2, 6) +
        Date.now().toString().substring(9);
    status = StatusStudent.enrollee;
    #createAt = new Date();
    updateAt;
    // name: string;   можно удалить, т.к. добавили public в конструкторе
    course;
    age;
    _module = 0;
    constructor(name, courseOrAge, age) {
        super(name);
        this.name = name;
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
    changeUpdateDate() {
        this.updateAt = new Date();
    }
    get info() {
        return `${this.name} учится на курсе ${this.course}`;
    }
    set module(module) {
        this._module = module;
        this.changeUpdateDate();
    }
    changeStatus(status) {
        this.status = status;
        this.changeUpdateDate();
    }
    changeInfo(courseOrModule, module) {
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
    static createStudents(list, course) {
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
