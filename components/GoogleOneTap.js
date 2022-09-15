import googleOneTap from 'google-one-tap';
import React, { useEffect } from 'react';

const GoogleOneTap = () => {

  const options = {
    // required
    auto_select: false,
    // optional
    cancel_on_tap_outside: false,
    client_id:
    '1039293175388-91npaom9p11e23gmqju70ok0o8tsjlrl.apps.googleusercontent.com',
    context: 'signin', // optional
  };

  useEffect(() => {
    googleOneTap(options, (response) => {
      // Send response to server
      console.log('response', response);

    });
  }, []);

  return <div></div>;
};

export default GoogleOneTap;