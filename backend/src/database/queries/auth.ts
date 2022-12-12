import { Query } from "../../types";
import { logQueryResult } from "../helpers/logQueryResult";

export const loginUser: Query<{ email: string; password: string }> = async (
  db,
  data
) => {
  try {
    const sql = `
    SELECT User.id_user, User.name, User.age, User.email, User.cpf, User.id_campus
    FROM User
    INNER JOIN Campus_UFSC ON Campus_UFSC.id_campus = User.id_campus
    WHERE User.email = :email AND User.password = :password;
    `;

    const [result] = await db.execute(sql, data);
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching user: ${(err as Error).toString()}`);
  }
};
