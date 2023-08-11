/*************************************

项目名称：过期啦
软件版本：3.5.1
下载地址：https://t.cn/A60fyI4G
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.guoqi365\.com\/1\.1\/functions\/getUserInfo url script-response-body https://raw.githubusercontent.com/Midnight0716/Qx/main/guoqila.js

[mitm] 
hostname = api.guoqi365.com

************************************/


let body=JSON.parse($response.body);

body.result.data.user_is_pro=true;
body.result.data.locked=false;
body.result.data.group_is_pro=true;
body.result.data.membership_type=2;
body.result.data.expires_date="4102415999000";
body.result.data.nickname="Midnight";

$done({body:JSON.stringify(body)});
