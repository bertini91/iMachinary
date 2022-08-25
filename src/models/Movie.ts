/* Movie:
-Id
-Title
-Year
-[Casting (Actors+Actresses]
-[Directors]
-[Producers] */

import {
  Model,
  Optional,
  Association,
  HasManyGetAssociationsMixin,
  CreationOptional,
  DataTypes,
  BelongsToManyAddAssociationMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyHasAssociationMixin
} from "sequelize";
import Role from "./Role";
import db from "../config/db/connection";

interface MovieAttributes {
  id: number;
  title: string;
  year: number;
  // roles: Role[];
}

interface MovieCreationAttributes extends Optional<MovieAttributes, "id"> {}

export default class Movie
  extends Model<MovieAttributes, MovieCreationAttributes>
  implements MovieAttributes
{
  public id!: CreationOptional<number>;
  public title!: string;
  public year!: number;

  // role asocitaion method
  public addRole!: BelongsToManyAddAssociationMixin<Role, number>;
  public createRole!: BelongsToManyCreateAssociationMixin<Role>;
  public getRole!: BelongsToManyGetAssociationsMixin<Role>;
  public getRoless!: HasManyGetAssociationsMixin<Role>;
  public hasRole!: BelongsToManyHasAssociationMixin<Role, number>;

  public readonly roles?: Role[];
  public static associations: {
    roles: Association<Movie, Role>;
  };
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "movies",
  }
);
