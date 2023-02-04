let navImages = document.querySelectorAll('.icon');

let mainText = document.querySelector('#work');

function playground() {
  document.getElementById("h2").innerHTML = "Playground";
  document.getElementById("p1").innerHTML = "Playground is a small tech startup that is based in NYC, that builds UI for childcare, storing all their information on one easy accessible interface. Child care admin and higher, can easily track student activity, payments, fees, and more. They have both an app in the apple store and a website to manage such child information";
  document.getElementById("p2").innerHTML = "Currently at Playground, I help grow awareness through the company by managing their marketing and overall organic content. The work I do is however, is specifically targeted towards managing their blog page, in which I come up with ideas based on most searched keywords, post the blogs on to the website, and promote the blogs on their social media pages.";
}

function cisco() {
  document.getElementById("h2").innerHTML = "Cisco";
  document.getElementById("p1").innerHTML = "Cisco is a multinational technology conglomerate corporation focused on building networking hardware, software, telecommunications equipment, and more. Cisco’s Emerging Technologies and Incubation (ET&I) branch is Cisco’s incubation sector that partners up with related start-up companies, research, etc. and scales them through the rapid process of ideation, validation, and incubation.";
  document.getElementById("p2").innerHTML = "I was a project manager intern at Cisco’s ET&I sector. I mainly was in charge of design optimization, managing meetings, and researching.The main projects I worked on through Figma and other tools was optimizing the design for an AI Ethics blog series for the website, creating and designing a manual on API Security, and writing a blog post for Cisco about my intern experience.";
}

function kinship() {
  document.getElementById("h2").innerHTML = "Kinship";
  document.getElementById("p1").innerHTML = "Kinship is an application tool that allows users to more easily build stronger and more organized relationships through reminders and notes. Kinship is a platform that makes it easy for people to capture thoughts about their relationships on the go. You can build profiles of relationships with key information about “where you met” or “favorite color”. To build better connections the app also sends you reminders of when to reconnect with people.";
  document.getElementById("p2").innerHTML = "My role at this start up was a marketing intern. I was tasked with ideating new ways to market and bring new users, design posts, and create a social media calendar. Looking at their current social media page, I suggested a more direct marketing approach rather than informational approach. Then I tailored the design of the posts to portray this approach.";
}

        
navImages[0].addEventListener('click', playground);
navImages[1].addEventListener('click', cisco);
navImages[2].addEventListener('click', kinship);
