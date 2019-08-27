const awsmobile = {
  aws_project_region: "us-east-2",
  aws_cognito_identity_pool_id:
    "us-east-2:f2bb91e8-4f54-486a-9e5c-9aa7fc044478",
  aws_cognito_region: "us-east-2",
  aws_user_pools_id: "us-east-2_4MVc3pg1Z",
  aws_user_pools_web_client_id: "3o1or7fct0bb9otberjkq03o2d",
  oauth: {
    domain: "frontend5e1c038e-5e1c038e-dev.auth.us-east-2.amazoncognito.com",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin"
    ],
    redirectSignIn: "http://localhost:3000/home",
    redirectSignOut: "http://localhost:3000/",
    responseType: "token"
  },
  federationTarget: "COGNITO_USER_POOLS"
};

export default awsmobile;
