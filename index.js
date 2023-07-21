liff
  .init({
    liffId: '2000169129-xGaNW91k', // Use own liffId
    withLoginOnExternalBrowser: true, // Enable automatic login process
  })
  .then(() => {
    lang = liff.getLanguage();
    ver = liff.getVersion();
    cli = liff.isInClient();
    login = liff.isLoggedIn();
    os = liff.getOS();
    line_ver = liff.getLineVersion();

    const context = liff.getContext();
    console.log(context);

    const accessToken = liff.getAccessToken();
    console.log(accessToken);

    // clientID must same as LINE Login Channel ID and expires_in > 0
    fetch('https://api.line.me/oauth2/v2.1/verify?access_token=' + accessToken)
      .then((authenResponse) => authenResponse.json())
      .then((authenJSON) => console.log(authenJSON));

    //Get profile
    fetch('https://api.line.me/v2/profile', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((profileResponse) => profileResponse.json())
      .then((profileJSON) => console.log(profileJSON));

    //Get profile
    fetch('https://api.line.me/v2/profile', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((profileResponse) => profileResponse.json())
      .then(
        (profileJSON) => {
          document.getElementById("pictureUrl").src = profileJSON.pictureUrl;
        }  
      )

    //document.getElementById("profileImage").src = profileJSON.pictureUrl;

    /*
    document.getElementById('app').innerHTML =
      '' +
      'getLanguage: ' +
      lang +
      '<br>' +
      'getVersion: ' +
      ver +
      '<br>' +
      'isInClient: ' +
      cli +
      '<br>' +
      'isLoggedIn: ' +
      ver +
      '<br>' +
      'isLoggedIn: ' +
      login +
      '<br>' +
      'getOS: ' +
      os +
      '<br>' +
      'getLineVersion: ' +
      line_ver;

    document.getElementById('profile').innerHTML = 'accessToken: ' + accessToken;
    */
  });
