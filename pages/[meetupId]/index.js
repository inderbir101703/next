import MeetupDetail from "../../components/meetups/meetupdetail"

const MeetupDetails=()=>{
    return <>
    <MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/5/56/Catedral_da_S%C3%A9_em_S%C3%A3o_Paulo.jpg'
   heading="a first meetup"
    addres="real address"
   description="description"/></>
}
export async function getStaticProps(context){
    const id=context.params.meetupId
return {
    props:{
        meetupData:{
            id:id,
            image:'https://upload.wikimedia.org/wikipedia/commons/5/56/Catedral_da_S%C3%A9_em_S%C3%A3o_Paulo.jpg',
            heading:"a first meetup",
             addres:"real address",
            description:"description"
        }
    }
}
}
export async function getStaticPaths(){
    return {
        fallback:false,
        paths:[{
            params:{meetupId:'m1'}
        },{
            params:{meetupId:'m2'}
        }]
    }
}
export default MeetupDetails