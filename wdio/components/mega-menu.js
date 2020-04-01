class MegaMenu {
    getLinks(category){
        return $$(`.mega-menu__dropdown a[data-menu-hierarchy^=${category}]`);
    }
}

module.exports = new MegaMenu();