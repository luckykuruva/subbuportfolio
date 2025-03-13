const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');

menuToggler.addEventListener('click', function() {
    sideBar.classList.toggle('active');
})

for (let i = 0; i < navItemLinks.length; i++) {
    navItemLinks[i].addEventListener('click', function() {

        const itemLinkText = this.textContent.toLowerCase();

        for (let i = 0; i < pages.length; i++) {
            if (pages[i].classList.contains(itemLinkText)) {
                pages[i].classList.add('active');
                navItemLinks[i].classList.add('active');
            } else {
                pages[i].classList.remove('active');
                navItemLinks[i].classList.remove('active');
            }
        }
    });
}
document.querySelector('.projects-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function() {
        for (let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].classList.remove('active');
        }
        this.classList.add('active');

        for (let i = 0; i < itemCategory.length; i++) {
            const itemCategoryText = itemCategory[i].textContent;
            switch (this.textContent) {
                case itemCategoryText:
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                case 'All':
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                default:
                    itemCategory[i].parentElement.classList.remove('active');
            }
        }
    });
    document.getElementById('locationLink').addEventListener('click', function(event) {
        event.preventDefault();


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {

                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var mapsURL = 'https://www.google.com/maps/search/?api=1&query=' +
                    latitude + ',' + longitude;
                window.open(mapsURL, '_blank');
            }, function(error) {

                alert("Error retrieving location: " + error.message);
            });
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    });
}