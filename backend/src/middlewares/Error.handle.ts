import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err: Error, req, res) => {
  console.log(err);
  return res.status(500).json({ message: "error en el servidor" });
};
