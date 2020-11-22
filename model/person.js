// validation
import Joi from 'joi'

const schema = Joi.object({

    // personal info: firstName, lastName and login are required parameters
    firstName: Joi.string().min(3).max(40).required(),
    lastName: Joi.string().min(3).max(60).required(),
    login: Joi.string().required().min(6),
    
    // contact info: workPhone and workEmail are required parameters
    workPhone: Joi.number().integer().positive().required(),
    personalPhone: Joi.number().min(10).max(14),
    workEmail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'biz', 'ua']} }).required(),
    personalEmail: Joi.string().email({ minDomainSegments: 2 }),
    
    // employment: role and hourlyRate is required
    businessLocation: Joi.string().min(3).max(60),
    company: Joi.string().min(3).max(60),    
    role: Joi.string().min(3).max(60).required(),  
    hourlyRate: Joi.number().min(1).required(),
})

export default schema