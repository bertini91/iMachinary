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
} from "sequelize";
import Role from "./Role";

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
  public getProjects!: HasManyGetAssociationsMixin<Role>;
  public readonly roles?: Role[];
  public static associations: {
    roles: Association<Movie, Role>;
  };
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
