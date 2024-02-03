import { SignIn } from "@clerk/nextjs";
 
const SignInPage = () => (
  <SignIn afterSignInUrl="/dashboard"/>
);
export default SignInPage;