(function() {
    var socialArr = ['p47876p160887p0eac', 'p47876p160888pabba', 'p47876p160889p0e5f'];

    // socialArr = [vk, ok, default];

    var elem = document.querySelector('[data-url]');



    function newUrl(social) {
        elem.href = elemHref + social + '#registration';
    }

    var urlParams = window.location.search;

    var socialParam = 	(urlParams.indexOf('vk') > 0) ? socialArr[0] :
        				(urlParams.indexOf('ok') > 0) ? socialArr[1] :
        				socialArr[2];


    if (elem) {
        var elemHref = elem.href;
        newUrl(socialParam);
    }

})()
