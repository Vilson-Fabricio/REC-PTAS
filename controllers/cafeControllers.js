import { CafeModel } from "../models/cafe.js";

const addCafe = async (req, res) => {
    const { nome, localidade, fabricante } = req.body;

    if (!nome || !localidade || !fabricante) {
        return res.json({
            erro: true,
            mensagem: "Todos os campos são obrigatórios"
        });
    }

    try {
        const cafe = new CafeModel({ nome, localidade, fabricante });
        await cafe.save();
        res.json(cafe)
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
};

const busCafe = async () => {
    try {
        const cafe = await CafeModel.find()
        res.json({
            erro: false,
            cafe
        })
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
}
const listCafe = async (req, res) => {
    try {
        const cafe = await CafeModel.find();
        res.json({
            erro: false,
            legos,
        });
    } catch (error) {
        res.json({
            erro: true,
            mensagem: "nao achou",
        });
    }

}
const atuCafe = async (req, res) => {
    const { id } = req.params;


    const futuro = await CafeModel.findById(id);

    if(futuro) {

        const { nome, localidade, fabricante} = req.body;

        futuro.nome
        futuro.localidade 
        futuro.fabricante

        await cafeatual.save();

        res.json({
            erro: false,
            mensagem: "atalizaçao feita",
            cafe: futuro
        });
    } else {

        res.json({
            erro: true,
            mensagem: "incompleta"
        });
    }
};
const delCafe =  async (req, res) => {
    const {id} = req.params;

    
        const destino = await CafeModel.findByIdAndDelete(id);

        if (destino) {  
            res.json({
                erro: false,
                mensagem: "deletado"
            });
        } else {
            res.json({
                erro: true,
                mensagem: "ocorreu um erro"
            });
        }
     
};





export { addCafe, busCafe, listCafe, atuCafe, delCafe };