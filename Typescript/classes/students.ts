class Student 
{
    name: string;
    grade: number;
    gpa: number;

    constructor(name: string, grade: number, gpa: number)
    {
        this.name = name;
        this.grade = grade;
        this.gpa = gpa;
    }

    student_info_internal(): void {
        console.log(this.name+"is a student of grade "+this.grade+" and has a gpa of "+this.gpa
            +"."
        );
    }

    get_gpa(): number {
        return this.gpa;
    }
    set_gpa(new_gpa: number): void {
        this.gpa = new_gpa;
    }
    
}

function student_info(thisStudent: Student): void {
    console.log(thisStudent.name+"is a student of grade "+thisStudent.grade+" and has a gpa of "+thisStudent.gpa
        +"."
    );
}

let person1 = new Student("Artur", 12, 3.5);
let person2 = new Student("Allan", 11, 3.8);
let person3 = new Student("Marko", 10, 3.9);

person1.student_info_internal();
student_info(person2);
console.log(person3);

console.log(person2.get_gpa());
person2.set_gpa(3.9);
person2.student_info_internal();