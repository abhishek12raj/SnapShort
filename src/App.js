import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';


const App = () => {
  const [image,setImage]=useState([])
  const [inp,setInp]=useState()
  const [res,setRes]= useState()
  const [Show,setShow]=useState(false)
  const [btnshow,setBtnshow]=useState(1)
  const countArray =[1,2,3,4,5,6,7,8,9,10]
  const searchresult=((e)=>{
setInp(e.target.value);
  })
  useEffect(()=>{
    setImage([])
    // getimage();
  },[btnshow]);
  const getimage=()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=${btnshow}&per_page=75&query=${inp}&client_id=oW9GGbkMpjjJQxZe4ousXyYm9vL2UDUzlMGocY0v_nA`).then((response)=>{
      setImage(response.data.results)
      console.log(response)
      setRes(<h3>Results for {inp}.....</h3>)
      setShow(  <div>
       {countArray.map(countItem=>{
        return(
          <button className='sl-btn' onClick={()=>setBtnshow({countItem})}>{countItem}</button>
        )
       })} 
      </div>);
      })
  }
  
  return (
    <div>
      
    <div className='top'>
      <input onChange={searchresult} className='searchbox' type='text' value={inp}/>
      <br/>
      <button  onClick={getimage} className='btn'>Get Image</button>
     
      </div>
      <div className='heading'> {res}</div>
      <div className='container-div'>
      
            {
        image?.map((item,index)=>{
          return (
            <>
            
       <img className='pic' src={item?.urls.small} alt='image'/> 
    
       </>
          )
        })
      }
      </div>
    {Show}
    </div>

  )
}

export default App
