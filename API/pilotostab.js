import { conection } from "./connection.js";

export async function tabelapilotos(){
    const comando = "SELECT * FROM tb_pilotoF1"
    const [registros] = await conection.query(comando)
    return registros;
}


export async function inserirPiloto(novoPiloto){
    const comando = "insert into tb_pilotoF1 (nm_piloto, cr_primeiro_titulo, dt_primeiro_titulo, md_ganhos, nc_nacionalidade, eq_primeiro_titulo) values(?, ?, ?, ?, ?, ?);"

    const [info] = await conection.query(comando, [
        novoPiloto.nm_piloto,
        novoPiloto.cr_primeiro_titulo,
        novoPiloto.dt_primeiro_titulo,
        novoPiloto.md_ganhos,
        novoPiloto.nc_nacionalidade,
        novoPiloto.eq_primeiro_titulo
    ])

    return info.insertId;
}