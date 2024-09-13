import '../styles/officers.css'
function Officer({Img,Name,Title}){
    return(
    <div className='officer'>
        <img alt='OfficerImage' className='officerImage' src={Img}/>
        <div className='officerText'>
            <h2>{Name}</h2>
            <p>{Title}</p>
        </div>
    </div>
    )
}
export default Officer