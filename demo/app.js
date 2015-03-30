window.addEventListener('DOMContentLoaded', function(e) {
    var waterfall = new Waterfall();

    setInterval(function() {
        waterfall.addBox(newNode());
    }, 2000);

    function newNode() {
        var box = document.createElement('div');
        box.className = 'wf-box';
        var image = document.createElement('img');
        image.src = "http://placehold.it/660x250";
        box.appendChild(image);
        var content = document.createElement('div');
        content.className = 'content';
        var title = document.createElement('h3');
        title.appendChild(document.createTextNode('Heading'));
        content.appendChild(title);
        var p = document.createElement('p');
        p.appendChild(document.createTextNode('Content here'));
        content.appendChild(p);
        box.appendChild(content);

        return box;
    }
});