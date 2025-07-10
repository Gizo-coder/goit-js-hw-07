// ul#categories öğesini seç

const categoriesList = document.querySelector(`#categories`);

// item sınıfına sahip tüm "li" öğelerini seç

const categoryItems = categoriesList.querySelectorAll(`.item`);

// kategorilerin sayısını yazdır

console.log(`Number of categories: ${categoryItems.length}`);

// her kategori için başlık ve alt öğe sayısını yazdrı

categoryItems.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);

});