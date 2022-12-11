import { Connection } from "mysql2/promise";
import citySeed from "./citySeed";

export default async (db: Connection) => {
  await citySeed(db);

  // [id_address, id_city, place, district, cep, number, complement]
  const addresses = [
    ["1", "1", "Av. João Goulart", "Cidade Alta", "88900-000", "30", null], //Araranguá,
    [
      "2",
      "2",
      "R. Aíres Medeiros de Souza",
      "Januária",
      "88960-000",
      null,
      "Terminal Rodoviário de Sombrio",
    ], // Sombrio
    [
      "3",
      "3",
      "R. Natalino Teixeira de Rosa",
      null,
      "88965-000",
      "110-210",
      "Estação Rodoviária de Santa Rosa do Sul",
    ], // Santa Rosa do Sul
    ["4", "4", "Av. Castelo Branco", "Torres", "95560-000", "1853", null], // Torres
    ["5", "5", "R. Osmani Veras", "Centro", "95535-000", "781", null], // Terra da Areia
    [
      "6",
      "6",
      "R. João Cristiano Scheffer Filho",
      "Centro",
      "95555-000",
      "303",
      null,
    ], // Capão da Canoa
    ["7", "7", "R. Rio Jacuí", "Centro", "95588-000", "854", null], // Xangri-lá
    [
      "8",
      "8",
      "Av. Inácio José Schaefer",
      "Nossa Sra. Aparecida",
      "95580-000",
      "2613",
      null,
    ], // Três Cachoeiras
    ["9", "9", "BR 101 KM", null, "95520-000", "99", null], // Osório
    [
      "10",
      "1",
      "R. Governador Jorge Lacerda",
      "Jardim das Avenidas",
      "88906-072",
      "3201",
      null,
    ], // campus Araranguá
    [
      "11",
      "10",
      "R. Eng. Agronômico Andrei Cristian Ferreira",
      "Trindade",
      "88040-900",
      null,
      null,
    ], // campus Trindade
    [
      "12",
      "11",
      "R. Dona Francisca",
      "Zona Industrial Norte",
      "89219-600",
      "8300",
      null,
    ], // campus Joinville
    ["13", "12", "R. João Pessoa", "Velha", "89036-003", "2514", null], // campus Blumenau
    [
      "14",
      "13",
      "Rodovia Ulysses Gaboardi",
      "Curitibanos",
      "89520-000",
      "3000",
      null,
    ], // campus Curitibanos
  ];

  for (const data of addresses) {
    await db.execute(
      `INSERT INTO UFSCarona.Address (id_address, id_city, place, district, cep, number, complement)
      VALUES (?, ?, ?, ?, ?, ?, ?);`,
      data
    );
  }
};
