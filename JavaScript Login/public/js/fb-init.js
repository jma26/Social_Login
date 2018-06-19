window.fbAsyncInit = function() {
    FB.init({
        appId      : '177628672915663',
        status     : true,
        cookie     : true,
        xfbml      : true,
        version    : 'v3.0'
    });
    // Fire startFB in main.js when SDK completely loads
    startFb();
};

// Load SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id; js.async = true;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));