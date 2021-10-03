// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ

let btnDOM = document.querySelector("#liveToastBtn") // liveToastBtn id'si ile ekle yazan butona seçtik ve bu butonu btnDOM değişkenine atadık.
let listDOM = document.querySelector("#list") // list id'si ile ul'nin ID'si olan list'i seçtik ve listDOM'a atadık.
let taskDOM = document.querySelector("#task") //input'un ID'si olan task'ı seçip taskDOM'a atadık.
let ullength = document.getElementsByTagName("li"); //burda var olan bütün li elementlerini alıp ullength'e atadık böylece elimizde kaç madde yani li olduğunu öğrendik.


// MEVCUT LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI
for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); //close icon'u span etiketi içersinde olduğu için yeni bir span elemanı oluşturup ve closeButton değişkenine atadık.
    closeButton.textContent = "\u00D7"; // listede çarpı işaretini oluşturabilmek için "\u00D7" kullandık.
    closeButton.classList.add("close"); // bu butona close class'ını ekledik.
    closeButton.onclick = removeButton; // ve çarpı işaretine basınca removeButton fonsiyonunu çalıştırması gerektini söyledik.
    ullength[i].append(closeButton); // closeButton değişkenini ullength'in 0, 1, 2... indexlerine ekleyerek aslında for döngüsünü kullanarak var olan listeye çarpı butonunu ekledik. 
    ullength[i].onclick = check; // üzerine tıklayınca check fonksiyonunu çalıştır dedik.
}





// Butonlara dinleyici tanımlanması

btnDOM.addEventListener('click', elemanEkle)  // addEventListener ile "click" dediğimiz için butona tıklandığında  elemanEkle fonksiyonu çalışacak.


//Fonksiyonlar 

function check(){
  this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
}

function removeButton(){
  this.parentElement.remove();  // burda maddeyi silmek için yanı çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık.
}


//ELEMAN EKLEMEK İÇİN GEREKENLER
function elemanEkle() {
 
    if (taskDOM.value == "")  {  // input değeri boş girildiğinde ve girilmediğinde 
    $(".error").toast("show"); //error clasını kullanarak 
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li') //yeni bir li elementi yaratacagımızı ilan edip yaratacagımız li elementini liDOM değişkenine atayacağımızı söyledik.
    listDOM.appendChild(liDOM); // Yaratacağımız liDOM değişkeninin her seferinde mevcut listenin en sonuna eklenmesi gerektiğini tanımladık.
    liDOM.innerHTML = task.value; // Burda ise inputID.değer diyerek inputa girilen değerlerin liDOM'a atanması gerektiğini belirttik.
    taskDOM.value = "";
  
   
    
    
   
   //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
         liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");

        
}
}    








 

 






 




