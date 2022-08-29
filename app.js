/* JavaScript özelliği kazandırmak istediğimiz buton ve bölümleri seçelim */
const colorBtn = document.getElementById("color-btn");
const colorGenerator = document.querySelector("#color-generator");
const bgColor = document.querySelector(".wrapper");
const colorGeneratorText = document.querySelector(".card-body p");

    /*addEventListener ile seçtiğimiz kodlara, bir fonksiyon yardımıyla click özelliği kazandıralım */
    colorBtn.addEventListener("click", function(){
    /*Math.random metodu, rastgele sayı üretmeye, Math.floor metodu ise sayıyı yuvarlamaya yarar.
    Elde ettiğimiz sayıyı neden *16777215 ile çarptığımın ve number.toString metodu
    ile 16'lık bir tabanda göstermemin kısa izahı ise şu: RGB değerlerine göre siyahtan
    beyaza toplam 16777215 renk vardır ve radix'in 16 olmasının sebebi 16'lık bir sayı ve
    harf kombinasyonuna ihtiyaç duymamızdır. (0123456789ABCDEF) Bu özel koda, buradan ulaştım:
    https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj */
    let number = Math.floor(Math.random()*16777215);
    let colorCode = '#'+number.toString(16);
    console.log(colorCode);
    /* .style metoduyla JavaScript ile CSS ve HTML özelliklerini değiştirebiliyoruz.
    Yukarıda #color-generator'ı atadığımız colorGenerator değişkeninin arkaplan rengini
    yukarıda oluşturduğumuz random sayıya atıyoruz.Aynı işlemi wrapper için de uyguluyoruz.
    En son olarak ise başlangıçta #4a4a4a olarak belirttiğimiz renk kodunun üretilen
    sayıya göre değişmesini istediğimiz için innerhtml metodu ile, yine colorCode'a atıyoruz. */
    colorGenerator.style.backgroundColor = colorCode;
    bgColor.style.backgroundColor = colorCode;
    colorGeneratorText.innerHTML = colorCode;

});