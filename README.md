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
