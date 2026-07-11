import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewCourse = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("https://host-demo-app.onrender.com/api/courses")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <div className="container">

                <h1 className="text-center mt-4">
                    View All Courses
                </h1>

                <div className="row mt-4">

                    {
                        data.map((value, index) => {

                            return (

                                <div
                                    className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                                    key={index}
                                >

                                    <div className="card shadow h-100">

                                        <div className="card-body">

                                            <h5 className="card-title">
                                                {value.course_name}
                                            </h5>

                                            <p className="card-text">
                                                <strong>Duration:</strong> {value.duration}
                                                <br />
                                                <strong>Fee:</strong> ₹{value.fee}
                                                <br />
                                                <strong>Mode:</strong> {value.mode}
                                                <br />
                                                <strong>Trainer:</strong> {value.trainer}
                                                <br />
                                                <strong>Created At:</strong> {value.created_at}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            )

                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default ViewCourse