import{j as e,T as c,m as l}from"./index-2de4e709.js";import{A as r}from"./About_Contact_Section-bba6562c.js";function m(){const a=[{office:"Main Office",mail:"arch@gmail.com",address:"123 Wines Lane X3",phone:"0123-456-789"},{office:"Office ||",mail:"arch69@gmail.com",address:"324 Wines Lane X3",phone:"9876-543-210"}];return e.jsxs("div",{className:"my-40 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 w-[90%] mx-auto",children:[e.jsx("div",{className:"row-span-2",children:e.jsx("h1",{className:"lg:w-1/2 text-5xl mb-8 font-bold",children:"Contact Details"})}),a.map(({office:s,mail:i,address:t,phone:n},o)=>e.jsxs("div",{className:"grid lg:gap-y-8 gap-y-4 mb-14 col-span-1",children:[e.jsx("h1",{className:"font-bold text-lg",children:s}),e.jsxs("div",{className:"grid grid-cols-2 gap-y-2 [&>p]:text-black",children:[e.jsx("p",{children:"Mail:"})," ",e.jsx("span",{children:i}),e.jsx("p",{children:"Address:"})," ",e.jsx("span",{children:t}),e.jsx("p",{children:"Phone:"})," ",e.jsx("span",{children:n})]}),e.jsxs("button",{className:"w-fit text-lg font-bold flex items-center gap-x-2 [&>svg]:hover:translate-x-4",children:["view on map ",e.jsx(c,{className:"transition-all duration-500"})]})]},o))]})}function f(){const a={init:{opacity:0},animate:{opacity:1,transition:{delay:.4,duration:1}},exit:{opacity:0}};return e.jsxs(l.section,{variants:a,initial:"init",animate:"animate",exit:"exit",className:"mx-auto",children:[e.jsx(r,{img:"contact/hero-img.jpg",header:"Contact",title:"Tell us about your project",text:"We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"}),e.jsx(m,{}),e.jsx("div",{className:"my-32 flex justify-center",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.7826964002752!2d15.944726978412268!3d78.17240918792372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x459c4d3a4c9c22a5%3A0xca0c1ffe6d92c219!2sArctic%20Husky%20Travellers!5e0!3m2!1sen!2seg!4v1687775241316!5m2!1sen!2seg",width:"600",height:"450",loading:"lazy"})})]})}export{f as default};