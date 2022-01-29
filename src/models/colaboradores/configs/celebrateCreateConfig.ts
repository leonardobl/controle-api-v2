import { Segments, Joi } from "celebrate";

export = {
  [Segments.BODY]: {
    nome: Joi.string().required(),
    identificacao: Joi.string().required(),
    cargo: Joi.string(),
    cd: Joi.string(),
  },
};
