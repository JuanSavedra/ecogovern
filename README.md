# EcoGovern

A MongoDB database project for ESG (Environmental, Social and Governance) monitoring. Models a platform where companies track carbon emissions, social projects, governance KPIs, and waste management data in a single NoSQL system.

## Collections

| Collection | ESG Pillar | Description |
|---|---|---|
| `empresas` | Governance | Company profiles with ESG goals and certifications |
| `emissoes_carbono` | Environmental | GHG emissions by scope (GHG Protocol) |
| `projetos_sociais` | Social | CSR projects — flexible schema by type |
| `indicadores_governanca` | Governance | KPIs: board diversity, compliance, audits |
| `residuos_reciclagem` | Environmental | Waste generation and recycling by plant unit |

## Highlights

- **Flexible schema** on `projetos_sociais`: education, health, and housing projects each carry their own fields without null padding
- Full CRUD operations across all 5 collections
- Real-world ESG standards referenced: GHG Protocol scopes 1/2/3, GRI indicators, ISO 14001, B Corp

## Stack

- MongoDB Atlas (Free Tier)
- mongosh

## Running

1. Connect to your MongoDB Atlas cluster via mongosh
2. Load the script:

```js
load("/path/to/ecogovern.js")
```

All collections are created and populated automatically. The script also runs sample queries, updates, and deletes with labeled output for each operation.

## Data

11 real Brazilian companies across sectors (mining, energy, cosmetics, aviation, beverages), with:

- 58 documents total across 5 collections
- 15+ read queries with filters, projections and field comparisons
- Updates using `$set`, `$inc`, `$push`, `$mul`
- Deletes with before/after document count
