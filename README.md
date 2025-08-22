# 🛍️ Shopper - Next.js Project

A full-stack web application built with **Next.js 15 (App Router)**, **MongoDB**, and **NextAuth.js**.  
This project includes authentication, services, bookings, blogs, and contact sections — making it a complete modern web solution.

---

## 🚀 Features
- 🔐 **Authentication** (Register / Login with NextAuth.js & Social Login)
- 🛎️ **Services Management** (Browse, view details, order)
- 📅 **Bookings System** (Create, update, and manage bookings)
- 📝 **Blog Pages** (Dynamic routing for blog posts)
- 📩 **Contact Page** (Get in touch easily)
- 🎨 **Modern UI** built with **TailwindCSS**
- 📱 Fully responsive design

---

## 📂 Project Structure


Repository: mostakim69/next.js
Files analyzed: 66
Estimated tokens: 490.7k
```
Directory structure:
└── mostakim69-next.js/
    ├── README.md
    ├── eslint.config.mjs
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── problemSolve.js
    ├── docs/
    │   ├── updateLottie.json
    │   └── cli_commands.md
    ├── public/
    │   ├── CNAME
    │   └── serviceData.json
    └── src/
        ├── authLottie.json
        ├── notfoundLottie.json
        ├── updateLottie.json
        ├── app/
        │   ├── globals.css
        │   ├── layout.jsx
        │   ├── loading.jsx
        │   ├── not-found.jsx
        │   ├── page.js
        │   ├── about/
        │   │   └── page.jsx
        │   ├── actions/
        │   │   └── auth/
        │   │       ├── loginUser.js
        │   │       └── registerUser.js
        │   ├── api/
        │   │   ├── auth/
        │   │   │   └── [...nextauth]/
        │   │   │       └── route.js
        │   │   ├── my-bookings/
        │   │   │   ├── my-bookingsAPI.hurl
        │   │   │   ├── route.js
        │   │   │   └── [id]/
        │   │   │       ├── [bookingAPI].hurl
        │   │   │       └── route.js
        │   │   └── services/
        │   │       ├── route.js
        │   │       ├── servicesAPI.hurl
        │   │       └── [id]/
        │   │           ├── [serviceAPI].hurl
        │   │           └── route.js
        │   ├── auth/
        │   │   ├── layout.jsx
        │   │   ├── refractorAuthPrompt.md
        │   │   ├── components/
        │   │   │   └── SocialLogin.jsx
        │   │   ├── register/
        │   │   │   ├── page.jsx
        │   │   │   └── components/
        │   │   │       └── SignupForm.jsx
        │   │   └── signin/
        │   │       ├── page.jsx
        │   │       └── SignInForm.jsx
        │   ├── blogs/
        │   │   ├── page.jsx
        │   │   └── [blogId]/
        │   │       └── page.jsx
        │   ├── checkout/
        │   │   └── [id]/
        │   │       └── page.jsx
        │   ├── components/
        │   │   ├── CheckoutForm.jsx
        │   │   ├── Navbar.jsx
        │   │   ├── NotFoundAnime.jsx
        │   │   ├── OrderReview.jsx
        │   │   ├── ServiceCard.jsx
        │   │   ├── ServicesSection.jsx
        │   │   ├── Footer/
        │   │   │   └── Footer.jsx
        │   │   └── HomeSection/
        │   │       ├── AboutSection.jsx
        │   │       ├── CallToAction.jsx
        │   │       ├── HeroSection.jsx
        │   │       ├── TestimonialsSection.jsx
        │   │       └── WhyChooseUs.jsx
        │   ├── contact/
        │   │   └── page.jsx
        │   ├── my-bookings/
        │   │   ├── page.jsx
        │   │   ├── [bookingId]/
        │   │   │   └── page.jsx
        │   │   └── components/
        │   │       ├── BookingUpdateForm.jsx
        │   │       └── UpdateLottieAnime.jsx
        │   └── services/
        │       ├── page.jsx
        │       └── [id]/
        │           └── page.jsx
        ├── lib/
        │   ├── authOptions.js
        │   ├── dbConnect.js
        │   ├── LottieAnime.jsx
        │   └── useAuth.jsx
        └── providers/
            └── NextAuthProvider.jsx



---

## ⚙️ Tech Stack
- **Next.js 15** (App Router)
- **React 18**
- **MongoDB** (Database)
- **NextAuth.js** (Authentication)
- **TailwindCSS** (Styling)
- **Vercel** (Deployment)

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/mostakim69/next.js.git
cd next.js


npm install
# or
pnpm install


---


## <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50"> A Little More About Me...  

Hello i'm Md Mostakim Hosen.
<p>I'm a passionate Frontend Developer with a strong focus on creating clean, responsive, and user-friendly web interfaces. I enjoy building modern web applications using technologies like HTML, CSS, JavaScript, React.js, and Tailwind CSS. I believe in writing readable code, maintaining UI consistency, and ensuring a smooth user experience across all devices. I'm always eager to learn new tools and improve my skills to deliver better results.

</p>

```javascript
const mostakim = {
  pronouns: "he" | "him",
  code: [Javascript, Typescript, HTML, CSS, Python, Java],
  tools: [React, Node, Storybook, Styled-Components],
  architecture: ["microservices", "event-driven", "design system pattern"],
  techCommunities: {
                        coorganizer: "AfroPython",
                        speaker: "Latinity",
                        mentor: "EducaTRANSforma"
                      },
 challenge: "I am doing the #100DaysOfCode challenge focused on react and typescript"
}
```


<img src="https://i.postimg.cc/bvR5Q4QY/Whats-App-Image-2025-06-26-at-8-36-49-PM.jpg" alt="Banner"  width="100%" height="auto" />

## 🌐 Socials:
 [![email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:mdmostakimhosen35@gmail.com) 
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/MostakimHosennnn)
[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](https://discord.gg/mostakim520807) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/posterboy3369) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/test) [![Pinterest](https://img.shields.io/badge/Pinterest-%23E60023.svg?logo=Pinterest&logoColor=white)](https://pinterest.com/mdmostakimhosen35) [![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?logo=TikTok&logoColor=white)](https://tiktok.com/@posterboy369) [![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/test) [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@PosterBoy3369) 

# 💻 Tech Stack:
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white)
 ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)  ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)  ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)  ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white) ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
# 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api?username=Mostakim69&theme=swift&hide_border=true&include_all_commits=true&count_private=true)<br/>
![](https://nirzak-streak-stats.vercel.app/?user=Mostakim69&theme=swift&hide_border=true)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=Mostakim69&theme=swift&hide_border=true&include_all_commits=true&count_private=true&layout=compact)

---