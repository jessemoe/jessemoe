/******************************

[rewrite_local]


^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/mosimoe/1/main/1.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*******************************/

var modifiedHeaders=$request['headers'];
modifiedHeaders['Referer']='https://www.bilibili.com/';
modifiedHeaders['User-Agent']='bili-universal/71400100 os/ios model/iPhone 11 mobi_app/iphone osVer/15.3.1 network/2';
modifiedHeaders['Forwarded']='110.242.68.66';
modifiedHeaders['X-Forwarded-For']='110.242.68.66';
modifiedHeaders['X-Real-IP']='110.242.68.66';
modifiedHeaders['buvid']='1234567890abcdef';
modifiedHeaders['x-bili-locale-bin']='';
modifiedHeaders['x-bili-metadata-bin']='';
modifiedHeaders['x-bili-device-bin']='';
modifiedHeaders['x-bili-locale']='';
modifiedHeaders['x-bili-aurora-eid']='';
$done({'headers':modifiedHeaders});