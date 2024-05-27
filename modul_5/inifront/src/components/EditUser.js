import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const [nip, setNIP] = useState("");
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {   
        getUserById();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/pegawai/${id}`, {
                nip,
                nama,
                alamat
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:8000/pegawai/${id}`);
        setNIP(response.data.nip);
        setNama(response.data.nama);
        setAlamat(response.data.alamat);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <div className="field">
                        <label className="label">nip</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nip}
                                onChange={(e) => setNIP(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Alamat</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                                placeholder="Alamaat"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;