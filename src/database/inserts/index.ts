import { Connection } from "mysql2";

const fakeData = async (db: Connection) => {
  // cadastrar todos os estados do brasil na tabela state
  db.query(`INSERT INTO State (name, id_state) VALUES ('Santa Catarina', '1')`);
  db.query(
    `INSERT INTO State (name, id_state) VALUES ('Rio Grande do Sul', '2')`
  );

  db.query(
    `INSERT INTO City (name, id_state, id_city) VALUES ('Araranguá', '1', '1')`
  );
  db.query(
    `INSERT INTO City (name, id_state, id_city) VALUES ('Osório', '2', '2')`
  );

  // cadastrar na tabela Address (id_address, id_city, place, district, cep, number, complement) 2 endereços de cada cidade
  db.query(
    `INSERT INTO Address (id_address, id_city, place, district, cep, number, complement) VALUES ('1', '1', 'Rua 1', 'Centro', '88010-000', '1', 'Casa')`
  );
  db.query(
    `INSERT INTO Address (id_address, id_city, place, district, cep, number, complement) VALUES ('2', '1', 'Rua 2', 'Centro', '88010-000', '2', 'Casa')`
  );
  db.query(
    `INSERT INTO Address (id_address, id_city, place, district, cep, number, complement) VALUES ('3', '2', 'Rua 3', 'Centro', '88010-000', '3', 'Casa')`
  );
  db.query(
    `INSERT INTO Address (id_address, id_city, place, district, cep, number, complement) VALUES ('4', '2', 'Rua 4', 'Centro', '88010-000', '4', 'Casa')`
  );

  db.query(
    `INSERT INTO Address (id_address, id_city, place, district, cep, number, complement) VALUES ('5', '1', 'Rua Governador Jorge Lacerda', 'Jardim das Avenidas', '88906-072', '3201', 'Campus')`
  );

  db.query(
    `INSERT INTO Campus_UFSC (id_campus, id_address, name) VALUES ('1', '5', 'Campus Araranguá')`
  );

  // cadastrar 3 usuarios na tabela User (id_user, id_campus, name, email, password, age, cpf) do campus ararangua com senha 123
  db.query(
    `INSERT INTO User (id_user, id_campus, name, email, password, age, cpf) VALUES ('1', '1', 'João', 'joao@gmail.com', '123', '20', '33993070046')`
  );
  db.query(
    `INSERT INTO User (id_user, id_campus, name, email, password, age, cpf) VALUES ('2', '1', 'Maria', 'maria@gmail.com', '123', '21', '93680795017')`
  );
  db.query(
    `INSERT INTO User (id_user, id_campus, name, email, password, age, cpf) VALUES ('3', '1', 'José', 'jose@gmail.com', '123', '23', '69820057043')`
  );

  db.query(`INSERT INTO Brand (id_brand, name) VALUES ('1', 'Fiat')`);

  db.query(
    `INSERT INTO Car (id_car, id_user, id_brand, plate, color, model) VALUES ('1', '1', '1', 'MIB9268', 'Vermelho', 'Palio 2020')`
  );

  // cadastrar  metodos pix, cartão, dinheiro na tabela Payment_Method (id_payment_method, name)
  db.query(
    `INSERT INTO Payment_Method (id_payment_method, name) VALUES ('1', 'Pix')`
  );

  db.query(
    `INSERT INTO Payment_Method (id_payment_method, name) VALUES ('2', 'Cartão')`
  );

  db.query(
    `INSERT INTO Payment_Method (id_payment_method, name) VALUES ('3', 'Dinheiro')`
  );

  // cadastrar um point de interesse para cada endereço na tabela POI (id_poi, id_address, name)
  db.query(
    `INSERT INTO POI (id_poi, id_address, name) VALUES ('1', '1', 'Ponto 1')`
  );
  db.query(
    `INSERT INTO POI (id_poi, id_address, name) VALUES ('2', '2', 'Ponto 2')`
  );
  db.query(
    `INSERT INTO POI (id_poi, id_address, name) VALUES ('3', '3', 'Ponto 3')`
  );
  db.query(
    `INSERT INTO POI (id_poi, id_address, name) VALUES ('4', '4', 'Ponto 4')`
  );

  db.query(
    `INSERT INTO POI (id_poi, id_address, name) VALUES ('5', '5', 'Ponto 5')`
  );

  db.query(`INSERT INTO Travel (id_travel, date) VALUES ('1', '2021-06-01')`);

  db.query(`INSERT INTO Travel (id_travel, date) VALUES ('2', '2021-06-01')`);

  db.query(`INSERT INTO Travel (id_travel, date) VALUES ('3', '2021-06-02')`);

  db.query(
    `INSERT INTO Payment_Method_Travel (id_payment_method, id_travel) VALUES ('1', '1')`
  );
  db.query(
    `INSERT INTO Travel_User (id_travel_user, id_user, id_travel, user_type, price) VALUES ('1', '1', '1', 'driver', '0')`
  );

  db.query(
    `INSERT INTO Travel_User (id_travel_user, id_user, id_travel, user_type, price) VALUES ('2', '2', '2', 'driver', '0')`
  );

  db.query(
    `INSERT INTO Travel_User (id_travel_user, id_user, id_travel, user_type, price) VALUES ('3', '1', '3', 'driver', '0')`
  );

  db.query(
    `INSERT INTO POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES ('1', '1', 'origin', '1')`
  );

  db.query(
    `INSERT INTO POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES ('1', '3', 'between', '2')`
  );

  db.query(
    `INSERT INTO POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES ('1', '4', 'destination', '3')`
  );

  db.query(
    `INSERT INTO POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES ('2', '3', 'origin', '1')`
  );

  db.query(
    `INSERT INTO POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES ('2', '4', 'between', '2')`
  );

  db.query(
    `INSERT INTO POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES ('2', '5', 'destination', '3')`
  );

  db.query(
    `INSERT INTO POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES ('3', '1', 'origin', '1')`
  );

  db.query(
    `INSERT INTO POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES ('3', '2', 'between', '2')`
  );

  db.query(
    `INSERT INTO POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES ('3', '5', 'destination', '3')`
  );
};

export default fakeData;
