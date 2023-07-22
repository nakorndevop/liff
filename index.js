liff
  .init({
    liffId: '2000169129-xGaNW91k', // Use own liffId
    withLoginOnExternalBrowser: true, // Enable automatic login process
  })
  .then(() => {
    getLanguage = liff.getLanguage();
    getVersion = liff.getVersion();
    isInClient = liff.isInClient();
    isLoggedIn = liff.isLoggedIn();
    getOS = liff.getOS();
    getLineVersion = liff.getLineVersion();
    const context = liff.getContext();
    const accessToken = liff.getAccessToken();

    // clientID must same as LINE Login Channel ID and expires_in > 0
    fetch('https://api.line.me/oauth2/v2.1/verify?access_token=' + accessToken)
      .then((authenResponse) => authenResponse.json())
      .then((authenJSON) => console.log(authenJSON));

    //Get profile from Line server
    fetch('https://api.line.me/v2/profile', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((profileResponse) => profileResponse.json())
      .then((profileJSON) => {
        document.getElementById('pictureUrl').src = profileJSON.pictureUrl;
        document.getElementById('displayName').innerHTML = 'displayName: ' + profileJSON.displayName;
        document.getElementById('userId').innerHTML = 'userId: ' + profileJSON.userId;
      });

    document.getElementById('getLanguage').innerHTML = 'getLanguage: ' + getLanguage;
    document.getElementById('getVersion').innerHTML = 'getVersion: ' + getVersion;
    document.getElementById('isInClient').innerHTML = 'isInClient: ' + isInClient;
    document.getElementById('isLoggedIn').innerHTML = 'isLoggedIn: ' + isLoggedIn;
    document.getElementById('getOS').innerHTML = 'getOS: ' + getOS;
    document.getElementById('getLineVersion').innerHTML = 'getLineVersion: ' + getLineVersion;
    document.getElementById('context').innerHTML = 'context: ' + JSON.stringify(context);
    document.getElementById('accessToken').innerHTML = 'accessToken: ' + accessToken;
  });
