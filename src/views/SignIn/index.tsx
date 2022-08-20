import { Center } from "@src/components/Center";
import {
  Button,
  Input,
  LinkStyled,
  SignInDiv,
  SignInFormDiv,
  SignInFormTitle,
  SignInSocialButton,
  HalfDiv,
} from "./styled";
import { RiUser6Fill, RiKeyFill } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Container } from "@src/components/Container";
import React, { useState } from "react";
import { ErrorDiv, ErrorContent } from "@src/components/ErrorDiv";
import API from "@src/config/api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      target: { email, password },
    } = event as any;

    if (!isValidEmail(email.value)) {
      setError("Invalid email !!");
      return;
    }

    const response: any = await API.post("/signin", {
      password: password.value,
      email: email.value,
    })
      .then((value: any) => value.data)
      .catch((value: any) => value.response.data);

    /*  const response = await fetch("http://localhost:3000/api/signin", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        password: password.value,
        email: email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((value) => value.json()); */

    console.log(response);
    if (response) {
      if (response.success) {
        navigate("/profiles");
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
        <div>
          <SignInDiv>
            <HalfDiv
              style={{
                backgroundColor: "#9c9c9c",
                borderRadius: "10px",
              }}
            >
              <Center>
                <div>
                  <Container display="flex" alignItems="center">
                    <BsGoogle
                      style={{ transform: "translateX(40px)", zIndex: "1" }}
                      size={20}
                      color="white"
                    />
                    <SignInSocialButton backgorundColor="#dd4b39">
                      Sign In with Google
                    </SignInSocialButton>
                  </Container>
                  <Container display="flex" alignItems="center">
                    <FaFacebookF
                      style={{ transform: "translateX(40px)", zIndex: "1" }}
                      size={20}
                    />
                    <SignInSocialButton backgorundColor="#3B5998">
                      Sign In with Facebook
                    </SignInSocialButton>
                  </Container>
                </div>
              </Center>
            </HalfDiv>
            <HalfDiv>
              <Center>
                <SignInFormDiv>
                  <SignInFormTitle>Wellcome!</SignInFormTitle>
                  <form action="#" method="POST" onSubmit={handleSubmit}>
                    <Container display="flex" alignItems="center">
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
                      />
                    </Container>

                    <Container display="flex" alignItems="center">
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
                    </Container>

                    <Container
                      display="flex"
                      margin="10px 0px 0px 0px"
                      padding="0px 10px"
                      justifyContent="space-between"
                    >
                      <LinkStyled to="/recovery">Forgot Password?</LinkStyled>
                      <LinkStyled to="/signup">Sign Up</LinkStyled>
                    </Container>

                    <Container display="flex" justifyContent="end">
                      <Button type="submit">Login</Button>
                    </Container>
                  </form>
                </SignInFormDiv>
              </Center>
            </HalfDiv>
          </SignInDiv>
        </div>
      </Center>
    </>
  );
};

export default SignIn;
