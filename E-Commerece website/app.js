console.log("test")
$.getJSON('./data.json', function(products) {
     console.log(products);
     const container = $('#products');
    const productsArray = [];

$.each(products, function(key, product){
        productsArray.push(
            `<div class="product"> 
                <h5>${product.title}</h5>
                <img src="${product.image}"/> 
                <p>${product.description}</p>
                <li>${"$"+product.price}</li>
                <p>${product.category}</p>
                <button>Buy</button>
        </div>`)
        

    })
    container.append(productsArray);

 });
