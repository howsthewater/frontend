const awsmobile = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:94fae9d4-f478-4baf-81f5-2c5be8fc7e79",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_rc036Clrl",
  aws_user_pools_web_client_id: "1d3m78p4gj7vma1mfr4bgehl9m",
  oauth: {
    domain: "howsthewater.auth.us-east-1.amazoncognito.com",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin"
    ],
    redirectSignIn: "http://localhost:3000/home",
    redirectSignOut: "http://localhost:3000/",
    responseType: "code"
  },
  federationTarget: "COGNITO_USER_POOLS"
};

export default awsmobile;
