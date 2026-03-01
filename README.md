# EcoGovern

Banco de dados MongoDB para monitoramento ESG (Environmental, Social and Governance). Modela uma plataforma onde empresas registram emissões de carbono, projetos sociais, indicadores de governança e gestão de resíduos em um único sistema NoSQL.

## Collections

| Collection | Pilar ESG | Descrição |
|---|---|---|
| `empresas` | Governança | Perfil das empresas com metas ESG e certificações |
| `emissoes_carbono` | Ambiental | Emissões GEE por escopo (GHG Protocol) |
| `projetos_sociais` | Social | Projetos de responsabilidade social — schema flexível por tipo |
| `indicadores_governanca` | Governança | KPIs: diversidade no conselho, compliance, auditorias |
| `residuos_reciclagem` | Ambiental | Geração e reciclagem de resíduos por unidade fabril |

## Destaques

- **Schema flexível** em `projetos_sociais`: projetos de educação, saúde e habitação possuem campos próprios sem campos nulos desnecessários
- Operações CRUD completas nas 5 collections
- Padrões ESG reais referenciados: GHG Protocol (escopos 1/2/3), indicadores GRI, ISO 14001, B Corp

## Stack

- MongoDB Atlas (Free Tier)
- mongosh

## Como executar

1. Conecte ao seu cluster no MongoDB Atlas via mongosh
2. Carregue o script:

```js
load("/caminho/para/ecogovern.js")
```

Todas as collections são criadas e populadas automaticamente. O script também executa consultas, atualizações e remoções com saídas rotuladas para cada operação.

## Dados

11 empresas brasileiras reais de setores variados (mineração, energia, cosméticos, aviação, bebidas), com:

- 58 documentos no total distribuídos nas 5 collections
- 15+ consultas com filtros, projeções e comparação entre campos
- Atualizações com `$set`, `$inc`, `$push`, `$mul`
- Remoções com contagem de documentos antes e depois
