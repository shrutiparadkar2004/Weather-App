import axios from "axios"; 
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useEffect , useState } from "react";

function App() {

const apikey = "f56f24967aaf51182d1d4df628297c6d"  
const [inputCity,setInputCity] = useState("")
const [data,setData] = useState ({})

const getWetherDetails = (cityName) => {
  if (!cityName) return
  const apiURL ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" + apikey
  axios.get(apiURL).then((res)=>{
    console.log("response",res.data)
    setData(res.data)

  }).catch((err)=>{
    console.log("err",err)
  })
}

const handleChangeInput = (e) => {
   setInputCity(e.target.value)
}

const handleSearch = ()=>{
  getWetherDetails(inputCity)
}

useEffect(()=>{
    getWetherDetails("delhi")
}, {})


  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">~ Weather App ~</h1>

        <div className="d-grid gap-3 col-4 mt-4">
         <input type="text" className="form-control" onChange={handleChangeInput}/>
         <button className="btn btn-primary" type="button"
         onClick={handleSearch}
         > Search </button>
        </div>
      </div>

{Object.keys(data).length>0 &&

      <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded wetherResultBox">

       <img className="wetherIcon" 
       src="https://cdn-icons-png.flaticon.com/128/4064/4064276.png"/>

      <h5 className="weatherCity">
        {data?.name}
      </h5>
      <h6 className="weatherTemp">
      {((data?.main?.temp)-273.15).toFixed(2)}℃
      </h6>
      </div>
    </div>
} 

    </div>
  );
}

export default App;
