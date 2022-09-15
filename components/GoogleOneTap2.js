import React from "react";
import dynamic from 'next/dynamic'

const GoogleOneTap2 = () => {
  const GoogleOneTapLogin = dynamic(() => import("react-google-one-tap-login"));
  return (
    <GoogleOneTapLogin
      onError={(error) => {
        console.log("ghh");
      }}
      onSuccess={(response) => {
        console.log(response);
        CreateProfile(response);
      }}
      googleAccountConfigs={{
        client_id:
          "1039293175388-91npaom9p11e23gmqju70ok0o8tsjlrl.apps.googleusercontent.com",
      }}
    />
  );
};

export default GoogleOneTap2;
