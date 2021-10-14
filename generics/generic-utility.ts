interface CourseGoal {
    title: string;
    descrip: string;
    completed: Date;
}

// Partial allows for optional properties
function createCourseGoal(title: string, descrip: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.descrip = descrip;
    courseGoal.completed = date;
    return courseGoal as CourseGoal;
}

// Readonly does not allow changes to be made to properties
const names: Readonly<string[]> = ['josh', 'jess', 'bailey'];
// names.push('harlow');