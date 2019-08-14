import Amplify, { Auth } from "aws-amplify";

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:94fae9d4-f478-4baf-81f5-2c5be8fc7e79",
    region: "us-east-1",
    userPoolId: "us-east-1_rc036Clrl",
    userPoolWebClientId: "1d3m78p4gj7vma1mfr4bgehl9m"
  }
});

const currentConfig = Auth.configure();
export default currentConfig;
