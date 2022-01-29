import { Segments, Joi } from "celebrate";

export = {
  [Segments.BODY]: {
    nome: Joi.string().required(),
    identificacao: Joi.string().required(),
    cargo: Joi.string(),
    imgName: Joi.string(),
    imgPath: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
    celular: Joi.object(),
    notebook: Joi.object(),
  },
};
