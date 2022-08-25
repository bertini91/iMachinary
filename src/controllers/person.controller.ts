import { Request, Response } from "express";
import Person from "../models/Person";
import Role from "../models/Role";

export const getPerson = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const person = await Person.findOne({
      where: {
        id,
      },
      include: Role,
    });
    if (person) {
      res.json({ data: person });
    }
    res.status(404).json({ data: {} });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error en la consulta de datos", error: error });
  }
};

export const getPersons = async (req: Request, res: Response) => {
  try {
    const person = await Person.findAll({ include: Role });
    if (person.length > 0) {
      res.json({ data: person });
    }
    res.status(404).json({ data: {} });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error en la consulta de datos", error: error });
  }
};
export const postPerson = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const person = await Person.create(body);
    res.json({ data: person });
  } catch (error) {
    res.status(500).json({ msg: "Error en la carga de datos", error: error });
  }
};

export const deletePerson = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Person.destroy({
      where: {
        id: id,
      },
    });
    res.json({ msg: "Se eliminó con exito" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar", error: error });
  }
};
