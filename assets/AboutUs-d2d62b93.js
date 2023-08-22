import{j as e,A as r,a as n,m}from"./index-e8714567.js";import{A as d}from"./About_Contact_Section-93d188f6.js";function x(){const t={wrapper:"my-40 grid items-baseline justify-between gap-x-8 md:grid-cols-2 lg:gap-x-32"};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:t.wrapper,children:[e.jsxs("div",{className:"mx-auto flex w-[90%] flex-col gap-y-8 ",children:[e.jsx("h1",{className:"text-6xl font-semibold",children:l.header}),l.text.map((s,a)=>e.jsx("p",{className:"text-lg",children:s},a))]}),e.jsx("div",{className:"hidden w-full h-full md:block",children:e.jsx("img",{src:"about/heritage-img.webp",className:"object-cover w-full h-full",alt:"heritage"})})]})})}const l={header:"Our Heritage",text:["Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.","Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.","Our small team of world-class professionals provides input on every project."]},i="/Arch-/assets/employee-male-8257e6b0.webp",h="/Arch-/assets/employee-female-a5e96eff.webp";function g(){const t={section:"mx-auto my-40 grid w-[80%] gap-x-10 md:w-auto md:grid-cols-3",contact_PC_wrapper:"absolute inset-0 items-center justify-center hidden transition-all duration-500 bg-gray-900 bg-opacity-50 opacity-0 gap-x-8 sm:flex",logo_contact_PC:"cursor-pointer text-4xl text-white transition-all hover:text-gray-200",contact_MOBLIE_wrapper:"mt-auto flex gap-4 sm:hidden [&>svg]:cursor-pointer [&>svg]:text-4xl",logo_contact_MOBILE:"text-gray-500 transition-colors duration-500 hover:text-gray-800"};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:t.section,children:[e.jsx("div",{className:"col-span-1",children:e.jsx("h1",{className:"w-1/2 text-4xl font-bold md:text-6xl",children:"The Leaders"})}),e.jsx("div",{className:"grid grid-cols-2 grid-rows-2 gap-8 mt-12 md:col-span-2 md:mt-0",children:p.map(({img:s,name:a,position:o},c)=>e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"relative mb-4 overflow-hidden [&>div]:hover:opacity-100 ",children:[e.jsxs("div",{className:t.contact_PC_wrapper,children:[e.jsx(r,{className:`${t.logo_contact_PC} hover:bg-[#1d9bf0]`}),e.jsx(n,{className:`${t.logo_contact_PC}  hover:bg-[#0a66c2]`})]}),e.jsx("img",{src:s,alt:o+" image",className:"bg-gray-200 "})]}),e.jsx("p",{className:"text-lg font-bold",children:a}),e.jsx("p",{className:"text-lg",children:o}),e.jsxs("div",{className:t.contact_MOBLIE_wrapper,children:[e.jsx(r,{className:t.logo_contact_MOBILE}),e.jsx(n,{className:t.logo_contact_MOBILE})]})]},c))})]})})}const p=[{img:i,name:"Jake Richards",position:"Chief Architect"},{img:i,name:"Thompson Smith",position:"Head of Finance"},{img:i,name:"Jackson Rourke",position:"Lead Designer"},{img:h,name:"Maria Simpson",position:"Senior Architect"}];function j(){const t={init:{opacity:0},animate:{opacity:1,transition:{delay:.4,duration:1}},exit:{opacity:0}};return e.jsx(e.Fragment,{children:e.jsxs(m.section,{variants:t,initial:"init",animate:"animate",exit:"exit",className:"mx-auto",children:[e.jsx(d,{img:"about/hero-img.webp",header:"About",text:"Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",title:"Your team of professionals"}),e.jsx(x,{}),e.jsx(g,{})]})})}export{j as default};
