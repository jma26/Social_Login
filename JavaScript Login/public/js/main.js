function startFb() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if (response.status === 'connected' && response.authResponse) {
        console.log('Logged in and authenticated');
        let token = response.accessToken;
        let userID = response.userID;
        FB.api('/me', 'get', { access_token: token, fields: 'name, gender, email, birthday, picture' }, function(response) {
            console.log(response);
            let info = '';
            info +=`<div class="card mb-3">
                        <h3 class="card-header"> ${response.name} </h3>
                        <div class="card-body">
                            <img style="height: 50px; width: 50px; display: block;" src="${response.picture.data.url}" alt="Card image">
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> Birthday: ${response.birthday}</li>
                            <li class="list-group-item"> Email: ${response.email} </li>
                        </ul>
                    </div>`

            document.querySelector('.profile').innerHTML = info;
        });
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
        document.querySelector('.headline').style.display = 'none';
        document.querySelector('.profile').style.display = 'block';
    } else {
        document.getElementById('fb-btn').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
        document.querySelector('.headline').style.display = 'block';
        document.querySelector('.profile').style.display = 'none';
    }
}

function logout() {
    FB.logout(function(response) {
        setElements(false); 
    });
}