(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(17),i=a.n(o),s=a(60),r=a(24),c=a(56),l=a(57),d=Object(r.combineReducers)({}),h=[c.a],m=Object(r.createStore)(d,{},Object(l.composeWithDevTools)(r.applyMiddleware.apply(void 0,h))),u=(a(70),a(71),a(105)),b=a(13),j=a(6),p=(a(72),a(101)),f=a(106),y=a(107),g=a(100),O=a(23),x=a(1);var w=function(){return Object(x.jsx)("header",{children:Object(x.jsxs)(f.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(x.jsx)(O.LinkContainer,{to:"/",children:Object(x.jsx)(f.a.Brand,{children:"U.P. Silak Silab Foundation"})}),Object(x.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(f.a.Collapse,{id:"basic-navbar-nav",children:[Object(x.jsxs)(y.a,{className:"mr-auto",children:[Object(x.jsx)(O.LinkContainer,{to:"/",children:Object(x.jsx)(y.a.Link,{children:"Home"})}),Object(x.jsx)(O.LinkContainer,{to:"/Donate",children:Object(x.jsx)(g.a,{children:"Donate"})}),Object(x.jsx)(O.LinkContainer,{to:"/Mission",children:Object(x.jsx)(y.a.Link,{children:"Mission Statement"})}),Object(x.jsx)(O.LinkContainer,{to:"/Officers",children:Object(x.jsx)(y.a.Link,{children:"Officers"})}),Object(x.jsx)(O.LinkContainer,{to:"/Scholars",children:Object(x.jsx)(y.a.Link,{children:"Scholars"})}),Object(x.jsx)(O.LinkContainer,{to:"/Articles",children:Object(x.jsx)(y.a.Link,{children:"Articles"})})]}),Object(x.jsx)(y.a,{className:"ml-auto",children:Object(x.jsxs)(f.a.Text,{children:[Object(x.jsx)(p.a,{})," upssfchicago@gmail.com"]})})]})]})})};var v=function(){return Object(x.jsx)("footer",{className:"footer mt-auto py-3",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("span",{className:"text-muted",children:"\xa92007-2021, University of the Philippines Silak-Silab Foundatation, Inc, is recognized as a Section 501(c)(3) public charity organization"})})})},I=a(32),k=a(33),S=a(36),C=a(34),N=a.p+"static/media/upssf-logo.b51ad180.svg",T=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header upssf-cover",children:[Object(x.jsx)("img",{src:N,className:"App-logo",alt:"logo"}),Object(x.jsx)("p",{children:"Fighting Poverty Through Education"}),Object(x.jsx)("p",{children:"We are currenlty updating our site!"}),Object(x.jsxs)("p",{children:["You can email us at ",Object(x.jsx)("a",{className:"Home-link",href:"mailto:upssfchicago@gmail.com",children:"upssfchicago@gmail.com"})]})]})})}}]),a}(n.Component),P=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"my-3",children:["Welcome to the University of the Philippines SILAK-SILAB Foundation, a non-profit, tax-exempt Section 501(c)(3) public charity organization incorporated in Illinois, USA. It believes in the value of education and is dedicated to improving the lives of disadvantaged young individuals by providing educational assistance such as scholarships, tuition assistance, and stipends, for qualified students. The Foundation\u2019s mission is to liberate poor but deserving students from poverty through access to education. Membership to the Foundation is open to all members of the U.P. SILAK Brotherhood and UP SILAB Sisterhood. The members of the Foundation are united in their desire to contribute in their own little way to their country and their alma mater. The members of the Foundation declare their belief in the following shared values:",Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Personal and professional integrity"}),Object(x.jsx)("li",{children:"Mutual respect with all Foundation members"}),Object(x.jsx)("li",{children:"Transparency in governance"}),Object(x.jsx)("li",{children:"Adherence to democratic processes"})]}),"At present, the Foundation offers scholarship grants to deserving college students in the University of the Philippines in the Visayas \u2013 Iloilo Campus. To qualify, the college student should come from the low-income bracket and should have good grades and should maintain a predetermined average grade to renew the grant. In 2008, the Foundation, through its members and their friends, raised fund to assist the victims of Typhoon Frank that devastated millions of homes and properties and left millions of people without shelter in Iloilo City, Philippines. As the Foundation undertakes more fund raising activities, more projects will be initiated."]})}}]),a}(n.Component),A=a(11),B=a.n(A),F=a(19),L=a(21),U=a(108);var M=function(e){var t=e.officer;return Object(x.jsxs)(U.a,{className:"profile-card-5 rounded",children:[Object(x.jsx)(b.Link,{to:"/officer/".concat(t._id),children:Object(x.jsx)(U.a.Img,{variant:"top",src:t.image})}),Object(x.jsxs)(U.a.Body,{className:"pt-0",children:[Object(x.jsx)(U.a.Title,{children:t.name}),Object(x.jsx)(U.a.Subtitle,{children:t.position}),Object(x.jsx)(U.a.Text,{children:t.bio})]})]})},D=a(102),J=a(103),_=a(20),W=a.n(_);var E=function(){var e=Object(n.useState)([]),t=Object(L.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(F.a)(B.a.mark((function e(){var t,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("/api/officers/");case 2:t=e.sent,a=t.data,o(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(x.jsxs)("div",{className:"mt-3 mb-5",children:[Object(x.jsx)(D.a,{children:a.map((function(e){return Object(x.jsx)(J.a,{sm:12,md:6,lg:4,xl:3,className:"my-4",children:Object(x.jsx)(M,{officer:e})},e._id)}))}),Object(x.jsx)(D.a,{className:"row justify-content-center",children:Object(x.jsx)(J.a,{lg:12,children:Object(x.jsx)("p",{children:"Board members will be elected from those nominated by voting-members. A candidate should be a voting-member to be eligible. Nomination may be submitted by the candidate or by others on the candidate's behalf via e-mail. However, the nomination should be accepted by the candidate via e-mail or phone. A list containing the names of all candidates nominated will be posted in the SILAK-SILAB Foundation's website and e-mailed to the e-groups.\xa0Each voting-member may cast a vote for up to 5 candidates by sending an e-mail to the designated e-mail address below. A voting-member can cast only one vote for each candidate."})})})]})},H=a(104),K=a(109);var V=function(e){var t=e.match,a=Object(n.useState)([]),o=Object(L.a)(a,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(F.a)(B.a.mark((function e(){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("/api/officer/".concat(t.params.id,"/"));case 2:a=e.sent,n=a.data,s(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsxs)(b.Link,{to:"/Officers",className:"btn btn-light my-3",children:[Object(x.jsx)("i",{className:"fas fa-arrow-left"}),"Go Back"]}),Object(x.jsxs)(D.a,{children:[Object(x.jsx)(J.a,{md:3,children:Object(x.jsx)(H.a,{src:i.image,alt:i.name,fluid:!0})}),Object(x.jsx)(J.a,{md:9,children:Object(x.jsxs)(K.a,{variant:"flush",children:[Object(x.jsx)(K.a.Item,{children:Object(x.jsx)("h3",{children:i.name})}),Object(x.jsxs)(K.a.Item,{children:["Position: ",i.position]}),Object(x.jsxs)(K.a.Item,{children:["Biography: ",i.bio]})]})})]})]})};a(97);var q=function(){return Object(x.jsxs)(D.a,{className:"p-2 m-5",children:[Object(x.jsxs)(J.a,{lg:6,md:12,sm:12,children:[Object(x.jsx)("p",{children:"I'm John Roy Daradal and I\u2019m a fourth year BS Computer Science student in the University of the Philippines Visayas. I\u2019m from Bohol where my mother works as a teacher. I have a brother who is in his senior year in high school. My mother and father separated when I was just three and my brother was a week old. We never heard or got any support from my father after he left. We were raised by my grandmother, who is now a retired school teacher. I graduated Valedictorian in Jagna Central Elementary School. For my first two years in high school, I studied in Central Visayan Institute Foundation, also in my town Jagna, where I received a full scholarship for my academic performance. But during my junior year, my mother took me and my brother to Tagbilaran City because she was hired as an elementary teacher in Bohol Wisdom School, our province\u2019s most prestigious school. It was a dilemma for my part that time since I was torn between staying in Jagna and enjoy my scholarship and studying in the city where my tuition would be deducted from my mother\u2019s salary. I chose the latter. My mother assured me that she would make both ends meet just so the three of us could be together. She gave tutorial sessions to augment her meager salary. Being the new kid in school, I never expected to excel in academics, but I did. I graduated Salutatorian and made my family really proud."}),Object(x.jsx)("p",{children:"I only took two college entrance exams: the UPCAT and the entrance exam for \xa0University of San Carlos in Cebu.During the application for UPCAT, I haven\u2019t made up my mind what to take in college.So just so I can place a course in my application, I wrote BS Computer Science.During that time, I was enjoying our computer classes and lessons in programming so I thought it would be ok if I chose Computer Science.Another confusion I had was what campus to choose.Diliman was too far and Cebu was too near.So I settled for the one in the middle: Iloilo.When the UPCAT results were released, I was very pleased to know that I passed.But after graduation, I only received the letter from San Carlos but none from UP.So I decided maybe UP was not for me.My mom already contacted someone in Cebu for my boarding house.She also prepared for our trip to Cebu for my enrolment.But a week before the confirmation of slots was due, I received the letter.It turned out the letter had been wrongly addressed to Jagna, Iloilo instead of Jagna, Bohol.That letter changed everything.The next day we immediately went to Iloilo and confirmed my slot.My mom was really pleased with the big tuition difference of UP and USC that she immediately said I would be studying here instead of in Cebu."}),Object(x.jsx)("p",{children:"I applied for the STFAP scholarship and I got into Bracket D(P200 / unit).Since my \xa0mother is the only one supporting us, we only have enough money for our basic needs.But in college, there are always other fees to be paid.Organization and dorm fees and shirts are some of these.Since that is not in my mother\u2019s budget, I always found myself paying days after the deadline because I really didn\u2019t have money.Other times I would take the money from my allowance and it\u2019s my health and nutrition that would suffer.I was surprised one day in my junior year when I was called to the STFAP Office.Ma'am Celine told me to take a scholarship from the UP Silak-Silab Foundation because I qualified for their grant. I was so happy to hear this and so was my mom when I told her because finally I would have some financial aid besides hers. I really felt happy that I could help her now in the financial matters because I didn't have to ask her for money every time I have some emergency fees to pay.Now that I didn\u2019t have to worry always about money, I gained some weight and improved on my academic work.I became University Scholar for three consecutive semesters starting junior year; an improvement to my two College Scholar achievements during my first two years."})]}),Object(x.jsxs)(J.a,{lg:6,md:12,sm:12,children:[Object(x.jsx)("p",{children:"During my four years of stay in college, I kept myself busy in school work.Some of my achievements include winning the first place in Komsai.Org\u2019s Codefest 2010, which is a programming contest for all Computer Science students in UPV.But what I pride myself in is the quality of the work that I do.During our junior year, our adviser picked the best students in our batch to be sent to do our OJT in Kabalaka Foundation in Iloilo City.My adviser picked me first and I was assigned to be the leader.The people working at Kabalaka Foundation were impressed at our team because we finished six systems for them in one month.Currently, I am leading a web game development team."}),Object(x.jsx)("p",{children:"Besides being busy with school work, I also have something else that always gets me busy.When I was a sophomore, I joined the UPV Hublag Dance Company.I wasn\u2019t really into serious dancing during high school.I knew I could dance but I didn\u2019t really care before.Joining Hublag Dance Company was a result of a self - challenge.I dared myself to do something else besides academics for a change.Back in high school, during the deliberation of honor students for graduation, I was told by my teacher that I was the top student when it came to academics.The only thing that pulled my rank down was my extra - curricular activities.So I guess that frustration also played a part of my joining.I continually improved myself in dancing and eventually our adviser and choreographer trusted me enough to give me dances to choreograph.My family was surprised when they learned that I was in a dance company since I didn\u2019t really show that much inclination in dancing before.This year, I was elected as the dance company president.This exposure to being the org president gave me experience in managing people and leadership.Currently, we are busy preparing for our dance concert on February 22 entitled ICONOPOP which will feature dances from the 4 top icons of all time: Madonna, Beyonce, Celine Dion and Michael Jackson.I have two choreographic works in this concert."}),Object(x.jsx)("p",{children:"Now, I\u2019ve been thinking about life after graduation.I am planning to work here in the \xa0Philippines for a few years to gain experience, and when I\u2019m already satisfied and really good at what I do, maybe I can move on to a bigger company where I can share my talent and knowledge to benefit the people.Another option is to take the teaching career path.It runs in our family(my grandmother, mother and four aunts are teachers) and I find joy in helping others understand something better.I was brought up with the value of helping others always instilled in my mind.This I guess is something the UP Silak - Silab Foundation and I have in common: the value of helping others in need."}),Object(x.jsx)("p",{children:"On April, I'd soon be graduating and I\u2019m a candidate for graduating with honors (cum laude). And I would really like to thank UP Silak-Silab Foundation for being part of my journey through college. The last two years of help from the Foundation really made it a smooth sail for me. I didn't have to think of financial problems anymore since I always had something saved from my stipend.Now, I have saved most of my stipend so I can have some money after I graduate college and start looking for work.My mom promised me she'll continue my allowance until I get a job but still I'd like her to spend it on herself or for my brother who's also going to be in college next year, in a seminary in Baguio, and spend my savings instead. I'm really thankful for UP Silak - Silab Foundation's generosity and their vision of helping needy students. I've been told that next year after we graduate, a new batch of students will be given the grant.This makes me happy also because I know how much joy this also gives the other students.I've been in their shoes before. More power to you UP Silak-Silab Foundation and may you continue to give deserving students the help that you have extended to me.\""}),Object(x.jsx)("p",{className:"scholar",children:" John Roy Daradal"})]})]})};function z(){var e=Object(n.useState)([]),t=Object(L.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(F.a)(B.a.mark((function e(){var t,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("/api/articles/");case 2:t=e.sent,a=t.data,console.log(a),o(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(x.jsx)("div",{className:"mt-3 mb-5",children:Object(x.jsx)(D.a,{children:a.map((function(e){return Object(x.jsxs)("div",{sm:12,md:6,lg:4,xl:3,className:"my-4",children:[Object(x.jsx)("h3",{children:Object(x.jsx)(b.Link,{to:"article/".concat(e.slug),children:e.title})}),"Author: ",e.officer_name,Object(x.jsx)("br",{}),Object(x.jsxs)("em",{children:["Published: ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(e.publishDate))]}),Object(x.jsx)("br",{}),e.body.length>200?Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"my-4",dangerouslySetInnerHTML:{__html:e.body.substring(0,200)+"..."}}),Object(x.jsx)(b.Link,{to:"article/".concat(e.slug),children:"Click here to read more"})]}):Object(x.jsx)("div",{className:"my-4",dangerouslySetInnerHTML:{__html:e.body.substring(0,200)}}),Object(x.jsx)("hr",{})]},e._id)}))})})}function R(e){var t=e.match,a=Object(n.useState)([]),o=Object(L.a)(a,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(F.a)(B.a.mark((function e(){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("/api/article/".concat(t.params.slug));case 2:a=e.sent,n=a.data,s(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(x.jsx)("div",{className:"mt-3 mb-5",children:Object(x.jsx)(D.a,{children:Object(x.jsxs)("div",{sm:12,md:6,lg:4,xl:3,className:"my-4",children:[Object(x.jsx)("h3",{children:i.title}),"Author: ",i.officer_name,Object(x.jsx)("br",{}),Object(x.jsx)("em",{children:"Published:"}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"my-4",dangerouslySetInnerHTML:{__html:i.body}}),Object(x.jsx)("hr",{})]},i._id)})})}var G=function(){return Object(x.jsxs)(u.a,{className:"my-5",children:["Donation Cancelled.",Object(x.jsx)("i",{class:"bi bi-envelope"})]})};var Y=function(){return Object(x.jsx)(u.a,{className:"my-5",children:"Thank you for your donation!"})};var $=function(){return Object(x.jsx)(u.a,{className:"my-5",children:Object(x.jsx)("h1",{children:"Make a donation today!"})})};var Q=function(){return Object(x.jsx)(b.BrowserRouter,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(w,{}),Object(x.jsxs)(j.g,{children:[Object(x.jsx)(j.d,{exact:!0,path:"/",component:T}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(j.d,{exact:!0,path:"/Mission",component:P}),Object(x.jsx)(j.d,{exact:!0,path:"/Donate",component:$}),Object(x.jsx)(j.d,{exact:!0,path:"/Officers",component:E}),Object(x.jsx)(j.d,{exact:!0,path:"/Officer/:id?",component:V}),Object(x.jsx)(j.d,{exact:!0,path:"/Scholars",component:q}),Object(x.jsx)(j.d,{exact:!0,path:"/Articles",component:z}),Object(x.jsx)(j.d,{exact:!0,path:"/Article/:slug?",component:R}),Object(x.jsx)(j.d,{exact:!0,path:"/cancel",component:G}),Object(x.jsx)(j.d,{exact:!0,path:"/completed",component:Y})]})]}),Object(x.jsx)(v,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(x.jsx)(s.a,{store:m,children:Object(x.jsx)(Q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[98,1,2]]]);
//# sourceMappingURL=main.fd431cdc.chunk.js.map