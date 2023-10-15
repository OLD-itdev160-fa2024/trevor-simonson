var data = [
    {
        name: 'IntelliSense for CSS class names',
        description: 'CSS class name completion for the HTML class attribute based on the definitions found in your workspace.',
        author: 'Zignd',
        url: 'https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion',
        downloads: 6788208,
        stars: 169,
        prices: 5.55,
        selector: 'p1',
        image: '/activity-5/images/ext1.gif'
    },
    {
        name: 'CSS Peek',
        description: 'Allow peeking to css ID and class strings as definitions from html files to respective CSS. Allows peek and goto definition.',
        author: 'Pranay Prakash',
        url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
        downloads: 4909667,
        stars: 86,
        prices: 0.99,
        selector: 'p2',
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/visual-studio-code-extensions-CSS-peek.gif?v=1593002619'
    }

];

function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;
    this.image = data.image;

    this.getFormattedDownloads = function() {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function() {
        return this.stars.toLocaleString();
    };

}

/******************************************************
 * UTILITY FUNCTIONS
 ******************************************************/


var getTodaysDate = function(){
    var today = new Date();
    return today.toDateString();
};

var writePackage = function(package){
    var selector = package['selector'];
    var name = document.getElementById(selector + '-name');
    var description = document.getElementById(selector + '-description');
    var author = document.getElementById(selector + '-author');
    var downloads = document.getElementById(selector + '-downloads');
    var stars = document.getElementById(selector + '-stars');
    var link = document.getElementById(selector + '-url');
    const image = document.getElementById(selector + '-image');

    name.textContent = selector[1] + '. ' + package.name;
    description.textContent = package.description;

    author.textContent = package.author;
    author.style.fontStyle = "italic";

    downloads.textContent = package.getFormattedDownloads();

    stars.textContent = `(${package.getFormattedStars()})`;

    image.src = package.image;

    link.textContent = `View ${package.name}`;
    link.href = package.url;
}


/***********************************************
 *  Construct actual content
 **********************************************/

// Add date to page
const date = document.getElementById('date');
date.textContent = getTodaysDate();

// Convert each data element to Package object and write to HTML
data.forEach(element => {
    var package = new Package(element);
    writePackage(package);
});
