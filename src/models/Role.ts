/* Role:
-Id
-Title
-Year
-[Casting (Actors+Actresses]
-[Directors]
-[Producers] */

import {
  DataTypes,
  Model,
  Optional,
  Association,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyHasAssociationsMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManySetAssociationsMixin,
} from "sequelize";
import Person from "./Person";
import db from "../config/db/connection";
import Movie from "./Movie";

interface RoleAttributes {
  id: number;
}

interface RoleCreationAttributes extends Optional<RoleAttributes, "id"> {}

export default class Role
  extends Model<RoleAttributes, RoleCreationAttributes>
  implements RoleAttributes
{
  public id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // casting asocitaion methods
  public addPersonCasting!: BelongsToManyAddAssociationMixin<Person, number>;
  public addPersonsCasting!: BelongsToManyAddAssociationsMixin<Person, number>;
  public createPersonCasting!: BelongsToManyCreateAssociationMixin<Person>;
  public getPersonsCasting!: BelongsToManyGetAssociationsMixin<Person>;
  public hasPersonCasting!: BelongsToManyHasAssociationMixin<Person, number>;
  public hasPersonsCasting!: BelongsToManyHasAssociationsMixin<Person, number>;
  public removePersonCasting!: BelongsToManyRemoveAssociationMixin<
    Person,
    number
  >;
  public removePersonsCasting!: BelongsToManyRemoveAssociationsMixin<
    Person,
    number
  >;
  public setPersonsCasting!: BelongsToManySetAssociationsMixin<Person, number>;

  // directors asocitaion methods
  public addPersonDirectors!: BelongsToManyAddAssociationMixin<Person, number>;
  public addPersonsDirectors!: BelongsToManyAddAssociationsMixin<
    Person,
    number
  >;
  public createPersonDirectors!: BelongsToManyCreateAssociationMixin<Person>;
  public getPersonsDirectors!: BelongsToManyGetAssociationsMixin<Person>;
  public hasPersonDirectors!: BelongsToManyHasAssociationMixin<Person, number>;
  public hasPersonsDirectors!: BelongsToManyHasAssociationsMixin<
    Person,
    number
  >;
  public removePersonDirectors!: BelongsToManyRemoveAssociationMixin<
    Person,
    number
  >;
  public removePersonsDirectors!: BelongsToManyRemoveAssociationsMixin<
    Person,
    number
  >;
  public setPersonsDirectors!: BelongsToManySetAssociationsMixin<
    Person,
    number
  >;

  // producers asocitaion methods
  public addPersonProducers!: BelongsToManyAddAssociationMixin<Person, number>;
  public addPersonsProducers!: BelongsToManyAddAssociationsMixin<
    Person,
    number
  >;
  public createPersonProducers!: BelongsToManyCreateAssociationMixin<Person>;
  public getPersonsProducers!: BelongsToManyGetAssociationsMixin<Person>;
  public hasPersonProducers!: BelongsToManyHasAssociationMixin<Person, number>;
  public hasPersonsProducers!: BelongsToManyHasAssociationsMixin<
    Person,
    number
  >;
  public removePersonProducers!: BelongsToManyRemoveAssociationMixin<
    Person,
    number
  >;
  public removePersonsProducers!: BelongsToManyRemoveAssociationsMixin<
    Person,
    number
  >;
  public setPersonsProducers!: BelongsToManySetAssociationsMixin<
    Person,
    number
  >;

  // movie asocitaion methods
  public addMovie!: BelongsToManyAddAssociationMixin<Movie, number>;
  public createMovie!: BelongsToManyCreateAssociationMixin<Movie>;
  public getMovie!: BelongsToManyGetAssociationsMixin<Movie>;
  public hasMovie!: BelongsToManyHasAssociationMixin<Movie, number>;

  public readonly movie?: Movie;
  public readonly casting?: Person[];
  public readonly directors?: Person[];
  public readonly producers?: Person[];
  public static associations: {
    movie: Association<Role, Movie>;
    casting: Association<Role, Person>;
    directors: Association<Role, Person>;
    producers: Association<Role, Person>;
  };
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { sequelize: db, name: { singular: "Rol", plural: "Roles" } }
);
