/*

财新去开屏广告
@安妮

[filter_local]
host, gg.caixin.com, direct
[rewrite_local]
^https?:\/\/gg\.caixin\.com\/s\?z=caixin&op=1&c=3362 url script-response-body https://raw.githubusercontent.com/Midnight0716/Qx/main/caixinads.js

[mitm]

hostname=gg.caixin.com

*/

var baby = {
    "intval": 0,
    "replace": "body",
    "eday": "2029-12-30 00:00:00",
    "sday": "2029-12-01 00:00:00"
};

var replacedBody = $response[baby["replace"]]
    .replace(/"sday":"[^"]*"/g, baby["sday"])
    .replace(/"eday":"[^"]*"/g, baby["eday"])
    .replace(/"intval":\d/g, baby["intval"]);

$done({
    body: replacedBody
});
