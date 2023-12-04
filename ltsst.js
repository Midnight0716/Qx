/*************************************

项目名称：旅途随身听
软件版本：3.3.3
下载地址：https://is.gd/nEjaIB
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/www\.1314zhilv\.com\/ltsstnew\/(user.*\/getInfo|guideScenic) url script-response-body https://raw.githubusercontent.com/Midnight0716/Qx/main/ltsst.js

[mitm]
hostname = www.1314zhilv.com

************************************/


var body = $response.body;

body = body.replace(/\"identityType":\d+/g, '\"identityType":2');
body = body.replace(/\"levDesc":".*?"/g,'\"levDesc":"超级无敌宇宙级VIP中P"');
body = body.replace(/\"isActivate":\d+/g,'\"isActivate":1');
body = body.replace(/\"audioType":\d+/g, '\"audioType":1');
body = body.replace(/\"isAudition":\d+/g, '\"isAudition":2');
body = body.replace(/\"isPermanent":\d+/g, '\"isPermanent":1');
body = body.replace(/\"isPurchasedContent":\d+/g, '\"isPurchasedContent":1');
body = body.replace(/\"touristEffectiveEquity":\d+/g, '\"touristEffectiveEquity":1');
body = body.replace(/\"userName":".*?"/g,'\"userName":"Midnight"');
body = body.replace(/\"headUrl":".*?"/g,'\"headUrl":"https://ooo.0x0.ooo/2023/09/09/OnAori.jpg"');

$done({body});
