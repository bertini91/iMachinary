import { Router } from "express";
import {
  deletePerson,
  getPerson,
  getPersons,
  // patchPerson,
  postPerson,
} from "../controllers/person.controller";

const router = Router();

router.get("/", getPersons);
router.get("/:id", getPerson);
router.post("/", postPerson);
// router.patch("/", patchPerson);
router.delete("/", deletePerson);

export default router;
