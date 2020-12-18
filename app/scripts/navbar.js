window.addEventListener('load', (event) => {
        $('.mobileIcon').click(function() {
            if ($('.mobileNav').css("display") == "none") {
                var items = document.getElementsByClassName('item');
                for (var i = 0; i < items.length; i ++) {
                    items[i].style.display = "none";
                }
                $('.mobileNav').css("display", "block");
                $('.hamburger1 img').css("background-color", "#FB9E36");
            }
            else {
                $('.mobileNav').css("display", "none");
                $('.hamburger1 img').css("background-color", "#42748E");
            } 
        });

        $('.projTop').click(function() {
            if ($('.proj').css("display") == "none") {
                var items = document.getElementsByClassName('item');
                for (var i = 0; i < items.length; i ++) {
                    items[i].style.display = "none";
                }
                var projItems = document.getElementsByClassName('proj');
                for (var i = 0; i < projItems.length; i ++) {
                    projItems[i].style.display = "block";
                }
            }
            else {
                var items = document.getElementsByClassName('item');
                for (var i = 0; i < items.length; i ++) {
                    items[i].style.display = "none";
                }
            }
        });

        $('.partsTop').click(function() {
            if ($('.parts').css("display") == "none") {
                var items = document.getElementsByClassName('item');
                for (var i = 0; i < items.length; i ++) {
                    items[i].style.display = "none";
                }
                var projItems = document.getElementsByClassName('parts');
                for (var i = 0; i < projItems.length; i ++) {
                    projItems[i].style.display = "block";
                }
            }
            else {
                var items = document.getElementsByClassName('item');
                for (var i = 0; i < items.length; i ++) {
                    items[i].style.display = "none";
                }
            }
        });

        $('.huPrTop').click(function() {
            if ($('.huPr').css("display") == "none") {
                var items = document.getElementsByClassName('item');
                for (var i = 0; i < items.length; i ++) {
                    items[i].style.display = "none";
                }
                var projItems = document.getElementsByClassName('huPr');
                for (var i = 0; i < projItems.length; i ++) {
                    projItems[i].style.display = "block";
                }
            }
            else {
                var items = document.getElementsByClassName('item');
                for (var i = 0; i < items.length; i ++) {
                    items[i].style.display = "none";
                }
            }
        });

        $('.teTop').click(function() {
            if ($('.te').css("display") == "none") {
                var items = document.getElementsByClassName('item');
                for (var i = 0; i < items.length; i ++) {
                    items[i].style.display = "none";
                }
                var projItems = document.getElementsByClassName('te');
                for (var i = 0; i < projItems.length; i ++) {
                    projItems[i].style.display = "block";
                }
            }
            else {
                var items = document.getElementsByClassName('item');
                for (var i = 0; i < items.length; i ++) {
                    items[i].style.display = "none";
                }
            }
        });
});