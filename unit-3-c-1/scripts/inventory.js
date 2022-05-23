function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[]
    let all_products=document.getElementById("all_products")
    all_products.innerHTML=null;
    data.forEach(function(elem,index){
        console.log(elem)
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=elem.image;
        let type=document.createElement("h2")
         type.innerHTML=elem.type;
         let desc=document.createElement("p")
         desc.innerHTML=elem.desc;
         let price=document.createElement("h3")
         price.innerHTML=elem.price;
         let btn=document.createElement("button")
         btn.innerHTML="Remove"
         btn.addEventListener("click",function(){
             remove(index)
         })
         box.append(img,type,desc,price,btn)
         all_products.append(box)
        })
    }



append();
function remove(index){
    let data=JSON.parse(localStorage.getItem("products")) || [] ;

    let newData= data.filter(function(elem,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash")) || []
            trash.push(elem);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i !== index;
        }
    });

    localStorage.setItem("products",JSON.stringify(newData))
    append();


}

