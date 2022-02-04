import axios from "axios";

const config={
    headers:{
        "authorization":"Bearer"+ " " +localStorage.getItem("token")
    }
}

export function addNote(obj)
{
    let response=axios.post("http://localhost:3000/createnote",obj,config)
    return response
}
export function getNote()
{
    let response=axios.get("http://localhost:3000/getnotes",config)
    return response;
}
export function delNote(noteid)
{
    let a = noteid;
    console.log("noteid",noteid)
    let response=axios.delete(`http://localhost:3000/deletenotes/${a}`,config)
    return response;
}
