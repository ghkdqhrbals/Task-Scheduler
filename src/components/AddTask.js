
import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import axios from "axios";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    // const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [value, onChange] = useState(new Date());

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('plz add text')
            return
        }
        console.log(value)

        onAdd({ text, value, reminder })


        // axios.post('http://localhost:8080/users',
        //     {
        //         username: 'ghkdqhrbals1',
        //         password: 'secretes',
        //         full_name: 'aasdf',
        //         email: 'YES1@gmail.com'
        //     },
        //     {
        //         headers: {
        //             //'Access-Control-Allow-Origin': '*',
        //             'Content-type': 'application/json',
        //         }

        //     })
        //     .then((response) => { console.log(response.data); })
        //     .catch((response) => {
        //         console.log('Error!')
        //     });
        setText('')
        onChange(new Date())
        setReminder(false)
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label > Task</label>
                <input type='text' placeholder='Write your own task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            {/* <div className='form-control'>
                <label> Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div> */}
            <div className="center">
                <Calendar onChange={onChange} value={value} />
                <p style={{ flex: 1 }}>
                    {moment(value).format("YYYY년 MM월 DD일")}
                </p>
            </div>
            <div className='form-control form-control-check' style={{ marginTop: 30 }}>
                <label > Set reminder</label>
                <input type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type='submit' value='Save Task'
                className='btn btn-block' />
        </form >
    )
}

export default AddTask
