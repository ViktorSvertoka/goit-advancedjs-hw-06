/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Gender = "male" | "female";

let myGender: Gender;

myGender = "male";
myGender = "female";

export {};
