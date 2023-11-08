/**function Elect() {


    //to create a div tht is going to be a parent
    const parent = document.createElement('div');

    //creates the svg
 const SvgNs ="http://www.w3.org/2000/svg";
 const svg = document.createElementNS(SvgNs,'svg');
 
 svg.setAttribute('width', '200');
 svg.setAttribute('height', '100');
 svg.setAttribute('fill' , 'black');

 //creating text

 const textNs = document.createElementNS(textNs , 'text');
 //document.getElementById('text').innerText='Elections'
 text.setAttribute('x', '120');
 text.setAttribute('y', '50');
 text.textContent = ('Elections');
 text.setAttribute ('fill', 'black');

 //Append the text to the svg

 svg.appendChild(text);
 
 //an object that holds the svg and text togther

 const SvgAndText = {
    svg: svg,
    text: text,
 };
 
 return SvgAndText;
 
 
}

// Get the object with SVG and text
const icon = Elect ();

const textNS = text ();

// Add the SVG element to the HTML body
document.body.appendChild(icon.svg);
console.log(icon)


**/

/**  function Elect(){
   const div = document.createElement('div');

const svg = document.createElement('svg');
const svgNs = 'http://www.w3.org/2000/svg';
svg.setAttribute('width', '200');
svg.setAttribute('height', '200');
svg.setAttribute('fill', 'black');


const paragraph =  document.createElement('p');


div.appendChild(svg);
div.appendChild(paragraph);

console.log('svg')


}
**/


/**
 * 
 
let ns  = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(ns,"svg");
svg.setAttribute("width", "100");
svg.setAttribute("height", "50");
svg.setAttribute("fill", "black");
//svg.style.backgroundColor = "beige";



document.body.appendChild(svg)
*/


import { createSvgElement, createPathElement } from "./icons.js"

const menuData = [
   {
      svgStyles: "w-8 h-10",
      svgViewBox: "0 0 24 24",
      svgStrokeWidth: null,
      svgStroke: null,
      menuText: "Election",
      pathFill: "currentColor",
      pathD: "M5.175 16h13.65l-1.95-2.2l1.425-1.425L21 15.45V22H3v-6.55l2.75-3.125l1.425 1.425l-2 2.25Zm6.85-.175L5.7 9.45l7.75-7.75l6.375 6.325l-7.8 7.8Zm.025-2.875L17 8l-3.55-3.5L8.5 9.45l3.55 3.5Z",
      menuTextClass: "flex justify-center items-center text-lg",
      xmlns: "http://www.w3.org/2000/svg",
      pathStrokeLineCap: null,
      pathStorkeLineJoin: null      
   },
   {
      svgStyles: "w-7 h-7",
      svgViewBox: "0 0 24 24",
      svgStrokeWidth:"2.5",
      svgStroke: "currentColor",
      menuText: "Apply",
      pathFill: null,
      pathD:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
      menuTextClass: "flex justify-center items-center text-lg",
      xmlns: "http://www.w3.org/2000/svg",
      pathStrokeLineCap: "round",
      pathStorkeLineJoin: "round"     
   },
   {
      svgStyles: "w-8 h-10",
      svgViewBox: "0 0 100 100",
      svgStrokeWidth: null,
      svgStroke: null,
      menuText: "Candidate",
      pathFill: "currentColor",
      pathD: "m80.161 60.441l-15.66-7.47l-6.622-3.159c2.892-1.822 5.241-4.634 6.778-8.021a21.743 21.743 0 0 0 1.945-8.99c0-1.827-.29-3.562-.694-5.236c-1.97-8.112-8.305-14.088-15.91-14.088c-7.461 0-13.7 5.763-15.792 13.644c-.483 1.808-.815 3.688-.815 5.68c0 3.459.808 6.684 2.181 9.489c1.587 3.254 3.94 5.937 6.804 7.662l-6.342 2.953l-16.168 7.53c-1.404.658-2.327 2.242-2.327 4.011v17.765c0 2.381 1.659 4.311 3.707 4.311h24.013V72.92a.78.78 0 0 1 .119-.396l-.01-.006l3.933-6.812l.01.006c.14-.24.389-.41.687-.41c.298 0 .547.169.687.41l.004-.003l.036.063c.005.01.012.018.016.028l3.881 6.721l-.005.003a.783.783 0 0 1 .119.397v13.602h24.013c2.048 0 3.708-1.93 3.708-4.311V64.446c.003-1.763-.905-3.332-2.296-4.005zM54.62 55.886l.01.006l-3.934 6.812l-.01-.006a.796.796 0 0 1-.687.409a.796.796 0 0 1-.687-.409l-.005.003l-.04-.069c-.003-.007-.009-.013-.012-.02l-3.881-6.723l.004-.003a.783.783 0 0 1-.119-.397c0-.445.361-.806.806-.806h7.866c.445 0 .806.361.806.806a.762.762 0 0 1-.117.397z",
      menuTextClass: "flex justify-center items-center text-lg",
      xmlns: "http://www.w3.org/2000/svg",
      pathStrokeLineCap: null,
      pathStorkeLineJoin: null      
   },
   {
      svgStyles: "w-7 h-10",
      svgViewBox: "0 0 24 24",
      svgStrokeWidth: "2.5",
      svgStroke: "currentColor",
      menuText: "Notification",
      pathFill: "currentColor",
      pathD: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
      menuTextClass: "flex justify-center items-center text-lg",
      xmlns: "http://www.w3.org/2000/svg",
      pathStrokeLineCap: "round",
      pathStorkeLineJoin: "round"     
   },
   {
      svgStyles: "w-7 h-10",
      svgViewBox: "0 0 48 48",
      svgStrokeWidth: null,
      svgStroke: null,
      menuText: "Results",
      pathFill: "currentColor",
      pathD: "M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9Z",
      menuTextClass: "flex justify-center items-center text-lg",
      xmlns: "http://www.w3.org/2000/svg",
      pathStrokeLineCap: null,
      pathStorkeLineJoin: null      
   },
   {
      svgStyles: "w-7 h-10",
      svgViewBox: "0 0 24 24",
      svgStrokeWidth: "2.5",
      svgStroke: "currentClor",
      menuText: "Profile",
      pathFill: "currentColor",
      pathD:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
      menuTextClass: "flex justify-center items-center text-lg",
      xmlns: "http://www.w3.org/2000/svg",
      pathStrokeLineCap: "round",
      pathStorkeLineJoin: "round"      
   },
   {
      svgStyles: "w-7 h-10",
      svgViewBox: "0 0 24 24",
      svgStrokeWidth: "2.5",
      svgStroke: "currentClor",
      menuText: "Logout",
      pathFill: "currentColor",
      pathD:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75",
      menuTextClass: "flex justify-center items-center text-lg",
      xmlns: "http://www.w3.org/2000/svg",
      pathStrokeLineCap: "round",
      pathStorkeLineJoin: "round"      
   }
]


function createMenuItem ({ svgStyles, xmlns, svgViewBox, svgStrokeWidth, svgStroke, menuText, pathFill, pathD, menuTextClass, pathStrokeLineCap, pathStrokeLineJoin}) {
   // Creating elements
   const anchorElement = document.createElement('a') //<a></a>
   const spanElement = document.createElement('span') //<span></span>
   const svgElement = createSvgElement(svgStyles, svgViewBox, xmlns, svgStrokeWidth, svgStroke )

   const pathElement = createPathElement(pathD, xmlns, pathStrokeLineCap, pathStrokeLineJoin, pathFill)
   const paragraphElement = document.createElement('p')
   // Setting attributes for the elements 
   anchorElement.setAttribute('href', "/SDashboard.html")
   spanElement.setAttribute('class', "text-Popup1-200 w-full h-10 flex gap-4 cursor-pointer rounded-lg pl-2 hover:bg-Popup1-100 hover:text-Popup1-600")

  

   paragraphElement.setAttribute('class', menuTextClass)

   const paragraphText = menuText
   paragraphElement.innerText = paragraphText

   svgElement.appendChild(pathElement)
   spanElement.appendChild(svgElement)
   spanElement.appendChild(paragraphElement)
   anchorElement.appendChild(spanElement)

   return anchorElement
}


function createMenu() {
   const divElement = document.createElement('div')
   divElement.setAttribute('class', "hidden lg:w-full lg:h-fit lg:flex lg:flex-col lg:gap-6")
   divElement.setAttribute('id', "items")
   menuData.forEach( (item) => {
      const menuItem = createMenuItem(item)
      divElement.appendChild(menuItem)                                              
   })
   return divElement
}


const menu = createMenu()
console.log(menu)
document.body.appendChild(menu)


