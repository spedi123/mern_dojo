class Person {
    constructor(firstName, lastName, wallet) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wallet = wallet;
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    sendMoney(amount, targetPerson) {
        this.amount = amount;
        targetPerson.receiveMoney(amount);
    }

    receiveMoney(amount) {
        this.wallet += amount;
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, yearsTeachingExperience) {
        super(firstName, lastName);
        this.yearsTeachingExperience = yearsTeachingExperience;
    }
}

class Student extends Person{
    constructor(firstName, lastName, hobbies = []) {
        super(firstName, lastName);
        this.hobbies = hobbies;
    }
}

class Lecture {
    constructor(topic, zoomLink, teacher, students = []) {
      this.topic = topic;
      this.zoomLink = zoomLink;
      this.teacher = teacher;
      this.students = students;
    }
  
    createAttendanceList() {
      const fullNames = [];
  
      for (const student of this.students) {
        fullNames.push(student.fullName());
      }
  
      return fullNames;
    }
  }

const peter = new Teacher('Peter', 'An', 3);
console.log(peter.fullName());

const esther = new Student('esther', 'Lee', 'fishing');
console.log(esther.fullName());

const oopLecture = new Lecture ('OOP Intro', 'google.com', peter, [esther, new Student('Tim', 'Song')]);
console.log(oopLecture);

const rileyLecture = new Lecture ('Baby Intro', 'naver.com', new Teacher('Riley', 'An', 5), [esther]);

console.log(oopLecture.createAttendanceList()) ;
