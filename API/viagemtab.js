import { conection } from "./connection.js";

export async function tabelaviagem(){
    const comando = "SELECT * FROM tb_viage"
    const [registros] = await conection.query(comando)
    return registros;
}


export async function inserirViagem(novaViagem){
    const comando = "insert into tb_viage (lc_lugar, ts_transporte, tm_tempo, ms_moeda, hg_hospedagem) values(?, ?, ?, ?, ?)"

    const [info] = await conection.query(comando, [
        novaViagem.lc_lugar,
        novaViagem.ts_transporte,
        novaViagem.tm_tempo,
        novaViagem.ms_moeda,
        novaViagem.hg_hospedagem
    ])

    return info.insertId;
}