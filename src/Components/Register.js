import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  Radio,
  RadioGroup,
  Button,
  useToast,
  Img,
} from "@chakra-ui/react";
import swal from "sweetalert";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male"); // Default value for gender

  const submitForm = async (e) => {
    // Form validation
    e.preventDefault();

    if (!name || !email || !mobile || !age) {
      swal("Something Went Wrong", "Please Fill All Details");
      return;
    }

    const res = fetch(
      "https://habeeb-bgmi-default-rtdb.firebaseio.com/habeebBGMI.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          paymentScreenshot,
          age,
          gender,
        }),
      }
    );
    if (res) {
      swal("Data Submit", "You clicked the button!", "success");
    } else {
      swal("Something Went Wrong", "Please Fill All Details");
    }

    // Log form values to console
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Mobile:", mobile);
    // console.log("Payment Screenshot:", paymentScreenshot);
    // console.log("Age:", age);
    // console.log("Gender:", gender);
    // alert(name + email + mobile + paymentScreenshot + age + gender);

    setName("");
    setEmail("");
    setMobile("");
    setPaymentScreenshot("");
    setAge("");
    setGender("");

    // You can perform further actions here like sending the form data to a server
  };

  const Rest = () => {
    setName("");
    setEmail("");
    setMobile("");
    setPaymentScreenshot("");
    setAge("");
    setGender("");
  };

  return (
    <>
      <center>
        <div id="Qrscanner" className="nnpp"></div>
      </center>

      <br />

      <Box
        p={4}
        maxWidth={{ base: "100%", sm: "500px" }}
        margin="auto"
        id="register"
      >
        <Heading as="h1" mb={8} textAlign="center" className="container">
          Registration Form
        </Heading>

        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              isRequired
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              isRequired
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
            <Input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              isRequired
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="age">Age</FormLabel>
            <Input
              type="number"
              id="age"
              placeholder="Enter your age"
              isRequired
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <RadioGroup
              id="gender"
              value={gender}
              onChange={(e) => setGender(e)}
            >
              <Stack direction="row">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
            <Button
              onClick={submitForm}
              type="button"
              colorScheme="blue"
              w="100%"
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                Rest();
              }}
              type="button"
              colorScheme="blue"
              w="100%"
            >
              Reset
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Register;
