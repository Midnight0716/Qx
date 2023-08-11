/*************************************

项目名称：旅途随身听-首页北京城市导览图片净化
软件版本：3.0.0
下载地址：https://is.gd/nEjaIB
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/www\.1314zhilv\.com\/ltsstnew\/common\/getJGQIconNew url script-response-body https://raw.githubusercontent.com/Midnight0716/Qx/main/ltsst-ad.js

[mitm]
hostname = www.1314zhilv.com

************************************/


var body = JSON.parse($response.body);

delete body.content.specialBanner;

$done({ body: JSON.stringify(body) });
