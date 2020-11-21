// validation
import Joi from 'joi'

const schema = Joi.object({
    idNumber: Joi.number()
        .positive()
        .required(),
    fullName: Joi.string()
        .min(6)
        .max(60)
        .required(),
    role: Joi.string()
        .min(3)
        .max(30)
        .required(),
    businessLocation: Joi.string()
        .min(3)
        .max(60),
    email: Joi.string()
        .email()
})

export default schema