//store the products array in localstorage as "products"

function products(c,d,p,i){
    this.type=c;
    this.desc=d;
    this.price=p;
    this.image=i;
}


let form=document.getElementById("product_data").addEventListener("submit",myfunction)
function myfunction(){
    event.preventDefault();
    let choose=document.getElementById("type").value;
    let des=document.getElementById("desc").value;
    let price=document.getElementById("price").value;
    let image=document.getElementById("image").value;
    let p1=new products(choose,des,price,image)
    // console.log(p1)
    let data=JSON.parse(localStorage.getItem("products"))||[]
    data.push(p1)
    localStorage.setItem("products",JSON.stringify(data));
    console.log(choose)
}