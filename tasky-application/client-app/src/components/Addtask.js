import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddTask({ alert, showAlert }) {

    const navigate = useNavigate();

    const [newtask, setNewtask] = useState({
        taskname: "",
        deadline: "",
    })

    const { taskname, deadline } = newtask;

    const onChangeHandler = (e) => {
        setNewtask({
            ...newtask,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmitHandler(e) {
        try {
            e.preventDefault();
            console.log(newtask);
            let token = JSON.parse(localStorage.getItem("token")).token
            let res = await axios.post("/api/task", newtask, {
                headers: {
                    "auth-token": token
                }
            });
            console.log(res.data);
            // showAlert({
            //     type: "success",
            //     msg: res.data.success
            // });
            navigate("/dashboard");
        } catch (error) {
            if (error.response.data.errors) {
                let errorString = "";
                error.response.data.errors.forEach(element => {
                    errorString += element.msg;
                });
                // showAlert({
                //     type: "error",
                //     msg: errorString
                // });
                // } else {
                //     showAlert({
                //         type: "error",
                //         msg: error.response.data.error
                //     });
            }
        }
    }

    return (
        <>
            <div className="addform">            {/* {alert !== null && <h3 className={`alert-${alert.type}`}>{alert.msg}</h3>} */}
            <center>
            <h1 style={{fontFamily:"cursive"}}>Add Task</h1>
                   
                <form onSubmit={onSubmitHandler}>

                    <input type="text" id="taskname" name="taskname" placeholder="Task Name" value={taskname} onChange={onChangeHandler} required /><br />

                    <input type="datetime-local" id="deadline" name="deadline" placeholder="DeadLine" value={deadline} onChange={onChangeHandler} required /><br /><br />

                    <input type="submit" value="Add Task" />
                </form>
                <p style={{fontFamily:"cursive",fontSize:'20px',color:'orange'}}>Deadline: Morethan 30 min and Lessthan 30 Days</p>
                </center>
                </div>

        </>
    )
}

export default AddTask;