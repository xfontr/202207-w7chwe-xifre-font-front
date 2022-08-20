import SignForm from "../../components/SignForm/SignForm";

const SignInPage = (): JSX.Element => {
  return (
    <>
      <h2>Sign in</h2>
      <SignForm isSignIn={true} />
    </>
  );
};

export default SignInPage;
