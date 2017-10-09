function initClient(setSignInCB, setUserCB) {
  gapi.auth2
    .init({
      client_id:
        '637692053915-94abilb5e1bjipjmq0n139il2a83c2hg.apps.googleusercontent.com'
    })
    .then(() => {
      // listen for sign-in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(isSignedIn => {
        updateSignInStatus(isSignedIn, setSignInCB);
      });

      // handle initial sign-in state
      updateSignInStatus(
        gapi.auth2.getAuthInstance().isSignedIn.get(),
        setSignInCB
      );
      setUserCB(getCurrentUser());
    });
}

function updateSignInStatus(isSignedIn, setSignInCB) {
  setSignInCB(isSignedIn);
}

function getCurrentUser() {
  return gapi.auth2.getAuthInstance().currentUser.get();
}

function handleSignInClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

function getSignInStatus() {
  return userSignedIn;
}

export {
  initClient as default,
  getSignInStatus,
  handleSignInClick,
  handleSignOutClick
};
