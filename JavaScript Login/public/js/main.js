function startFb() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log('Logged in and authenticated');
        console.log(response);
        setElements(true);
    } else {
        console.error('Not logged in or authenticated');
        setElements(false);
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function setElements(isLoggedIn) {
    if (isLoggedIn) {
        document.getElementById('fb-btn').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    } else {
        document.getElementById('fb-btn').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    }
}

function logout() {
    FB.logout(function(response) {
        setElements(false); 
    });
}