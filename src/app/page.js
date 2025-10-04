"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const convidadosIniciais = [
  { id: 1, nome: "Chay", genero: "feminino", acompanhantes: [] },
  { id: 50, nome: "TESTE", genero: "feminino", acompanhantes: [] },
  { id: 51, nome: "TESTE1", genero: "feminino", [
    { nome: "Seu Marido Antonio", genero: "masculino" },
    { nome: "Sua filha Lu", genero: "feminino" },
    { nome: "Seu/sua acompanhante", genero: "indefinido" }
  ]},
  { id: 2, nome: "Wilson", genero: "masculino", acompanhantes: [{ nome: "Sua Digníssima esposa Camila", genero: "feminino" }] },
  { id: 3, nome: "Bia", genero: "feminino", acompanhantes: [] },
  { id: 4, nome: "Tia Laura", genero: "feminino", acompanhantes: [
    { nome: "Seu Marido Antonio", genero: "masculino" },
    { nome: "Seu filho João Lucas", genero: "masculino" },
    { nome: "Seu filho Felipe", genero: "masculino" }
  ]},
  { id: 5, nome: "Evellyn", genero: "feminino", acompanhantes: [] },
  { id: 6, nome: "Cumpadre Dan", genero: "masculino", acompanhantes: [{ nome: "A Tia Lau", genero: "feminino" }] },
  { id: 7, nome: "Biumboo", genero: "feminino", acompanhantes: [] },
  { id: 8, nome: "Diu", genero: "feminino", acompanhantes: [{ nome: "Seu filho Davi", genero: "masculino" }] },
  { id: 9, nome: "(Rique)Henrique", genero: "masculino", acompanhantes: [] },
  { id: 10, nome: "Dany", genero: "feminino", acompanhantes: [{ nome: "Seu Namorado Léo", genero: "masculino" }] },
  { id: 11, nome: "Dona Ivonilde", genero: "feminino", acompanhantes: [{ nome: "Seu Marido José", genero: "masculino" }] },
  { id: 12, nome: "Betoo", genero: "masculino", acompanhantes: [] },
  { id: 13, nome: "Jam", genero: "feminino", acompanhantes: [
    { nome: "Larissa", genero: "feminino" },
    { nome: "Lavínia", genero: "feminino" }
  ]},
  { id: 14, nome: "Nick", genero: "feminino", acompanhantes: [
    { nome: "Seu marido Joel", genero: "masculino" },
    { nome: "Seu filho Miguel", genero: "masculino" },
    { nome: "Sua filha Isabella", genero: "feminino" }
  ]},
  { id: 15, nome: "Tia Nelma", genero: "feminino", acompanhantes: [{ nome: "Tio Vavado", genero: "masculino" }] },
  { id: 49, nome: "Cumpadre Robson", genero: "masculino", acompanhantes: [] },
  { id: 16, nome: "Manessa", genero: "feminino", acompanhantes: [] },
  { id: 17, nome: "André", genero: "masculino", acompanhantes: [
    { nome: "Sua Esposa Liliam", genero: "feminino" },
    { nome: "Sua Filha Isadora", genero: "feminino" },
    { nome: "Seu Filho Felipe", genero: "masculino" }
  ]},
  { id: 18, nome: "Bia", genero: "feminino", acompanhantes: [
    { nome: "Seu Namorado Luiz", genero: "masculino" }
  ]},
  { id: 19, nome: "Cris", genero: "feminino", acompanhantes: [] },
  { id: 20, nome: "Davi", genero: "masculino", acompanhantes: [
    { nome: "Esposa Davi", genero: "feminino" },
    { nome: "Seu Filho", genero: "masculino" },
    { nome: "Seu Filho", genero: "masculino" },
    { nome: "Seu Filho", genero: "masculino" }
  ]},
  { id: 21, nome: "Dennis", genero: "masculino", acompanhantes: [
    { nome: "Sua Esposa Amanda", genero: "feminino" }
  ]},
  { id: 22, nome: "Denise", genero: "feminino", acompanhantes: [] },
  { id: 23, nome: "Ingrid", genero: "feminino", acompanhantes: [] },
  { id: 24, nome: "Júnior", genero: "masculino", acompanhantes: [
    { nome: "Sua esposa Dona Celina", genero: "feminino" }
  ]},
  { id: 25, nome: "Júlio", genero: "masculino", acompanhantes: [
    { nome: "Sua Namorada Lígia", genero: "feminino" }
  ]},
  { id: 26, nome: "Juliano", genero: "masculino", acompanhantes: [] },
  { id: 27, nome: "Sérgio", genero: "masculino", acompanhantes: [] },
  { id: 28, nome: "Ketelyn", genero: "feminino", acompanhantes: [
    { nome: "Seu Marido Lucas", genero: "masculino" }
  ]},
  { id: 29, nome: "Denilson", genero: "masculino", acompanhantes: [
    { nome: "Sua Esposa Franciele", genero: "feminino" },
    { nome: "Sua Filha Gabi", genero: "feminino" },
    { nome: "Sua Mãe Belinha", genero: "feminino" }
  ]},
  { id: 30, nome: "Isa", genero: "feminino", acompanhantes: [
    { nome: "Seu Marido Beto", genero: "masculino" },
    { nome: "Sua Filha Luiza", genero: "feminino" },
    { nome: "A Vó Maria", genero: "feminino" }
  ]},
  { id: 31, nome: "Virgínia", genero: "feminino", acompanhantes: [
    { nome: "Seu Marido Valmir", genero: "masculino" },
    { nome: "Seu Filho Vinícius", genero: "masculino" }
  ]},
  { id: 32, nome: "William", genero: "masculino", acompanhantes: [
    { nome: "Sua Esposa Marilene", genero: "feminino" },
    { nome: "Seu Filho Kauã", genero: "masculino" }
  ]},
  { id: 33, nome: "Gô", genero: "feminino", acompanhantes: [
    { nome: "Seu Namorado Lucas", genero: "masculino" }
  ]},
  { id: 34, nome: "Lis", genero: "feminino", acompanhantes: [
    { nome: "Seu Marido Evandro", genero: "masculino" }
  ]},
  { id: 35, nome: "Steh", genero: "feminino", acompanhantes: [
    { nome: "Seu Namorado Matheus", genero: "masculino" }
  ]},
  { id: 36, nome: "Thabs", genero: "feminino", acompanhantes: [] },
  { id: 37, nome: "Tia Delmira", genero: "feminino", acompanhantes: [] },
  { id: 38, nome: "Itamar", genero: "masculino", acompanhantes: [
    { nome: "Sua namorada", genero: "feminino" }
  ]},
  { id: 39, nome: "Tia Lene", genero: "feminino", acompanhantes: [
    { nome: "Seu/sua acompanhante", genero: "indefinido" }
  ]},
  { id: 40, nome: "Branco", genero: "masculino", acompanhantes: [] },
  { id: 41, nome: "Emerson", genero: "masculino", acompanhantes: [
    { nome: "Sua esposa Nathália", genero: "feminino" }
  ]},
  { id: 42, nome: "Ju", genero: "masculino", acompanhantes: [
    { nome: "Sua Esposa", genero: "feminino" },
    { nome: "Sua filha", genero: "feminino" }
  ]},
  { id: 43, nome: "Rafa", genero: "masculino", acompanhantes: [
    { nome: "Sua mãe Lu", genero: "feminino" },
    { nome: "Seu pai Renato", genero: "masculino" }
  ]},
  { id: 44, nome: "Sabrina", genero: "feminino", acompanhantes: [
    { nome: "Seu Marido", genero: "masculino" }
  ]},
  { id: 45, nome: "Aninha", genero: "feminino", acompanhantes: [
    { nome: "Seu Namorado", genero: "masculino" }
  ]},
  { id: 46, nome: "Karen", genero: "feminino", acompanhantes: [
    { nome: "Seu/sua acompanhante", genero: "indefinido" }
  ]},
  { id: 47, nome: "Eyme", genero: "feminino", acompanhantes: [] },
  { id: 48, nome: "Jocenir", genero: "feminino", acompanhantes: [] }
];

export default function ConfirmacaoPresenca() {
  const [convidados, setConvidados] = useState(convidadosIniciais);
  const [respostas, setRespostas] = useState({});
  const [modalAberto, setModalAberto] = useState(null);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nomesCompletoAcomp, setNomesCompletoAcomp] = useState([]);
  const [mensagemFinal, setMensagemFinal] = useState("");

  const confirmarPresenca = (id) => {
    setRespostas((prev) => ({
      ...prev,
      [id]: {
        principal: "sim",
        nomeCompleto: nomeCompleto,
        acompanhantes: convidados.find(c => c.id === id).acompanhantes.map((acomp, index) => ({
          nome: acomp,
          nomeCompleto: nomesCompletoAcomp[index] || null,
          status: "Confirmado"
        })),
      },
    }));
    setMensagemFinal("🌸 Oba! Estamos muito felizes por contar com a sua presença nesse momento único. Mal podemos esperar para celebrar juntos!");
    setModalAberto(null);
    setNomeCompleto("");
    setNomesCompletoAcomp([]);
  };

  const recusarPresenca = (id, acompanhanteIndex = null) => {
    setRespostas((prev) => {
      if (acompanhanteIndex !== null) {
        const novosAcomps = prev[id]?.acompanhantes || convidados.find(c => c.id === id).acompanhantes.map(nome => ({ nome, nomeCompleto: null, status: "Pendente" }));
        novosAcomps[acompanhanteIndex] = {
          ...novosAcomps[acompanhanteIndex],
          status: "Não irá",
          nomeCompleto: null
        };
        return { ...prev, [id]: { ...prev[id], acompanhantes: novosAcomps } };
      }
      return { ...prev, [id]: { principal: "nao", nomeCompleto: null, acompanhantes: prev[id]?.acompanhantes || [] } };
    });
    setMensagemFinal("💌 Sentiremos sua falta, mas agradecemos por nos avisar. Desejamos que seu dia seja lindo também!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Confirmação de Presença 💍</h1>

      <div className="grid gap-4 w-full max-w-md">
        {convidados.map((convidado) => (
          <Card key={convidado.id} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <p className="font-semibold mb-2">{convidado.nome}</p>
              <div className="flex gap-2 mb-4">
                <Button
                  variant={respostas[convidado.id]?.principal === "sim" ? "default" : "outline"}
                  onClick={() => setModalAberto(convidado.id)}
                >
                  Confirmo
                </Button>
                <Button
                  variant={respostas[convidado.id]?.principal === "nao" ? "default" : "outline"}
                  onClick={() => recusarPresenca(convidado.id)}
                >
                  Não poderei ir
                </Button>
              </div>

              {convidado.acompanhantes.length > 0 && (
                <>
                  <p className="font-semibold mb-2">Acompanhantes:</p>
                  {convidado.acompanhantes.map((acomp, idx) => (
                    <div key={idx} className="flex gap-2 mb-1">
                      <span>{acomp}</span>
                      <Button variant="outline" size="sm" onClick={() => recusarPresenca(convidado.id, idx)}>Não irá</Button>
                    </div>
                  ))}
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {mensagemFinal && (
        <div className="mt-6 bg-white p-4 rounded-xl shadow text-center max-w-md">
          <p>{mensagemFinal}</p>
        </div>
      )}

      {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Confirme seu nome completo</h2>
            <input
              type="text"
              placeholder="Seu nome completo"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              className="border p-2 rounded w-full mb-3"
              required
            />
            {convidados.find((c) => c.id === modalAberto).acompanhantes.map((acomp, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={`Nome completo do acompanhante ${acomp}`}
                value={nomesCompletoAcomp[idx] || ""}
                onChange={(e) => {
                  const novos = [...nomesCompletoAcomp];
                  novos[idx] = e.target.value;
                  setNomesCompletoAcomp(novos);
                }}
                className="border p-2 rounded w-full mb-3"
                required
              />
            ))}
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setModalAberto(null)}>Cancelar</Button>
              <Button onClick={() => confirmarPresenca(modalAberto)}>Confirmar</Button>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold mt-8 mb-2">📋 Lista de confirmações</h2>
      <ul className="bg-white shadow rounded-2xl p-4 w-full max-w-md">
        {Object.entries(respostas).map(([id, resp]) => {
          const convidado = convidados.find((c) => c.id.toString() === id);
          return (
            <li key={id} className="mb-2">
              <strong>{convidado.nome}:</strong> {resp.principal === "sim" ? "Confirmado" : resp.principal === "nao" ? "Não irá" : "Pendente"}
              {resp.nomeCompleto && (<><br />Nome completo: {resp.nomeCompleto}</>)}
              {resp.acompanhantes && resp.acompanhantes.map((acomp, idx) => (
                <div key={idx} className="ml-4">
                  <strong>{acomp.nome}:</strong> {acomp.status}
                  {acomp.nomeCompleto && (<><br />Nome completo: {acomp.nomeCompleto}</>)}
                </div>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
