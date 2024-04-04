const MeetupDetail=({image,heading,address,description})=>{
    return <>
    <img src={image} alt=''/>
    <h1>{heading}</h1>
    <address>
        {address}
    </address>
    <p>{description}</p>
    </>
}
export default MeetupDetail