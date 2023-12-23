let products = []
let menImage = document.getElementById("menImage")
let menTitle = document.getElementById("menTitle")
let menBadgeContainer = document.getElementById("menBadgeContainer")
let menPrice = document.getElementById("menPrice")
let womenImage = document.getElementById("womenImage")
let womenTitle = document.getElementById("womenTitle")
let womenBadgeContainer = document.getElementById("womenBadgeContainer")
let womenPrice = document.getElementById("womenPrice")
let kidsImage = document.getElementById("kidsImage")
let kidsTitle = document.getElementById("kidsTitle")
let kidsBadgeContainer = document.getElementById("kidsBadgeContainer")
let kidsPrice = document.getElementById("kidsPrice")

document.getElementById("defaultOpen").click()

let createAppendProductsMen = (products) => {
    let { category_products } = products[0]
    for (let each of category_products) {
        let { image, title, vendor, badge_text, price, compare_at_price } = each
        let menImg1 = document.createElement("div")
        menImg1.style.backgroundImage = `url('${image}')`
        menImg1.classList.add("product-img")
        menImage.appendChild(menImg1)
        let menTitle1 = document.createElement("h1")
        let menVendor1 = document.createElement("p")
        menVendor1.textContent = vendor
        menVendor1.classList.add("vendor")
        menTitle1.textContent = title + " . " + menVendor1.textContent
        menTitle1.classList.add("title")
        menTitle.appendChild(menTitle1)
        let menBadgeText1 = document.createElement("p")
        menBadgeText1.textContent = badge_text
        menBadgeText1.classList.add("badge")
        menImg1.appendChild(menBadgeText1)
        let menPrice1 = document.createElement("p")
        menPrice1.textContent = "Rs. " + price + ".00"
        menPrice1.classList.add("price")
        menPrice.appendChild(menPrice1)
        let menComparePrice1 = document.createElement("p")
        menComparePrice1.textContent = compare_at_price
        menComparePrice1.classList.add("compare")
        menPrice.appendChild(menComparePrice1)
        let menDiscount1 = parseInt(compare_at_price) - parseInt(price)
        let menDiscountPercentage1 = Math.ceil((menDiscount1 / compare_at_price) * 100)
        let menProfit1 = document.createElement("p")
        menProfit1.textContent = menDiscountPercentage1 + "% off"
        menProfit1.classList.add("discount")
        menPrice.appendChild(menProfit1)
    }
}

let createAppendProductsWomen = (products) => {
    let { category_products } = products[1]
    for (let each of category_products) {
        let { image, title, vendor, badge_text, price, compare_at_price } = each
        let wommenImg1 = document.createElement("div")
        wommenImg1.style.backgroundImage = `url('${image}')`
        wommenImg1.classList.add("product-img")
        womenImage.appendChild(wommenImg1)
        let womenTitle1 = document.createElement("h1")
        let womenVendor1 = document.createElement("p")
        womenVendor1.textContent = vendor
        womenVendor1.classList.add("vendor")
        womenTitle1.textContent = title + " . " + womenVendor1.textContent
        womenTitle1.classList.add("title")
        womenTitle.appendChild(womenTitle1)
        let womenBadgeText1 = document.createElement("p")
        womenBadgeText1.textContent = badge_text
        womenBadgeText1.classList.add("badge")
        wommenImg1.appendChild(womenBadgeText1)
        let womenPrice1 = document.createElement("p")
        womenPrice1.textContent = "Rs. " + price + ".00"
        womenPrice1.classList.add("price")
        womenPrice.appendChild(womenPrice1)
        let womenComparePrice1 = document.createElement("p")
        womenComparePrice1.textContent = compare_at_price
        womenComparePrice1.classList.add("compare")
        womenPrice.appendChild(womenComparePrice1)
        let womenDiscount1 = parseInt(compare_at_price) - parseInt(price)
        let womenDiscountPercentage1 = Math.ceil((womenDiscount1 / compare_at_price) * 100)
        let womenProfit1 = document.createElement("p")
        womenProfit1.textContent = womenDiscountPercentage1 + "% off"
        womenProfit1.classList.add("discount")
        womenPrice.appendChild(womenProfit1)
    }
}

let createAppendProductsKids = (products) => {
    let { category_products } = products[2]
    for (let each of category_products) {
        let { image, title, vendor, badge_text, price, compare_at_price } = each
        let kidsImg1 = document.createElement("div")
        kidsImg1.style.backgroundImage = `url('${image}')`
        kidsImg1.classList.add("product-img")
        kidsImage.appendChild(kidsImg1)
        let kidsTitle1 = document.createElement("h1")
        let kidsVendor1 = document.createElement("p")
        kidsVendor1.textContent = vendor
        kidsVendor1.classList.add("vendor")
        kidsTitle1.textContent = title + " . " + kidsVendor1.textContent
        kidsTitle1.classList.add("title")
        kidsTitle.appendChild(kidsTitle1)
        let kidsBadgeText1 = document.createElement("p")
        kidsBadgeText1.textContent = badge_text
        kidsBadgeText1.classList.add("badge")
        kidsImg1.appendChild(kidsBadgeText1)
        let kidsPrice1 = document.createElement("p")
        kidsPrice1.textContent = "Rs. " + price + ".00"
        kidsPrice1.classList.add("price")
        kidsPrice.appendChild(kidsPrice1)
        let kidsComparePrice1 = document.createElement("p")
        kidsComparePrice1.textContent = compare_at_price
        kidsComparePrice1.classList.add("compare")
        kidsPrice.appendChild(kidsComparePrice1)
        let kidsDiscount1 = parseInt(compare_at_price) - parseInt(price)
        let kidsDiscountPercentage1 = Math.ceil((kidsDiscount1 / compare_at_price) * 100)
        let kidsProfit1 = document.createElement("p")
        kidsProfit1.textContent = kidsDiscountPercentage1 + "% off"
        kidsProfit1.classList.add("discount")
        kidsPrice.appendChild(kidsProfit1)
    }
}

function openProduct(event, productCategory) {
    let i, tabContent, tablinks;
    tabContent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }
    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    document.getElementById(productCategory).style.display = "block"
    event.currentTarget.className += " active"

}

let getProductList = async () => {
    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    let options = {
        method: "GET"
    }
    let response = await fetch(url, options)
    let productData = await response.json()
    products.push(productData.categories)
    createAppendProductsMen(products[0])
    createAppendProductsWomen(products[0])
    createAppendProductsKids(products[0])
}
getProductList()