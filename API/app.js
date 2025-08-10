import * as futebol from "./futeboltab.js";
import * as hospital from "./hospitaltab.js";
import * as games from "./gamestab.js";
import * as material from "./materialtab.js";
import * as musicas from "./musicatab.js";
import * as pilotos from "./pilotostab.js";
import * as viagem from "./viagemtab.js";
import * as glyptodon from "./glyptodontab.js";
import * as megatherium from "./megatheriumtab.js";
import express from "express";

const api = express();
api.use(express.json());


api.get('/tabela/futebol', async (req, resp) => {
    let tabela = await futebol.tabelafutebol();
    resp.send(tabela);
})
api.post('/tabela/inserirfutebol', async (req, resp) => {
  let novoJogo = req.body;
  let id = await futebol.inserirJogo(novoJogo);
  resp.send({ novoId: id });
})


api.get('/tabela/games', async (req,resp) =>{
    let tabela = await games.tabelagame();
    resp.send(tabela);
})
api.post('/tabela/inserirgame', async (req,resp) => {
    let novoGame = req.body;
    let id = await games.inserirGame(novoGame);
    resp.send({ novoId: id });
})


api.get('/tabela/hospital', async (req,resp) => {
    let tabela = await hospital.tabelahospital();
    resp.send(tabela)
})
api.post('/tabela/inserirpaciente', async (req,resp) => {
    let novoPaciente = req.body;
    let id = await hospital.inserirPaciente(novoPaciente);
    resp.send({novoId : id});
})


api.get('/tabela/material', async (req,resp) => {
    let tabela = await material.tabelamaterial();
    resp.send(tabela);
})
api.post('/tabela/inserirmaterial', async (req,resp) => {
    let NovoMaterial = req.body;
    let id = await material.inserirMaterial(NovoMaterial);
    resp.send({novoId : id});
})


api.get('/tabela/musica', async (req,resp) => {
    let tabela = await musicas.tabelamusicas();
    resp.send(tabela);
})
api.post('/tabela/inserirmusica', async (req,resp) => {
    let NovaMusica = req.body;
    let id = await musicas.inserirMusica(NovaMusica);
    resp.send({NovoId : id});
})


api.get('/tabela/pilotos', async (req,resp) => {
    let tabela = await pilotos.tabelapilotos();
    resp.send(tabela);
})
api.post('/tabela/inserirpiloto', async (req,resp) => {
    let NovoPiloto = req.body;
    let id = await pilotos.inserirPiloto(NovoPiloto);
    resp.send({NovoId : id});
})


api.get('/tabela/viagem', async (req,resp) => {
    let tabela = await viagem.tabelaviagem();
    resp.send(tabela);
})
api.post('/tabela/novaviagem', async (req,resp) => {
    let NovaViagem = req.body;
    let id = await viagem.inserirViagem(NovaViagem);
    resp.send({NovoId: id});
})


api.get('/tabela/glyptodon', async (req, resp) => {
    let tabela = await glyptodon.tabelaglyptodon();
    resp.send(tabela);
})
api.post('/tabela/inserirglyptodon', async (req,resp) => {
    let NovoGlyptodon = req.body;
    let id = await glyptodon.inserirGlyptodon(NovoGlyptodon);
    resp.send({NovoId: id});
})


api.get('/tabela/megatherium', async (req,resp) => {
    let tabela = await megatherium.tabelamegatherium();
    resp.send(tabela)
})
api.post('/tabela/novomegatherium', async (req,resp) => {
    let NovoMegatherium = req.body;
    let id = await megatherium.inserirMegatherium(NovoMegatherium);
    resp.send({NovoId: id});
})



api.listen(5010, () => console.log("Subiu"))