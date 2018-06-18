window.fbAsyncInit = function() {
    FB.init({
        appId      : '177628672915663',
        status     : true,
        cookie     : true,
        xfbml      : true,
        version    : 'v3.0'
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

// Load SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id; js.async = true;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log('Logged in and authenticated');
    } else {
        console.error('Not logged in or authenticated');
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}