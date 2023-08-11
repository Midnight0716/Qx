/*************************************

项目名称：网易有道词典-首页净化
软件版本：9.2.62
下载地址：https://is.gd/6rXQNp
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/dict\.youdao\.com\/homepage\/promotion url script-response-body https://raw.githubusercontent.com/Midnight0716/Qx/main/wyydcd-ad.js

[mitm]
hostname = dict.youdao.com

************************************/


let obj=JSON.parse($response.body);

obj.data.dataList = obj.data.dataList.filter(i => i.type === 'WOW');

$done({body: JSON.stringify(obj)});
