function price(plans) {
    const priceTitle=document.querySelectorAll(".price__title");
    const priceDollar=document.querySelectorAll(".price__dollar");
    const radioTitle=document.querySelectorAll(".radio__title");
    plans.forEach((element, index) => {
        priceTitle[index].textContent=element.name;
        priceDollar[index].textContent="$"+element.price;
        radioTitle[index].textContent=element.name;
    });
}

export default price;