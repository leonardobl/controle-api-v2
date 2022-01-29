import { Joi, Segments } from "celebrate";

export = {
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
};
