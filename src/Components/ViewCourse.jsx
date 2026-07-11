import React, { useState } from 'react'

const ViewCourse = () => {

    const [data, changeData] = useState(
        [
            {
                id: 1,
                course_name: "MERN Stack Bootcamp",
                duration: "8 Days",
                fee: 15000,
                mode: "Offline",
                trainer: "Anish",
                created_at: "2026-07-11T13:59:49"
            },
            {
                id: 2,
                course_name: "JAVA Full Stack Bootcamp",
                duration: "7 Days",
                fee: 15000,
                mode: "Online",
                trainer: "Manoj",
                created_at: "2026-07-12T10:30:15"
            }
        ]
    )

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2 className="text-center my-4">View Courses</h2>

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">

                                <thead className="table-dark">
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Duration</th>
                                        <th>Fee</th>
                                        <th>Mode</th>
                                        <th>Trainer</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        data.map(
                                            (value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{value.course_name}</td>
                                                        <td>{value.duration}</td>
                                                        <td>₹{value.fee}</td>
                                                        <td>{value.mode}</td>
                                                        <td>{value.trainer}</td>
                                                        <td>{value.created_at}</td>
                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCourse