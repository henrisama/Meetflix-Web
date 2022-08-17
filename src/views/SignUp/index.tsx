import { Center } from "@src/components/Center";
import { Container } from "@src/components/Container";
import { Button, Input, SignUpDiv, SignUpFormDiv, InputDiv } from "./styled";
import { RiUser6Fill, RiKeyFill, RiCalendarEventFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import API from "@src/config/api";
import { ErrorContent, ErrorDiv } from "@src/components/ErrorDiv";
import { IoMdClose } from "react-icons/io";

const SignUp = () => {
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      target: { firstName, lastName, born, email, password, confirmPassword },
    } = event as any;

    // restrict child access
    const currentYear = parseInt(new Date(Date.now()).getFullYear().toString());
    if (parseInt(born.value.split("-")[0]) + 9 > currentYear) {
      setError("You need to be over 10 years old");
      return false;
    }

    // email varification
    if (!isValidEmail(email.value)) {
      setError("Invalid email !!");
      return;
    }

    // passwords don't match
    if (password.value !== confirmPassword.value) {
      setError("Passwords don`t match");
      return false;
    }

    const response: any = await API("/signup", {
      method: "POST",
      data: {
        firstName: firstName.value,
        lastName: lastName.value,
        born: born.value,
        password: password.value,
        email: email.value,
      },
      responseType: "json",
    })
      .then((value: any) => value.data)
      .catch((value: any) => value.response.data);

    if (response) {
      if (response.success) {
        window.location.pathname = "/signin";
      } else {
        setError(response.message);
      }
    }
  };

  return (
    <>
      <ErrorDiv>
        {error && (
          <div style={{ position: "fixed" }}>
            <ErrorContent>
              <div></div>
              <p>{error}</p>
              <IoMdClose
                size={25}
                cursor="pointer"
                title="close"
                onClick={() => setError("")}
              />
            </ErrorContent>
          </div>
        )}
      </ErrorDiv>
      <Center>
        <SignUpDiv>
          <Center>
            <SignUpFormDiv>
              <Container
                width="100%"
                textAlign="start"
                margin="0px 0px 20px 0px"
              >
                <Link to="/signin" style={{ color: "#dadada" }}>
                  <HiArrowNarrowLeft size={50} cursor="pointer" />
                </Link>
              </Container>

              <form action="/" method="POST" onSubmit={handleSubmit}>
                <InputDiv>
                  <BsPencilSquare
                    style={{
                      transform: "translateX(30px)",
                    }}
                    size={20}
                    color="#bdbdbd"
                  />
                  <Input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    minLength={2}
                    maxLength={15}
                    required
                  />
                </InputDiv>

                <InputDiv>
                  <BsPencilSquare
                    style={{ transform: "translateX(30px)" }}
                    size={20}
                    color="#bdbdbd"
                  />
                  <Input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    minLength={2}
                    maxLength={15}
                    required
                  />
                </InputDiv>

                <InputDiv>
                  <RiCalendarEventFill
                    style={{ transform: "translateX(30px)" }}
                    size={20}
                    color="#bdbdbd"
                  />
                  <Input
                    type="date"
                    placeholder="Born"
                    defaultValue="2018-07-22"
                    name="born"
                    min="1950-01-01"
                    max={new Date().toISOString().split("T")[0]}
                    required
                  />
                </InputDiv>

                <InputDiv>
                  <RiUser6Fill
                    style={{ transform: "translateX(30px)" }}
                    size={20}
                    color="#bdbdbd"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    style={{ textTransform: "lowercase" }}
                  />
                </InputDiv>

                <InputDiv>
                  <RiKeyFill
                    style={{ transform: "translateX(30px)" }}
                    size={20}
                    color="#bdbdbd"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength={8}
                    maxLength={30}
                    required
                  />
                </InputDiv>

                <InputDiv>
                  <RiKeyFill
                    style={{ transform: "translateX(30px)" }}
                    size={20}
                    color="#bdbdbd"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    minLength={8}
                    maxLength={30}
                    required
                  />
                </InputDiv>

                <Button type="submit">Sign Up</Button>
              </form>
            </SignUpFormDiv>
          </Center>
        </SignUpDiv>
      </Center>
    </>
  );
};

export default SignUp;
