import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Neteisingai įrašitas el. paštas').isEmail(),
  body('password', 'Slaptažodis turi sudaryti min. 5 simbolius').isLength({ min: 5 })
];

export const registerValidation = [
  body('email', 'Neteisingai įrašitas el. paštas').isEmail(),
  body('password', 'Slaptažodis turi sudaryti min. 5 simbolius').isLength({ min: 5 }),
  body('fullName', 'Iveskite varda').isLength({ min: 3 }),
  body('avatarUrl', 'Neteisingai įrašita nuorodą').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Įveskite pavadinimą').isLength({ min: 3 }).isString(),
  body('text', 'Įveskite tekstą').isLength({ min: 3 }).isString(),
  body('tags', "Neteisingas tag'u formatas").optional().isString(),
  body('imageUrl', 'Netinkama nuoroda').optional().isString(),
];