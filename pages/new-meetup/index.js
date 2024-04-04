import NewMeetupForm from "../../components/meetups/NewMeetupForm"
const MeetUp=()=>{
    async function submitHandler(data){
       const result=await fetch('/api/new-meetup',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
       })
       const response=await result.json()
       console.log(response,'heeloo')
    }

    return <><NewMeetupForm onAddMeetup={submitHandler}/>
    </>
}

export default MeetUp