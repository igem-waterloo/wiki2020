document.addEventListener("DOMContentLoaded", function(event) { 


    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            var setClasses = !this.classList.contains('active');

            if (setClasses) {
                setClass(acc, 'active', 'remove');
                setClass(panel, 'show', 'remove');
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }

    for (var i = 0; i < panel.length; i++) {
        panel[i].onclick = function() {
            var setClasses = !this.classList.contains('show');

            if (!setClasses) {
                setClass(acc, 'active', 'remove');
                setClass(panel, 'show', 'remove');
            }
        }
    }

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }

    });