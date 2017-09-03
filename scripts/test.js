$(document).ready(function () {
    $("#menu-toggle").click(function () {
        $("#sidebar").toggle("slide");
    });
});

(function pushImages() {
    //json array of images    
    //as images were not supplied,I have chosen one from the internet to showcase.
    var images = [{ url: "audicity.jpg", title: "Audi City", caption: "How to purchase a real car in virtual store" }, { url: "audicity.jpg", title: "Audi City", caption: "How to purchase a real car in virtual store" }, { url: "audicity.jpg", title: "Audi City", caption: "How to purchase a real car in virtual store" }, { url: "audicity.jpg", title: "Audi City", caption: "How to purchase a real car in virtual store" }, { url: "audicity.jpg", title: "Audi City", caption: "How to purchase a real car in virtual store" }, { url: "audicity.jpg", title: "Audi City", caption: "How to purchase a real car in virtual store" }];
    for (var i = 0; i < images.length; i++) {
        //push the image to the markUp
        var newImage = images[i].url;
        var markUp = ("<div class='col-xs-12 col-md-4'><div class='thumbnail'><a><figure class='self-contained'><img class='img-responsive'    src='images/" + newImage + "' </img><figcaption class='caption'>" + images[i].title + "</figcaption>" + images[i].caption + " </figure> </a></div></div>");
        // get bootstrap place holder where to insert.after
        var placeHolder = document.getElementsByClassName("photo-gallery");
        for (var h = 0; h < placeHolder.length; h++) {
            //insert the markUp into the html after the placeholder
            placeHolder[h].insertAdjacentHTML("beforeend", markUp);
        };
    };
})();



