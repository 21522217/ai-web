import { SignUp } from "@clerk/nextjs";
 
const SignUpPage = () => (
  <SignUp afterSignUpUrl="/"/>
);
export default SignUpPage;