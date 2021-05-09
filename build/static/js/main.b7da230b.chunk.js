(this["webpackJsonpsample-app"]=this["webpackJsonpsample-app"]||[]).push([[0],{32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(17),c=a.n(r),s=(a(32),a(1)),m=a(24),o=a(3),i=a(2),d=a(25),u=Object(d.createAuthProvider)({accessTokenKey:"access_token",onUpdateToken:function(e){return fetch("/api/auth/refresh",{method:"POST",body:e.access_token}).then((function(e){return e.json()}))}}),p=Object(s.a)(u,4),x=p[0],f=p[1],b=p[2],h=p[3],w=a(8),g=a(9),E=a(13),y=a(12),v=a(18);function N(){var e=Object(v.a)(),t=e.register,a=e.handleSubmit,l=e.formState.errors;return n.a.createElement("form",{onSubmit:a((function(e){console.log(e),fetch("/api/auth/user",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}))},n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",Object.assign({className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"},t("first_name",{required:!0}),{placeholder:"First Name"})),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.first_name&&"First name is required")),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",Object.assign({},t("last_name",{required:!0}),{placeholder:"Last Name",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.last_name&&"Last name is required")),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",Object.assign({},t("email",{required:!0}),{placeholder:"Email-Adress",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.email&&"email is required")),n.a.createElement("div",{className:"relative flex w-full flex-wrap items-stretch mb-3"},n.a.createElement("span",{className:"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"},n.a.createElement("i",{className:"fas fa-lock"})),n.a.createElement("input",Object.assign({},t("password",{required:!0}),{type:"password",placeholder:"Password",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.password&&"A password is required")),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("data_privacy_accepted",{required:!0}),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"I have read and agree to the data privacy policy.")),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.data_privacy_accepted&&"Please accept the data privacy. ")),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("email_marketing_accepted",{required:!0}),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"I want to subscribe to the coffeemap newsletter.")),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.email_marketing_accepted&&"Please subscribe to the newsletter. ")),n.a.createElement("input",Object.assign({type:"hidden",value:"admin"},t("roles",{required:!0}),{placeholder:"Roles"})),n.a.createElement("div",{className:"inline-flex rounded-md shadow"},n.a.createElement("input",{type:"submit",className:"cursor-pointer inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500"})))}var j=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:" flex items-center justify-center bg-gray-50 py-48 px-4 sm:px-6 lg:px-8"},n.a.createElement("div",{className:"max-w-md w-full space-y-8"},n.a.createElement("div",null,n.a.createElement("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Register and create your free account."),n.a.createElement("p",{className:"mt-2 text-center text-sm text-gray-600"},n.a.createElement("div",{className:"text-center"},"Already have an account? ",n.a.createElement("a",{className:"font-medium text-green-400 hover:text-green-500",href:"/login"},"Login")))),n.a.createElement(N,null)))}}]),a}(l.Component);var k=function(e){return n.a.createElement("div",{className:"inline-flex rounded-md shadow"},n.a.createElement(i.b,{to:e.url,className:"inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500"},e.buttontext))};var O=function(e){return n.a.createElement("div",{className:"w-full py-48 bg-cover flex",style:{backgroundImage:"url(".concat("/img/bg-header-home.jpg",")")}},n.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 w-full"},n.a.createElement("div",{className:"flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-2 xl:-mx-2 h-full"},n.a.createElement("div",{className:"w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2 self-center"},n.a.createElement("h1",{className:"text-6xl text-white justify-self-center"},e.headline),n.a.createElement("h2",{className:"text-4xl text-white justify-self-center"},e.subheadline),n.a.createElement("div",{className:"py-2"},n.a.createElement(k,{buttontext:"Register",url:"/register"}))),n.a.createElement("div",{className:"w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2"}))))};function _(){var e=Object(v.a)(),t=e.register,a=e.handleSubmit,l=e.formState.errors;return n.a.createElement("form",{onSubmit:a((function(e){console.log(e),f("/api/place",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}))},n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",Object.assign({},t("name",{required:!0}),{placeholder:"name of the caf\xe9",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.name&&"A name is required")),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",Object.assign({},t("street_house_number",{required:!0}),{placeholder:"Street and house number",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.street_house_number&&"A street and house number is required")),n.a.createElement("div",{class:"flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1"},n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"},n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",Object.assign({},t("postcode",{required:!0}),{placeholder:"Postcode",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.postcode&&"Postcode is required"))),n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"},n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",Object.assign({},t("city",{required:!0}),{placeholder:"City",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})),n.a.createElement("div",{className:"text-red-500 text-sm py-1"},l.city&&"City is required")))),n.a.createElement("div",{class:"flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1"},n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"},n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",Object.assign({},t("phone_number"),{placeholder:"Phone number",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})))),n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"},n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",Object.assign({},t("email_adress"),{placeholder:"E-Mail-Adress",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"}))))),n.a.createElement("br",null),n.a.createElement("div",{class:"flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1"},n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3"},n.a.createElement("input",Object.assign({},t("website_url"),{placeholder:"Website URL",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"}))),n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3"},n.a.createElement("input",Object.assign({},t("facebook_url"),{placeholder:"Facebook URL",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"}))),n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3"},n.a.createElement("input",Object.assign({},t("instagram_url"),{placeholder:"Instagram URL",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})))),n.a.createElement("br",null),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("wifi_available"),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"Wifi available?"))),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("toilet_available"),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"Toilet available?"))),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("power_slots_available"),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"Power slots available?"))),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("alcohol_available"),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"Alcoholic drinks available?"))),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("vegan_alternatives_available"),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"Vegan alternatives available?"))),n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("laptops_allowed"),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"Laptops allowed?"))),n.a.createElement("div",{class:"flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1"},n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("open_for_takeaway"),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"Open for takeaway?"))),n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"},n.a.createElement("label",{className:"inline-flex items-center mt-3"},n.a.createElement("input",Object.assign({type:"checkbox"},t("open_for_delivery"),{className:"form-checkbox h-5 w-5"})),n.a.createElement("span",{className:"ml-2"},"Open for delivery?")))),n.a.createElement("br",null),n.a.createElement("div",{class:"flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1"},n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3"},n.a.createElement("input",Object.assign({},t("price_espresso"),{placeholder:"price for an espresso",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"}))),n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3"},n.a.createElement("input",Object.assign({},t("price_filter_coffee"),{placeholder:"price for a filter coffee",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"}))),n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3"},n.a.createElement("input",Object.assign({},t("price_cappuccino"),{placeholder:"price for a cappuccino",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})))),n.a.createElement("br",null),n.a.createElement("div",{class:"flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1"},n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"},n.a.createElement("input",Object.assign({},t("wifi_network_name"),{placeholder:"wifi network name",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"}))),n.a.createElement("div",{class:"w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"},n.a.createElement("input",Object.assign({},t("wifi_network_password"),{placeholder:"Wifi network password",className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"})))),n.a.createElement("br",null),n.a.createElement("div",{className:"inline-flex rounded-md shadow"},n.a.createElement("input",{type:"submit",className:"cursor-pointer inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500"})))}var G=function(e){return n.a.createElement("div",{className:"font-black text-3xl py-4 text-center"},n.a.createElement("h2",null,e.h2))};var S=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=(t[0],t[1]);return Object(l.useEffect)((function(){f("/api/auth/protected").then((function(e){return 401===e.status?(a("Sorry you aren't authorized!"),null):e.json()})).then((function(e){e&&e.message&&a(e.message)}))}),[]),n.a.createElement("div",null,n.a.createElement(O,{headline:"Coffeemap",subheadline:"Discover interesting caf\xe9s in Berlin."}),n.a.createElement("div",{className:" flex items-center justify-center bg-gray-50 py-48 px-4 sm:px-6 lg:px-8"},n.a.createElement("div",{className:"max-w-md w-full space-y-8"},n.a.createElement(G,{h2:"Add your favorite caf\xe9"}),n.a.createElement(_,null))))},C=function(e){var t=e.places;return n.a.createElement("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 w-full"},n.a.createElement("ul",{className:"flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1"},t.map((function(e){return n.a.createElement("div",{className:"w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3 my-4 xl:my-8 mx-4"},n.a.createElement(i.b,{to:"".concat(e.id)},n.a.createElement("div",{className:"cursor-pointer p-12 text-center bg-white rounded-md shadow"},n.a.createElement("h3",{className:"font-bold text-lg"},e.name),e.street_house_number,n.a.createElement("br",null),e.postcode," ",e.city)))}))))};var L=function(){var e=Object(l.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(l.useEffect)((function(){fetch("api/place").then((function(e){return e.json().then((function(e){r(e.places)}))}))}),[]),n.a.createElement("div",null,n.a.createElement(O,{headline:"All Places",subheadline:"Discover interesting caf\xe9s in Berlin."}),n.a.createElement("div",{className:"py-16"},n.a.createElement(G,{h2:"All places"}),n.a.createElement(C,{places:a})))},q=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{className:"w-full bottom-0"},n.a.createElement("div",{className:"w-full bg-green-400"},n.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-8 "},n.a.createElement("div",{className:"lg:flex md:block justify-between text-white"},n.a.createElement("div",{className:"md:w-full"},"\xa9 2021 Lukas Menzel"),n.a.createElement("div",{className:"items-center justify-end"},n.a.createElement("nav",{className:"md:w-full"},n.a.createElement("ul",{className:"flex"},n.a.createElement("li",{className:"lg:w-32 md:w-1/2"},"Imprint"),n.a.createElement("li",{className:"lg:w-32 md:w-1/2"},"Privacy policy"))))))))}}]),a}(l.Component);var P=function(e){var t=Object(l.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(l.useEffect)((function(){fetch("api/place").then((function(e){return e.json().then((function(e){c(e.places)}))}))}),[]),n.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 w-full"},n.a.createElement(C,{places:r}))};var A=function(){return n.a.createElement("div",{className:"bg-white"},n.a.createElement("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-6 lg:flex lg:items-center lg:justify-between"},n.a.createElement("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},n.a.createElement("span",{className:"block"},"Your favorite caf\xe9 is not listed?"),n.a.createElement("span",{className:"block text-green-400"},"Register and add it to coffeemap.")),n.a.createElement("div",{className:"mt-8 flex lg:mt-0 lg:flex-shrink-0"},n.a.createElement("div",{className:"inline-flex rounded-md shadow"},n.a.createElement(i.b,{to:"/register",className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500"},"Register")),n.a.createElement("div",{className:"ml-3 inline-flex rounded-md shadow"},n.a.createElement(i.b,{to:"/login",className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-400 bg-white hover:text-green-500"},"Login in")))))};var R=function(){return n.a.createElement("div",{className:"max-w-7xl mx-auto px-4 py-6 sm:px-6 w-full"},n.a.createElement("div",{class:"flex flex-wrap overflow-hidden md:-mx-3 lg:-mx-3 xl:-mx-3"},n.a.createElement("div",{class:"self-center w-full overflow-hidden py-4 md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2"},n.a.createElement("h2",{className:"text-left font-black text-3xl py-4"},"About us"),n.a.createElement("p",null,"Coffeemap is the go to place for coffee lover to discover new caf\xe9s in Berlin. We enable you to explore the coffee scene of berlin and find the perfect caf\xe9 for your occasion. ",n.a.createElement("br",null),n.a.createElement("br",null),"Starting with a simple listing of caf\xe9s we will implement reviews, updates by caf\xe9 owners and other cool features as soon as possible. ",n.a.createElement("br",null),n.a.createElement("br",null),"Enjoy your coffee!"),n.a.createElement("div",{className:"py-3"}),n.a.createElement(k,{buttontext:"Learn more"})),n.a.createElement("div",{class:"self-center w-full overflow-hidden md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2"},n.a.createElement("img",{alt:"latte art",src:"/img/about.jpg","no-repeat":!0}))))},B=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(O,{headline:"Coffeemap",subheadline:"Discover interesting caf\xe9s in Berlin."}),n.a.createElement("div",{className:"py-16"},n.a.createElement(G,{h2:"All places"}),n.a.createElement(P,null)),n.a.createElement(R,null),n.a.createElement(A,null))}}]),a}(l.Component);function M(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),m=Object(s.a)(c,2),o=m[0],i=m[1],d=x(),u=Object(s.a)(d,1)[0];return n.a.createElement("div",null,u?n.a.createElement("button",{onClick:function(){return h()},className:"w-full inline-flex rounded-md shadow"},n.a.createElement("div",{className:"cursor-pointer w-full inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500"},"Logout")):n.a.createElement("form",{action:"#"},n.a.createElement("div",null,n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",{type:"text",placeholder:"email",onChange:function(e){r(e.target.value)},value:a,className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"mb-3 pt-0"},n.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(e){i(e.target.value)},value:o,className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"}))),n.a.createElement("button",{onClick:function(e){e.preventDefault(),console.log("You pressed login");var t={email:a,password:o};console.log(t),fetch("/api/auth/login",{method:"post",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.access_token?(b(e),console.log(e)):console.log("Please type in correct username/password")}))},type:"submit",className:"inline-flex rounded-md shadow"},n.a.createElement("div",{className:"cursor-pointer inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500"},"Login now"))))}var T=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"flex items-center justify-center bg-gray-50 py-48 px-4"},n.a.createElement("div",{className:"max-w-md w-full space-y-8"},n.a.createElement("div",null,n.a.createElement("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Sign in to your account"),n.a.createElement("p",{className:"mt-2 text-center text-sm text-gray-600"},"Or",n.a.createElement("a",{href:"/register",className:"font-medium text-green-400 hover:text-green-500"},n.a.createElement("span",null," register for free")),".")),n.a.createElement(M,null)))}}]),a}(l.Component),W=function(){var e=Object(o.g)().id,t=Object(l.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(l.useEffect)((function(){fetch("/api/place/".concat(e)).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[e]),n.a.createElement("div",null,r.length>0&&r.map((function(e){return n.a.createElement("div",null,e.place.name)})))};var I=function(e){return n.a.createElement("div",{className:"font-black text-3xl"},n.a.createElement("h1",null,e.h1))},F=a(27);var J=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=x(),m=Object(s.a)(c,1)[0];return n.a.createElement("div",null,n.a.createElement("nav",{className:"relative bg-white"},n.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-6"},n.a.createElement("div",{className:"flex justify-between items-center h-16"},n.a.createElement("div",{className:"flex-shrink-0"},n.a.createElement(i.a,{exact:!0,to:"/"},n.a.createElement(I,{h1:"Coffemap.berlin"}))),n.a.createElement("div",{className:"hidden md:block"},n.a.createElement("div",{className:"ml-10 self-center flex justify-end items-baseline space-x-4"},n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"px-3 float-left whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"},n.a.createElement(i.c,{className:"block",to:"/"},"Home")),n.a.createElement("li",{className:"px-3 float-left whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"},n.a.createElement(i.c,{className:"block",to:"/places"},"Places")),m?n.a.createElement("li",{className:"px-3 float-left whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"},n.a.createElement(i.c,{className:"block",to:"/create-place"},"Create Place")):n.a.createElement("span",null),m?n.a.createElement("span",null):n.a.createElement("li",{className:"px-3 float-left whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"},n.a.createElement(i.c,{className:"block",to:"/register"},"Register")),m?n.a.createElement("li",{className:"px-1 float-left whitespace-nowrap text-base font-bold text-green-400 hover:text-green-500"},n.a.createElement(i.c,{to:"",onClick:function(){return h()}},"Logout")):n.a.createElement("li",{className:"px-3 float-left whitespace-nowrap text-base font-bold text-green-400 hover:text-green-500"},n.a.createElement(i.c,{className:"block text-green-400",to:"/login"},"Login")))))),n.a.createElement("div",{className:"-mr-2 flex md:hidden"},n.a.createElement("button",{onClick:function(){return r(!a)},type:"button",className:" inline-flex items-center justify-center p-2 text-black hover:text-white  focus:outline-none ","aria-expanded":"false"},n.a.createElement("span",{className:"sr-only"},"Open main menu"),a?n.a.createElement("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"black","aria-hidden":"true"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})):n.a.createElement("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"black","aria-hidden":"true"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})))))),n.a.createElement(F.a,{show:a,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},(function(e){return n.a.createElement("div",{className:"md:hidden",id:"mobile-menu"},n.a.createElement("div",{ref:e,className:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"px-3 py-2 whitespace-nowrap text-base text-xl text-gray-500 hover:text-gray-900"},n.a.createElement(i.c,{className:"block",to:"/"},"Home")),n.a.createElement("li",{className:"px-3 py-2 whitespace-nowrap text-xl text-base font-medium text-gray-500 hover:text-gray-900"},n.a.createElement(i.c,{className:"block",to:"/places"},"Places")),m?n.a.createElement("li",{className:"px-3 py-2 whitespace-nowrap text-xl text-base font-medium text-gray-500 hover:text-gray-900"},n.a.createElement(i.c,{className:"block",to:"/create-place"},"Create Place")):n.a.createElement("span",null),m?n.a.createElement("span",null):n.a.createElement("li",{className:"px-3 py-2 text-xl whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"},n.a.createElement(i.c,{className:"block",to:"/register"},"Register")),m?n.a.createElement("li",{className:"px-1 py-2 whitespace-nowrap text-xl text-base font-bold text-green-400 hover:text-green-500"},n.a.createElement(i.c,{to:"",onClick:function(){return h()}},"Logout")):n.a.createElement("li",{className:"px-3 py-2 whitespace-nowrap text-xl text-base font-bold text-green-400 hover:text-green-500"},n.a.createElement(i.c,{className:"block text-green-400",to:"/login"},"Login"))))))}))))},D=function(e){var t=e.component,a=Object(m.a)(e,["component"]),l=x(),r=Object(s.a)(l,1)[0];return n.a.createElement(o.b,Object.assign({},a,{render:function(e){return r?n.a.createElement(t,e):n.a.createElement(o.a,{to:"/login"})}}))};function U(){return n.a.createElement(i.a,null,n.a.createElement("header",null,n.a.createElement(J,null)),n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/login"},n.a.createElement(T,null)),n.a.createElement(o.b,{path:"/register"},n.a.createElement(j,null)),n.a.createElement(o.b,{path:"/places"},n.a.createElement(L,null)),n.a.createElement(D,{path:"/create-place"},n.a.createElement(S,null)),n.a.createElement(o.b,{path:"/:id"},n.a.createElement(W,null)),n.a.createElement(o.b,{path:"/"},n.a.createElement(B,null))),n.a.createElement(q,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.b7da230b.chunk.js.map