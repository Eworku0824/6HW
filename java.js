//array of objects using a constructor function
function Product(name, category, image, description) {
    this.name = name;
    this.category = category;
    this.image = image;
    this.description = description;
  }
  
  var products = [
    new Product("Medicine Title", "Medicine", "product1.jpg", "Medicine description goes here."),
    new Product("Health Things Title", "Health Things", "product2.jpg", "Health Things description goes here."),
    new Product("Vitamins Title", "Vitamins", "product3.jpg", "Vitamins description goes here.")
  ];
//for hidden pages
  $(document).on("pagecreate", "#home", function() {
    $("#catalog-link").on("click", function() {
      $.mobile.changePage("#catalog", { transition: "slide" });
    });
  });