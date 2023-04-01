import React from 'react'





const Home = () => {

  const doApi = async (searchQ) =>{
    let {data} = await axios.get(`https://www.omdbapi.com/?s=${searchQ}&apikey=f2ef2741`)
    console.log(data.Search);
  }
  useEffect(()=>{
    doApi("fast")
  })
  return (
    <div>     
    


   </div> 
  )
}

export default Home

// style={{backgroundImage:`url("https://i.ytimg.com/vi/oeknLqxExk4/maxresdefault.jpg")`}}