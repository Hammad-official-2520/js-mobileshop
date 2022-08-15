function generateHtml(image, name, colors, price, camera) {
    var div = document.createElement("div");
    div.className += "cart"
    var img = document.createElement("img")
    img.src = image
    img.className += "myimg"
    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode(name);
    h2.appendChild(h2Text);
    var h4 = document.createElement("h4");
    var h4Text = document.createTextNode(colors);
    h4.appendChild(h4Text);
    var h6 = document.createElement("h4");
    var h6Text = document.createTextNode(price);
    h6.appendChild(h6Text);
    var span = document.createElement("h4");
    var spanText = document.createTextNode(camera);
    span.appendChild(spanText);
    div.appendChild(img)
    div.appendChild(h2);
    div.appendChild(h4);
    div.appendChild(h6);
    div.appendChild(span);

    return div;
}

generateHtml();


var mobiles = {
    iphone: {
        iphone11: {
            image: "https://m.media-amazon.com/images/I/71uuDYxn3XL._SX385_.jpg",
            name: "Iphone 11",
            camera: "12MP",
            colors: "Red Silver White",
            price: "140000 Rs",
            


        },
        iphone12: {
            name: "Iphone 12",
            camera: "12MP",
            colors: "Red Silver White",
            price: "250000 Rs",
            image: "https://smartphonestorekenya.com/wp-content/uploads/2020/11/iphone-12-pro-max-blue-hero.png"

        },

        iphone13: {
            name: "Iphone 13",
            camera: "16MP",
            colors: "Red Silver White",
            price: "360000 Rs",
            image: "https://appleshop.com.pk/wp-content/uploads/2021/09/iphone-13-starlight.png"


        },

        iphoneXR: {
            name: "Iphone XR",
            camera: "10MP",
            colors: "Red Silver White",
            price: "90000 Rs",
            image: "https://www.kickmobiles.com/images/thumbs/0014277_apple-iphone-xr_808.jpeg"


        }
    },
    vivo: {
        VivoY51: {
            name: "Vivo Y51",
            camera: " 8MP",
            colors: "Titanium Crystal Smphony",
            price: "330000",
            image: "https://tring.pk/wp-content/uploads/2020/09/Vivo-Y51-1.jpg"
        },

        VivoiQoo9: {
            name: "Vivo iQoo 9",
            camera: "48MP",
            colors: " Legend, Alpha, Phoenix Orange",
            price: "104999",
            image: "https://phonedroid.com.pk/wp-content/uploads/2022/02/vivo-iqoo-9-se-phonedroid-500x500.png?x64364"
        },

        VivoS15E: {
            name: "Vivo S15E",
            camera: "20MP",
            colors: " Black, Blue, Silver/Pink",
            price: " 600000",
            image: "https://tring.pk/wp-content/uploads/2022/04/vivo-S15e-1.jpg"


        },
        VivoT1: {
            name: "Vivo T1",
            camera: "18MP",
            colors: "Black Silver ",
            price: "500000",
            image: "https://fdn2.mobgsm.com/vv/pics/vivo/vivo-t1-sndrgn680-1.jpg"
        },


    },
    googlePixel: {
        GooglePixel6Pro: {
            name: "Google Pixel 6 Pro",
            camera: "11MP",
            colors: " Black White",
            price: " 154000",
            image:"https://www.powerplanetonline.com/cdnassets/products/2022/04/google_pixel_6_pro_5g_256gb_negro_l.jpg"
        },




        GooglePixel3: {
            name: "Google Pixel 3",
            camera: "8MP",
            colors: "Silver Grey ",
            price: "86000",
            image: "https://images.priceoye.pk/google-pixel-3a-pakistan-priceoye-mh0n0.jpg"


        },
        GooglePixelXL: {
            name: "Google Pixel XL",
            camera: "6MP",
            colors: "Sapphire Crystal Smphony ",
            price: "26000",
            image: "https://www.gizmochina.com/wp-content/uploads/2017/10/Google-Pixel-XL-2-Product-Profile.jpg"
        },

        GooglePixel3aXL: {
            name: "Google Pixel 3a XL",
            camera: "9MP",
            colors: 'Black',
            price: "92000",
            image: "https://images-na.ssl-images-amazon.com/images/I/61Lq3f-51CL.jpg"
        },
    }

}







var result = mobiles["iphone"]["iphoneXR"];
var result1 = mobiles["iphone"]["iphone11"];
var result2 = mobiles["iphone"]["iphone12"];
var result3 = mobiles["iphone"]["iphone13"];
var result4 = mobiles["vivo"]["VivoY51"]
var result5 = mobiles["vivo"]["VivoiQoo9"]
var result6 = mobiles["vivo"]["VivoS15E"]
var result7 = mobiles["vivo"]["VivoT1"]
var result8 = mobiles["googlePixel"]["GooglePixel3aXL"]
var result9 = mobiles["googlePixel"]["GooglePixelXL"]
var result10 = mobiles["googlePixel"]["GooglePixel3"]
var result11 = mobiles["googlePixel"]["GooglePixel6Pro"]
var main = document.getElementById("main");

main.appendChild(
    generateHtml(result.image, result.name, result.colors, result.camera, result.price)
);

main.appendChild(
    generateHtml(result1.image, result1.name, result1.colors, result1.camera, result1.price)

)

main.appendChild(
    generateHtml(result2.image, result2.name, result2.colors, result2.camera, result2.price)

)

main.appendChild(
    generateHtml(result3.image, result3.name, result3.colors, result3.camera, result3.price)

)

main.appendChild(
    generateHtml(result4.image, result4.name, result4.colors, result4.camera, result4.price)

)
main.appendChild(
    generateHtml(result5.image, result5.name, result5.colors, result5.camera, result5.price)

)
main.appendChild(
    generateHtml(result6.image, result6.name, result6.colors, result6.camera, result6.price)

)
main.appendChild(
    generateHtml(result7.image, result7.name, result7.colors, result7.camera, result7.price)

)

main.appendChild(
    generateHtml(result8.image, result8.name, result8.colors, result8.camera, result8.price)

)


main.appendChild(
    generateHtml(result9.image, result9.name, result9.colors, result9.camera, result9.price)

)
main.appendChild(
    generateHtml(result10.image, result10.name, result10.colors, result10.camera, result10.price)

)
main.appendChild(
    generateHtml(result11.image, result11.name, result11.colors, result11.camera, result11.price)

)








function abc() {
    var select = document.getElementById("select")
    var selecttext = select.options[select.selectedIndex].text;
    console.log(selecttext)
    var input = document.getElementById("input")
    var search = document.getElementById("search")
    var answer = mobiles[selecttext][input.value]
    var ans = document.getElementById("ans")
    ans.style.display = "flex"
    ans.appendChild(
        generateHtml(answer.image, answer.name, answer.colors, answer.camera, answer.price)

    )

}


function inputclick() {
    var ans = document.getElementById("ans")
    ans.innerHTML = ""
    ans.style.display = "none"
}


