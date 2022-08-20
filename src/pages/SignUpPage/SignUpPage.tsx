import SignForm from "../../components/SignForm/SignForm";

const SignUpPage = (): JSX.Element => {
  return (
    <>
      <h2>Sign up</h2>
      <SignForm isSignIn={false} />
    </>
  );
};

export default SignUpPage;
