/* Role:
-Id
-Title
-Year
-[Casting (Actors+Actresses]
-[Directors]
-[Producers] */

import { DataTypes, Model, Optional, Association } from "sequelize";
import Person from "./Person";

interface RoleAttributes {
  id: number;
  /* casting: Person[];
  directors: Person[];
  producers: Person[]; */
}

interface RoleCreationAttributes extends Optional<RoleAttributes, "id"> {}

export default class Role
  extends Model<RoleAttributes, RoleCreationAttributes>
  implements RoleAttributes
{
  public id!: number;
  public readonly casting?: Person[];
  public readonly directors?: Person[];
  public readonly producers?: Person[];
  public static associations: {
    casting: Association<Role, Person>;
    directors: Association<Role, Person>;
    producers: Association<Role, Person>;
  };

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

/* Role.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    casting: {},
    directors: {},
    producers: {},
  },
  { db }
); */
