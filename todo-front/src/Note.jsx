// * =====================================================


//  * Topic: Destructuring, Props, Rest Operator, 

//  *        Conditional Rendering & List Rendering

//  * =====================================================

 



// ====================== 1. BASIC OBJECT DESTRUCTURING ======================



const student = {

    id: 101,

    name: "Aisha Khan",

    age: 16,

    grade: "A",

    subjects: ["Math", "Physics", "Chemistry"],

    address: { city: "Lahore", country: "Pakistan" }

};



// Basic Destructuring: Pulling out values from an object into variables

const { name, grade, age } = student;



// Now you can use:

 // name, grade, age directly



// ====================== 2. RENAMING + DEFAULT VALUES (Very Important Section) ======================



/*

RENAMING IN DESTRUCTURING - Detailed Explanation:



Syntax:   originalKey: newVariableName = defaultValue

Why do we rename?

- Sometimes the key name in the object is not perfect for your code.

- You might already have a variable with the same name.

- You want a more meaningful or shorter name.

- It helps avoid bugs from name conflicts.



Default Value:

- If the property doesn't exist or is undefined, use this value instead.

*/



const { 

    name: studentName,           // "name" from object becomes variable "studentName"

    grade: finalGrade,           // "grade" becomes "finalGrade"

    age: studentAge = 15,        // "age" becomes "studentAge". If no age, use 15

    subjects: studentSubjects = []   // "subjects" becomes "studentSubjects". If no subjects, use empty array []

} = student;



/*

Explanation of this line: subjects: studentSubjects = []



- "subjects"     → This is the actual property name in the student object.

- "studentSubjects" → This is the new variable name we want to use.

- "= []"         → Default value. If the student has no "subjects" property, 

                   studentSubjects will be an empty array instead of undefined.



This prevents errors when you try to do studentSubjects.map() later.

*/



const { address: { city: studentCity } } = student;   // Deep destructuring



// ====================== 3. ARRAY DESTRUCTURING + REST OPERATOR ======================



const subjectsArray = ["Math", "Physics", "Chemistry", "Biology", "English"];



// Array Destructuring

const [firstSubject, secondSubject, ...remainingSubjects] = subjectsArray;



// firstSubject = "Math"

// secondSubject = "Physics"

// remainingSubjects = ["Chemistry", "Biology", "English"]



// The ... (rest) collects everything left into an array.



// ====================== 4. PROPS & DESTRUCTURING IN REACT ======================



/*

Props = Data passed from parent component to child component.

Best Practice: Destructure props directly in the function parameters.

*/



function StudentCard({  name, 

    grade, 

    age = 15,                    // Default value if age is not passed

    studentId: id                // Renaming: prop named "studentId" becomes variable "id"

}) {

    return (

        <div className="student-card">

            <h2>{name}</h2>

            <p>Grade: {grade}</p>

            <p>Age: {age}</p>

            <p>ID: {id}</p>

        </div>

    );

}



// ====================== 5. REST OPERATOR IN PROPS ======================



/*

Rest Operator (...) in Props:



It collects **all the props that were not destructured** into one object.

This is extremely useful for passing extra attributes (onClick, disabled, style, etc.)

*/



function Button({ 

    children, 

    variant = "primary", 

    ...restProps     // ← Everything else goes here

}) {

    return (

        <button 

            className={`btn btn-${variant}`}

            {...restProps}        // Spreads all remaining props

        >

            {children}

        </button>

    );

}



// Usage Example:

// <Button variant="success" onClick={handleSubmit} disabled={false} type="submit">

//     Submit

// </Button>



// ====================== 6. CONDITIONAL RENDERING ======================



function StudentStatus({ grade, attendance = 80 }) {

    return (

        <div>

            <h3>Student Status</h3>

            

            {/* 1. Ternary Operator (if-else in one line) */}

            <p>

                Performance: {grade === "A" ? "Excellent" : 

                             grade === "B" ? "Good" : "Needs Improvement"}

            </p>



            {/* 2. Logical && Operator - Most common way */}

            {attendance < 75 && (

                <p className="warning">⚠ Low Attendance - Student is at risk!</p>

            )}



            {/* 3. Simple conditions */}

            {grade === "A" && <span className="badge gold">🏆 Top Performer</span>}

            {grade === "F" && <span className="badge red">Failing Student</span>}

        </div>

    );

}



// ====================== 7. LIST RENDERING (All Concepts Combined) ======================



const students = [

    { id: 1, name: "Aisha Khan", grade: "A", age: 16, attendance: 92 },

    { id: 2, name: "Bilal Ahmed", grade: "B", age: 15, attendance: 68 },

    { id: 3, name: "Fatima Noor", grade: "A", age: 17, attendance: 95 },

    { id: 4, name: "Usman Ali",   grade: "C", age: 16, attendance: 55 }

];



function StudentList({ students = [] }) {

    if (students.length === 0) {

        return <p>No students found. Add new students to get started.</p>;

    }



    return (

        <div className="student-list">

            <h2>Total Students: {students.length}</h2>

            

            {students.map((student) => (

                <div key={student.id}>

                    <StudentCard 

                        name={student.name}

                        grade={student.grade}

                        age={student.age}

                        studentId={student.id}     // This becomes "id" inside StudentCard

                    />

                    <StudentStatus 

                        grade={student.grade} 

                        attendance={student.attendance} 

                    />

                </div>

            ))}

        </div>

    );

}



// ====================== ADVANCED EXAMPLE - EVERYTHING TOGETHER ======================



function AdvancedStudentCard({ 

    name, 

    grade, 

    age = 15, 

    isActive = true, 

    ...otherProps        // Rest collects any extra props

}) {

    return (

        <div className={`card ${isActive ? 'active' : 'inactive'}`} {...otherProps}>

            <h3>{name}</h3>

            {grade === "A" && <span>🏆</span>}

            <p>Age: {age} | Grade: {grade}</p>

        </div>

    );

}



// ====================== SUMMARY & BEST PRACTICES ======================



/*

PROGRESSIVE LEARNING SUMMARY:



1. Destructuring          → Extract data from objects/arrays cleanly

2. Renaming + Defaults    → Solve naming problems and missing data

3. Props + Destructuring  → Pass data into React components

4. Rest Operator (...)    → Make components flexible and reusable

5. Conditional Rendering  → Show different UI based on data

6. List Rendering         → Display array of data using .map()



Key Rules to Remember:

- Always destructure props at the top of your component

- Use renaming when there is a name conflict

- Always give default values (especially arrays and objects)

- Use ...restProps for extra flexibility

- Always provide a unique "key" when using .map()

- Prefer && and ternary for conditional rendering



Practice Task: 

Create a new component called "TeacherDashboard" that uses all these concepts.

*/



export { StudentCard, Button, StudentStatus, StudentList, AdvancedStudentCard };