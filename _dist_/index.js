/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
console.log('Happy hacking2 :)')
const url= "https://platzi-avo.vercel.app/api/avo";
const base="https://platzi-avo.vercel.app";

const formatPrice=(price) => {
    const newPrice=new window.Intl.NumberFormat('en-EN',{
        style:"currency",
        currency:"eur",
    }).format(price)
    return newPrice
}


const appNode =document.querySelector('#app');
appNode.addEventListener("click",(event)=>{
    if(event.target.nodeName==="H2"){
        window.alert("hola choquito");
    }
});
/*then promesa-then resp convertimos en formato en jason */
window.fetch(`${base}/api/avo`).then((resp) => resp.json()).then((respjason)=>{
    const allitem = [];
    respjason.data.forEach((item) => {
        
        const imagen = document.createElement("img");
        imagen.src=`${base}${item.image}`;
        
        const title = document.createElement("h2");
        title.textContent=item.name;
        title.className='text-2xl';

        const price = document.createElement("div");
        price.className="text-gray-600";
        price.textContent=formatPrice(item.price);

        const container = document.createElement("div");
        container.append(imagen, title, price);
        allitem.push(container);
        
    });
    console.log(allitem)
    appNode.append(...allitem);
});

//manera 2 usando async and away
// const url = "https://platzi-avo.vercel.app/api/avo";
//
// //web api
// async function fetchData() {
//   const response = await fetch(url),
//   respjason = await response.json(),
//   allItems = [];

//   respjason.data.forEach((item) => {
//     // create image
//     const image = document.createElement("img");
//     // create title
//     const title = document.createElement("h2");
//     // create price
//     const price = document.createElement("div");

//     const container = document.createElement("div");
//     container.append(image, title, price);

//     allItems.push(container);
//   });

//   document.body.append(...allItems)
// }

// fetchData();