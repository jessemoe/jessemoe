/******************************

#!name=bilibili自动
#!desc=哔哩哔哩, 港澳台番剧自动切换地区 & 显示豆瓣评分  
  
  
[MITM]  
hostname = %APPEND% ap?.bili*i.com, ap?.bili*i.net  
  
[Script]  
bili自动=type=http-request,pattern=^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/(pgc\/view\/v\d\/app\/season|x\/v\d\/search\/defaultwords) ,
script-path=https://raw.githubusercontent.com/jessemoe/jessemoe/main/bili.js

*******************************/
// https://raw.githubusercontent.com/jessemoe/jessemoe/main/bili.js
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
