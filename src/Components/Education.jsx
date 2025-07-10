const Education = () => {
    return (
        <div className="flex flex-col items-center gap-0 py-[2rem] bg-[#eeeaff]">
            <p className="header">Education</p>

            <div className="subheader">
                <p><a className="font-bold">Current GPA:</a> 3.91/4.00</p>
                <p><a className="font-bold">Honors:</a> Dean's List, Faulty Honors</p>
            </div>

            <div className="section">
                <div className="edu-card-grid">
                    <p className="edu-card">Data Structures & Algorithms</p>
                    <p className="edu-card">Design & Analysis of Algorithms</p>
                    <p className="edu-card">Computer Organization & Programming</p>
                    <p className="edu-card">Objects & Design</p>
                    <p className="edu-card">Multivariable Calculus</p>
                    <p className="edu-card">Differential Equations</p>
                    <p className="edu-card">Linear Algebra</p>
                </div>
            </div>
        </div>
    )
}

export default Education;