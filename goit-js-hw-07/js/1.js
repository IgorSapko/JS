const numberOfcategories = document.querySelectorAll("ul#categories > li.item")
  .length;
console.log(`в списке ${numberOfcategories} категории`);

const arrOfnameOfTitle = document.querySelectorAll(
  "ul#categories > li.item > h2"
);
arrOfnameOfTitle.forEach((elem, index) => {
  console.log(
    `категория ${elem.textContent} колличество элементов ${
      document.querySelectorAll("ul#categories>li.item>ul")[index].children
        .length
    }`
  );
});
