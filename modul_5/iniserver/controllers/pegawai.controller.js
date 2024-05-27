const pegawaiModel = require(`../models/index`).pegawai

exports.addPegawai = async (request,response) =>{
    try {
        const {nip, nama, alamat} = request.body

        if (!nip || !nama || !alamat) {
            return response.status(400).json({
                success: false,
                message: "NIP, nama, dan alamat harus diisi."
            });
        }
        const duplicateNIP = await pegawaiModel.findOne({where : {nip: nip}})
        if (duplicateNIP) {
            return response.status(400).json({
                success: false,
                message: "NIP sudah terdaftar."
            });
        }
        
        let newPegawai = {
            nip,
            nama,
            alamat
        }

        await pegawaiModel.create(newPegawai)

        return response.json({
            success: true,
            data: newPegawai
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}


exports.getAllPegawai = async (request, response) => {
    try {

        // response.send("Hello")

        const all = await pegawaiModel.findAll()

        return response.json(all)
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        })
    }
}

exports.getOnePegawai = async (request, response) =>{
    try {
        const id = request.params.id
    
        const one = await pegawaiModel.findOne({where:{id:id}})
    
        return response.json(one)
        
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        })
    }

}

exports.deletePegawai = async (request, response) => {
    try {
        const id = request.params.id
    
        await pegawaiModel.destroy({where: {id : id}})

        return response.json({msg: "User deleted!"})
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        })
    }
}

exports.updatePegawai = async(req, res) =>{
    try {
        const id = req.params.id

        await pegawaiModel.update(req.body,{
            where:{
                id: id
            }
        });
        res.status(200).json({msg: "Pegawai Updated"});
    } catch (error) {
        console.log(error.message);
    }
}