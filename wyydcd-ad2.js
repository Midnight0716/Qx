/*************************************

项目名称：网易有道词典-学习Tab界面净化
软件版本：9.2.62
下载地址：https://is.gd/6rXQNp
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/dict\.youdao\.com\/course\/tab\/home url script-response-body https://raw.githubusercontent.com/Midnight0716/Qx/main/wyydcd-ad2.js

[mitm]
hostname = dict.youdao.com

************************************/


let obj=JSON.parse($response.body);

obj.data.tab.tabList = obj.data.tab.tabList.filter(i => i.title === '学库');
obj.data.tab.tabList = obj.data.tab.tabList.filter(i => i.title === '四六级');
obj.data.icon.iconList = obj.data.icon.iconList.filter(i => i.title === '实用英语');
obj.data.fragmentList = obj.data.fragmentList.filter(i => i.type === 'GREAT_COURSE');

$done({body: JSON.stringify(obj)});
