import { Connection } from "mysql2/promise";
import { Query } from "../../types";
import { logQueryResult } from "../helpers/logQueryResult";

export const updateCarModel = async (db: Connection) => {
    try {
        const sql = `
        update Car SET Car.model = "Focus 2016" where Car.id_car = "1";
        `;

        const [result] = await db.execute(sql);
        logQueryResult(result);

        return result as any;
    } catch (err) {
        console.log(`Error searching user: ${(err as Error).toString()}`);
    }
}

export const updateCarColor = async (db: Connection) => {
    try {
        const sql = `
        update Car SET Car.color = "Azul" where Car.id_car = "1";
        `;

        const [result] = await db.execute(sql);
        logQueryResult(result);

        return result as any;
    } catch (err) {
        console.log(`Error searching user: ${(err as Error).toString()}`);
    }
}

export const updateUserPassword = async (db: Connection) => {
    try {
        const sql = `
        update User SET User.password = "12345678" where User.id_user = "1";
        `;

        const [result] = await db.execute(sql);
        logQueryResult(result);

        return result as any;
    } catch (err) {
        console.log(`Error searching user: ${(err as Error).toString()}`);
    }
}

export const updateUserCampus = async (db: Connection) => {
    try {
        const sql = `
        update User SET user.id_campus = "5" where User.id_user = "1";
        `;

        const [result] = await db.execute(sql);
        logQueryResult(result);

        return result as any;
    } catch (err) {
        console.log(`Error searching user: ${(err as Error).toString()}`);
    }
}

export const updateUserEmail = async (db: Connection) => {
    try {
        const sql = `
        update User SET user.email = "joao1@gmail.com" where User.id_user = "1";
        `;

        const [result] = await db.execute(sql);
        logQueryResult(result);

        return result as any;
    } catch (err) {
        console.log(`Error searching user: ${(err as Error).toString()}`);
    }
}

export const deleteCar = async (db: Connection) => {
    try {
        const sql = `
        delete from Car where car.id_Car = "4";
        `;

        const [result] = await db.execute(sql);
        logQueryResult(result);

        return result as any;
    } catch (err) {
        console.log(`Error searching user: ${(err as Error).toString()}`);
    }
}


