var Multitoken = Multitoken || {};
Multitoken.Main = function() {
    var
    /*
    _init = function() {
    },
*/
    _fbInit = function() {
//        window.fbAsyncInit = function() {
//            console.log('FB.init');
//            FB.init({appId:FB_APP_ID, /*channelUrl:'//localhost/channel.html',*/ status:true, cookie:true});
//        };
        FB.init({appId:FB_APP_ID, status:true, cookie:true, xfbml:false});
    },
    _fbLogin = function(callback) {
        FB.getLoginStatus(function(response) {
            if(response.status === 'connected') {
                if(callback)
                    callback(response);
            }
            else {
                FB.login(function(response) {
                     if(response.authResponse) {
                        if(callback)
                            callback(response);
                     }
                }, {scope: 'user_birthday'});
            }
        });
    },

    _vkCallback,
    _vkInit = function() {
    },
    _vkLogin = function(callback) {
        this._vkCallback = callback;
        myWindow=window.open('https://oauth.vk.com/authorize?client_id='+VK_APP_ID+'&response_type=code&redirect_uri='+VK_REDIRECT_URI+'&display=popup','_blank','width=600,height=500');
    },
    _vkManager = function(params) {
        this._vkCallback(params);
    },

    _mailruCallback,
    _mailruInit = function() {
    },
    _mailruLogin = function(callback) {
        this._mailruCallback = callback;
        myWindow=window.open('https://connect.mail.ru/oauth/authorize?client_id='+MAILRU_APP_ID+'&response_type=code&redirect_uri='+MAILRU_REDIRECT_URI,'_blank','width=600,height=500');
    },
    _mailruManager = function(params) {
        this._mailruCallback(params);
    },
   
    _yaInit = function() {
    },
    _yaCallback,
    _yaLogin = function(callback) {
        this._yaCallback = callback;
        myWindow=window.open('https://oauth.yandex.ru/authorize?response_type=code&client_id='+YA_APP_ID+'&display=popup','_blank','width=600,height=500');
    },
    _yaManager = function(params) {
        this._yaCallback(params);
    },
    
    _goInit = function() {
    },
    _goCallback,
    _goLogin = function(callback) {
        this._goCallback = callback;
        myWindow=window.open('https://accounts.google.com/o/oauth2/auth?response_type=code&client_id='+GO_APP_ID+
            '&redirect_uri='+GO_REDIRECT_URI+
            '&scope=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email'+
            '&display=popup',
        '_blank','width=600,height=500');
    },
    _goManager = function(params) {
        this._goCallback(params);
    },
    _okInit = function() {
    },
    _okCallback,
    _okLogin = function(callback) {
        _okCallback = callback;
        myWindow=window.open('https://connect.ok.ru/oauth/authorize?client_id='+OK_APP_ID+
            '&scope=VALUABLE_ACCESS'+
            '&response_type=token'+
            '&redirect_uri=' + OK_REDIRECT_URI,
        '_blank','width=600,height=500');
    },
    _okManager = function(params) {
        _okCallback(params);
    },

    _twInit = function() {
    },
    _twCallback,
    _twLogin = function(callback) {
        this._twCallback = callback;
        myWindow=window.open(TW_AUTHORIZE_URL,'_blank','width=600,height=500');
    },
    _twManager = function(params) {
        this._twCallback(params);
    }

    ;
    return{
        init: function(name)
        {
            //_init()
            
            if(name=='fb')
                _fbInit();
            else if(name=='vk')
                _vkInit();
            else if(name=='mailru')
                _mailruInit();
            else if(name=='ya')
                _yaInit();
            else if(name=='go')
                _goInit();
            else if(name=='ok')
                _okInit();
            else if(name=='tw')
                _twInit();
        },
        login: function(name, callback) {
            if(name=='fb')
                _fbLogin(callback);
            else if(name=='vk')
                _vkLogin(callback);
            else if(name=='mailru')
                _mailruLogin(callback);
            else if(name=='ya')
                _yaLogin(callback);
            else if(name=='go')
                _goLogin(callback);
            else if(name=='ok')
                _okLogin(callback);
            else if(name=='tw')
                _twLogin(callback);
        },
        manager: function(name, params) {
            if(name=='vk')
                _vkManager(params);
            else if(name=='mailru')
                _mailruManager(params);
            else if(name=='ya')
                _yaManager(params);
            else if(name=='go')
                _goManager(params);
            else if(name=='ok')
                _okManager(params);
            else if(name=='tw')
                _twManager(params);
        }
    };
}();

