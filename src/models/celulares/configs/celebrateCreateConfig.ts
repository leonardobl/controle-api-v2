import { Segments, Joi } from "celebrate";

export = {
  [Segments.PARAMS]: { imei1: Joi.string().required(), imei2: Joi.string() },
  [Segments.BODY]: {
    marca: Joi.string().required(),
    modelo: Joi.string().required(),
    imeis: Joi.array().strict().required(),
    imgName: Joi.string(),
    imgPath: Joi.string(),
  },
};
