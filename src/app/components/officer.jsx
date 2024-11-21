import '../styles/officers.css'

export default function Officer({ Img, Name, Title, id }) {
  return(
    <div key={id} className='officer'>
      <img alt='OfficerImage' className='officerImage' src={Img}/>
      <div className='officerText'>
        <h2>{Name}</h2>
        <p>{Title}</p>
      </div>
    </div>
  )
}