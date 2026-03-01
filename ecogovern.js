// =============================================================================
// EcoGovern — Plataforma de Monitoramento ESG
// Script MongoDB — mongosh
// =============================================================================

// Helpers de formatação
function sep()      { print("=".repeat(65)); }
function subsep()   { print("-".repeat(65)); }
function titulo(t)  { sep(); print("  " + t); sep(); }
function op(label)  { print("\n  >> " + label); subsep(); }

// ─────────────────────────────────────────────────────────────────────────────
titulo("ECOGOVERN — INICIANDO SCRIPT");
use("ecogovern");

db.empresas.drop();
db.emissoes_carbono.drop();
db.projetos_sociais.drop();
db.indicadores_governanca.drop();
db.residuos_reciclagem.drop();

db.createCollection("empresas");
db.createCollection("emissoes_carbono");
db.createCollection("projetos_sociais");
db.createCollection("indicadores_governanca");
db.createCollection("residuos_reciclagem");

print("  Collections criadas: empresas | emissoes_carbono | projetos_sociais");
print("                       indicadores_governanca | residuos_reciclagem");
sep();

// =============================================================================
titulo("COLLECTION 1/5 — empresas");
// =============================================================================

// ── CREATE ────────────────────────────────────────────────────────────────────
op("CREATE — db.empresas.insertMany() — 11 documentos");

let resEmpInsert = db.empresas.insertMany([
  {
    nome: "Suzano S.A.",
    cnpj: "16.404.287/0001-55",
    setor: "Papel e Celulose",
    porte: "Grande",
    localizacao: { cidade: "São Paulo", estado: "SP", regiao: "Sudeste" },
    metas_esg: [
      { meta: "Net Zero até 2025", categoria: "Ambiental" },
      { meta: "50% mulheres em liderança até 2030", categoria: "Social" }
    ],
    status_certificacao: "ISO 14001",
    data_cadastro: new Date("2023-01-10")
  },
  {
    nome: "Natura &Co",
    cnpj: "71.673.990/0001-77",
    setor: "Cosméticos",
    porte: "Grande",
    localizacao: { cidade: "Cajamar", estado: "SP", regiao: "Sudeste" },
    metas_esg: [
      { meta: "Carbono neutro até 2030", categoria: "Ambiental" },
      { meta: "100% embalagens recicláveis até 2025", categoria: "Ambiental" }
    ],
    status_certificacao: "B Corp",
    data_cadastro: new Date("2023-02-15")
  },
  {
    nome: "Vale S.A.",
    cnpj: "33.592.510/0001-54",
    setor: "Mineração",
    porte: "Grande",
    localizacao: { cidade: "Rio de Janeiro", estado: "RJ", regiao: "Sudeste" },
    metas_esg: [
      { meta: "Reduzir emissões Escopo 1 em 33% até 2030", categoria: "Ambiental" },
      { meta: "Zero acidentes fatais", categoria: "Social" }
    ],
    status_certificacao: "ISO 14001",
    data_cadastro: new Date("2023-03-01")
  },
  {
    nome: "Embraer S.A.",
    cnpj: "07.689.002/0001-89",
    setor: "Aeronáutico",
    porte: "Grande",
    localizacao: { cidade: "São José dos Campos", estado: "SP", regiao: "Sudeste" },
    metas_esg: [
      { meta: "Aviação neutra em carbono até 2050", categoria: "Ambiental" }
    ],
    status_certificacao: "ISO 14001",
    data_cadastro: new Date("2023-03-20")
  },
  {
    nome: "Ambev S.A.",
    cnpj: "07.526.557/0001-00",
    setor: "Bebidas",
    porte: "Grande",
    localizacao: { cidade: "São Paulo", estado: "SP", regiao: "Sudeste" },
    metas_esg: [
      { meta: "100% energia renovável até 2025", categoria: "Ambiental" },
      { meta: "1 bilhão de pessoas com água segura", categoria: "Social" }
    ],
    status_certificacao: "ISO 50001",
    data_cadastro: new Date("2023-04-05")
  },
  {
    nome: "Renner Lojas S.A.",
    cnpj: "92.754.738/0001-62",
    setor: "Varejo de Moda",
    porte: "Grande",
    localizacao: { cidade: "Porto Alegre", estado: "RS", regiao: "Sul" },
    metas_esg: [
      { meta: "Moda circular: 100% produtos sustentáveis até 2030", categoria: "Ambiental" }
    ],
    status_certificacao: "GRI",
    data_cadastro: new Date("2023-05-12")
  },
  {
    nome: "Copel Energia",
    cnpj: "76.483.817/0001-20",
    setor: "Energia Elétrica",
    porte: "Grande",
    localizacao: { cidade: "Curitiba", estado: "PR", regiao: "Sul" },
    metas_esg: [
      { meta: "Expandir matriz renovável em 30% até 2028", categoria: "Ambiental" }
    ],
    status_certificacao: "ISO 14001",
    data_cadastro: new Date("2023-06-01")
  },
  {
    nome: "WEG S.A.",
    cnpj: "84.429.695/0001-11",
    setor: "Eletroeletrônico",
    porte: "Grande",
    localizacao: { cidade: "Jaraguá do Sul", estado: "SC", regiao: "Sul" },
    metas_esg: [
      { meta: "Reduzir consumo de água industrial em 20%", categoria: "Ambiental" }
    ],
    status_certificacao: "ISO 14001",
    data_cadastro: new Date("2023-07-10")
  },
  {
    nome: "Grupo Mateus",
    cnpj: "00.551.442/0001-88",
    setor: "Atacado e Varejo",
    porte: "Médio",
    localizacao: { cidade: "São Luís", estado: "MA", regiao: "Nordeste" },
    metas_esg: [
      { meta: "Reduzir desperdício alimentar em 40% até 2027", categoria: "Social" }
    ],
    status_certificacao: "GRI",
    data_cadastro: new Date("2023-08-22")
  },
  {
    nome: "EDP Brasil",
    cnpj: "04.423.567/0001-21",
    setor: "Energia Elétrica",
    porte: "Grande",
    localizacao: { cidade: "São Paulo", estado: "SP", regiao: "Sudeste" },
    metas_esg: [
      { meta: "Descarbonizar portfólio até 2030", categoria: "Ambiental" },
      { meta: "30% de líderes mulheres até 2025", categoria: "Social" }
    ],
    status_certificacao: "ISO 14001",
    data_cadastro: new Date("2023-09-15")
  },
  {
    nome: "Localfrio S.A.",
    cnpj: "60.498.146/0001-40",
    setor: "Logística Frigorificada",
    porte: "Médio",
    localizacao: { cidade: "Guarulhos", estado: "SP", regiao: "Sudeste" },
    metas_esg: [
      { meta: "Frota elétrica até 2030", categoria: "Ambiental" }
    ],
    status_certificacao: "Pendente",
    data_cadastro: new Date("2023-10-03")
  }
]);

print("  acknowledged : " + resEmpInsert.acknowledged);
print("  insertedCount: " + Object.keys(resEmpInsert.insertedIds).length);

// ── READ ──────────────────────────────────────────────────────────────────────
op("READ — Empresas do setor 'Energia Elétrica'");
db.empresas.find(
  { setor: "Energia Elétrica" },
  { _id: 0, nome: 1, setor: 1, porte: 1, "localizacao.cidade": 1, status_certificacao: 1 }
).forEach(printjson);

op("READ — Grandes empresas do Sudeste com certificação ISO 14001");
db.empresas.find(
  { "localizacao.regiao": "Sudeste", porte: "Grande", status_certificacao: "ISO 14001" },
  { _id: 0, nome: 1, "localizacao.cidade": 1, status_certificacao: 1 }
).forEach(printjson);

op("READ — Empresas cadastradas após 01/06/2023 (ordenadas por data)");
db.empresas.find(
  { data_cadastro: { $gt: new Date("2023-06-01") } },
  { _id: 0, nome: 1, setor: 1, data_cadastro: 1 }
).sort({ data_cadastro: 1 }).forEach(printjson);

// ── UPDATE ────────────────────────────────────────────────────────────────────
op("UPDATE — Localfrio: atualiza certificação de 'Pendente' para 'ISO 14001'");
let resEmpUpd1 = db.empresas.updateOne(
  { nome: "Localfrio S.A." },
  { $set: { status_certificacao: "ISO 14001", data_atualizacao: new Date() } }
);
print("  matchedCount : " + resEmpUpd1.matchedCount);
print("  modifiedCount: " + resEmpUpd1.modifiedCount);
print("  Certificação atualizada:");
printjson(db.empresas.findOne({ nome: "Localfrio S.A." }, { _id: 0, nome: 1, status_certificacao: 1, data_atualizacao: 1 }));

op("UPDATE — Ambev: adiciona nova meta ESG ao array metas_esg ($push)");
let resEmpUpd2 = db.empresas.updateOne(
  { nome: "Ambev S.A." },
  { $push: { metas_esg: { meta: "Zero desperdício hídrico até 2028", categoria: "Ambiental" } } }
);
print("  matchedCount : " + resEmpUpd2.matchedCount);
print("  modifiedCount: " + resEmpUpd2.modifiedCount);
print("  Metas ESG da Ambev após atualização:");
printjson(db.empresas.findOne({ nome: "Ambev S.A." }, { _id: 0, nome: 1, metas_esg: 1 }));

// ── DELETE ────────────────────────────────────────────────────────────────────
op("DELETE — Remove empresa de teste");
db.empresas.insertOne({ nome: "Empresa TESTE", cnpj: "00.000.000/0001-00", setor: "Teste", porte: "Pequeno",
  localizacao: { cidade: "Teste", estado: "TS", regiao: "Teste" }, metas_esg: [],
  status_certificacao: "Nenhuma", data_cadastro: new Date() });
print("  Documento de teste inserido. Total antes do delete: " + db.empresas.countDocuments());

let resEmpDel = db.empresas.deleteOne({ nome: "Empresa TESTE" });
print("  deletedCount : " + resEmpDel.deletedCount);
print("  Total após delete: " + db.empresas.countDocuments());

// =============================================================================
titulo("COLLECTION 2/5 — emissoes_carbono");
// =============================================================================

op("CREATE — db.emissoes_carbono.insertMany() — 12 documentos");

let resEmiInsert = db.emissoes_carbono.insertMany([
  { empresa_id: "Suzano S.A.", periodo: "2023-Q1", escopo: 1,
    categoria: "Combustão estacionária", quantidade_co2_ton: 12450.5,
    fonte: "Caldeiras a biomassa", compensado: false, data_registro: new Date("2023-04-10") },
  { empresa_id: "Suzano S.A.", periodo: "2023-Q2", escopo: 2,
    categoria: "Energia elétrica comprada", quantidade_co2_ton: 3200.0,
    fonte: "Rede elétrica nacional", compensado: true, data_registro: new Date("2023-07-10") },
  { empresa_id: "Vale S.A.", periodo: "2023-Q1", escopo: 1,
    categoria: "Combustão móvel", quantidade_co2_ton: 89300.0,
    fonte: "Caminhões e equipamentos de mineração", compensado: false, data_registro: new Date("2023-04-15") },
  { empresa_id: "Vale S.A.", periodo: "2023-Q1", escopo: 3,
    categoria: "Transporte e distribuição", quantidade_co2_ton: 45000.0,
    fonte: "Transporte marítimo de minério", compensado: false, data_registro: new Date("2023-04-20") },
  { empresa_id: "Ambev S.A.", periodo: "2023-Q1", escopo: 1,
    categoria: "Combustão estacionária", quantidade_co2_ton: 5600.8,
    fonte: "Caldeiras e geradores", compensado: false, data_registro: new Date("2023-04-05") },
  { empresa_id: "Ambev S.A.", periodo: "2023-Q2", escopo: 2,
    categoria: "Energia elétrica comprada", quantidade_co2_ton: 1100.0,
    fonte: "Rede elétrica (mix renovável)", compensado: true, data_registro: new Date("2023-07-05") },
  { empresa_id: "Natura &Co", periodo: "2023-Q1", escopo: 1,
    categoria: "Frota própria", quantidade_co2_ton: 420.3,
    fonte: "Veículos leves a gasolina", compensado: true, data_registro: new Date("2023-04-12") },
  { empresa_id: "Natura &Co", periodo: "2023-Q3", escopo: 3,
    categoria: "Uso do produto pelo consumidor", quantidade_co2_ton: 8900.0,
    fonte: "Embalagens plásticas", compensado: false, data_registro: new Date("2023-10-12") },
  { empresa_id: "Embraer S.A.", periodo: "2023-Q1", escopo: 1,
    categoria: "Combustão estacionária", quantidade_co2_ton: 7800.0,
    fonte: "Fornos e tratamento térmico", compensado: false, data_registro: new Date("2023-04-08") },
  { empresa_id: "Embraer S.A.", periodo: "2023-Q2", escopo: 3,
    categoria: "Viagens a negócios", quantidade_co2_ton: 560.0,
    fonte: "Voos de funcionários", compensado: false, data_registro: new Date("2023-07-08") },
  { empresa_id: "WEG S.A.", periodo: "2023-Q1", escopo: 1,
    categoria: "Combustão estacionária", quantidade_co2_ton: 3100.0,
    fonte: "Compressores e fundição", compensado: false, data_registro: new Date("2023-04-18") },
  { empresa_id: "EDP Brasil", periodo: "2023-Q1", escopo: 2,
    categoria: "Perdas na transmissão", quantidade_co2_ton: 680.0,
    fonte: "Rede de distribuição", compensado: false, data_registro: new Date("2023-04-22") }
]);

print("  acknowledged : " + resEmiInsert.acknowledged);
print("  insertedCount: " + Object.keys(resEmiInsert.insertedIds).length);

op("READ — Emissões NÃO compensadas acima de 5.000 tCO2");
db.emissoes_carbono.find(
  { compensado: false, quantidade_co2_ton: { $gt: 5000 } },
  { _id: 0, empresa_id: 1, periodo: 1, escopo: 1, categoria: 1, quantidade_co2_ton: 1, compensado: 1 }
).sort({ quantidade_co2_ton: -1 }).forEach(printjson);

op("READ — Todas as emissões de Escopo 3");
db.emissoes_carbono.find(
  { escopo: 3 },
  { _id: 0, empresa_id: 1, periodo: 1, categoria: 1, quantidade_co2_ton: 1, compensado: 1 }
).forEach(printjson);

op("READ — Emissões da Vale S.A. no período 2023-Q1");
db.emissoes_carbono.find(
  { empresa_id: "Vale S.A.", periodo: "2023-Q1" },
  { _id: 0, empresa_id: 1, periodo: 1, escopo: 1, categoria: 1, quantidade_co2_ton: 1 }
).forEach(printjson);

op("UPDATE — Embraer: marca 'Viagens a negócios' como compensado ($set)");
let resEmiUpd = db.emissoes_carbono.updateOne(
  { empresa_id: "Embraer S.A.", categoria: "Viagens a negócios" },
  { $set: { compensado: true, data_atualizacao: new Date() } }
);
print("  matchedCount : " + resEmiUpd.matchedCount);
print("  modifiedCount: " + resEmiUpd.modifiedCount);
print("  Registro após atualização:");
printjson(db.emissoes_carbono.findOne(
  { empresa_id: "Embraer S.A.", categoria: "Viagens a negócios" },
  { _id: 0, empresa_id: 1, categoria: 1, quantidade_co2_ton: 1, compensado: 1 }
));

op("DELETE — Remove registro de emissão de teste");
db.emissoes_carbono.insertOne({ empresa_id: "TESTE", periodo: "2023-Q0", escopo: 1,
  categoria: "Teste", quantidade_co2_ton: 0, fonte: "Teste", compensado: false, data_registro: new Date() });
print("  Total antes do delete: " + db.emissoes_carbono.countDocuments());
let resEmiDel = db.emissoes_carbono.deleteOne({ empresa_id: "TESTE" });
print("  deletedCount : " + resEmiDel.deletedCount);
print("  Total após delete: " + db.emissoes_carbono.countDocuments());

// =============================================================================
titulo("COLLECTION 3/5 — projetos_sociais  [MODELO FLEXIVEL]");
// =============================================================================

print("  JUSTIFICATIVA: Projetos de Educacao, Saude e Habitacao possuem");
print("  campos especificos distintos. O MongoDB permite documentos");
print("  heterogeneos na mesma collection, sem campos nulos.");
subsep();

op("CREATE — db.projetos_sociais.insertMany() — 12 documentos (3 tipos)");

let resProjInsert = db.projetos_sociais.insertMany([
  // TIPO: Educação
  { empresa_id: "Suzano S.A.", nome: "Floresta do Saber", tipo: "Educacao",
    investimento_reais: 850000, municipio: "Mucuri", estado: "BA",
    status: "Em andamento", data_inicio: new Date("2022-03-01"),
    escola_parceira: "EMEF Prof. João Calmon", alunos_impactados: 320, nivel_ensino: "Fundamental" },
  { empresa_id: "WEG S.A.", nome: "WEG Educa", tipo: "Educacao",
    investimento_reais: 1200000, municipio: "Jaraguá do Sul", estado: "SC",
    status: "Concluído", data_inicio: new Date("2021-08-01"),
    escola_parceira: "SENAI Jaraguá", alunos_impactados: 540, nivel_ensino: "Técnico" },
  { empresa_id: "Vale S.A.", nome: "Mãos que Constroem Futuros", tipo: "Educacao",
    investimento_reais: 3000000, municipio: "Itabira", estado: "MG",
    status: "Em andamento", data_inicio: new Date("2023-01-15"),
    escola_parceira: "IFMG Campus Itabira", alunos_impactados: 1100, nivel_ensino: "Superior" },
  { empresa_id: "Embraer S.A.", nome: "STEM na Escola", tipo: "Educacao",
    investimento_reais: 650000, municipio: "São José dos Campos", estado: "SP",
    status: "Em andamento", data_inicio: new Date("2023-02-20"),
    escola_parceira: "EE Dep. Adhemar Pereira de Barros", alunos_impactados: 280, nivel_ensino: "Médio" },
  // TIPO: Saúde
  { empresa_id: "Ambev S.A.", nome: "Beber com Saúde", tipo: "Saude",
    investimento_reais: 500000, municipio: "Cachoeiras de Macacu", estado: "RJ",
    status: "Em andamento", data_inicio: new Date("2022-06-01"),
    tipo_servico: "Atendimento médico básico", pacientes_atendidos: 4200 },
  { empresa_id: "Natura &Co", nome: "Saúde da Floresta", tipo: "Saude",
    investimento_reais: 720000, municipio: "Maués", estado: "AM",
    status: "Em andamento", data_inicio: new Date("2022-09-10"),
    tipo_servico: "Saúde mental e bem-estar comunitário", pacientes_atendidos: 1800 },
  { empresa_id: "Vale S.A.", nome: "Saúde em Movimento", tipo: "Saude",
    investimento_reais: 2100000, municipio: "Parauapebas", estado: "PA",
    status: "Em andamento", data_inicio: new Date("2021-11-01"),
    tipo_servico: "Hospital móvel e triagem", pacientes_atendidos: 12500 },
  { empresa_id: "Renner Lojas S.A.", nome: "Moda e Bem-Estar", tipo: "Saude",
    investimento_reais: 310000, municipio: "Porto Alegre", estado: "RS",
    status: "Concluído", data_inicio: new Date("2022-01-10"),
    tipo_servico: "Saúde mental para funcionários", pacientes_atendidos: 890 },
  // TIPO: Habitação
  { empresa_id: "EDP Brasil", nome: "Luz para Todos EDP", tipo: "Habitacao",
    investimento_reais: 4500000, municipio: "Fortaleza", estado: "CE",
    status: "Em andamento", data_inicio: new Date("2022-04-01"),
    unidades_habitacionais: 200, familias_beneficiadas: 200 },
  { empresa_id: "Vale S.A.", nome: "Moradias do Bem", tipo: "Habitacao",
    investimento_reais: 8000000, municipio: "Canaã dos Carajás", estado: "PA",
    status: "Em andamento", data_inicio: new Date("2021-07-01"),
    unidades_habitacionais: 350, familias_beneficiadas: 350 },
  { empresa_id: "Copel Energia", nome: "Casa Segura Paraná", tipo: "Habitacao",
    investimento_reais: 1800000, municipio: "Londrina", estado: "PR",
    status: "Concluído", data_inicio: new Date("2022-08-15"),
    unidades_habitacionais: 80, familias_beneficiadas: 80 },
  { empresa_id: "Grupo Mateus", nome: "Teto Digno Nordeste", tipo: "Habitacao",
    investimento_reais: 950000, municipio: "São Luís", estado: "MA",
    status: "Em andamento", data_inicio: new Date("2023-05-01"),
    unidades_habitacionais: 45, familias_beneficiadas: 45 }
]);

print("  acknowledged : " + resProjInsert.acknowledged);
print("  insertedCount: " + Object.keys(resProjInsert.insertedIds).length);
print("  Tipos inseridos: 4x Educacao | 4x Saude | 4x Habitacao");

op("READ — Projetos de EDUCACAO (campos: escola_parceira, alunos_impactados, nivel_ensino)");
db.projetos_sociais.find(
  { tipo: "Educacao" },
  { _id: 0, nome: 1, empresa_id: 1, status: 1, escola_parceira: 1, alunos_impactados: 1, nivel_ensino: 1 }
).forEach(printjson);

op("READ — Projetos de SAUDE com mais de 2.000 pacientes atendidos");
db.projetos_sociais.find(
  { tipo: "Saude", pacientes_atendidos: { $gt: 2000 } },
  { _id: 0, nome: 1, empresa_id: 1, tipo_servico: 1, pacientes_atendidos: 1, municipio: 1 }
).forEach(printjson);

op("READ — Projetos de HABITACAO (campos: unidades_habitacionais, familias_beneficiadas)");
db.projetos_sociais.find(
  { tipo: "Habitacao" },
  { _id: 0, nome: 1, empresa_id: 1, unidades_habitacionais: 1, familias_beneficiadas: 1, investimento_reais: 1 }
).forEach(printjson);

op("READ — Projetos com investimento acima de R$ 1.000.000 (todos os tipos)");
db.projetos_sociais.find(
  { investimento_reais: { $gt: 1000000 } },
  { _id: 0, nome: 1, tipo: 1, empresa_id: 1, investimento_reais: 1 }
).sort({ investimento_reais: -1 }).forEach(printjson);

op("UPDATE — STEM na Escola: incrementa alunos_impactados em +50 ($inc)");
let resProjUpd = db.projetos_sociais.updateOne(
  { nome: "STEM na Escola" },
  { $inc: { alunos_impactados: 50 }, $set: { data_atualizacao: new Date() } }
);
print("  matchedCount : " + resProjUpd.matchedCount);
print("  modifiedCount: " + resProjUpd.modifiedCount);
print("  Registro após atualização:");
printjson(db.projetos_sociais.findOne(
  { nome: "STEM na Escola" },
  { _id: 0, nome: 1, alunos_impactados: 1, data_atualizacao: 1 }
));

op("DELETE — Remove projeto de teste");
db.projetos_sociais.insertOne({ empresa_id: "TESTE", nome: "Projeto TESTE", tipo: "Teste",
  investimento_reais: 0, municipio: "Teste", estado: "TS", status: "Teste", data_inicio: new Date() });
print("  Total antes do delete: " + db.projetos_sociais.countDocuments());
let resProjDel = db.projetos_sociais.deleteOne({ nome: "Projeto TESTE" });
print("  deletedCount : " + resProjDel.deletedCount);
print("  Total após delete: " + db.projetos_sociais.countDocuments());

// =============================================================================
titulo("COLLECTION 4/5 — indicadores_governanca");
// =============================================================================

op("CREATE — db.indicadores_governanca.insertMany() — 12 documentos");

let resGovInsert = db.indicadores_governanca.insertMany([
  { empresa_id: "Suzano S.A.", tipo_indicador: "Diversidade no Conselho", periodo: "2023",
    valor: 38, meta: 40, unidade: "% mulheres", conformidade: false,
    observacoes: "Crescimento de 5% em relação a 2022" },
  { empresa_id: "Suzano S.A.", tipo_indicador: "Compliance Anticorrupção", periodo: "2023",
    valor: 100, meta: 100, unidade: "% funcionários treinados", conformidade: true,
    observacoes: "Programa anual concluído" },
  { empresa_id: "Vale S.A.", tipo_indicador: "Auditorias Externas", periodo: "2023",
    valor: 4, meta: 4, unidade: "auditorias realizadas", conformidade: true,
    observacoes: "Big Four contratadas" },
  { empresa_id: "Vale S.A.", tipo_indicador: "Diversidade no Conselho", periodo: "2023",
    valor: 22, meta: 30, unidade: "% mulheres", conformidade: false,
    observacoes: "Meta não atingida; plano de ação para 2024" },
  { empresa_id: "Natura &Co", tipo_indicador: "Transparência Reportada", periodo: "2023",
    valor: 95, meta: 90, unidade: "% indicadores GRI divulgados", conformidade: true,
    observacoes: "Relatório de sustentabilidade publicado" },
  { empresa_id: "Natura &Co", tipo_indicador: "Compliance Anticorrupção", periodo: "2023",
    valor: 98, meta: 100, unidade: "% funcionários treinados", conformidade: false,
    observacoes: "2% pendentes por afastamento médico" },
  { empresa_id: "Ambev S.A.", tipo_indicador: "Diversidade no Conselho", periodo: "2023",
    valor: 33, meta: 40, unidade: "% mulheres", conformidade: false,
    observacoes: "Melhora de 8% desde 2021" },
  { empresa_id: "Ambev S.A.", tipo_indicador: "Gestão de Riscos ESG", periodo: "2023",
    valor: 87, meta: 85, unidade: "pontuação interna (0-100)", conformidade: true,
    observacoes: "Metodologia atualizada em 2023" },
  { empresa_id: "Embraer S.A.", tipo_indicador: "Compliance Anticorrupção", periodo: "2023",
    valor: 100, meta: 100, unidade: "% funcionários treinados", conformidade: true,
    observacoes: "Treinamento obrigatório concluído" },
  { empresa_id: "WEG S.A.", tipo_indicador: "Transparência Reportada", periodo: "2023",
    valor: 88, meta: 90, unidade: "% indicadores GRI divulgados", conformidade: false,
    observacoes: "Lacuna em indicadores de cadeia de fornecimento" },
  { empresa_id: "Copel Energia", tipo_indicador: "Auditorias Externas", periodo: "2023",
    valor: 2, meta: 3, unidade: "auditorias realizadas", conformidade: false,
    observacoes: "Auditoria adiada para Q1/2024" },
  { empresa_id: "EDP Brasil", tipo_indicador: "Gestão de Riscos ESG", periodo: "2023",
    valor: 92, meta: 85, unidade: "pontuação interna (0-100)", conformidade: true,
    observacoes: "Reconhecida pelo CDP em 2023" }
]);

print("  acknowledged : " + resGovInsert.acknowledged);
print("  insertedCount: " + Object.keys(resGovInsert.insertedIds).length);

op("READ — Indicadores EM CONFORMIDADE (valor >= meta)");
db.indicadores_governanca.find(
  { conformidade: true },
  { _id: 0, empresa_id: 1, tipo_indicador: 1, valor: 1, meta: 1, unidade: 1 }
).forEach(printjson);

op("READ — Diversidade no Conselho: empresas ABAIXO DA META");
db.indicadores_governanca.find(
  { tipo_indicador: "Diversidade no Conselho", conformidade: false },
  { _id: 0, empresa_id: 1, tipo_indicador: 1, valor: 1, meta: 1, unidade: 1, observacoes: 1 }
).forEach(printjson);

op("READ — Compliance Anticorrupção (todas as empresas)");
db.indicadores_governanca.find(
  { tipo_indicador: "Compliance Anticorrupção" },
  { _id: 0, empresa_id: 1, valor: 1, meta: 1, conformidade: 1, observacoes: 1 }
).forEach(printjson);

op("UPDATE — Natura: corrige Compliance para 100% após recontagem ($set)");
let resGovUpd1 = db.indicadores_governanca.updateOne(
  { empresa_id: "Natura &Co", tipo_indicador: "Compliance Anticorrupção" },
  { $set: { valor: 100, conformidade: true, observacoes: "Recontagem após retorno de afastados" } }
);
print("  matchedCount : " + resGovUpd1.matchedCount);
print("  modifiedCount: " + resGovUpd1.modifiedCount);
print("  Registro após atualização:");
printjson(db.indicadores_governanca.findOne(
  { empresa_id: "Natura &Co", tipo_indicador: "Compliance Anticorrupção" },
  { _id: 0, empresa_id: 1, tipo_indicador: 1, valor: 1, conformidade: 1, observacoes: 1 }
));

op("UPDATE — updateMany: redefine meta de Diversidade no Conselho para 40% em todas as empresas");
let resGovUpd2 = db.indicadores_governanca.updateMany(
  { tipo_indicador: "Diversidade no Conselho" },
  { $set: { meta: 40, data_revisao: new Date("2024-01-01") } }
);
print("  matchedCount : " + resGovUpd2.matchedCount);
print("  modifiedCount: " + resGovUpd2.modifiedCount);

op("DELETE — Remove indicador de teste");
db.indicadores_governanca.insertOne({ empresa_id: "TESTE", tipo_indicador: "Teste",
  periodo: "2023", valor: 0, meta: 0, unidade: "teste", conformidade: false, observacoes: "DELETE" });
print("  Total antes do delete: " + db.indicadores_governanca.countDocuments());
let resGovDel = db.indicadores_governanca.deleteOne({ empresa_id: "TESTE" });
print("  deletedCount : " + resGovDel.deletedCount);
print("  Total após delete: " + db.indicadores_governanca.countDocuments());

// =============================================================================
titulo("COLLECTION 5/5 — residuos_reciclagem");
// =============================================================================

op("CREATE — db.residuos_reciclagem.insertMany() — 11 documentos");

let resResInsert = db.residuos_reciclagem.insertMany([
  { empresa_id: "Vale S.A.", unidade: "Complexo Carajás", periodo: "2023-Q1",
    tipo_residuo: "Estéril de mineração", quantidade_gerada_kg: 5200000,
    quantidade_reciclada_kg: 1040000, metodo_destinacao: "Reaproveitamento em obras",
    parceiro: "Andrade Gutierrez", custo_gestao_reais: 280000 },
  { empresa_id: "Vale S.A.", unidade: "Complexo Carajás", periodo: "2023-Q2",
    tipo_residuo: "Óleo lubrificante usado", quantidade_gerada_kg: 45000,
    quantidade_reciclada_kg: 45000, metodo_destinacao: "Rerrefino",
    parceiro: "Lwart Soluções Ambientais", custo_gestao_reais: 18000 },
  { empresa_id: "Ambev S.A.", unidade: "Cervejaria Jaguariúna", periodo: "2023-Q1",
    tipo_residuo: "Bagaço de malte", quantidade_gerada_kg: 820000,
    quantidade_reciclada_kg: 820000, metodo_destinacao: "Venda para alimentação animal",
    parceiro: "Cooperativa Agropecuária do Vale", custo_gestao_reais: 0 },
  { empresa_id: "Ambev S.A.", unidade: "Cervejaria Jaguariúna", periodo: "2023-Q1",
    tipo_residuo: "Vidro de embalagem", quantidade_gerada_kg: 160000,
    quantidade_reciclada_kg: 158000, metodo_destinacao: "Reciclagem industrial",
    parceiro: "Owens-Illinois Brasil", custo_gestao_reais: 12000 },
  { empresa_id: "Suzano S.A.", unidade: "Fábrica Mucuri", periodo: "2023-Q1",
    tipo_residuo: "Licor negro (resíduo de celulose)", quantidade_gerada_kg: 1100000,
    quantidade_reciclada_kg: 1100000, metodo_destinacao: "Geração de energia interna",
    parceiro: "Interno", custo_gestao_reais: 5000 },
  { empresa_id: "Suzano S.A.", unidade: "Fábrica Mucuri", periodo: "2023-Q2",
    tipo_residuo: "Resíduos de papel e celulose", quantidade_gerada_kg: 95000,
    quantidade_reciclada_kg: 88000, metodo_destinacao: "Reciclagem e compostagem",
    parceiro: "Green Cycle", custo_gestao_reais: 7500 },
  { empresa_id: "WEG S.A.", unidade: "Planta Jaraguá do Sul", periodo: "2023-Q1",
    tipo_residuo: "Cavacos metálicos", quantidade_gerada_kg: 340000,
    quantidade_reciclada_kg: 340000, metodo_destinacao: "Sucata para siderurgia",
    parceiro: "ArcelorMittal Brasil", custo_gestao_reais: 0 },
  { empresa_id: "WEG S.A.", unidade: "Planta Jaraguá do Sul", periodo: "2023-Q1",
    tipo_residuo: "Resíduos de verniz e tinta", quantidade_gerada_kg: 12000,
    quantidade_reciclada_kg: 6000, metodo_destinacao: "Co-processamento em cimenteira",
    parceiro: "Votorantim Cimentos", custo_gestao_reais: 9500 },
  { empresa_id: "Embraer S.A.", unidade: "São José dos Campos", periodo: "2023-Q1",
    tipo_residuo: "Resíduos de composto de carbono", quantidade_gerada_kg: 28000,
    quantidade_reciclada_kg: 14000, metodo_destinacao: "Reciclagem especializada",
    parceiro: "Carbon Clean Tech", custo_gestao_reais: 45000 },
  { empresa_id: "Natura &Co", unidade: "Fábrica Cajamar", periodo: "2023-Q1",
    tipo_residuo: "Embalagens plásticas pós-consumo", quantidade_gerada_kg: 75000,
    quantidade_reciclada_kg: 62000, metodo_destinacao: "Logística reversa",
    parceiro: "ECOPACK Reciclagem", custo_gestao_reais: 31000 },
  { empresa_id: "Copel Energia", unidade: "Subestação Curitiba", periodo: "2023-Q1",
    tipo_residuo: "Equipamentos elétricos obsoletos", quantidade_gerada_kg: 8500,
    quantidade_reciclada_kg: 7500, metodo_destinacao: "Desmontagem e reciclagem",
    parceiro: "EletroRecicla", custo_gestao_reais: 14000 }
]);

print("  acknowledged : " + resResInsert.acknowledged);
print("  insertedCount: " + Object.keys(resResInsert.insertedIds).length);

op("READ — Unidades com reciclagem TOTAL (quantidade_reciclada >= quantidade_gerada)");
db.residuos_reciclagem.find(
  { $expr: { $gte: ["$quantidade_reciclada_kg", "$quantidade_gerada_kg"] } },
  { _id: 0, empresa_id: 1, unidade: 1, tipo_residuo: 1, quantidade_gerada_kg: 1, quantidade_reciclada_kg: 1 }
).forEach(printjson);

op("READ — Resíduos com custo de gestão acima de R$ 20.000");
db.residuos_reciclagem.find(
  { custo_gestao_reais: { $gt: 20000 } },
  { _id: 0, empresa_id: 1, tipo_residuo: 1, metodo_destinacao: 1, parceiro: 1, custo_gestao_reais: 1 }
).sort({ custo_gestao_reais: -1 }).forEach(printjson);

op("READ — Resíduos da Vale S.A. no período 2023-Q1");
db.residuos_reciclagem.find(
  { empresa_id: "Vale S.A.", periodo: "2023-Q1" },
  { _id: 0, empresa_id: 1, unidade: 1, tipo_residuo: 1, quantidade_gerada_kg: 1, quantidade_reciclada_kg: 1 }
).forEach(printjson);

op("UPDATE — Natura: incrementa quantidade reciclada de embalagens em +5.000 kg ($inc)");
let resResUpd = db.residuos_reciclagem.updateOne(
  { empresa_id: "Natura &Co", tipo_residuo: "Embalagens plásticas pós-consumo" },
  { $inc: { quantidade_reciclada_kg: 5000 }, $set: { data_atualizacao: new Date() } }
);
print("  matchedCount : " + resResUpd.matchedCount);
print("  modifiedCount: " + resResUpd.modifiedCount);
print("  Registro após atualização:");
printjson(db.residuos_reciclagem.findOne(
  { empresa_id: "Natura &Co" },
  { _id: 0, empresa_id: 1, tipo_residuo: 1, quantidade_gerada_kg: 1, quantidade_reciclada_kg: 1 }
));

op("DELETE — Remove resíduo de teste");
db.residuos_reciclagem.insertOne({ empresa_id: "TESTE", unidade: "Teste", periodo: "2023-Q0",
  tipo_residuo: "Teste", quantidade_gerada_kg: 0, quantidade_reciclada_kg: 0,
  metodo_destinacao: "Teste", parceiro: "Teste", custo_gestao_reais: 0 });
print("  Total antes do delete: " + db.residuos_reciclagem.countDocuments());
let resResDel = db.residuos_reciclagem.deleteOne({ empresa_id: "TESTE" });
print("  deletedCount : " + resResDel.deletedCount);
print("  Total após delete: " + db.residuos_reciclagem.countDocuments());

// =============================================================================
titulo("VERIFICACAO FINAL — Contagem de documentos por collection");
// =============================================================================

let counts = {
  empresas:               db.empresas.countDocuments(),
  emissoes_carbono:       db.emissoes_carbono.countDocuments(),
  projetos_sociais:       db.projetos_sociais.countDocuments(),
  indicadores_governanca: db.indicadores_governanca.countDocuments(),
  residuos_reciclagem:    db.residuos_reciclagem.countDocuments()
};

print("  Collection               | Documentos | Minimo exigido | OK?");
subsep();
for (let col in counts) {
  let count = counts[col];
  let ok = count >= 10 ? "SIM" : "NAO";
  let pad = " ".repeat(24 - col.length);
  print("  " + col + pad + "| " + count + "          | 10             | " + ok);
}
subsep();

let total = Object.values(counts).reduce((a, b) => a + b, 0);
print("  Total de documentos inseridos: " + total);
sep();
print("  Script EcoGovern executado com sucesso!");
sep();
