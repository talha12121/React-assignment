const list = [
 {
    name: "Hello World 1"
},
 {
    name: "Hello World 2"
},
 {
    name: "Hello World 3"
}
]
 function Fourth(){
    const print = list.map((item)=>{
        return(
        <ul>
            <li>{item.name}</li>
        </ul>
    )
    }
    )
    return (
        <div>{print}</div>
    )
 }
 export default Fourth;