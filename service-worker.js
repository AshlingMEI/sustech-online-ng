/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a5a316698705b60b3224cba4ab3fd51"
  },
  {
    "url": "about.html",
    "revision": "f0be0b16769fe9b1240a3e4a32551aa5"
  },
  {
    "url": "assets/css/0.styles.1328dae9.css",
    "revision": "fd40e40637dbba1fe19a62d993032341"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/szmc-system-map-2020.baa0800d.png",
    "revision": "baa0800d66d21cad0c6185f5c196a35c"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.7c1e0133.js",
    "revision": "13ea6f479c0b681f704ff3ae48bd3bb3"
  },
  {
    "url": "assets/js/11.5b0d293e.js",
    "revision": "840a929b35a73c10a31690e5781f3504"
  },
  {
    "url": "assets/js/12.02db20f1.js",
    "revision": "08121a122467fcd36b6e3152c883e1b9"
  },
  {
    "url": "assets/js/13.27325ec0.js",
    "revision": "6d371c304b1257929258def6d08af365"
  },
  {
    "url": "assets/js/14.c94f50ef.js",
    "revision": "f7485414d7ef7ffa063e2ba1d9c26dc7"
  },
  {
    "url": "assets/js/15.bcf4ee9a.js",
    "revision": "9f606f7a1c71ebde4aee4a9216cc0f43"
  },
  {
    "url": "assets/js/16.2abb4080.js",
    "revision": "3911e595c2f0d6d97390cf3d8ee5edd1"
  },
  {
    "url": "assets/js/17.b757a930.js",
    "revision": "9f4e158d2e363494bd539abf2ccb2006"
  },
  {
    "url": "assets/js/18.2a7b765f.js",
    "revision": "d935e43a5b0d1e4136eff3ea9fd3a679"
  },
  {
    "url": "assets/js/19.a966a724.js",
    "revision": "ca0ce9c7598861649f061a487594d924"
  },
  {
    "url": "assets/js/2.9b67d8a9.js",
    "revision": "3689fd980925bf0bae1bce0eb3d712b3"
  },
  {
    "url": "assets/js/20.8f0a8379.js",
    "revision": "94935411fbb0c5195a0cd2ebef4c95a5"
  },
  {
    "url": "assets/js/21.427c6af2.js",
    "revision": "54ee18b7d54a19d072a990cf3dc14cd2"
  },
  {
    "url": "assets/js/22.91cc27f5.js",
    "revision": "fec1a94e7f9dd6e981613c60b79dc03d"
  },
  {
    "url": "assets/js/23.58521c8c.js",
    "revision": "bf4b184ce10b6d2a9793f7d284842680"
  },
  {
    "url": "assets/js/24.8d06b596.js",
    "revision": "4ff67e3891b1198b377d7a5897da7b8c"
  },
  {
    "url": "assets/js/25.b87945d6.js",
    "revision": "6f416ff02e5d5bfd703bbff79c863094"
  },
  {
    "url": "assets/js/26.f2d233ca.js",
    "revision": "b610289f912013c813a0c6129e9eeef4"
  },
  {
    "url": "assets/js/27.892e8441.js",
    "revision": "93118f76021e0b3478a2b138ac4d7ef7"
  },
  {
    "url": "assets/js/28.9a9acee9.js",
    "revision": "7b4314761121f6b17cdd5e7154dfcc78"
  },
  {
    "url": "assets/js/29.c779fdb2.js",
    "revision": "30194f22c25e9707526fff08b1b6baa3"
  },
  {
    "url": "assets/js/3.3cf739f7.js",
    "revision": "c0d4a87e2726cf75d8ac3be839ff7bf4"
  },
  {
    "url": "assets/js/30.602b8cff.js",
    "revision": "44ddeb5a7e095ef1537bf763337c4477"
  },
  {
    "url": "assets/js/31.ae3819d6.js",
    "revision": "9789f5b0998539594edefb36f737f969"
  },
  {
    "url": "assets/js/32.3c9a29ae.js",
    "revision": "e2c5e89bb9810c247c5f87f6c68c2f06"
  },
  {
    "url": "assets/js/33.684117ae.js",
    "revision": "f0dc0948bf5c90002a4d4aa032951c50"
  },
  {
    "url": "assets/js/34.1d09c22b.js",
    "revision": "926864b38948ea0796555514095d0d3a"
  },
  {
    "url": "assets/js/35.39b8f4df.js",
    "revision": "a05029c2d7b7301206a4f838615c7121"
  },
  {
    "url": "assets/js/36.5996831f.js",
    "revision": "15dc139a0f37e73f872ef1418ffc4a37"
  },
  {
    "url": "assets/js/37.a9099ba1.js",
    "revision": "276f87bea26e50453d745771cbbe120f"
  },
  {
    "url": "assets/js/38.9b744d5e.js",
    "revision": "99d3773c3a4d89250c0a3c43664f8ce5"
  },
  {
    "url": "assets/js/39.9ea59bf4.js",
    "revision": "b08cbcc084ddaf834edb4e4d9286d665"
  },
  {
    "url": "assets/js/4.50db30c3.js",
    "revision": "dbe4866c069f7f54d349632a59dabdb2"
  },
  {
    "url": "assets/js/40.d5160632.js",
    "revision": "5a24b01cd784379b0e7265e5e79306fe"
  },
  {
    "url": "assets/js/41.a062ea3d.js",
    "revision": "128357f428e7a5ed484ab8ecb40d46e6"
  },
  {
    "url": "assets/js/42.c436d635.js",
    "revision": "36d660b799b2c1172b8cbdb1e2ca60e6"
  },
  {
    "url": "assets/js/43.c0af630e.js",
    "revision": "f2f21bdf24155c9b8b7a44e191fd29c9"
  },
  {
    "url": "assets/js/44.ccb61ea9.js",
    "revision": "78eddd61ed39d1688160ed9d337b1443"
  },
  {
    "url": "assets/js/45.91f94a61.js",
    "revision": "ecdc482facb20aad217f04298deb4ca7"
  },
  {
    "url": "assets/js/46.d0427ebe.js",
    "revision": "a8fe3d359c40fee488db4fad13a50259"
  },
  {
    "url": "assets/js/47.b23294a5.js",
    "revision": "b374262e51aa391d8d311b76b60329eb"
  },
  {
    "url": "assets/js/48.51c46716.js",
    "revision": "e71849707a95de9646e25f8049c2b332"
  },
  {
    "url": "assets/js/49.fe6f6a9e.js",
    "revision": "b1d95042466b26affce721d025b81dc2"
  },
  {
    "url": "assets/js/5.e84cb23f.js",
    "revision": "e2dd3da747257919d284558e43c43fd0"
  },
  {
    "url": "assets/js/50.ba9d84a9.js",
    "revision": "28ca129074ff9751c59f54725329fc82"
  },
  {
    "url": "assets/js/6.a3a61588.js",
    "revision": "6927b94f796e3139eb0946cc4f3f2c3f"
  },
  {
    "url": "assets/js/7.aaf779db.js",
    "revision": "a7685639923c70d45b22003d837f8242"
  },
  {
    "url": "assets/js/8.69b5e725.js",
    "revision": "64cadcc1320f8cf6ba5e4a84138ba5b4"
  },
  {
    "url": "assets/js/9.2b113763.js",
    "revision": "27fb0257b9c0ed45a5442355a98c85ff"
  },
  {
    "url": "assets/js/app.c5235015.js",
    "revision": "17965d67dfb1df21b9dd004e34cc8225"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "ad778d1d5959706588b9575b61493082"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "1f2cf97b93b5240d054d0a54d1897ba5"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "7275b59b80d896f0f3b172215b8f3a55"
  },
  {
    "url": "calendar/index.html",
    "revision": "d8c19fb974ecb09473a980b5c0613dc7"
  },
  {
    "url": "catering/index.html",
    "revision": "0b22aaeb73fc90f9582e0cabba6ca2bf"
  },
  {
    "url": "contact/index.html",
    "revision": "d6b35a7fbd4d1768f30d395bec590742"
  },
  {
    "url": "facility/index.html",
    "revision": "f3f7eca5cbe2ded35bb1115d69fe7fa2"
  },
  {
    "url": "facility/panolens.html",
    "revision": "d2d37574bc95ba285fab0a78ee84f782"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "f219d7f1c819af73607931eb534a50f1"
  },
  {
    "url": "index.html",
    "revision": "dc349b514bd6993ff228105cbf836039"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "acef76e97b573e5d018f6d5042bc9e58"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "9ba2411adbe1daf48b8c5c1c942a2c09"
  },
  {
    "url": "life/index.html",
    "revision": "c3bc68161b861c6b0461bc410b246092"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "fda78b67a1761c1b95c89e313877b604"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "99634887485b59863eaf1f11bf5e8bf2"
  },
  {
    "url": "organizations/index.html",
    "revision": "59b7916213cb3438baeca5913a2afe66"
  },
  {
    "url": "organizations/registered-organization.html",
    "revision": "28b8faff079cc4566e6072b83b54160e"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "d2355aae7b26abd048a846ec7e3e3f41"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "53e955a51acbf0eb2afd56b4c05c956a"
  },
  {
    "url": "service/email/index.html",
    "revision": "50832b8bb5b56bfcbc23a28e3ac8a5f4"
  },
  {
    "url": "service/index.html",
    "revision": "6021e3c09f4d83558cee6a19ee5ea5fe"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "3c0609c53416bf07985a30d4b82053f5"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "598af8dbe543c0151471c2d402c51718"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "7354cb39082e0a00b005a3c71e9071f3"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "0c1a1c7c4acb0e96f46ef07b9aab7b14"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "550fd60d2e19bd93095bac4036fd896d"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "c4e7a1f68275ba580aaa3cd81373fc37"
  },
  {
    "url": "service/network/index.html",
    "revision": "ef321f4f1faa0584c98a454ce8abdfa5"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "019c248ea5b0dfdb233a3d340cd82e43"
  },
  {
    "url": "service/sid/index.html",
    "revision": "2103abd1f6ba8761660a65f4af72e837"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "a7b847c0c27c3611060b6d8dc043e5b3"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "e2e140776d59e03c7f91c586d2016ed5"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "3dfbd268e6301e5bf10446bfea69ca6c"
  },
  {
    "url": "site-help/index.html",
    "revision": "07ba78ffde8caf35eb738d2ca3a5f6b2"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "ff2beb7deea7b329f045182336b53127"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "13e35dc55ad6480fc4ec0e5daf65bd77"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "9c48f7896c958ab75587699839b2d0b2"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "94825cc00ea89ab9e7feb005b12b9e40"
  },
  {
    "url": "study/index.html",
    "revision": "178ece45075b1efbceb2b575f48860f6"
  },
  {
    "url": "surroundings/index.html",
    "revision": "bf7141f2d23b2957055aa2a44189ff59"
  },
  {
    "url": "transport/holiday.html",
    "revision": "819531961669d933c6b1efe92a35d2e9"
  },
  {
    "url": "transport/index.html",
    "revision": "35dad984b475e4efa019f3ee573b1f85"
  },
  {
    "url": "transport/workday.html",
    "revision": "ab049ee89c324ffadc34982dc6d74f85"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
