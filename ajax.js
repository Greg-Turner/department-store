// declare a variable to contain the following
// feed a function to add the category to the function to call the products
// for each of the products array determine the category
// display the variable in the DOM
$(document).ready(function() {
const outputEl = $("#catalog")
 {
      
    $.ajax ({
        "url": "products.json",
        "method": "GET"

    }).then(productData => {
        const productsArray = productData.products
        $(document).ready(function() {
        $.ajax ({
            "url": "categories.json",
            "method": "GET"

        }).then(categoryData => {
            let finalHTML = ""
            const categoryArray = categoryData.categories
            productsArray.forEach(product => {
                categoryArray.forEach(category => {
                    if (product.category_id === category.id) {
                        finalHTML += `
                        <h3>${product.name}</h3>
                        <h5>Category: ${category.name}</h5>
                        <h5>Price: $${product.price}</h5>
                        `
                    }
                })
            })
            
            outputEl.html(finalHTML)
        })
    })
})
}
})
