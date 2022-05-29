function price(plans) {
    const priceTitle=document.querySelectorAll(".price__title");
    const priceDollar=document.querySelectorAll(".price__dollar");

    for(let i=0; i<=plans.length; i++){
        priceTitle[i].textContent=plans[i].name;
        priceDollar[i].textContent="$"+plans[i].price;
    }
}

export default price;