import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { fetchRegister } from "../../api";
function Register() {
  return (
    <div>
      <Flex align="center" justifyContent="center" width="full">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Register</Heading>
          </Box>
          <Box my={5}>
            {/* {formik.errors.general && (
              <Alert status="error">{formik.errors.general}</Alert>
            )} */}
          </Box>
          <Box>
            {/* <form onSubmit={formik.handleSubmit}> */}
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input
                name="email"
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                //   value={formik.values.email}
                //   isInvalid={formik.touched.email && formik.errors.email}
              ></Input>
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                //   value={formik.values.password}
                //   isInvalid={formik.touched.password && formik.errors.password}
              ></Input>
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Password Confirm</FormLabel>
              <Input
                name="passwordConfirm"
                type="password"
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                //   value={formik.values.passwordConfirm}
                //   isInvalid={
                //     formik.touched.passwordConfirm &&
                //     formik.errors.passwordConfirm
                //   }
              ></Input>
            </FormControl>
            <Button mt="4" width="full" type="submit">
              Register
            </Button>
            {/* </form> */}
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Register;
