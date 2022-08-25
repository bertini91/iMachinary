/* Person:
-Id
-Name
-Last Name
-Age
-[Movies as Actor/Actress]
-[Movies as Director]
-[Movies as Producer] */
import {
  Model,
  Association,
  Optional,
  DataTypes,
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
import db from "../config/db/connection";
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

  // directors asocitaion methods
  public addDirector!: BelongsToManyAddAssociationMixin<Person, number>;
  public addDirectors!: BelongsToManyAddAssociationsMixin<Person, number>;
  public createDirectors!: BelongsToManyCreateAssociationMixin<Person>;
  public getDirectors!: BelongsToManyGetAssociationsMixin<Person>;
  public hasDirector!: BelongsToManyHasAssociationMixin<Person, number>;
  public hasDirectors!: BelongsToManyHasAssociationsMixin<Person, number>;
  public removeDirectors!: BelongsToManyRemoveAssociationMixin<Person, number>;
  public removesDirectors!: BelongsToManyRemoveAssociationsMixin<
    Person,
    number
  >;
  public setDirectors!: BelongsToManySetAssociationsMixin<Person, number>;

  // producer asocitaion methods
  public addProducer!: BelongsToManyAddAssociationMixin<Person, number>;
  public addProducers!: BelongsToManyAddAssociationsMixin<Person, number>;
  public createProducers!: BelongsToManyCreateAssociationMixin<Person>;
  public getProducers!: BelongsToManyGetAssociationsMixin<Person>;
  public hasProducer!: BelongsToManyHasAssociationMixin<Person, number>;
  public hasProducers!: BelongsToManyHasAssociationsMixin<Person, number>;
  public removeProducers!: BelongsToManyRemoveAssociationMixin<Person, number>;
  public removesProducers!: BelongsToManyRemoveAssociationsMixin<
    Person,
    number
  >;
  public setProducers!: BelongsToManySetAssociationsMixin<Person, number>;

  // Casting asocitaion methods
  public addCasting!: BelongsToManyAddAssociationMixin<Person, number>;
  public addCastings!: BelongsToManyAddAssociationsMixin<Person, number>;
  public createCastings!: BelongsToManyCreateAssociationMixin<Person>;
  public getCastings!: BelongsToManyGetAssociationsMixin<Person>;
  public hasCasting!: BelongsToManyHasAssociationMixin<Person, number>;
  public hasCastings!: BelongsToManyHasAssociationsMixin<Person, number>;
  public removeCastings!: BelongsToManyRemoveAssociationMixin<Person, number>;
  public removesCastings!: BelongsToManyRemoveAssociationsMixin<Person, number>;
  public setCastings!: BelongsToManySetAssociationsMixin<Person, number>;

  public readonly roles?: Role[];
  public static associations: {
    roles: Association<Person, Role>;
  };
}
Person.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    lastname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "persons",
  }
);

/* Es decir, una Person puede tener varios roles en distintas películas (actor/actriz, director, productor) y puede tener más de 1 rol en una misma película (ser actor y director por ejemplo) */
