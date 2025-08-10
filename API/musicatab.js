import { conection } from "./connection.js";

export async function tabelamusicas(){
    const comando = "SELECT * FROM tb_musicas"
    const [registros] = await conection.query(comando)
    return registros;
}


export async function inserirMusica(novaMusica){
    const comando = "insert into tb_musicas (titulo, artista, album, genero, duracao, ano_lancamento, classificacao) values(?, ?, ?, ?, ?, ?, ?);"

    const [info] = await conection.query(comando, [
        novaMusica.titulo,
        novaMusica.artista,
        novaMusica.album,
        novaMusica.genero,
        novaMusica.duracao,
        novaMusica.ano_lancamento,
        novaMusica.classificacao
    ])

    return info.insertId;
}