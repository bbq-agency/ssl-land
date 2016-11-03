

(function() {
    var socialArr = ['p47876p160887p0eac', 'p47876p160888pabba', 'p47876p160889p0e5f'];

    // socialArr = [vk, ok, default];

    var elem = document.querySelectorAll('[data-url]');


    function newUrl(social) {

        for (var i = 0; i < elem.length; i++) {
          elem[i].href = elem[i].href + social + '#registration';
        }
        
    }

    var urlParams = window.location.search;

    var socialParam =   (urlParams.indexOf('vk') > 0) ? socialArr[0] :
                        (urlParams.indexOf('ok') > 0) ? socialArr[1] :
                        socialArr[2];

    if (elem) {
        newUrl(socialParam);
    }

})()
