import { Request, Response } from "express";
import Movie from "../models/Movie";
import Role from "../models/Role";

export const getMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findOne({
      where: {
        id,
      },
      include: Role,
    });
    if (movie) {
      res.json({ data: movie });
    }
    res.status(404).json({ data: {} });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error en la consulta de datos", error: error });
  }
};
export const getMovies = async (req: Request, res: Response) => {
  const movie = await Movie.findAll({
    include: Role,
  });
  if (movie.length > 0) {
    res.json({ data: movie });
  }
  res.status(404).json({ data: {} });
};
export const postMovie = async (req: Request, res: Response) => {
  const { body } = req.body;
  try {
    const role = await Role.create({});
    role.addPersonCasting(body.movie.casting);
    role.addPersonDirectors(body.movie.directors);
    role.addPersonProducers(body.movie.producers);
    const movie = await Movie.create({
      title: body.title,
      year: body.year,
    });
    role.addMovie(movie);
    res.json({ data: movie });
  } catch (error) {
    res.status(500).json({ msg: "Error en la carga de datos", error: error });
  }
};
export const patchMovie = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ msg: "patchMovie", id });
};
export const deleateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Movie.destroy({
      where: {
        id: id,
      },
    });
    res.json({ msg: "Se eliminó con exito" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar", error: error });
  }
};
