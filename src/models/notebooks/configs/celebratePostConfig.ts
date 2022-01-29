import { Segments, Joi } from "celebrate";

export = {
  [Segments.BODY]: {
    marca: Joi.string().required(),
    modelo: Joi.string().required(),
    numeroSerie: Joi.string(),
    numeroPatrimonio: Joi.string(),
    imgPath: Joi.string(),
    imgName: Joi.string(),
  },
};
