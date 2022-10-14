import React from 'react'

function Dashbord() {
    return (<>
        <center>
            <h2 style={{ display: "inline" }}>Dashboard</h2><button>Add Task</button>
            <table id="dashboard" >

                <thead >
                    <tr>
                        <th>Sno</th>
                        <th>Task</th>
                        <th>Reminders</th>
                        <th>Edit/Delete</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                        <td>rem1 rem2 rem3</td>
                        <td><button>Edit</button><button>Delete</button></td>

                    </tr>
                    <tr>
                        <td>February</td>
                        <td>$80</td>
                    </tr>
                </tbody>
            </table>
        </center>

    </>
    )
}

export default Dashbord