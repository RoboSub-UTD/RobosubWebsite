import React,{useState, useEffect} from 'react'
import '../styles/officers.css'
import Officer from '../../univeralComponents/officer'
// import officersInfo from '../Officers-ProjectInfo/OfficersInfo';
import { db } from '../../Firebase';
import { getDocs,collection } from 'firebase/firestore';
import loadingImg from '../../universalImages/loading-gif.gif'

function Officers(){
    const [OfficersArr, setOfficersArr] = useState([]);
    const [isLoading,setIsLoading] = useState('')
    useEffect(() => {
        const fetchAllOfficers = async() => {
            setIsLoading("Fetching Officers")
            const querySnapshot = await getDocs(collection(db,"officers"));
            let taskArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            taskArray = taskArray.sort((a, b) => {
                if (a.title === 'President') return -1;
                if (b.title === 'President') return 1;
                if (a.title === 'Vice President') return -1;
                if (b.title === 'Vice President') return 1;
                return 0; // Keep the rest in the original order
            });
            setOfficersArr(taskArray)

            setIsLoading("");
        }
        fetchAllOfficers();
    },[])
    return(
        <div id="Officers" className='officers'>
            <h1>Meet the Crew</h1>
            {isLoading && <img style={{width: "30px"}} alt="Loading.." src={loadingImg}/>}
            <div className='officersBox'>
                {/* {officersInfo.map((officer)=>(
                <Officer
                 Img={officer.img} 
                 Name={officer.name}
                 Title={officer.title}
                 id={officer.id}
                 key={officer.id}
                />))} */}
                {OfficersArr.map(off => (
                    <Officer key={off.id} 
                        Img={off.imageURL} 
                        Name={off.name} 
                        Title={off.title} 
                        id={off.id}/>
                ))}
            </div>               
        </div>
    )
}

export default Officers;