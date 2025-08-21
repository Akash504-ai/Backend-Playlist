// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);         

import {z, ZodError} from 'zod';

//---this is an example of how to use zod for validation----->
// const  ageSchema = z.number().min(18).max(100).int();
// const userAge = 17

// // const parseUserAge = ageSchema.parse(userAge);
// // console.log(`User age is valid: ${parseUserAge}`);
// //now let's put these 2 lines of code in a try catch block

// try {
//   const parseUserAge = ageSchema.parse(userAge);
//   console.log(`User age is valid: ${parseUserAge}`);
// } catch (error) {
//   //instanceof is a javascript operator that checks if an object is an instance of a specific class
//   if (error instanceof ZodError) {
//     console.error("Validation error:", error.issues[0].message);
//   } else {
//     console.error("Unexpected error:", error);
//   }
// }


//now let's export the PORT variable
//z.coerce is a shortcut for:Accepting a value as a string,Then automatically converting (coercing) it into another type.
const portSchema = z.coerce.number().min(3000).max(8000).int().default(3000);
export const PORT = portSchema.parse(process.env.PORT);
