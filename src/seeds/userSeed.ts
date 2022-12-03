import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_user, id_campus, name, email, password, age, cpf]
  const users = [
    ['1', '1', 'João', 'joao@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', '20', '33993070046'],
    ['2', '2', 'Maria', 'maria@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '21', '93680795017'],
    ['3', '3', 'José', 'jose@gmail.com', 'c81e728d9d4c2f636f067f89cc14862c', '23', '48566932048'],
    ['4', '3', 'Pedro', 'pedro@gmail.com', 'eccbc87e4b5ce2fe28308fd9f2a7baf3', '22', '11579769055'],
    ['5', '4', 'Júlia', 'julia@gmail.com', 'a87ff679a2f3e71d9181a67b7542122c', '20', '71803367008'],
    ['6', '5', 'Cláudia', 'claudia@gmail.com', 'e4da3b7fbbce2345d7772b0674a318d5', '20', '70718886046'],
    ['7', '2', 'Fernando', 'fernando@gmail.com', '1679091c5a880faf6fb5e6087eb1b2dc', '21', '75322019022'],
    ['8', '1', 'Carlos', 'carlos@gmail.com', '8f14e45fceea167a5a36dedd4bea2543', '23', '94387670029'],
  ];

  for (const data of users) {
    await db.execute(
      `INSERT INTO ufscarona.user (id_user, id_campus, name, email, password, age, cpf) VALUES (?, ?, ?, ?, ?, ?, ?);`,
      data
    );
  }
};
