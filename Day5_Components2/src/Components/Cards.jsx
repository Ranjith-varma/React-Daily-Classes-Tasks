import StudentData from "../StudentData";

export function Cards(){
    return(
        <>
        <div className="container">
            {StudentData.students.map((student)=>{
                return(
                    <main className="child">
                        <div className="name_section">
                            <h3>{student.id}</h3>
                            <hr />
                            <h2>{student.name}</h2>
                            <hr />
                            <h3>{student.age}</h3>
                            <hr />
                        </div>
                        <div className="email_section">
                            <h3>{student.email}</h3>
                            <hr />
                            <h3>{student.batch}</h3>
                        </div>
                    </main>
                )
            })}
        </div>
        </>
    )
}