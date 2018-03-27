javascript:(function () {
    /* Adds CSS script and viewport meta tags into html head */
    const s = document.createElement('link');
    s.setAttribute('href', 'https://rawgit.com/tomas223/kdice-mobile/master/styles/kdice-mobile-style.css');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('type', 'text/css');

    const m = document.createElement('meta');
    m.setAttribute('name', 'viewport');
    m.setAttribute('content', 'width=615,shrink-to-fit=yes');

    document.getElementsByTagName('head')[0].appendChild(m);
    document.getElementsByTagName('head')[0].appendChild(s);

    /* Adds auto end-turn checkbox */
    const btn = document.querySelector('.iogc-Controls button');

    const lbl = document.createElement('label');
    const txt = document.createTextNode('Auto End-Turn');
    const chckbx = document.createElement('input');
    chckbx.setAttribute('type', 'checkbox');
    lbl.appendChild(chckbx);
    lbl.appendChild(txt);

    document.querySelector('.iogc-Controls').appendChild(lbl);

    const btnObserver = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (
                mutation.attributeName === 'aria-hidden'
                && btn.getAttribute('aria-hidden') === null
                && chckbx.checked
            ) {
                setTimeout(() => btn.click(), 100);
            }
        }
    });

    btnObserver.observe(btn, { attributes: true });

    console.log('custom Kdice mobile script injected');
})();