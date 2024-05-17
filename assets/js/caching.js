"serviceWorker" in navigator && navigator.serviceWorker.register(`${siteData.siteUrl}/assets/js/sw.js?v=1.0.0.3`, {
    scope: "/"
}).then((function() {})).catch((function(e) {
    console.log(e)
}));