/*************************************

项目名称：旅途随身听-首页上方轮播图片净化
软件版本：3.0.0
下载地址：https://is.gd/nEjaIB
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/www\.1314zhilv\.com\/ltsstnew\/city\/getAllBannelByCity url script-response-body https://raw.githubusercontent.com/Midnight0716/Qx/main/ltsst-ad2.js

[mitm]
hostname = www.1314zhilv.com

************************************/


let obj=JSON.parse($response.body);

obj.content = obj.content.filter(i => i.bannerType === 1);

$done({body: JSON.stringify(obj)});
