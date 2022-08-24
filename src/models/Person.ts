/* Person:
-Id
-Name
-Last Name
-Age
-[Movies as Actor/Actress]
-[Movies as Director]
-[Movies as Producer] */
import { Model, Association, Optional } from "sequelize";
import Role from "./Role";

interface PersonAttributes {
  id: string;
  name: string;
  lastname: string;
  age: number;
}

// Pondremos que el id es opcional porque nos asignará la db
interface PersonCreationAttributes extends Optional<PersonAttributes, "id"> {}

export default class Person
  extends Model<PersonAttributes, PersonCreationAttributes>
  implements PersonAttributes
{
  public id!: string;
  public name!: string;
  public lastname!: string;
  public age!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly roles?: Role[];
  public static associations: {
    roles: Association<Person, Role>;
  };
}

/* Es decir, una Person puede tener varios roles en distintas películas (actor/actriz, director, productor) y puede tener más de 1 rol en una misma película (ser actor y director por ejemplo) */
