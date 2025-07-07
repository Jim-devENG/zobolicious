const fs = require( 'fs' );
const path = require( 'path' );

// Tailwind CSS template with all the necessary styles and structure
const tailwindTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} - Zobolicious</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'zobo-green': {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            200: '#bbf7d0',
                            300: '#86efac',
                            400: '#4ade80',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                            800: '#166534',
                            900: '#14532d',
                        }
                    },
                    fontFamily: {
                        'sans': ['Inter', 'system-ui', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    
    <style>
        .text-lowercase { text-transform: lowercase; }
        .hero-gradient { background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
        .fade-in { animation: fadeIn 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body class="font-sans text-gray-900 bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <a href="../index.html" class="text-2xl font-bold text-zobo-green-600">zobolicious</a>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden lg:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <div class="relative group">
                            <button class="text-gray-700 hover:text-zobo-green-600 px-3 py-2 text-sm font-medium transition-colors">
                                a bit about us
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                                <div class="py-1">
                                    <a href="about.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">the story</a>
                                    <a href="b-corp.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">b-corp</a>
                                    <a href="promise.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">the zobolicious promise</a>
                                    <a href="nutrition.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">nutrition</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative group">
                            <button class="text-gray-700 hover:text-zobo-green-600 px-3 py-2 text-sm font-medium transition-colors">
                                things we make
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                                <div class="py-1">
                                    <a href="products.html#kids" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">kids</a>
                                    <a href="products.html#smoothies" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">smoothies</a>
                                    <a href="products.html#super-smoothies" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">super smoothies</a>
                                    <a href="products.html#shots" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">shots</a>
                                    <a href="products.html#juicy-water" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">juicy water</a>
                                    <a href="products.html#bubbles" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">juicy water with bubbles</a>
                                    <a href="products.html#juices" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">juices</a>
                                    <a href="products.html#plus" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">zobolicious plus</a>
                                    <a href="products.html#coconut" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">coconut water</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative group">
                            <button class="text-gray-700 hover:text-zobo-green-600 px-3 py-2 text-sm font-medium transition-colors">
                                things we do for people
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                                <div class="py-1">
                                    <a href="people.html#human-rights" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">human rights</a>
                                    <a href="people.html#inclusion" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">inclusion & diversity</a>
                                    <a href="people.html#gender-pay" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">gender pay gap</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative group">
                            <button class="text-gray-700 hover:text-zobo-green-600 px-3 py-2 text-sm font-medium transition-colors">
                                things we do for the planet
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                                <div class="py-1">
                                    <a href="planet.html#recycling" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">recycling activists</a>
                                    <a href="planet.html#sourcing" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">sourcing stories</a>
                                    <a href="planet.html#farming" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">farming champions</a>
                                    <a href="planet.html#climate" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">climate changers</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative group">
                            <button class="text-gray-700 hover:text-zobo-green-600 px-3 py-2 text-sm font-medium transition-colors">
                                fancy a job?
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                                <div class="py-1">
                                    <a href="careers.html#looking-for" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">what we're looking for</a>
                                    <a href="careers.html#benefits" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">what you'll get</a>
                                    <a href="careers.html#career" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">building your career</a>
                                    <a href="careers.html#life-after" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">life after zobolicious</a>
                                    <a href="careers.html#tips" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">top tips</a>
                                    <a href="careers.html#vacancies" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">vacancies</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative group">
                            <button class="text-gray-700 hover:text-zobo-green-600 px-3 py-2 text-sm font-medium transition-colors">
                                get in touch
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                                <div class="py-1">
                                    <a href="contact.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">contact us</a>
                                    <a href="faqs.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-zobo-green-600">faqs</a>
                                </div>
                            </div>
                        </div>
                        
                        <a href="big-knit.html" class="text-gray-700 hover:text-zobo-green-600 px-3 py-2 text-sm font-medium transition-colors">
                            big knit
                        </a>
                    </div>
                </div>
                
                <!-- Mobile menu button -->
                <div class="lg:hidden">
                    <button id="mobile-menu-button" class="text-gray-700 hover:text-zobo-green-600 p-2">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="lg:hidden hidden bg-white border-t border-gray-200">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="about.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-zobo-green-600 hover:bg-gray-50">a bit about us</a>
                <a href="products.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-zobo-green-600 hover:bg-gray-50">things we make</a>
                <a href="people.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-zobo-green-600 hover:bg-gray-50">things we do for people</a>
                <a href="planet.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-zobo-green-600 hover:bg-gray-50">things we do for the planet</a>
                <a href="careers.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-zobo-green-600 hover:bg-gray-50">fancy a job?</a>
                <a href="contact.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-zobo-green-600 hover:bg-gray-50">get in touch</a>
                <a href="big-knit.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-zobo-green-600 hover:bg-gray-50">big knit</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-gradient pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 text-lowercase mb-8 fade-in">
                {{PAGE_TITLE}}
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto fade-in">
                {{PAGE_DESCRIPTION}}
            </p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {{CONTENT}}
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div>
                    <h5 class="text-lg font-semibold mb-6 text-lowercase">A Bit About Us</h5>
                    <ul class="space-y-3">
                        <li><a href="about.html" class="text-gray-300 hover:text-zobo-green-400 transition-colors">The Story</a></li>
                        <li><a href="b-corp.html" class="text-gray-300 hover:text-zobo-green-400 transition-colors">B-Corp</a></li>
                        <li><a href="about.html#blender" class="text-gray-300 hover:text-zobo-green-400 transition-colors">The Zobolender</a></li>
                        <li><a href="nutrition.html" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Nutrition</a></li>
                    </ul>
                </div>
                
                <div>
                    <h5 class="text-lg font-semibold mb-6 text-lowercase">Things We Make</h5>
                    <ul class="space-y-3">
                        <li><a href="products.html#smoothies" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Smoothies</a></li>
                        <li><a href="products.html#super-smoothies" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Super Smoothies</a></li>
                        <li><a href="products.html#juices" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Juices</a></li>
                        <li><a href="products.html#plus" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Zobolicious Plus</a></li>
                        <li><a href="products.html#bubbles" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Bubbles</a></li>
                        <li><a href="products.html#kids" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Kids</a></li>
                        <li><a href="products.html#coconut" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Coconut Water</a></li>
                    </ul>
                </div>
                
                <div>
                    <h5 class="text-lg font-semibold mb-6 text-lowercase">Things We Do For The Planet</h5>
                    <ul class="space-y-3">
                        <li><a href="planet.html#recycling" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Recycling Activists</a></li>
                        <li><a href="planet.html#farming" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Farming Champions</a></li>
                        <li><a href="planet.html#climate" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Climate Changers</a></li>
                    </ul>
                </div>
                
                <div>
                    <h5 class="text-lg font-semibold mb-6 text-lowercase">Things We Do For People</h5>
                    <ul class="space-y-3">
                        <li><a href="people.html#inclusion" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Inclusion & Diversity</a></li>
                        <li><a href="people.html#human-rights" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Human Rights</a></li>
                        <li><a href="people.html#gender-pay" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Gender Pay Gap</a></li>
                    </ul>
                </div>
            </div>
            
            <hr class="border-gray-700 mb-8">
            
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div class="flex flex-wrap gap-6 mb-4 md:mb-0">
                    <a href="careers.html" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Fancy a job?</a>
                    <a href="contact.html" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Get in touch</a>
                    <a href="faqs.html" class="text-gray-300 hover:text-zobo-green-400 transition-colors">FAQs</a>
                    <a href="legal.html#modern-slavery" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Modern Slavery</a>
                    <a href="legal.html#privacy" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Privacy Policy</a>
                    <a href="legal.html#terms" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Terms of Use</a>
                    <a href="legal.html#cookies" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Cookie Policy</a>
                    <a href="legal.html#owner" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Our Owner</a>
                    <a href="legal.html#tax" class="text-gray-300 hover:text-zobo-green-400 transition-colors">Tax Policy</a>
                </div>
                <div class="text-gray-400 text-sm">
                    © 2025 Zobolicious Limited. All rights reserved. Zobolicious and the Zobo logo are registered trademarks of Zobolicious Limited.
                </div>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <button id="back-to-top" class="fixed bottom-6 right-6 w-12 h-12 bg-zobo-green-600 hover:bg-zobo-green-700 text-white rounded-full shadow-lg opacity-0 invisible transition-all duration-300 z-50">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- JavaScript -->
    <script>
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Back to top button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible');
                backToTopButton.classList.remove('opacity-100', 'visible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    </script>
</body>
</html>`;

// Page configurations
const pageConfigs = {
    'about.html': {
        title: 'About Us',
        pageTitle: 'the story',
        description: 'From a small idea in a kitchen to a global movement for good. Here\'s how we became Zobolicious.',
        content: `
            <div class="prose prose-lg max-w-none">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in">
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">how it all began</h2>
                        <p class="text-gray-600 mb-6">Back in 2020, three friends sat in a kitchen with a simple mission: to make drinks that taste good and do good. We were tired of choosing between delicious and healthy, so we decided to create something that was both.</p>
                        <p class="text-gray-600 mb-6">What started as a weekend experiment with a blender and some fresh fruit quickly became something bigger. We realised that if we could make drinks that people actually wanted to drink, we could also use our business to make the world a bit better.</p>
                        <p class="text-gray-600">Fast forward to today, and we're still that same group of friends, just with a few more people helping us out. We're still making drinks in the same way, with the same values, and the same belief that business can be a force for good.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 text-6xl">
                            <i class="fas fa-seedling"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'b-corp.html': {
        title: 'B-Corp',
        pageTitle: 'we\'re a proud b corp',
        description: 'Being a B Corp means we\'re part of a growing group of companies who believe in doing business the right way.',
        content: `
            <div class="prose prose-lg max-w-none">
                <div class="text-center mb-12 fade-in">
                    <div class="w-32 h-32 bg-zobo-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-zobo-green-600 text-6xl">
                        <i class="fas fa-certificate"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">what is b corp?</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">B Corp is a certification that measures a company's entire social and environmental impact. It's like Fairtrade, but for the whole company, not just a bag of coffee.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div class="text-center fade-in">
                        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-zobo-green-600 text-2xl">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">people</h3>
                        <p class="text-gray-600">How we treat our workers, customers, suppliers, and the community</p>
                    </div>
                    <div class="text-center fade-in">
                        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-zobo-green-600 text-2xl">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">planet</h3>
                        <p class="text-gray-600">Our environmental impact and how we manage our resources</p>
                    </div>
                    <div class="text-center fade-in">
                        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-zobo-green-600 text-2xl">
                            <i class="fas fa-balance-scale"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">governance</h3>
                        <p class="text-gray-600">How we're structured and how we make decisions</p>
                    </div>
                </div>
            </div>
        `
    },
    'nutrition.html': {
        title: 'Nutrition',
        pageTitle: 'nutrition',
        description: 'Everything you need to know about what goes into our drinks and why.',
        content: `
            <div class="prose prose-lg max-w-none">
                <div class="text-center mb-12 fade-in">
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">what's in our drinks?</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">We believe in transparency. That's why we tell you exactly what goes into every bottle, and why we put it there.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-gray-50 rounded-lg p-8 fade-in">
                        <h3 class="text-2xl font-semibold text-gray-900 text-lowercase mb-4">ingredients</h3>
                        <ul class="space-y-3 text-gray-600">
                            <li class="flex items-center"><i class="fas fa-check text-zobo-green-600 mr-3"></i>100% natural ingredients</li>
                            <li class="flex items-center"><i class="fas fa-check text-zobo-green-600 mr-3"></i>No artificial colours or flavours</li>
                            <li class="flex items-center"><i class="fas fa-check text-zobo-green-600 mr-3"></i>No added sugar</li>
                            <li class="flex items-center"><i class="fas fa-check text-zobo-green-600 mr-3"></i>Sustainably sourced</li>
                        </ul>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-8 fade-in">
                        <h3 class="text-2xl font-semibold text-gray-900 text-lowercase mb-4">nutritional info</h3>
                        <ul class="space-y-3 text-gray-600">
                            <li class="flex items-center"><i class="fas fa-apple-alt text-zobo-green-600 mr-3"></i>2-3 portions of fruit per bottle</li>
                            <li class="flex items-center"><i class="fas fa-leaf text-zobo-green-600 mr-3"></i>Rich in vitamins and minerals</li>
                            <li class="flex items-center"><i class="fas fa-heart text-zobo-green-600 mr-3"></i>Good source of fibre</li>
                            <li class="flex items-center"><i class="fas fa-tint text-zobo-green-600 mr-3"></i>Naturally hydrating</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    'people.html': {
        title: 'People',
        pageTitle: 'things we do for people',
        description: 'We believe that business should be about more than just making money. It should be about making a difference.',
        content: `
            <div class="prose prose-lg max-w-none">
                <div id="human-rights" class="mb-20 fade-in">
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-8">human rights</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p class="text-gray-600 mb-6">We're committed to respecting and promoting human rights throughout our business. This means treating everyone we work with fairly and with dignity.</p>
                            <p class="text-gray-600 mb-6">We conduct regular audits of our supply chain to ensure that no one is being exploited or mistreated. We also work with our suppliers to help them improve their own human rights practices.</p>
                            <p class="text-gray-600">We believe that everyone has the right to work in safe conditions, to be paid a fair wage, and to be treated with respect. And we're working hard to make sure that's the case throughout our business.</p>
                        </div>
                        <div class="text-center">
                            <div class="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 text-6xl">
                                <i class="fas fa-hands-helping"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="inclusion" class="mb-20 fade-in">
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-8">inclusion & diversity</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="text-center lg:order-2">
                            <div class="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 text-6xl">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                        <div class="lg:order-1">
                            <p class="text-gray-600 mb-6">We believe that diversity makes us stronger. That's why we're committed to creating an inclusive workplace where everyone feels welcome and valued.</p>
                            <p class="text-gray-600 mb-6">We're working to increase diversity at all levels of our business, from our board to our shop floor. We're also providing training and support to help everyone understand and celebrate our differences.</p>
                            <p class="text-gray-600">We believe that everyone should have the opportunity to succeed, regardless of their background, and we're working hard to make that a reality.</p>
                        </div>
                    </div>
                </div>
                
                <div id="gender-pay" class="fade-in">
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-8">gender pay gap</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p class="text-gray-600 mb-6">We're committed to paying everyone fairly for the work they do, regardless of their gender. That's why we publish our gender pay gap data every year.</p>
                            <p class="text-gray-600 mb-6">We're working to close the gender pay gap by ensuring that women and men are paid equally for equal work, and by supporting women to progress in their careers.</p>
                            <p class="text-gray-600">We believe that transparency is key to making progress, which is why we're open about our data and our plans to improve.</p>
                        </div>
                        <div class="text-center">
                            <div class="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 text-6xl">
                                <i class="fas fa-balance-scale"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'planet.html': {
        title: 'Planet',
        pageTitle: 'things we do for the planet',
        description: "We're committed to reducing our impact on the environment and helping to protect the planet for future generations.",
        content: `
            <div class="prose prose-lg max-w-none">
                <div id="recycling" class="mb-20 fade-in">
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-8">recycling activists</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p class="text-gray-600 mb-6">We're working hard to make sure that all our packaging is recyclable and that it actually gets recycled. We're also working to reduce the amount of packaging we use in the first place.</p>
                            <p class="text-gray-600 mb-6">We're investing in new technology to make our bottles even easier to recycle, and we're working with local authorities to improve recycling infrastructure.</p>
                            <p class="text-gray-600">We believe that everyone has a role to play in protecting the planet, and we're doing our bit to make it easier for people to make the right choices.</p>
                        </div>
                        <div class="text-center">
                            <div class="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 text-6xl">
                                <i class="fas fa-recycle"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="farming" class="mb-20 fade-in">
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-8">farming champions</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="text-center lg:order-2">
                            <div class="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 text-6xl">
                                <i class="fas fa-seedling"></i>
                            </div>
                        </div>
                        <div class="lg:order-1">
                            <p class="text-gray-600 mb-6">We work closely with our farmers to help them grow their crops in the most sustainable way possible. We're investing in research and development to find better ways of farming.</p>
                            <p class="text-gray-600 mb-6">We're also working to support small-scale farmers and to help them get a fair price for their produce. We believe that sustainable farming is good for everyone.</p>
                            <p class="text-gray-600">We're committed to sourcing our ingredients from farms that treat their workers fairly and that look after the environment.</p>
                        </div>
                    </div>
                </div>
                
                <div id="climate" class="fade-in">
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-8">climate changers</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p class="text-gray-600 mb-6">We're committed to reducing our carbon footprint and to helping to tackle climate change. We're working to make our operations as energy efficient as possible.</p>
                            <p class="text-gray-600 mb-6">We're investing in renewable energy and in new technology to reduce our emissions. We're also working with our suppliers to help them reduce their own carbon footprints.</p>
                            <p class="text-gray-600">We believe that business has a crucial role to play in tackling climate change, and we're doing everything we can to be part of the solution.</p>
                        </div>
                        <div class="text-center">
                            <div class="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 text-6xl">
                                <i class="fas fa-globe"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'promise.html': {
        title: 'Our Promise',
        pageTitle: 'the zobolicious promise',
        description: 'Our commitment to doing business the right way, for people and the planet.',
        content: `
            <div class="prose prose-lg max-w-none">
                <div class="text-center mb-12 fade-in">
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">our promise to you</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">We promise to always do business the right way, putting people and the planet first.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div class="bg-white rounded-lg p-8 card-hover border border-gray-200 fade-in">
                        <div class="text-center">
                            <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-zobo-green-600 text-2xl">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-4">treat people right</h3>
                            <p class="text-gray-600">We promise to treat everyone we work with fairly and with respect, from our farmers to our customers.</p>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg p-8 card-hover border border-gray-200 fade-in">
                        <div class="text-center">
                            <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-zobo-green-600 text-2xl">
                                <i class="fas fa-leaf"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-4">look after the planet</h3>
                            <p class="text-gray-600">We promise to reduce our impact on the environment and to help protect the planet for future generations.</p>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg p-8 card-hover border border-gray-200 fade-in">
                        <div class="text-center">
                            <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-zobo-green-600 text-2xl">
                                <i class="fas fa-handshake"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-4">be transparent</h3>
                            <p class="text-gray-600">We promise to be open and honest about what we do and how we do it.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'careers.html': {
        title: 'Careers',
        pageTitle: 'fancy a job?',
        description: 'Join our team and help us make the world a bit better, one drink at a time.',
        content: `
            <div class="prose prose-lg max-w-none">
                <div class="text-center mb-12 fade-in">
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">join our team</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">We're looking for passionate people who believe that business can be a force for good.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-gray-50 rounded-lg p-8 fade-in">
                        <h3 class="text-2xl font-semibold text-gray-900 text-lowercase mb-4">what we're looking for</h3>
                        <ul class="space-y-3 text-gray-600">
                            <li class="flex items-center"><i class="fas fa-check text-zobo-green-600 mr-3"></i>Passion for making a difference</li>
                            <li class="flex items-center"><i class="fas fa-check text-zobo-green-600 mr-3"></i>Commitment to our values</li>
                            <li class="flex items-center"><i class="fas fa-check text-zobo-green-600 mr-3"></i>Team players</li>
                            <li class="flex items-center"><i class="fas fa-check text-zobo-green-600 mr-3"></i>Creative thinkers</li>
                        </ul>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-8 fade-in">
                        <h3 class="text-2xl font-semibold text-gray-900 text-lowercase mb-4">what you'll get</h3>
                        <ul class="space-y-3 text-gray-600">
                            <li class="flex items-center"><i class="fas fa-gift text-zobo-green-600 mr-3"></i>Competitive salary</li>
                            <li class="flex items-center"><i class="fas fa-gift text-zobo-green-600 mr-3"></i>Flexible working</li>
                            <li class="flex items-center"><i class="fas fa-gift text-zobo-green-600 mr-3"></i>Health insurance</li>
                            <li class="flex items-center"><i class="fas fa-gift text-zobo-green-600 mr-3"></i>Learning and development</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    'contact.html': {
        title: 'Contact Us',
        pageTitle: 'get in touch',
        description: "We'd love to hear from you. Get in touch and let's start a conversation.",
        content: `
            <div class="prose prose-lg max-w-none">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div class="fade-in">
                        <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">say hello</h2>
                        <p class="text-gray-600 mb-8">We'd love to hear from you. Whether you have a question, a suggestion, or just want to say hi, we're here to listen.</p>
                        
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-zobo-green-100 rounded-full flex items-center justify-center mr-4 text-zobo-green-600">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                    <p class="text-gray-600">hello@zobolicious.com</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-zobo-green-100 rounded-full flex items-center justify-center mr-4 text-zobo-green-600">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                                    <p class="text-gray-600">+31 20 123 4567</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-zobo-green-100 rounded-full flex items-center justify-center mr-4 text-zobo-green-600">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                                    <p class="text-gray-600">Zobolicious HQ<br>Amsterdam, Netherlands</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="fade-in">
                        <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">send us a message</h2>
                        <form class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zobo-green-500 focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zobo-green-500 focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zobo-green-500 focus:border-transparent"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-zobo-green-600 hover:bg-zobo-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                                send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `
    },
    'faqs.html': {
        title: 'FAQs',
        pageTitle: 'frequently asked questions',
        description: "Got a question? We've probably got an answer. If not, just get in touch.",
        content: `
            <div class="prose prose-lg max-w-none">
                <div class="space-y-6">
                    <div class="bg-white rounded-lg p-6 border border-gray-200 fade-in">
                        <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-3">are your drinks really 100% natural?</h3>
                        <p class="text-gray-600">Yes! We only use natural ingredients in our drinks. No artificial colours, flavours, or preservatives.</p>
                    </div>
                    
                    <div class="bg-white rounded-lg p-6 border border-gray-200 fade-in">
                        <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-3">where do you source your ingredients?</h3>
                        <p class="text-gray-600">We work with farmers all over the world to source the best ingredients. We're committed to sustainable farming practices.</p>
                    </div>
                    
                    <div class="bg-white rounded-lg p-6 border border-gray-200 fade-in">
                        <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-3">are your bottles recyclable?</h3>
                        <p class="text-gray-600">Yes! All our bottles are 100% recyclable. We're working hard to make sure they actually get recycled too.</p>
                    </div>
                    
                    <div class="bg-white rounded-lg p-6 border border-gray-200 fade-in">
                        <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-3">do you deliver?</h3>
                        <p class="text-gray-600">We're working on it! We're currently available in selected stores, but we're expanding all the time.</p>
                    </div>
                    
                    <div class="bg-white rounded-lg p-6 border border-gray-200 fade-in">
                        <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-3">can i work for you?</h3>
                        <p class="text-gray-600">Absolutely! We're always looking for passionate people to join our team. Check out our careers page for current vacancies.</p>
                    </div>
                </div>
            </div>
        `
    },
    'big-knit.html': {
        title: 'Big Knit',
        pageTitle: 'big knit',
        description: "You knit a little hat, we'll pop it on a bottle and together, we can help out a lonely older person.",
        content: `
            <div class="prose prose-lg max-w-none">
                <div class="text-center mb-12 fade-in">
                    <div class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-400 text-6xl">
                        <i class="fas fa-mitten"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">what's with the little hats?</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">Every year, we ask people to knit little hats for our bottles. For every hat sold, we donate money to help lonely older people.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white rounded-lg p-8 card-hover border border-gray-200 fade-in">
                        <div class="text-center">
                            <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-zobo-green-600 text-2xl">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-4">helping older people</h3>
                            <p class="text-gray-600">The money we raise goes to charities that help lonely older people. We believe that everyone deserves to feel connected and valued.</p>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg p-8 card-hover border border-gray-200 fade-in">
                        <div class="text-center">
                            <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-zobo-green-600 text-2xl">
                                <i class="fas fa-users"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 text-lowercase mb-4">join in</h3>
                            <p class="text-gray-600">Anyone can take part! You don't need to be an expert knitter. We have patterns for all skill levels.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'legal.html': {
        title: 'Legal',
        pageTitle: 'legal stuff',
        description: 'All the important legal information you need to know about Zobolicious.',
        content: `
            <div class="prose prose-lg max-w-none">
                <div class="space-y-12">
                    <div id="privacy" class="fade-in">
                        <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">privacy policy</h2>
                        <p class="text-gray-600 mb-4">We're committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.</p>
                        <p class="text-gray-600">We only collect the information we need to provide you with the best possible service. We never sell your personal information to third parties.</p>
                    </div>
                    
                    <div id="terms" class="fade-in">
                        <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">terms of use</h2>
                        <p class="text-gray-600 mb-4">By using our website and products, you agree to these terms of use. Please read them carefully.</p>
                        <p class="text-gray-600">We reserve the right to update these terms from time to time. We'll always let you know if we make any significant changes.</p>
                    </div>
                    
                    <div id="cookies" class="fade-in">
                        <h2 class="text-3xl font-bold text-gray-900 text-lowercase mb-6">cookie policy</h2>
                        <p class="text-gray-600 mb-4">We use cookies to improve your experience on our website. This policy explains what cookies we use and why.</p>
                        <p class="text-gray-600">You can control which cookies you accept through your browser settings. However, some features of our website may not work properly if you disable cookies.</p>
                    </div>
                </div>
            </div>
        `
    }
};

// Function to convert a page
function convertPage( filename ) {
    const config = pageConfigs[filename];
    if ( !config ) {
        console.log( `No configuration found for ${filename}, skipping...` );
        return;
    }

    let content = tailwindTemplate
        .replace( '{{TITLE}}', config.title )
        .replace( '{{PAGE_TITLE}}', config.pageTitle )
        .replace( '{{PAGE_DESCRIPTION}}', config.description )
        .replace( '{{CONTENT}}', config.content );

    // Write the converted file
    const filepath = path.join( 'pages', filename );
    fs.writeFileSync( filepath, content );
    console.log( `✅ Converted ${filename} to Tailwind CSS` );
}

// Convert all configured pages
Object.keys( pageConfigs ).forEach( convertPage );

console.log( '🎉 All pages converted to Tailwind CSS!' ); 