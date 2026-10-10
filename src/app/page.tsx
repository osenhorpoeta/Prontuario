"use client";
import { supabase } from "../lib/supabase";
export default function MedicalPrototype() {
  const salvarPacienteTeste = async () => {
  const { data, error } = await supabase
    .from("Pacientes")
    .insert([
      {
        nome: "Henrique Teste",
        nascimento: "2000-01-01",
      },
    ]);

  console.log("DATA:", data);
console.log("ERROR:", error);

if (!error) {
  alert("Paciente salvo com sucesso!");
} else {
  alert(JSON.stringify(error));
}
};

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className="w-72 bg-slate-900 text-white p-6 hidden lg:block">
        <h1 className="text-2xl font-bold mb-6">Clínica IA</h1>

        <div className="space-y-3">
          <div>Dashboard</div>
          <div>Pacientes</div>
          <div>Anamnese</div>
          <div>Exame Físico</div>
          <div>CID-10</div>
          <div>Prescrições</div>
          <div>Solicitação de Exames</div>
          <div>Histórico Clínico</div>
          <div>Documentos</div>
          <div>Assistente IA</div>
        </div>
      </aside>

      <main className="flex-1 p-6 space-y-6">
        <div className="bg-white rounded-3xl shadow p-6">
          <h1 className="text-3xl font-bold">
            Prontuário Médico Inteligente
          </h1>

          <p className="text-slate-500">
            Gestão completa da jornada do paciente.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-6">
          <section className="bg-white rounded-3xl p-6 shadow">
            <h2 className="font-bold text-xl mb-4">
              Cadastro Completo do Paciente
            </h2>

            <div className="grid md:grid-cols-2 gap-3">
              <input
                className="border p-3 rounded-xl"
                placeholder="Nome completo"
              />

              <input
                className="border p-3 rounded-xl"
                placeholder="CPF"
              />

              <input
                className="border p-3 rounded-xl"
                placeholder="Data de nascimento"
              />

              <input
                className="border p-3 rounded-xl"
                placeholder="Convênio"
              />
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 shadow">
            <h2 className="font-bold text-xl mb-4">
              CID-10 Pesquisável
            </h2>

            <input
              className="border p-3 rounded-xl w-full"
              placeholder="Pesquisar CID ou diagnóstico"
            />
          </section>
        </div>

        <section className="bg-white rounded-3xl p-6 shadow">
          <h2 className="font-bold text-xl mb-4">
            Anamnese por Sistemas
          </h2>

          <div className="grid md:grid-cols-4 gap-3">
            <button className="border rounded-xl p-3">
              Cardiovascular
            </button>

            <button className="border rounded-xl p-3">
              Respiratório
            </button>

            <button className="border rounded-xl p-3">
              Neurológico
            </button>

            <button className="border rounded-xl p-3">
              Gastrointestinal
            </button>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-6 shadow">
          <h2 className="font-bold text-xl mb-4">
            Exame Físico Estruturado
          </h2>

          <div className="grid md:grid-cols-4 gap-3">
            <input
              className="border p-3 rounded-xl"
              placeholder="PA"
            />

            <input
              className="border p-3 rounded-xl"
              placeholder="FC"
            />

            <input
              className="border p-3 rounded-xl"
              placeholder="Temperatura"
            />

            <input
              className="border p-3 rounded-xl"
              placeholder="SpO2"
            />
          </div>
        </section>

        <div className="grid xl:grid-cols-3 gap-6">
          <section className="bg-white rounded-3xl p-6 shadow">
            <h2 className="font-bold text-xl mb-3">
              Prescrição Médica
            </h2>

            <textarea
              className="border rounded-xl p-3 w-full h-32"
            />
          </section>

          <section className="bg-white rounded-3xl p-6 shadow">
            <h2 className="font-bold text-xl mb-3">
              Solicitação de Exames
            </h2>

            <textarea
              className="border rounded-xl p-3 w-full h-32"
            />
          </section>

          <section className="bg-white rounded-3xl p-6 shadow">
            <h2 className="font-bold text-xl mb-3">
              Upload de Arquivos
            </h2>

            <div className="border-2 border-dashed rounded-2xl p-8 text-center">
              PDFs, imagens, laudos e documentos
            </div>
          </section>
        </div>

        <section className="bg-white rounded-3xl p-6 shadow">
          <h2 className="font-bold text-xl mb-3">
            Histórico de Consultas
          </h2>

          <div className="space-y-2">
            <div className="border rounded-xl p-3">
              Consulta 10/10/2026
            </div>

            <div className="border rounded-xl p-3">
              Consulta 25/09/2026
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-6 shadow">
          <h2 className="font-bold text-xl mb-3">
            Assistente Diagnóstico IA
          </h2>

          <textarea
            className="border rounded-xl p-3 w-full h-32"
            placeholder="Sintomas, sinais e exames..."
          />

          <button className="bg-emerald-600 text-white rounded-xl px-4 py-3 mt-3">
            Gerar hipóteses diagnósticas
            <button
  onClick={salvarPacienteTeste}
  className="bg-blue-600 text-white rounded-xl px-4 py-3 mt-3 ml-3"
>
  Testar Supabase
</button>
          </button>
        </section>
      </main>
    </div>
  );
}