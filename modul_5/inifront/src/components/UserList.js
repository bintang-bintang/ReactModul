import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
    const [pegawai, setUser] = useState([]);

    useEffect(() => {
        getPegawai();
    }, []);

    const getPegawai = async () => {
        const response = await axios.get("http://localhost:8000/pegawai");
        setUser(response.data);
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/pegawai/${id}`);
            getPegawai();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                 <Link
                    to={`add`}
                    className="button is-success">
                    Add New
                </Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>nip</th>
                            <th>nama</th>
                            <th>alamat</th>
                            <th>option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pegawai.map((pegawai, index) => (
                            <tr key={pegawai.id}>
                                <td>{index + 1}</td>
                                <td>{pegawai.nip}</td>
                                <td>{pegawai.nama}</td>
                                <td>{pegawai.alamat}</td>
                                <td>
                                    <Link
                                        to={`edit/${pegawai.id}`}
                                        className="button is-small is-info mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteUser(pegawai.id)}
                                        className="button is-small is-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;