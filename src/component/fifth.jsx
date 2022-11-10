
function Fifth(){
    const complex = [
        {
        company: 'XYZ', 
        jobs: ['Javascript', 'React']
    }, 
        {
        company: 'ABC', 
        jobs: ['AngularJs' ,'Ionic']
    }
    ]
    const listItems = complex.map((element) => {
            return (
                <ol type="disc">
                    <li>
                        {element.company}
                    </li>
                    <li>{element.jobs[0]}</li>
                    <li>{element.jobs[1]}</li>
                </ol>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}
export default Fifth;