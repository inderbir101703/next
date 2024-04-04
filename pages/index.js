import { useEffect, useState } from 'react'
import MeetUpList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS=[{
    id:'m1',
    title:'First Meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/5/56/Catedral_da_S%C3%A9_em_S%C3%A3o_Paulo.jpg',
    address:'chehtra road ,amritsar ,punajb',
description:'gathering for all the vehle log'
},{
   id:'m2',
   title:'Second Meetup',
   image:'https://upload.wikimedia.org/wikipedia/commons/5/56/Catedral_da_S%C3%A9_em_S%C3%A3o_Paulo.jpg',
   address:'jandiala guru, amritsar , p[unajba',
   description:'maha vehele log gathering' 
}]
const HomePage=(props)=>{

    // const [meetups,setMeetups]=useState([])
    // useEffect(()=>{
    //     setMeetups(DUMMY_MEETUPS)
    // },[])
    return <><MeetUpList meetups={props.meetups}/></>
}

// export async function getStaticProps(){
//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         },
//         revalidate:1
//     }
// }
export async function getServerSideProps(context){
    const req=context.req
    const res=context.res
    return {
        props:{meetups:DUMMY_MEETUPS}
    }
}
export default HomePage