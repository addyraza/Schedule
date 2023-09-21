import React, {useState} from 'react'
import './Cards.css'
import {BiSolidPencil} from 'react-icons/bi'
import {FaShuttleVan} from 'react-icons/fa'
import {AiFillCar} from 'react-icons/ai'

function Card(props) {

    const {data} = props

    const [edit, setEdit] = useState(false)

    const handleEdit = () => {
        setEdit(!edit)
    }

    const [isToggled, setIsToggled] = useState(false);
    const [isToggled2, setIsToggled2] = useState(false);
  
    const handleToggle = () => {
      setIsToggled(!isToggled); 
    };
  
    const toggle = ()=>{
      setIsToggled2(!isToggled2);
    }

  return (
    <>
    <div className="container">
        <div className='data'>
          <span key={i}> {data} </span> <div className="icon"> <BiSolidPencil values={edit} onClick={handleEdit}/> </div>
        </div>
        <hr />
        <div className="pick-up">
          PICKUP
        </div>
        <div className='col'>
        <div className="time">
          Arrival Time
          <select name="time" id="t">
            <option value="puck">Select Time</option>
            <option value="10:00AM">10:00AM</option>
            <option value="10:00AM">10:00AM</option>
            <option value="10:00AM">10:00AM</option>
            <option value="10:00AM">10:00AM</option>
          </select>
        </div>
        <div className='book'>
          <div className='travel'>

          <div>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
          Cancel Travel
          </div>
          <div className="cab">
            Mode(Shuttle) <FaShuttleVan/>
          </div>
        </div>
        </div>
        <div className="pick-up">
          DROP
        </div>
        <div className='col'>
        <div className="time">
          Departure Time
          <select name="time" id="t">
            <option value="puck">Select Time</option>
            <option value="10:00AM">10:00AM</option>
            <option value="10:00AM">10:00AM</option>
            <option value="10:00AM">10:00AM</option>
            <option value="10:00AM">10:00AM</option>
          </select>
        </div>
        <div className='book'>
          <div className='travel'>

          <div>
      <label className="switch">
        <input type="checkbox" checked={isToggled2} onChange={toggle} />
        <span className="slider round"></span>
      </label>
          </div>
          Cancel Travel
          </div>
          <div className="cab">
            Mode(Cab) <AiFillCar/>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Card