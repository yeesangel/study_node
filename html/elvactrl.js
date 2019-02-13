
/* eslint-disable */
(function () {
    window.elvah5 = window.elvah5 || {}
    var util = {
        extend: function (o, ch) {
            o && arguments[2] && extend(o, arguments[2]);
            if (o && ch && typeof ch === 'object') {
                for (var v in ch) {
                    ch.hasOwnProperty(v) && ch[v] && (o[v] = ch[v]);
                }
            }
            return o;
        },
    }
    var meta=document.createElement('meta')
    meta.setAttribute('name','viewport')
    meta.setAttribute('content','width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no')
    document.head.appendChild(meta)
    elvah5.conf = {
        appid: '',
        userid: '',
        language: '',
        gamename: '',
        autoEntrance: '',
        domain: 'https://cs30.net/elva/elvah5/#'
    }
    elvah5.init = function (elva_data, callBack) {
        elvah5.conf.hsTags=elvah5.conf.hsTags?elvah5.conf.hsTags:'*'
        elvah5.conf.sdkVersion=elvah5.conf.sdkVersion?elvah5.conf.sdkVersion:'1.3.9'
        var userid=(new Date()).valueOf()
        if(!elvah5.conf.userUid||elvah5.conf.userUid==='undefined'){
          if(localStorage.getItem('localAIhelpUser')){
            elvah5.conf.userUid=localStorage.getItem('localAIhelpUser')
          }else{
            elvah5.conf.userUid=userid
            localStorage.setItem('localAIhelpUser',userid)
          }
        }
        if(!elvah5.conf.userName||elvah5.conf.userName==='undefined'){
          if(localStorage.getItem('localAIhelpUser')){
            elvah5.conf.userName='User'+localStorage.getItem('localAIhelpUser')
          }else{
            elvah5.conf.userName='User'+userid
          }
        }
        util.extend(elvah5.conf, elva_data)
        var elvaBox = document.createElement("div")
        elvaBox.setAttribute("id", "elvah5Div")
        elvaBox.style.display = 'none'
        elvaBox.className = "elvaBox"

        var formLink = document.createElement('span');
        var closeBtn = document.createElement("div")
        formLink.className = 'form-link'
        closeBtn.className = "close"
        
        elvaBox.appendChild(closeBtn);
        elvaBox.appendChild(formLink);
        if (closeBtn.attachEvent) {
            closeBtn.attachEvent('onclick', close)
        } else {
            closeBtn.addEventListener('click', close)
        }
        var ifr = document.createElement('iframe')
        ifr.setAttribute('id', 'frmElva')
        ifr.setAttribute('name', 'frmElva')
        ifr.style.width = "100%"
        ifr.style.height = "100%"
        ifr.setAttribute("frameborder", "no")
        ifr.setAttribute("border", "0")
        ifr.setAttribute('src', elvah5.conf.domain + '/gameid/' + elvah5.conf.appId + '/gameuid/' + elvah5.conf.userUid + '/gameName/' + elvah5.conf.appName + '/username/' + elvah5.conf.userName + '/lan/' + elvah5.conf.language + '/sdkVersion/' + elvah5.conf.sdkVersion + '/hsTags/' + elvah5.conf.hsTags+'?autoEntrance='+elvah5.conf.autoEntrance)
        if(typeof(callBack) === 'function') callBack(ifr) // 挂在 iframe
        elvaBox.appendChild(ifr)
        document.body.appendChild(elvaBox)
    }
    function close() {
        var divD = document.getElementById("elvah5Div");
        if (divD.style.display == "none") {
        }
        else {
            divD.style.display = "none";
        }
    }
    elvah5.show = function () {
        elvah5.conf.hsTags=elvah5.conf.hsTags?elvah5.conf.hsTags:'*'
        elvah5.conf.sdkVersion=elvah5.conf.sdkVersion?elvah5.conf.sdkVersion:'1.3.9'
        var userid=(new Date()).valueOf()
        if(!elvah5.conf.userUid||elvah5.conf.userUid==='undefined'){
          if(localStorage.getItem('localAIhelpUser')){
            elvah5.conf.userUid=localStorage.getItem('localAIhelpUser')
          }else{
            elvah5.conf.userUid=userid
            localStorage.setItem('localAIhelpUser',userid)
          }
        }
        if(!elvah5.conf.userName||elvah5.conf.userUid==='undefined'){
          if(localStorage.getItem('localAIhelpUser'||elvah5.conf.userName==='undefinedArenaName')){
            elvah5.conf.userName='User'+localStorage.getItem('localAIhelpUser')
          }else{
            elvah5.conf.userName='User'+userid
          }
        }
        var ifr = document.getElementById('frmElva') || document.createElement('iframe')
        ifr.setAttribute('src', elvah5.conf.domain + '/gameid/' + elvah5.conf.appId + '/gameuid/' + elvah5.conf.userUid + '/gameName/' + elvah5.conf.appName + '/username/' + elvah5.conf.userName + '/lan/' + elvah5.conf.language + '/sdkVersion/' + elvah5.conf.sdkVersion + '/hsTags/' + elvah5.conf.hsTags+'?autoEntrance='+elvah5.conf.autoEntrance)
        ifr.setAttribute("allowtransparency", "true")
        ifr.setAttribute("id", "frmElva")
        ifr.setAttribute("name", "frmElva")
        ifr.style.width = "100%"
        ifr.style.height = "100%"
        ifr.setAttribute("frameborder", "no")
        ifr.setAttribute("border", "0")
        var elvaBox = document.getElementById('elvah5Div')
        elvaBox.style.display = 'block'
        elvaBox.appendChild(ifr)
    }
})();