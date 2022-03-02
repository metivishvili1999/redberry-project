export const validFirstName = new RegExp ('^[a-zA-Z]{2,}');

export const validLastName = new RegExp ('^[a-zA-Z]{2,}');

export const validEmail = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export const validNumber = new RegExp('^5[0-9]{8}');