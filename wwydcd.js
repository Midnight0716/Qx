/*************************************

项目名称：网易有道词典
软件版本：9.2.62
下载地址：https://is.gd/6rXQNp
使用声明：⚠️仅供参考，🈲️转载与售卖！

**********************************

[rewrite_local]
^https:\/\/dict\.youdao\.com\/vip\/user\/status url script-response-body https://raw.githubusercontent.com/Midnight0716/Qx/main/wwydcd.js

[mitm]
hostname = dict.youdao.com

*************************************/


var body = JSON.parse($response.body);

body.vip = true;
body.svip = true;
body.expire = 4102362549000;
body.svipExpire = 4102362549000

$done({ body: JSON.stringify(body) });
