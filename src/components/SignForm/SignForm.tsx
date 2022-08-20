import { useState } from "react";
import { InputStyled, LabelStyled, SignFormStyled } from "./SignFormStyled";

interface SignFormProps {
  isSignIn: boolean;
}

const initialState = {
  name: "",
  password: "",
  image: "",
  biography: "",
};

const SignForm = ({ isSignIn }: SignFormProps): JSX.Element => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [`${event.target.name}`]: event.target.value });
  };

  const handleSubmit = (): void => {};

  return (
    <SignFormStyled onSubmit={handleSubmit}>
      <div className="form-group">
        <LabelStyled htmlFor="field--name">Name</LabelStyled>
        <InputStyled
          type="text"
          id="field--name"
          name="name"
          placeholder="Your name"
          required={true}
          autoComplete="off"
          value={inputs.name}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </div>

      <div className="form-group">
        <LabelStyled htmlFor="field--password">Password</LabelStyled>
        <InputStyled
          type="password"
          id="field--password"
          name="password"
          placeholder="Make sure it's strong ;)"
          required={true}
          autoComplete="off"
          value={inputs.password}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </div>
      {!isSignIn && (
        <>
          <div className="form-group">
            <LabelStyled htmlFor="field--image">Profile picture</LabelStyled>
            <InputStyled
              type="text"
              id="field--image"
              name="image"
              placeholder="Url to your profile image"
              required={true}
              autoComplete="off"
              value={inputs.image}
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <LabelStyled htmlFor="field--biography">
              Something about you
            </LabelStyled>
            <InputStyled
              type="text"
              id="field--biography"
              name="biography"
              placeholder="Hi! I like turtles."
              required={true}
              autoComplete="off"
              value={inputs.biography}
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
        </>
      )}

      <button>{isSignIn ? "Sign in" : "Sign up"}</button>
    </SignFormStyled>
  );
};

export default SignForm;
