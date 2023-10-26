#!name=广告拦截合集-重写
#!desc=(R)针对部分APP开屏广告，应用内广告进行拦截，某些APP要清除缓存或者重新安装拦截广告才会生效！
#!time=2023.10.27

#############################################

hostname = gab.122.gov.cn, ad.12306.cn, m.baidu.com, www.baidu.com, imeres.baidu.com, mbd.baidu.com, b2baifanfan.baidu.com, baidu.com, sofire.baidu.com, afd.baidu.com, api.bilibili.com, wrapper.cyapi.cn, cn-acs.m.cainiao.com, maicai.api.ddxq.mobi, res.xiaojukeji.com, common.diditaxi.com, pt-starimg.didistatic.com, cube.elemecdn.com, nr-op.elemecdn.com, elemecdn.com, fuss10.elemecdn.com, v.icbc.com, youtubei.googleapis.com, gugongmini.dpm.org.cn, aag.enmonster.com, cmsapi.wifi8.com, yunbusiness.ccb.com, gab.122.gov.cn, m15.360buyimg.com, img11.360buyimg.com, m.360buyimg.com, bdsp-x.jd.com, dsp-x.jd.com, api.jd.com, dns.jd.com, api.m.jd.com, m.jd.com, ms.jr.jd.com, s.jiediankeji.com, access.pangolin-sdk-toutiao.com, open.e.kuaishou.com, mi.gdt.qq.com, www.1314zhilv.com, s3plus.meituan.net, p*.meituan.net, img.meituan.net, flowplus.meituan.net, image.pushplus.plus, pinduoduo.com, yangkeduo.com, m.qianbao.qq.com, y.gtimg.cn, us.l.qq.com, y.gtimg.cn, qde.qunar.com, homefront.qunar.com, client.qunar.com, api.bwton.com, ecard.shenzhentong.com, ucmp.sf-express.com, egmas.sf-express.com, shopic.sf-express.com, testflight.apple.com, wx.17u.cn, gw.alicdn.com, ossgw.alicdn.com, heic.alicdn.com, img.alicdn.com, ccmsupport-sz.tenpay.com, vv.video.qq.com, wxa.wxs.qq.com, iphone.ac.qq.com, mlol.qt.qq.com, m.qianbao.qq.com, api.gameplus.qq.com, bgw.xinyue.qq.com, mp.weixin.qq.com, us.l.qq.com, game.qq.com, news.l.qq.com, weixin110.qq.com, btrace.qq.com, tc.qq.com, webcdn.m.qq.com, img.qq.com, ios.wps.cn, home.mi.com, openapi.paas.cmbchina.com, webappcfg.paas.cmbchina.com, wap.js.10086.cn, app.10086.cn, *.app.coc.10086.cn, m.sd.10086.cn, client.app.coc.10086.cn, m.client.10010.com, api.cloud.189.cn, cloud.189.cn


# >>>>>>>>>>>>>>> ✅ 1 ✅ <<<<<<<<<<<<<<
# > 12123
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery url reject

# > 12306
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://raw.githubusercontent.com/kokoryh/Script/master/js/12306.js


# >>>>>>>>>>>>>>> ✅ A ✅ <<<<<<<<<<<<<<
# > alibaba
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv\/ url reject

# > amdc
^http:\/\/amdc\.m\.taobao\.com url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/amdc.js


# >>>>>>>>>>>>>>> ✅ B ✅ <<<<<<<<<<<<<<
# > 百度
^https?:\/\/fcvbjbcebos.baidu.com\/.+.mp4 url reject
^https?:\/\/cover.baidu.com\/cover\/page\/dspSwitchAds\/ url reject
^https?:\/\/baichuan.baidu.com\/rs\/adpmobile\/launch url reject
^https?:\/\/baichuan\.baidu\.com\/rs\/adpmobile\/launch url reject-img
^https?:\/\/api\d\.tuisong\.baidu\.com url reject-img
^https?:\/\/afd.baidu.com\/afd\/entry url reject
^https?:\/\/mobads\.baidu\.com\/cpro\/ui\/mads.+ url reject
(ps|sv|offnavi|newvector|ulog.imap|newloc)(.map)?.(baidu|n.shifen).com url reject
^https?:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/guanggao\/ url reject-200
^https?:\/\/[\s\S]*\.baidu\.com/.*?ad[xs]\.php url reject-img
^https?:\/\/afd\.baidu\.com\/afd\/entry url reject-img
^https?:\/\/als.baidu.com\/clog\/clog url reject
^https?:\/\/fcvbjbcebos\.baidu\.com\/.+?\.mp4 url reject-img
^https?:\/\/t\d{2}\.baidu\.com url reject-img
^https?:\/\/update\.pan\.baidu\.com\/statistics url reject
^https?:\/\/log.+?baidu\.com url reject
^https?:\/\/sa\d\.tuisong\.baidu\.com url reject-img
^https?:\/\/www.baidu.com\/?action=static&ms=1&version=css_page_2@0.*? url reject

# > 哔哩哔哩
# IP请求,地理位置请求 //api.bilibili.com
^https:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
^https:\/\/api\.bilibili\.com\/x\/web-interface\/zone\?jsonp=jsonp$ url reject-200


# >>>>>>>>>>>>>>> ✅ C ✅ <<<<<<<<<<<<<<
# > 彩云天气
^https?:\/\/wrapper\.cyapi\.cn\/v1\/activity\? url echo-response application/json echo-response https://raw.githubusercontent.com/Keywos/rule/main/mocks/caiyun.json
^https?:\/\/api\.caiyunapp\.com\/v1\/activity url reject-dict

# > 菜鸟
^https?:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.(show|mshow)\.cn\/ url reject


# >>>>>>>>>>>>>>> ✅ D ✅ <<<<<<<<<<<<<<
# > 叮咚买菜
# 开屏广告 #主机名maicai.api.ddxq.mobi
^https:\/\/maicai\.api\.ddxq\.mobi\/advert\/getAd\?ad_id url reject-dict
# 新人弹窗
^https:\/\/maicai\.api\.ddxq\.mobi\/homeApi\/getHomeAdPop url reject-dict

# > 滴滴出行
https?://res\.xiaojukeji\.com\/resapi\/activity\/mget url reject-dict
https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) url reject
^https?:\/\/img-ys011\.didistatic\.com\/static\/ad_oss\/.*.jpg url reject
https?://res\.xiaojukeji\.com\/resapi\/activity\/mget url reject
https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) url reject
# 微信小程序个人中心净化
^https:\/\/common\.diditaxi\.com\.cn\/common\/v5 url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/didi.js

# > 滴滴青桔
^https?:\/\/pt-starimg\.didistatic\.com\/static\/starimg\/node\/.*.(jpg|png|gif) url reject-200
^https?:\/\/omgup[0-9]{1}\.xiaojukeji\.com\/api url reject-200
^https?:\/\/omgup*\.xiaojukeji\.com\/api url reject-200


# >>>>>>>>>>>>>>> ✅ E ✅ <<<<<<<<<<<<<<
# > 饿了么
# 开屏广告 
^https?:\/\/elemecdn.com\/.+\/sitemap url reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/640\/h\/\d{3,4} url reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/750\/h\/\d{3,4} url reject
^https?:\/\/fuss10\.elemecdn\.com\/.+?\.mp4 url reject-img
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_1\d{3},h_2\d{3}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_6\d{2},h_8\d{2}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_\d{3},h_\d{4}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/\w\/\w{2}\/\w+mp4\.mp4\? url reject
^https?:\/\/www1\.elecfans\.com\/www\/delivery\/ url reject
^https:\/\/(nr-op|cube)\.elemecdn\.com\/.+\.jpeg\?x-oss-process=image\/resize,m_fill,w_\d{4,},h_\d{4,}\/($|format,webp\/$) url reject


# >>>>>>>>>>>>>>> ✅ F ✅ <<<<<<<<<<<<<<
# > 飞猪 + 阿里巴巴
^http?:\/\/amdc\.m\.taobao\.com\/amdc\/mobileDispatch %E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C url-and-header reject-dict
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.fliggy\.crm\.screen\.(allresource|predict) url reject-dict
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources\/1\.0\?type=originaljson url reject-img
^https?:\/\/gw\.alicdn\.com\/mt\/ url reject
^https?:\/\/gw\.alicdn\.com\/imgextra\/\w{2}\/[\w!]+-\d-tps-\d{3}-\d{4}\.(jpg|png)$ url reject


# >>>>>>>>>>>>>>> ✅ G ✅ <<<<<<<<<<<<<<
# > 工商银行
#^https?:\/\/v\.icbc\.com\.cn\/userfiles\/Resources\/WAP\/advertisement\/ url reject-200

# > 谷歌
^https?:\/\/.+\.googleapis.com/.+ad_break url reject-img
^https?:\/\/.+\.googleapis.com/.+log_event url reject-img
^https?:\/\/.+\.googleapis.com/adsmeasurement url reject-img
^https?:\/\/pagead2\.googlesyndication\.com\/pagead\/ url reject-img
# ^https?:\/\/[\w-]+\.googlevideo\.com\/.+&(oad|ctier) url reject
# ^https?:\/\/.+\.googlevideo\.com\/videogoodput url reject-img
# ^https?:\/\/.+?\.googlevideo\.com\/ptracking\?pltype=adhost url reject-img
# ^https?:\/\/.+\.googlevideo\.com\/.+oad= url reject-img
# ^https?:\/\/.+\.googlevideo\.com\/ptracking url reject-img

# > 故宫博物馆小程序 #开屏广告 #主机名gugongmini.dpm.org.cn
^https:\/\/gugongmini\.dpm\.org\.cn\/gugong_applet\/open-screen url reject-dict

# > 怪兽充电 微信小程序
^https:\/\/aag\.enmonster\.com\/apa\/index\/advert\/skin url reject


# >>>>>>>>>>>>>>> ✅ H ✅ <<<<<<<<<<<<<<
# > 花生地铁
^https?:\/\/cmsapi\.wifi8\.com\/v\d\/(emptyAd|adNew)\/ url reject
^https?:\/\/cmsfile\.wifi8\.com\/uploads\/png\/ url reject-img

# >>>>>>>>>>>>>>> ✅ I ✅ <<<<<<<<<<<<<<


# >>>>>>>>>>>>>>> ✅ J ✅ <<<<<<<<<<<<<<
# > 建行生活
# 首页横幅广告
^https?:\/\/yunbusiness\.ccb\.com\/clp_service\/txCtrl\?txcode=A3341A00(2|6|9) url reject-200
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\?txcode=A3341AB04 url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/scripts/ccbLifeAds.js
# 删除首页+金融+我的多个横幅等乱七八糟的广告
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\?txcode=A3341AB05 url echo-response application/json echo-response https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/scripts/A3341AB05.json
# 我的页面悬浮广告
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\? url response-body "TAG_AD_INFO" response-body "TAG_AD_INFO0"

# > 交管12123
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery\/adver$ url reject
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery url reject

# > 京东
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/202220\/24\/21575\/134711\/625b821bE5d642d73\/77636692989bd2be\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/96405\/17\/28473\/168578\/625cd144E7997a990\/8233ce8a10c4e463\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/182114\/23\/23904\/121433\/62593c9cEd77c4519\/2e3f4c518b771094\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/202971\/34\/26906\/282671\/6319c862E1818d3fa\/0597464cf6bc8e2f\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/143222\/27\/29233\/141967\/631b1f8cE3a112e54\/d3fe0b2f9f0a9f30\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/197429\/22/22400\/119193\/62562ef0Eff59b4d4 url reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start$ url reject-array
^https?://union.click.jd.com/jda? url request-header ^(.+?\s).+?(\s[\s\S]+?Host:).+?(\r\n) request-header $1/jda?adblock=$2union.click.jd.com$3
^https?://union.click.jd.com/sem.php? url request-header ^(.+?\s).+?(\s[\s\S]+?Host:).+?(\r\n) request-header $1/sem.php?adblock=$2union.click.jd.com$3
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/(aladdin\/na\/m\/getLoadingPicture|aladdin\/na\/m\/getLoadingPicture) url reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/na\/m\/getLoadingPicture url reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/base\/(new)?na\/m\/adInfo url reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/base\/na\/m\/adInfo url reject
^https?:\/\/bdsp-x\.jd\.com\/adx\/ url reject
^https?:\/\/api\.m\.jd.com\/client\.action\?functionId=(start|queryMaterialAdverts) url reject
^https?:\/\/(bdsp-x|dsp-x)\.jd\.com\/adx\/ url reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start$ url reject-200
^https?:\/\/img\d+\.360buyimg\.com\/jddjadvertise\/ url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/197429\/22\/22400\/119193\/62562ef0Eff59b4d4 url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/220846\/5\/16214\/41327 url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/202818 url reject
^https?:\/\/storage\.360buyimg\.com\/kepler-app url reject-img
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s640x1136_jfs\/ url reject-img
# 禁京东DNS解析
^https?:\/\/dns\.jd\.com\/ url reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=(server|basic)Config url response-body "dnsvip"\:".+" response-body "dnsvip":""
# 禁京东直播小窗
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=getWidgetV1052 url reject

# > 街电 微信小程序
^https:\/\/s\.jiediankeji\.com\/adv url reject-dict


# >>>>>>>>>>>>>>> ✅ K ✅ <<<<<<<<<<<<<<
# > 快手联盟,优量汇,穿山甲
^https:\/\/(api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/get_ads|open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ$|mi\.gdt\.qq\.com\/gdt_mview\.fcg\?) url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/adsense.js


# >>>>>>>>>>>>>>> ✅ L ✅ <<<<<<<<<<<<<<
# > 旅途随身听
^https:\/\/www\.1314zhilv\.com\/ltsstnew\/(guideScenic\/getRecentlyUpdatedScenic|city\/getWeatherByCityName) url reject-dict
# 首页北京城市导览图片,首页上方轮播图片净化
^https:\/\/www\.1314zhilv\.com\/ltsstnew\/(common\/getJGQIconNew|city\/getAllBannelByCity) url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/scripts/ltsst-ad.js

# >>>>>>>>>>>>>>> ✅ M ✅ <<<<<<<<<<<<<<
# > 美团
^https?:\/\/img\.meituan\.net\/(?>adunion|display|midas)\/.+?\.(gif|jpg|jpg\.webp)$ url reject-200
^https?:\/\/p\d\.meituan\.net\/wmbanner\/[A-Za-z0-9]+?\.jpg url reject-200
^https?:\/\/p\d\.meituan\.net\/movie\/[A-Za-z0-9]+?\.jpg\?may_covertWebp url reject-200
^https?:\/\/s3plus\.meituan\.net\/.+?\/linglong\/ url reject
^https?:\/\/s3plus\.meituan\.net\/v1\/mss_a002 url reject-img
^https?:\/\/www\.meituan\.com\/api\/v\d\/appstatus\? url reject
^https?:\/\/wmapi\.meituan\.com\/api\/v\d+\/loadInfo\? url reject
^https?:\/\/wmapi\.meituan\.com\/api\/v\d\/startpicture url reject
^https?:\/\/flowplus\.meituan\.net\/v\d\/\w+\/linglong\/\d+\.(gif|jpg|mp4) url reject
^https?:\/\/(s3plus|flowplus)\.meituan\.net\/v\d\/\w+\/linglong\/\w+\.(gif|jpg|mp4) url reject
^https?:\/\/apimobile\.meituan\.com\/appupdate\/mach\/checkUpdate? url reject
^https?:\/\/img\.meituan\.net\/(adunion|display|midas)\/\w+\.(gif|jpg|jpg\.webp)$ url reject
^https?:\/\/p\d.meituan.net\/movie\/.*?\?may_covertWebp url reject-img
^https?:\/\/p\d{1}\.meituan\.net\/(adunion|display|mmc|wmbanner)\/ url reject


# >>>>>>>>>>>>>>> ✅ N ✅ <<<<<<<<<<<<<<


# >>>>>>>>>>>>>>> ✅ O ✅ <<<<<<<<<<<<<<
# > PushPlus微信推送广告
# 屏蔽图片广告，但是还有css空白模块, 要启用自行添加下一行的重写和本行右边👉🏻主机名：image.pushplus.plus
^https:\/\/image\.pushplus\.plus\/ad.* url reject-dict
# 屏蔽广告推送模块，会把“打开小程序”也屏蔽
^https:\/\/www\.pushplus\.plus.* url response-body (<head>) response-body $1<style type="text/css">  div.container.py-3.text-center {display: none! important} </style />

# > 拼多多
^https?:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash url reject


# >>>>>>>>>>>>>>> ✅ Q ✅ <<<<<<<<<<<<<<
# > QQ钱包 净化
^https?:\/\/m\.qianbao\.qq\.com\/pages\/walletHome\?invisible url reject

# > QQ音乐
^https:\/\/us\.l\.qq\.com\/exapp url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/.+?\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/\/upload\/kg_ad/.*?\d{4}\.jpg url reject-img
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/targeted_ads url reject-img
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/music\/common\/upload\/t_splash_info\/ url reject

# > 去哪儿旅行
^https:\/\/qde\.qunar\.com\/preload url reject-200
# 开屏广告
^https:\/\/homefront\.qunar\.com\/front\/splash\/ad url reject-dict
^https?:\/\/client\.qunar\.com\/pitcher-proxy\?qrt=p_splashAd url reject


# >>>>>>>>>>>>>>> ✅ R ✅ <<<<<<<<<<<<<<


# >>>>>>>>>>>>>>> ✅ S ✅ <<<<<<<<<<<<<<
# > 苏e行
# 开屏广告
^https?:\/\/api\.bwton\.com\/bas\/ad url reject-200
# 软件内推广广告
^https:\/\/api\.bwton\.com\/bff\/app\/index\/goods url reject-dict
^https:\/\/api\.bwton\.com\/bff\/app\/index\/recommend url reject-dict

# > 深圳通
^https?:\/\/ecard\.shenzhentong\.com\/wxweb\/bwxppub2\/QryAdvertList\.do url reject-200

# > 顺丰
^https?:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/appVersion\/detectionUpgrade url reject-dict
^https?:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/ad\/ url reject
^https?:\/\/shopic\.sf-express\.com\/crm\/mobile\/common\/flashscreen url reject
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryAdImages url reject
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryInfoFlow url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/shunfeng_json.js

# > 顺丰速运小程序
^https?:\/\/ucmp\.sf-express\.com\/cx-wechat-query\/query\/info-flow\/reconsitution-list url reject-200
^https?:\/\/ucmp\.sf-express\.com\/proxy\/operation-platform\/info-flow-adver\/query$ url reject-200


# >>>>>>>>>>>>>>> ✅ T ✅ <<<<<<<<<<<<<<
# > TestFlight
# TF账户管理 App更新时提示"APP不可用"问题，解决部分TF兑换错了区域的问题，例如Loon兑换到了国区
^https:\/\/testflight\.apple\.com\/v\d\/(app|account|invite)s\/ url script-analyze-echo-response https://raw.githubusercontent.com/NobyDa/Script/master/TestFlight/TestFlightAccount.js

# > 同程旅行 开屏广告
^https:\/\/wx\.17u\.cn\/xcxhomeapi\/((aggregator\/index)|(home\/(screen|banner|converge)))$ url reject

# > 淘宝
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome\/ url reject-200
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.tmall\.wireless url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/ url response-body "ems_etao_advertise" response-body ""
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise\/ url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get\/ url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources\/ url reject-200
# 开屏广告
^https?:\/\/gw\.alicdn\.com\/imgextra\/i\d\/.+1125-1602\.jpg url reject-200
^https:\/\/heic\.alicdn\.com\/imgextra\/\w{2}\/[\w!]+-\d-tps-\d{3,4}-\d{4}\.jpg_(1\d{3}|9\d{2})x(1\d{3}|9\d{2})q[59]0\.jpg_\.heic$ url reject
^https:\/\/(heic|gw)\.alicdn\.com\/imgextra\/i\d\/.+-tps-(702-758|1125-1602)\.(heic|jpg|png) url reject-200

# > 腾讯乘车码微信小程序
^https:\/\/ccmsupport-sz\.tenpay\.com\/cgi-bin\/common\/ccm_page_element.cgi url reject

# > 腾讯广告
^https?:\/\/btrace\.qq\.com url reject-200
^https?:\/\/api2\.helper\.qq\.com\/game\/buttons url reject-img
^https?:\/\/\w+\.beacon\.qq\.com url reject
^https?:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg url reject
^https?:\/\/lives\.l\.qq\.com\/livemsg\?sdtfrom= url reject-img
^https?:\/\/imgcache\.qq\.com\/qqlive\/ url reject-img
^https?:\/\/mtteve\.beacon\.qq\.com\/analytics url reject-img
^https?:\/\/vv\.video\.qq\.com\/getvmind\? url reject-200
^https?:\/\/ssl\.kohsocialapp\.qq\.com:10001\/game\/buttons url reject-200
^https?:\/\/qt\.qq\.com\/lua\/mengyou\/get_splash_screen_info url reject-200
^https?:\/\/3gimg\.qq\.com\/tencentMapTouch\/app\/activity\/ url reject-200
^https?:\/\/3gimg\.qq\.com\/tencentMapTouch\/splash\/ url reject-200
^https?:\/\/.+?\.l\.qq\.com url reject
^https?:\/\/\w+\.gdt\.qq\.com url reject
^https?:\/\/y\.gtimg\.cn\/music\/.*?_Ad/\d+\.png url reject-img
^https?:\/\/splashqqlive\.gtimg\.com\/website\/\d{6} url reject-img
^https?:\/\/qzonestyle\.gtimg\.cn\/qzone\/biz\/gdt\/mob\/sdk\/ios\/v2\/ url reject-img
^https?:\/\/discuz\.gtimg\.cn\/cloud\/scripts\/discuz_tips\.js url reject-img
^https?:\/\/bla\.gtimg\.com\/qqlive\/\d{6}.+?\.png url reject-img
^https?:\/\/mmgr\.gtimg\.com\/gjsmall\/qiantu\/upload\/ url reject-img
^https?:\/\/mmgr\.gtimg\.com\/gjsmall\/qqpim\/public\/ios\/splash\/.+?\/\d{4}_\d{4} url reject-img
^https?://bk\.bingo\.qq\.com/bk/crx/data/videoAd.*$ url reject-dict


# >>>>>>>>>>>>>>> ✅ U ✅ <<<<<<<<<<<<<<


# >>>>>>>>>>>>>>> ✅ V ✅ <<<<<<<<<<<<<<


# >>>>>>>>>>>>>>> ✅ W ✅ <<<<<<<<<<<<<<
# > 微信
# 公众号文章下方广告
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url response-body "advertisement_num":\d,"advertisement_info":\[.+\], response-body "advertisement_num":0,"advertisement_info":[]
# 微信公众号去除商品推广
^https?:\/\/mp\.weixin\.qq\.com\/mp\/cps_product_info\?action url reject-dict

# > WPS
^https?:\/\/ios\.wps\.cn\/ad-statistics-service url reject
^https?:\/\/mobile-pic\.cache\.iciba\.com\/feeds_ad\/ url reject-200


# >>>>>>>>>>>>>>> ✅ X ✅ <<<<<<<<<<<<<<
# > 米家
^https:\/\/home\.mi\.com\/cgi-op\/api\/v1\/recommendation\/(banner|myTab)\? url reject-dict

# > 闲鱼
^https?:\/\/gw\.alicdn\.com\/tfs\/.+?\d{4}-\d{4}\/[a-z]{3}$ url reject-200
^https?:\/\/gw\.alicdn\.com\/tfs\/TB1.+?750-\d{4} url reject-200
^https?:\/\/heic\.alicdn\.com\/tps\/i4\/.+?\.jpg_1200x1200q90\.jpg_\.heic$ url reject-200
^https?:\/\/asp\.cntv\.myalicdn\.com\/.+?\?maxbr=850 url reject-200
^https?:\/\/(?>heic|gw)\.alicdn\.com\/tfs\/TB1.+?-\d{4}-\d{4}\.jpg_1200x1200q90\.jpg_\.\w{3,4}$ url reject-200
^https?:\/\/(gw|heic)\.alicdn\.com\/\w{2}s\/[\w\/.-]+\.jpg_(9\d{2}|\d{4}) url reject
^https?:\/\/(gw|heic)\.alicdn\.com\/imgextra\/\w{2}\/[\w!]+-\d-tps-\d{3,4}-\d{4}\.jpg_(1\d{3}|9\d{2})x(1\d{3}|9\d{2})q\d0\.jpg_\.(heic|webp)$ url reject
^https?:\/\/(gw|heic)\.alicdn\.com\/imgextra\/.+\d{4}-\d{4}\.jpg_(9\d{2}|\d{4}) url reject
^https:\/\/gw\.alicdn\.com\/mt\/ url reject
^https:\/\/gw\.alicdn\.com\/tfs\/.+\d{3,4}-\d{4} url reject


# >>>>>>>>>>>>>>> ✅ Y ✅ <<<<<<<<<<<<<<


# >>>>>>>>>>>>>>> ✅ Z ✅ <<<<<<<<<<<<<<
# > 招商银行
^https?:\/\/webappcfg\.paas\.cmbchina\.com\/v\d\/func\/getmarketconfig url reject-200
# 首页横幅广告
^https:\/\/mbmodule-openapi\.paas\.cmbchina\.com\/graphic\/v2\/module\/graphic url reject-dict

# > 中国移动
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject-200
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/explorePage\/getAdverList url reject
# 多个悬浮窗 感谢#热心网友分享
^https:\/\/(client\.app\.coc|h\.app\.coc|app)\.10086\.cn\/biz-orange\/DN\/emotionMarket url reject

# > 中国联通
^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/getWelcomeAd url reject-200
^https?:\/\/m\.client\.10010\.com\/mobileService\/(activity|customer)\/(accountListData|get_client_adv|get_startadv) url reject-img
^https?:\/\/m\.client\.10010\.com\/mobileService\/customer\/getclientconfig\.htm url reject-dict
^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/(getHomePageAd|getWelcomeAd) url reject-img
^https?:\/\/[^(apple|10010)]+\.(com|cn)\/(a|A)d(s|v)?(\/|\.js) url reject-img
^https?:\/\/m1\.ad\.10010\.com\/noticeMag\/images\/imageUpload\/2\d{3} url reject-img
^https?:\/\/res\.mall\.10010\.cn\/mall\/common\/js\/fa\.js?referer= url reject-img

# > 中国电信
^https?:\/\/cloud\.189\.cn\/include\/splash\/ url reject
^https?:\/\/zt-app\.go189\.cn\/zt-app\/welcome\/.*?Animation url reject-img


# >>>>>>>>>>>>>>> ✅ # ✅ <<<<<<<<<<<<<<