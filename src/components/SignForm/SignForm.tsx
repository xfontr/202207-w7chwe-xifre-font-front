import { InputStyled, LabelStyled, SignFormStyled } from "./SignFormStyled";

interface SignFormProps {
  isSignIn: boolean;
}

const SignForm = ({ isSignIn }: SignFormProps): JSX.Element => {
  return (
    <SignFormStyled>
      <div className="form-group">
        <LabelStyled htmlFor="field--name">Name</LabelStyled>
        <InputStyled
          type="text"
          id="field--name"
          placeholder="Your name"
          required={true}
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <LabelStyled htmlFor="field--password">Password</LabelStyled>
        <InputStyled
          type="password"
          id="field--password"
          placeholder="Make sure it's strong ;)"
          required={true}
          autoComplete="off"
        />
      </div>
      {!isSignIn && (
        <>
          <div className="form-group">
            <LabelStyled htmlFor="field--image">Profile picture</LabelStyled>
            <InputStyled
              type="text"
              id="field--image"
              placeholder="Url to your profile image"
              required={true}
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <LabelStyled htmlFor="field--biography">
              Something about you:
            </LabelStyled>
            <InputStyled
              type="text"
              id="field--biography"
              placeholder="Hi! I like turtles."
              required={true}
              autoComplete="off"
            />
          </div>
        </>
      )}

      <button>{isSignIn ? "Sign in" : "Sign up"}</button>
    </SignFormStyled>
  );
};

export default SignForm;
