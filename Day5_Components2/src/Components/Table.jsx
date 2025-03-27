import StudentData from "../StudentData";
console.log(StudentData)

export const Table = ()=>{
    return(
        <>
        <h1>Student Data Table</h1>
        <table border={1}  cellSpacing={0}>
            <thead>
                <tr>
                    {Object.keys(StudentData.students[0]).map((headings)=>{
                        return(
                            <th key={headings}>{headings[0].toUpperCase() + headings.slice(1,)}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
               
                    {StudentData.students.map((data)=>{
                        return(
                           <tr>
                             <td>{data.id}</td>
                             <td>{data.name}</td>
                             <td>{data.age}</td>
                             <td>{data.email}</td>
                             <td>{data.batch}</td>
                           </tr>
                        )
                    })}
               
            </tbody>
        </table>
        </>
    )
}