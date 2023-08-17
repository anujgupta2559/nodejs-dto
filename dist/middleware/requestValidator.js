"use strict";
const { plainToInstance } = require("class-transformer");
const { validate } = require("class-validator");
const { UserDto } = require("../dto/User.dto");
module.exports = (req, res, next) => {
    const extract = (errors) => {
        let err = [];
        for (let error of errors) {
            err.push(Object.values(error.constraints).toString());
        }
        return err;
    };
    const dto = plainToInstance(UserDto, req.body, {
        excludeExtraneousValues: true,
    });
    validate(dto).then((errors) => {
        if (errors.length > 0) {
            res.status(400).json({ err: extract(errors), message: false });
        }
        else {
            next();
        }
    });
};
