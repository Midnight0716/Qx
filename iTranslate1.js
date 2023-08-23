/*************************************

项目名称：iTranslate
支持版本：15.1.5
下载地址：https://is.gd/MwHaBw
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/ssl-api\.itranslateapp\.com\/accounts\/.+\/(subscriptions\/verify|marketing\/consent\/status) url script-response-body https://raw.githubusercontent.com/Midnight0716/Qx/main/iTranslate1.js

[mitm]
hostname = ssl-api.itranslateapp.com

*************************************/


var Midnight = JSON.parse($response.body);
const vip = '/subscriptions/verify';
const active = '/marketing/consent/status';

if ($request.url.indexOf(vip) != -1){
  Midnight.licenses = [
    {
      "product_id" : "com.itranslate.pro.01y_07dt_china",
      "bundle_id" : "com.outerspaceapps.itranslate",
      "is_trial_period" : true,
      "original_transaction_id" : "160001314520000",
      "expires_date_ms" : 4102390158000,
      "transaction_id" : "160001314520000"
    }
  ];
}

if ($request.url.indexOf(active) != -1){
  Midnight ={
  "is_active" : true
  };
}

$done({body : JSON.stringify(Midnight)});
