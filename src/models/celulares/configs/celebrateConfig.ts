import { Segments, Joi } from "celebrate";

export = {
  [Segments.BODY]: {
    marca: Joi.string().required(),
    modelo: Joi.string().required(),
    imeis: Joi.array().strict().required(),
    imgName: Joi.string(),
    imgPath: Joi.string(),
  },
};
