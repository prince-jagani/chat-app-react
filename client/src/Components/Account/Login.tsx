import React, { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";

type loginType = {
  name?: string,
  username?: string,
  email: string,
  password: string
}

const UserChatBox: React.FC = () => {
  const [loginType, setLoginType] = useState(true);

  const [isLoginValid, setIsLoginValid] = useState(false);
  const [loginFormData, setLoginFormData] = useState<loginType>({
    email: '',
    password: ''
  });

  const submitLogin = () => {
    console.log(loginFormData);
    //  await axios.post(url, loginFormData);
  }

  return (
    <>
      <div className="bg-white flex-1 flex flex-col justify-center items-center">
        <h1 className="text-4xl">Login</h1>
        <div className="manual-login w-1/3">
          <form>
            <Input
              isRequired
              type="email"
              label="Email"
              className="m-4"
              value={loginFormData?.email}
              onChange={(e) => {
                setLoginFormData(data => ({ ...data, email: e.target.value }))
              }}
            />
            <Input
              isRequired
              type="password"
              label="Password"
              className="m-4"
              value={loginFormData?.password}
              onChange={(e) => {
                setLoginFormData(data => ({ ...data, password: e.target.value }))
              }}
            />
            {loginType ? (
              <></>
            ) : (
              <Input
                isRequired
                type="name"
                label="Name"
                className="m-4"
                value={loginFormData?.name}
                onChange={(e) => {
                  setLoginFormData(data => ({ ...data, email: e.target.value }))
                }}
              />
            )}
          </form>
          {loginType ? <Link className="m-4">Forgot Password?</Link> : <></>}
          <Button isDisabled={!isLoginValid} onClick={() => {
            submitLogin()
          }} className="m-4 w-full" color="primary">
            {loginType ? "Login" : "Register"}
          </Button>
          {loginType ? (
            <div className="m-4">
              New here? &nbsp;
              <Link
                onClick={() => {
                  setLoginType(false);
                  setLoginFormData(data => ({ ...data, username: '', name: '' }))
                }}
              >
                Register Now!
              </Link>
            </div>
          ) : (
            <div className="m-4">
              Already have an account? &nbsp;
              <Link
                onClick={() => {
                  setLoginType(true);
                  setLoginFormData(data => ({ email: data.email, password: data.password }))
                }}
              >
                Login Now!
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserChatBox;
