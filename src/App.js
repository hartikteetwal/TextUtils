import React,{useState} from 'react'
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";


function App() {
    const [mode, setmode] = useState('light')
    const [alert, setalert] = useState()

  const showAlert = (message,type)=>{
    setalert({msg:message,type:type})
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor = "#33383d"
      showAlert("dark mode has been enabled","success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled","success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
    <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
    </>
  );
}
export default App;
