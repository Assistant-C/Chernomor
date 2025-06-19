import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img_1 from "./assets/IMG_20250610_161828_327.jpg"
import img_work_1 from "./assets/work1.png"
import img_work_2 from "./assets/work2.png"
import img_work_3 from "./assets/work3.png"
import img_work_4 from "./assets/work4.png"
import img_work_5 from "./assets/work5.png"


function App() {
  const [count, setCount] = useState(0)
  function showStats(){
    document.getElementById("stats").style.display="flex"
  }
  function showSet(){
    document.getElementById("settings").style.display="flex"
  }
  function showSaves(){
    document.getElementById("saves").style.display="flex"
  }
  function back(){
    document.getElementById("stats").style.display="none"
    document.getElementById("settings").style.display="none"
    document.getElementById("saves").style.display="none"
  }
  Swal.fire({
  title: "Повідомлення",
  text: "Сайт знаходиться в розробці",
  icon: "warning",
  confirmButtonColor: "#3085d6",
  confirmButtonText: "Виявити розуміння"
  }).then((result) => {
  });


  

  return (
    <>
     <div className="box">
      <div className="box_i1"></div>

        <div id='menu' onClick={back} className="info">TO MENU</div>


        <div id='stats' className="Stats">

          <div className="stats_i1">
                          <h1 className='hard'>HARD SKILLS</h1>
                <div className="skills1"></div>
                <div className="skills2"></div>
                <div className="skills3"></div>
                          <h1 className='soft'>SOFT SKILLS</h1>
                <div className="skills4"></div>
                <div className="skills5"></div>
                <div className="skills6"></div>



          </div>

          <div className="stats_i2">
            <h1 className='stats_h'>About</h1>
            <div className="stats_ii1">
              <p className='about'>
              I am Chornomorets Alexander, I am 16 years old. I wanted to do web design from an early age because I wanted to develop websites. I like motorcycles, in my free time I like to ride with a friend and see new and beautiful places. I am sociable, kind, and easy to get along with. I would like to achieve more in the field of web design and continue to do so. Thank you for your attention.
            </p>
            </div>
            <div className="stats_ii2">
              <img className='myFoto' src={img_1}/>
            </div>
            
             
          </div>
        </div>


        <div id='settings' className="Settings">
          <h1>in future updates</h1>
        </div>
        
        <div id='saves' className="Saves">
          <div className="saves_i">

            <div className="work_1">
            <img src={img_work_1} alt="" className="work_f_1" />
            </div>
            <div className="work_2">
            <img src={img_work_2} alt="" className="work_f_2" />
            </div>
            <div className="work_3">
            <img src={img_work_3} alt="" className="work_f_3" />
            </div>
            <div className="work_4">
            <img src={img_work_4} alt="" className="work_f_4" />
            </div>
            <div className="work_5">
            <img src={img_work_5} alt="" className="work_f_5" />
            </div>
            <div className="work_6">
              <h1>in progress</h1>
            </div>
          </div>


        </div>

      <div className="box_i2">

        <div onClick={showStats} className="stats"><h1>Stats</h1></div>

        <div  onClick={showSet}  className="settings"><h1>Settings</h1></div>
        
        <div onClick={showSaves} className="saves"><h1>Saves</h1></div>

      </div>
     </div>
    </>
  )
}

export default App
