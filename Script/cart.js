var cartarr = JSON.parse(localStorage.getItem("cartitems"))||[]; 


  function addTocart(item){
    
    var cartData = {
        name : item.name,
        netWt : item.netWt,
        price : item.price,  
    };
    //    console.log(item.name, item.netWt, item.price);
    //    cartarr.push(item.name, item.netWt, item.price);

    cartarr.push(cartData)
    console.log(cartarr)
    localStorage.setItem("cartitems" , JSON.stringify(cartarr));

    }
