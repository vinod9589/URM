// import React from "react";
// import { useForm } from "react-hook-form";
// import { joiResolver } from "@hookform/resolvers/joi";
// import Joi from "joi";
// import { Box, TextField, Button } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";

// const schema = Joi.object({
//   firstName: Joi.string().min(3).required().messages({
//     "string.base": `"firstName" should be a type of 'text'`,
//     "string.empty": `"firstName" cannot be empty`,
//     "string.min": `"firstName" should have a minimum length of {#limit} characters`,
//     "any.required": `"firstName" is a required field`,
//   }),

//   lastName: Joi.string().min(3).required().messages({
//     "string.base": `"lastName" should be a type of 'text'`,
//     "string.empty": `"lastName" cannot be empty`,
//     "string.min": `"lastName" should have a minimum length of {#limit} characters`,
//     "any.required": `"lastName" is a required field`,
//   }),

//   email: Joi.string()
//     .email({ tlds: { allow: false } })
//     .required()
//     .messages({
//       "string.base": `"email" should be a type of 'text'`,
//       "string.email": `"email" must be a valid email address`,
//       "any.required": `"email" is a required field`,
//     }),

//   mobileNumber: Joi.string()
//     .pattern(/^[0-9]{10}$/)
//     .required()
//     .messages({
//       "string.base": `"mobileNumber" should be a type of 'text'`,
//       "string.pattern.base": `"mobileNumber" should be a valid 10-digit phone number`,
//       "any.required": `"mobileNumber" is a required field`,
//     }),

//   salary: Joi.number().min(0).required().messages({
//     "number.base": `"salary" should be a type of 'number'`,
//     "number.min": `"salary" should be at least {#limit}`,
//     "any.required": `"salary" is a required field`,
//   }),

//   department: Joi.string().min(3).required().messages({
//     "string.base": `"department" should be a type of 'text'`,
//     "string.empty": `"department" cannot be empty`,
//     "string.min": `"department" should have a minimum length of {#limit} characters`,
//     "any.required": `"department" is a required field`,
//   }),

//   address: Joi.string().min(5).required().messages({
//     "string.base": `"address" should be a type of 'text'`,
//     "string.empty": `"address" cannot be empty`,
//     "string.min": `"address" should have a minimum length of {#limit} characters`,
//     "any.required": `"address" is a required field`,
//   }),
// });

// interface IFormInput {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   salary: number;
//   department: string;
//   address: string;
// }

// interface UserDataFormProps{
//   closeModal:()=>void;
// }

// const UserDataForm:React.FC<UserDataFormProps> = ({closeModal}) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInput>({
//     resolver: joiResolver(schema),
//   });

//   const onSubmit = (data: IFormInput) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Box sx={{ textAlign: "end" }} onClick={()=>closeModal()}   >
//         <CancelIcon />
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           gap: 4,
//           marginTop: "10px",
//         }}
//       >
//         <Box>
//         <TextField
//           id="firstName"

//           label="First Name"
//           variant="outlined"
//           {...register("firstName")}
//         />
//         {errors.firstName && <span>{errors.firstName.message}</span>}
//         </Box>
//         <Box>
//         <TextField
//           id="lastName"
//           label="Last Name"
//           variant="outlined"
//           {...register("lastName")}
//         />
//         {errors.lastName && <span>{errors.lastName.message}</span>}
//         </Box>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           gap: 4,
//           marginTop: "10px",
//         }}
//       >
//         <Box>
//         <TextField
//           id="email"
//           label="Email"
//           variant="outlined"
//           {...register("email")}
//         />
//         {errors.email && <span>{errors.email.message}</span>}
//         </Box>
//         <Box>
//         <TextField
//           id="mobileNumber"
//           label="Mobile Number"
//           variant="outlined"
//           {...register("mobileNumber")}
//         />
//         {errors.mobileNumber && <span>{errors.mobileNumber.message}</span>}
//         </Box>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           gap: 4,
//           marginTop: "10px",
//         }}
//       >
//         <Box>
//         <TextField
//           id="salary"
//           label="Salary"
//           variant="outlined"
//           {...register("salary")}
//         />
//         {errors.salary && <span>{errors.salary.message}</span>}

//         </Box>
//         <Box>
//         <TextField
//           id="department"
//           label="Department"
//           variant="outlined"
//           {...register("department")}
//         />
//         {errors.department && <span>{errors.department.message}</span>}
//         </Box>
//       </Box>

//       <Box sx={{ marginTop: "10px" }}>
//         <TextField
//           id="address"
//           label="Address"
//           variant="outlined"
//           fullWidth
//           {...register("address")}
//         />
//         {errors.address && <span>{errors.address.message}</span>}
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           gap: 3,
//           marginTop: "30px",
//           justifyContent: "center",
//         }}
//       >
//         <Button variant="contained" type="button">
//           Cancel
//         </Button>
//         <Button variant="contained" type="submit">
//           Submit
//         </Button>
//       </Box>
//     </form>
//   );
// };

// export default UserDataForm;
import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { Box, TextField, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// Joi validation schema
const schema = Joi.object({
  firstName: Joi.string().min(3).required().messages({
    "string.base": `"firstName" should be a type of 'text'`,
    "string.empty": `"firstName" cannot be empty`,
    "string.min": `"firstName" should have a minimum length of {#limit} characters`,
    "any.required": `"firstName" is a required field`,
  }),

  lastName: Joi.string().min(3).required().messages({
    "string.base": `"lastName" should be a type of 'text'`,
    "string.empty": `"lastName" cannot be empty`,
    "string.min": `"lastName" should have a minimum length of {#limit} characters`,
    "any.required": `"lastName" is a required field`,
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": `"email" should be a type of 'text'`,
      "string.email": `"email" must be a valid email address`,
      "any.required": `"email" is a required field`,
    }),

  mobileNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.base": `"mobileNumber" should be a type of 'text'`,
      "string.pattern.base": `"mobileNumber" should be a valid 10-digit phone number`,
      "any.required": `"mobileNumber" is a required field`,
    }),

  salary: Joi.number().min(0).required().messages({
    "number.base": `"salary" should be a type of 'number'`,
    "number.min": `"salary" should be at least {#limit}`,
    "any.required": `"salary" is a required field`,
  }),

  department: Joi.string().min(3).required().messages({
    "string.base": `"department" should be a type of 'text'`,
    "string.empty": `"department" cannot be empty`,
    "string.min": `"department" should have a minimum length of {#limit} characters`,
    "any.required": `"department" is a required field`,
  }),

  address: Joi.string().min(5).required().messages({
    "string.base": `"address" should be a type of 'text'`,
    "string.empty": `"address" cannot be empty`,
    "string.min": `"address" should have a minimum length of {#limit} characters`,
    "any.required": `"address" is a required field`,
  }),
});

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  salary: number;
  department: string;
  address: string;
}

interface UserDataFormProps {
  closeModal: () => void;
}

const UserTodoFrom: React.FC<UserDataFormProps> = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: joiResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: IFormInput) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ textAlign: "end" }} onClick={() => closeModal()}>
        <CancelIcon />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          marginTop: "10px",
        }}
      >
        <Box>
          <TextField
            fullWidth
            id="firstName"
            label="Title"
            variant="outlined"
            {...register("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName.message : ""}
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName.message : ""}
          />
        </Box>
        <Box>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="Age"

        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          marginTop: "30px",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => closeModal()} variant="contained" type="button">
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default UserTodoFrom;
