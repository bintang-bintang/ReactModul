import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [nip, setNIP] = useState("");
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State untuk menyimpan pesan kesalahan
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/pegawai", {
                nip,
                nama,
                alamat,
            });
            navigate("/");
        } 
        catch (error) {
            console.log(error); // Tambahkan ini untuk mencetak objek error
            setErrorMessage(error.response.data.message);
        }
        
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                {errorMessage && ( // Tampilkan pesan kesalahan jika ada
                    <div className="notification is-danger">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={saveUser}>
                    <div className="field">
                        <label className="label">NIP</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nip}
                                onChange={(e) => setNIP(e.target.value)}
                                placeholder="NIP"
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
                                placeholder="Nama"
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
                                placeholder="Alamat"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
