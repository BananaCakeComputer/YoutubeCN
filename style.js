var locat
function addCN(){
    if(locat=='CN'){
        document.getElementById('contentWrapper').childNodes[1].childNodes[8].childNodes[0].childNodes[6].childNodes[1].childNodes[0].childNodes[4].childNodes.forEach(function(ele){
            if(ele.childNodes[2].childNodes[1].childNodes[2].childNodes[3].childNodes.length!=0){
                ele.childNodes[2].childNodes[1].childNodes[2].childNodes[3].innerHTML = ''
            }
            ele.onclick = function(){
                chrome.storage.local.set({region: "otr"})
            }
        })
    }
    var cnBTN = document.createElement('ytd-compact-link-renderer')
    cnBTN.setAttribute('class', 'style-scope yt-multi-page-menu-section-renderer')
    cnBTN.setAttribute('compact-link-style', 'compact-link-style-type-selection-menu')
    document.getElementById('contentWrapper').childNodes[1].childNodes[8].childNodes[0].childNodes[6].childNodes[1].childNodes[0].childNodes[4].appendChild(cnBTN)
    if(locat=='CN'){
        cnBTN.childNodes[2].childNodes[1].childNodes[2].innerHTML = `
        <yt-img-shadow height="40" width="40" class="style-scope ytd-compact-link-renderer" disable-upgrade="" hidden=""></yt-img-shadow>
        <yt-icon class="style-scope ytd-compact-link-renderer">
            <yt-icon-shape class="style-scope yt-icon"></yt-icon-shape>
        </yt-icon>`
        cnBTN.childNodes[2].childNodes[1].childNodes[2].childNodes[3].innerHTML = `
        <icon-shape class="yt-spec-icon-shape">
            <div style="width: 100%; height: 100%; fill: currentcolor;">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                    <path d="m9 18.7-5.4-5.4.7-.7L9 17.3 20.6 5.6l.7.7L9 18.7z"></path>
                </svg>
            </div>
        </icon-shape>`
    }
    cnBTN.childNodes[2].childNodes[1].childNodes[4].childNodes[1].innerText = '中国'
    cnBTN.onclick = function(){
        chrome.storage.local.set({ region: "CN" }).then(() => {
            location.reload()
        });
    }
}
function avatarOnClick(){
    try{
        document.getElementById('contentWrapper').childNodes[1].childNodes[6].childNodes[1].childNodes[2].childNodes[4].childNodes[4].childNodes[2].addEventListener('click', addCN)
    }catch{
        window.setTimeout(avatarOnClick, 100)
    }
}
sucTime = 0;
function avatarOnClickEveryTime(){
    if(locat=='CN'){
        try{
            if(document.getElementById('contentWrapper').childNodes[1].childNodes[6].childNodes[1].childNodes[2].childNodes[4].childNodes[4].childNodes[2].childNodes[1].childNodes[4].childNodes[3].innerText == '中国'){
                sucTime++
                if(sucTime>=5){
                    sucTime = 0
                }else{
                    window.setTimeout(avatarOnClickEveryTime, 100)
                }
                return
            }
            document.getElementById('contentWrapper').childNodes[1].childNodes[6].childNodes[1].childNodes[2].childNodes[4].childNodes[4].childNodes[2].childNodes[1].childNodes[4].childNodes[3].innerText = '中国'
            window.setTimeout(avatarOnClickEveryTime, 100)
        }catch{
            window.setTimeout(avatarOnClickEveryTime, 100)
        }
    }
}
function changeLabel(){
    if(document.getElementById('logo-icon').childNodes[2].childNodes[0].childNodes.length != 1){
        window.setTimeout(changeLabel, 100)
    }else{
        document.getElementById('logo-icon').style.cssText = 'width: 95px;'
        document.getElementById('country-code').innerText = 'CN'
        document.getElementById('logo-icon').childNodes[2].childNodes[0].childNodes[0].childNodes[0].innerHTML =`
        <svg style="pointer-events: none; display: block; width: 100%; height: 100%;" focusable="false" viewBox="0 0 95 20" class="external-icon" xmlns="http://www.w3.org/2000/svg">
            <svg viewBox="0 0 95 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
                    <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
                </g>
                <g>
                    <g>
                        <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
                        <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
                        <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
                        <path xmlns="http://www.w3.org/2000/svg" d="M64.8755 17.18758c0,0 -0.98295,1.76206 -3.32015,1.53374c-3.597,-0.35139 -3.54619,-4.09166 -3.54619,-4.09166l0.00429,-9.05635c0,0 -0.18295,-4.36772 4.2072,-4.39193c4.55057,-0.02509 4.48041,4.51487 4.48041,4.51487l0.0106,1.23936l-2.7785,0.00996c0,0 -0.00423,-0.34404 -0.0111,-0.48062c-0.09339,-1.8551 -0.46763,-2.76839 -1.66239,-2.7565c-1.36331,0.01357 -1.34337,1.51257 -1.34681,1.95029c-0.00152,0.19319 0.02944,8.34425 0.02902,8.38634c-0.00591,0.60157 -0.17422,2.15217 1.41446,2.14287c1.81141,-0.0099 1.55582,-2.28338 1.56116,-2.76287c0.00131,-0.13259 -0.01532,-1.28014 -0.01532,-1.28014l-1.85362,0.00417v-2.30769h4.80769v8.65384h-1.42308z" stroke="none" stroke-width="0"></path>
                        <path xmlns="http://www.w3.org/2000/svg" d="M68.00794,15.8634v-10.20588h2.64705v9.92489c0,0 -0.06188,0.73012 0.69653,0.84704c0.90458,0.13945 1.94909,-0.76859 1.94909,-0.76859l0.00998,-10.01147l2.62693,0.00747l0.02257,12.74759l-2.50646,-0.00985l-0.00027,-1.31002c0,0 -1.54526,1.8998 -3.71123,1.49069c-1.9097,-0.3607 -1.73418,-2.71187 -1.73418,-2.71187z" stroke="none" stroke-width="0"></path>
                        <path xmlns="http://www.w3.org/2000/svg" d="M82.83579,17.36119c0,0 -1.55382,1.55505 -3.8445,1.14557c-0.98681,-0.1764 -2.02015,-1.09661 -1.96459,-2.88027c0.00246,-0.07897 -0.04736,-1.84267 1.275,-3.17602c1.57882,-1.59195 4.38406,-2.5089 4.38406,-2.5089l-0.00816,1.94971c0,0 -1.81151,0.93275 -2.53321,1.92364c-0.61712,0.84731 -0.46029,1.55374 -0.46082,1.5467c-0.01247,-0.16492 -0.09477,1.02204 1.08908,1.04426c0.70825,0.01329 1.90525,-1.13242 1.90525,-1.13242v-6.26316c0,0 0.08405,-1.46077 -1.32657,-1.46252c-1.06488,-0.00132 -1.35027,0.72241 -1.43442,1.25682c-0.04798,0.30469 -0.0466,0.54397 -0.0466,0.54397l-2.65738,-0.00229c0,0 0.00043,-1.19641 0.69158,-2.26949c0.56861,-0.88283 1.68371,-1.69783 3.47738,-1.70062c4.16552,-0.00649 3.94032,3.05786 3.94513,3.37097c0.00261,0.16971 -0.00043,8.28251 0,8.35088c0.00237,0.3775 0.16402,1.24386 0.16402,1.24386l-2.51782,0.00923c0,0 -0.02001,-0.31558 -0.0663,-0.47757c-0.04655,-0.16287 -0.07113,-0.51236 -0.07113,-0.51236z" stroke="none" stroke-width="0"></path>
                        <path xmlns="http://www.w3.org/2000/svg" d="M94.38874,7.99554v10.20588h-2.64705v-9.92489c0,0 0.06188,-0.73012 -0.69653,-0.84704c-0.90458,-0.13945 -1.94909,0.76859 -1.94909,0.76859l-0.00998,10.01147l-2.62693,-0.00747l-0.02257,-12.7476l2.50646,0.00986l0.00027,1.31002c0,0 1.54526,-1.8998 3.71123,-1.49069c1.9097,0.3607 1.73418,2.71187 1.73418,2.71187z" stroke="none" stroke-width="0"></path>
                        <path xmlns="http://www.w3.org/2000/svg" d="M42.12138,4.51959l1.84848,-3.39627h3.19231l-3.06061,3.39627z" stroke="none" stroke-width="0"></path>
                        <path xmlns="http://www.w3.org/2000/svg" d="M84.83435,1.00124l-2.28111,3.43687h-2.58526l-2.28111,-3.43687h2.15411l1.40442,2.15945l1.42739,-2.15945z" stroke="none" stroke-width="0"></path>
                    </g>
                </g>
            </svg>
        </svg>
        `
        var icp = document.createElement('span')
        icp.style.cssText = 'color: #767676; font-size: .77em; font: 0.8125em/1.5 arial, sans-serif; position: absolute; top: 40px; margin: 0 20px;'
        icp.innerText = 'ICP证合字B2-20070004号'
        document.getElementById('logo').appendChild(icp)
    }
}
function avatorCatch(){
    try{
        document.getElementById('avatar-btn').addEventListener('click', avatarOnClick, {once: true})
        document.getElementById('avatar-btn').addEventListener('click', avatarOnClickEveryTime)
    }catch{
        window.setTimeout(avatorCatch, 100)
    }
}
var block = document.createElement('div')
function changeProperties(){
    block.childNodes[1].childNodes[4].childNodes[2].setAttribute('src', 'https://www.youtube.com/img/desktop/unavailable/unavailable_video.png')
    block.childNodes[1].childNodes[4].childNodes[2].style.cssText = 'visible: ;'
    block.childNodes[1].childNodes[6].childNodes[1].innerHTML = '推送不可用'
    block.childNodes[1].childNodes[2].remove()
}
function changeContents(){
    if(location.href!='https://www.youtube.com/'){
        return
    }
    try{
        document.getElementById('page-manager').childNodes[2].childNodes[20].childNodes[2].childNodes[0].childNodes[12].remove()
        document.getElementById('page-manager').childNodes[2].childNodes[20].childNodes[2].childNodes[0].appendChild(block)
        block.innerHTML = `
        <ytd-background-promo-renderer class="style-scope ytd-item-section-renderer" icon-name="yt-icons:" renderer-style="full-height" thumbnail="">
            <yt-img-shadow class="image style-scope ytd-background-promo-renderer no-transition" style="background-color: transparent;" loaded=""></yt-img-shadow>
            <div class="promo-message style-scope ytd-background-promo-renderer"></div>
        </ytd-background-promo-renderer>
        `
        //block.childNodes[1].childNodes[5].childNodes[2].setAttribute('src', 'https://www.youtube.com/img/desktop/unavailable/unavailable_video.png')
        window.setTimeout(changeProperties, 100)
    }catch{
        window.setTimeout(changeContents, 50)
    }
}
function searchRemove(){
    try{
        document.getElementsByClassName('gstl_50 sbdd_a')[0].remove()
        document.getElementById('search-icon-legacy').replaceWith(document.getElementById('search-icon-legacy').cloneNode(true));
        document.getElementById('search-icon-legacy').childNodes[1].innerHTML = `
        <div style="width: 100%; height: 100%; fill: currentcolor;">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
            </svg>
        </div>`
        document.getElementById('search-icon-legacy').onclick = function(){
            if(document.getElementById('search-input').childNodes[0].value==''){
                return;
            }
            location.href = 'https://www.google.cn/search?q=' + document.getElementById('search-input').childNodes[0].value
        }
    }catch{
        window.setTimeout(searchRemove, 100)
    }
}
var attempt = 0
function guideRemove(){
    try{
        document.getElementById('footer').childNodes[6].childNodes[0].innerHTML += '© 2023 Google LLC<br>ICP证合字B2-20070004号'
        document.getElementById('guide-renderer').childNodes[2].childNodes[2].remove()
        document.getElementById('guide-renderer').childNodes[2].childNodes[0].childNodes[4].childNodes[1].remove()
        document.getElementById('guide-renderer').childNodes[2].childNodes[1].childNodes[4].childNodes[3].remove()
    }catch{
        if(attempt>50){
            return
        }
        window.setTimeout(guideRemove, 100)
        attempt += 1
    }
}
avatorCatch()
chrome.storage.local.get(["region"]).then((result) => {
    locat = result.region;
    if(locat==undefined){
        chrome.storage.local.set({region: "otr"})
    }else if(locat=='CN'){
        changeLabel()
        changeContents()
        searchRemove()
        guideRemove()
    }
});
