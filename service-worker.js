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
    "revision": "70b719530d6b8b34a0c06ee8d78eee69"
  },
  {
    "url": "assets/css/0.styles.1ec9e5c0.css",
    "revision": "82ca8564cb0a52f3ebe2ed6636ac266b"
  },
  {
    "url": "assets/img/add_user.234def97.png",
    "revision": "234def973e393b49ee684e0a47973b19"
  },
  {
    "url": "assets/img/all_users.01c6f9cf.png",
    "revision": "01c6f9cf39bdba1fc644f24bd1a83ee2"
  },
  {
    "url": "assets/img/check_add_user.0260ff36.png",
    "revision": "0260ff367adf5728361a75bd808bf8ac"
  },
  {
    "url": "assets/img/check_delete_user.b85cae44.png",
    "revision": "b85cae441928d8b59ea506ec0f66f418"
  },
  {
    "url": "assets/img/check_username_changing.ebdd9769.png",
    "revision": "ebdd9769c3e8f1b1f66b1f86130d322e"
  },
  {
    "url": "assets/img/delete_user.ca362db8.png",
    "revision": "ca362db832966cdc1f525ee49f1ac91b"
  },
  {
    "url": "assets/img/one_users.e6355338.png",
    "revision": "e635533824b419a9a7da4a36bfd0d40d"
  },
  {
    "url": "assets/img/relation_model.4e16e420.png",
    "revision": "4e16e42030b24262249207a2a4de810a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_username.a01bcc83.png",
    "revision": "a01bcc833b46921d30c95f63959ecab9"
  },
  {
    "url": "assets/js/10.d4f8710e.js",
    "revision": "6b404db6909321274b8c0766fcab0286"
  },
  {
    "url": "assets/js/11.33b100ac.js",
    "revision": "2bcb07b11f958b82fdc20cdbf1e38198"
  },
  {
    "url": "assets/js/12.a78fcacd.js",
    "revision": "251421fa5c2535cadf694c7fc1a5040a"
  },
  {
    "url": "assets/js/13.6e2d61ac.js",
    "revision": "8ed4d8d1c8dcfe10b1344df9be5af667"
  },
  {
    "url": "assets/js/14.b9152e5c.js",
    "revision": "fe29c22c40b86d8b6507c8979ac9e73d"
  },
  {
    "url": "assets/js/15.06df51e6.js",
    "revision": "e902671e31f3017720c90283b416cb5a"
  },
  {
    "url": "assets/js/16.b5740c9b.js",
    "revision": "b7e5463ffe2e04ec85bd72f4244afee7"
  },
  {
    "url": "assets/js/17.a9bb46e4.js",
    "revision": "c4f01249564319211cba1b74a490dd36"
  },
  {
    "url": "assets/js/18.87c516b8.js",
    "revision": "9f5614ced637a69cb434d77ce22c95a8"
  },
  {
    "url": "assets/js/19.b3f33291.js",
    "revision": "dba6df2575ea2ef5ea1eb7a9a5d386a9"
  },
  {
    "url": "assets/js/2.710e87f2.js",
    "revision": "34554b0354a146605f714b68f758c559"
  },
  {
    "url": "assets/js/20.03f8e4ea.js",
    "revision": "a2e259f29292f34796ff35dad619e138"
  },
  {
    "url": "assets/js/21.c52a74cd.js",
    "revision": "1333730378706077f60b0df3f422eabe"
  },
  {
    "url": "assets/js/22.57eeb55b.js",
    "revision": "956e34ea2081c51fafa32fd729a6ceed"
  },
  {
    "url": "assets/js/23.1509a3f8.js",
    "revision": "6e9796cbe2e7e24617fb8a71bfe6965f"
  },
  {
    "url": "assets/js/24.440d8d82.js",
    "revision": "937a45b25d90079f2a27144e2c224449"
  },
  {
    "url": "assets/js/26.2e99f479.js",
    "revision": "ddf4c64c8a650fdd3e859292777a7be7"
  },
  {
    "url": "assets/js/3.12058a26.js",
    "revision": "767170cd918ee448d8b1a0aaf2493b14"
  },
  {
    "url": "assets/js/4.508c7075.js",
    "revision": "5564a8a9a649c01816fa441a4bd8c1e0"
  },
  {
    "url": "assets/js/5.29a4bc10.js",
    "revision": "f9a78b417e9890c5d6bae4603a80c1b4"
  },
  {
    "url": "assets/js/6.a8273a57.js",
    "revision": "67781f217419c34dd494ebae3811fa25"
  },
  {
    "url": "assets/js/7.2c272129.js",
    "revision": "404e228ac7c7f504e381da421bf30b33"
  },
  {
    "url": "assets/js/8.e8727de4.js",
    "revision": "8c8718ad292705d8c0cba596db868ae3"
  },
  {
    "url": "assets/js/9.66a2f8a8.js",
    "revision": "c643f266b83cefe81f35424ea88bb856"
  },
  {
    "url": "assets/js/app.91207473.js",
    "revision": "f8e32339feccc3dc6a84ef3ca132bc56"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8da992908ef7c10f3d9b9eeede3408f9"
  },
  {
    "url": "design/index.html",
    "revision": "82fb20eb4bb0df12085713c645075be3"
  },
  {
    "url": "index.html",
    "revision": "52970825f57627a881cc1638643d808d"
  },
  {
    "url": "intro/index.html",
    "revision": "6ee53d8ca4b9baee8bab257240f3b765"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a3dc810a15cb6a4a3561565aa0a737ea"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e3aa10b199ad81862e27076f8a798d3c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "10f11b38b62c14b679ce213984856fb0"
  },
  {
    "url": "software/index.html",
    "revision": "24a4730c81207be744f4cf4ad7d2aa70"
  },
  {
    "url": "test/index.html",
    "revision": "0d744480ffbbb2b840bd7fcaea423095"
  },
  {
    "url": "use cases/index.html",
    "revision": "43c860fa1277fd4cb5c994c4d50f47b6"
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
