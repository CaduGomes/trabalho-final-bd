CREATE TABLE State (
  id_state varchar(255) PRIMARY KEY,
  name varchar(255)
);
CREATE TABLE City (
  id_city varchar(255) PRIMARY KEY,
  id_state varchar(255),
  name varchar(255),
  FOREIGN KEY(id_state) REFERENCES State (id_state)
);
CREATE TABLE Address (
  id_address varchar(255) PRIMARY KEY,
  id_city varchar(255),
  place varchar(255),
  district varchar(255),
  cep varchar(255),
  number varchar(255),
  complement varchar(255),
  FOREIGN KEY(id_city) REFERENCES City (id_city)
);
CREATE TABLE Campus_UFSC (
  id_campus varchar(255) PRIMARY KEY,
  id_address varchar(255),
  name varchar(255),
  FOREIGN KEY(id_address) REFERENCES Address (id_address)
);
CREATE TABLE User (
  id_user varchar(255) PRIMARY KEY,
  id_campus varchar(255),
  name varchar(255),
  age varchar(255),
  email varchar(255),
  cpf varchar(255),
  password varchar(255),
  FOREIGN KEY(id_campus) REFERENCES Campus_UFSC (id_campus)
);
CREATE TABLE Brand (
  id_brand varchar(255) PRIMARY KEY,
  name varchar(255)
);
CREATE TABLE Car (
  id_car varchar(255) PRIMARY KEY,
  id_user varchar(255),
  id_brand varchar(255),
  plate varchar(255),
  color varchar(255),
  model varchar(255),
  FOREIGN KEY(id_user) REFERENCES User (id_user),
  FOREIGN KEY(id_brand) REFERENCES Brand (id_brand)
);
CREATE TABLE Travel (id_travel varchar(255) PRIMARY KEY, date Date);
CREATE TABLE Payment_Method (
  id_payment_method varchar(255) PRIMARY KEY,
  name varchar(255)
);
CREATE TABLE Payment_Method_Travel (
  id_payment_method varchar(255),
  id_travel varchar(255),
  PRIMARY KEY(id_payment_method, id_travel),
  FOREIGN KEY(id_payment_method) REFERENCES Payment_Method (id_payment_method),
  FOREIGN KEY(id_travel) REFERENCES Travel (id_travel)
);
CREATE TABLE Travel_User (
  id_travel_user varchar(255) PRIMARY KEY,
  id_user varchar(255) UNIQUE,
  id_travel varchar(255) UNIQUE,
  user_type varchar(255),
  price varchar(255),
  FOREIGN KEY(id_user) REFERENCES User (id_user),
  FOREIGN KEY(id_travel) REFERENCES Travel (id_travel)
);
CREATE TABLE POI (
  id_poi varchar(255) PRIMARY KEY,
  id_address varchar(255),
  name varchar(255),
  FOREIGN KEY(id_address) REFERENCES Address (id_address)
);
CREATE TABLE POI_Travel_User (
  id_travel_user varchar(255),
  id_poi varchar(255),
  type varchar(255),
  PRIMARY KEY(id_travel_user, id_poi),
  FOREIGN KEY(id_travel_user) REFERENCES Travel_User (id_travel_user),
  FOREIGN KEY(id_poi) REFERENCES POI (id_poi)
);