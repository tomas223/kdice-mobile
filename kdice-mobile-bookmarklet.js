javascript:(function () {
    const s = document.createElement('link');
    s.setAttribute('href', 'https://cdn.rawgit.com/tomas223/kdice-mobile/cbfc6148/styles/kdice-mobile-style.css');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('type', 'text/css');

    const m = document.createElement('meta');
    m.setAttribute('name', 'viewport');
    m.setAttribute('content', 'width=device-width,initial-scale=1,shrink-to-fit=no');

    document.getElementsByTagName('head')[0].appendChild(m);
    document.getElementsByTagName('head')[0].appendChild(s);

    console.log("Custom CSS stylesheet injected");
})();