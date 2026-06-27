// ==================== MENU HAMBURGUER ====================
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // ==================== NAVBAR SCROLL ====================
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // ==================== SLIDER DE DEPOIMENTOS ====================
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.dot');

        function showTestimonial(index) {
            testimonials.forEach((test, i) => {
                test.classList.remove('active');
                dots[i].classList.remove('active');
            });
            
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function currentSlide(index) {
            currentTestimonial = index;
            showTestimonial(index);
        }

        // Auto-play testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);

        // ==================== FORMULÁRIO ====================
        const form = document.getElementById('contact-form');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Obrigado, ${name}! Sua mensagem foi enviada. Entraremos em contato em breve.`);
            form.reset();
        });

        // ==================== ANIMAÇÃO DE SCROLL SUAVE ====================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ==================== PARALLAX NO HERO ====================
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBg = document.querySelector('.hero-bg');
            const heroSection = document.querySelector('.hero');
            
            if(heroBg && heroSection) {
                const heroHeight = heroSection.offsetHeight;
                
                // Só aplica parallax enquanto estiver na seção Hero
                if(scrolled < heroHeight) {
                    // Limita o movimento para no máximo 10% (evita espaços em branco)
                    const maxMove = heroHeight * 0.1; // 10% da altura do Hero
                    const movement = Math.min(scrolled * 0.3, maxMove);
                    
                    heroBg.style.transform = `translateY(${movement}px) scale(1.1)`;
                }
            }
        });