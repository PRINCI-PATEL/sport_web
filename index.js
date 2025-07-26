document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS Animation
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
  });

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 1000;

  counters.forEach(counter => {
    const animate = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animate, 1);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    const startCounter = () => {
      const counterPosition = counter.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (counterPosition < screenPosition) {
        animate();
      }
    };

    window.addEventListener('scroll', startCounter);
    startCounter(); // Initialize on load if already in view
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Navbar Scroll Effect
  const header = document.querySelector('.header_section');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }

  // Newsletter Form Submission
  const newsletterForms = document.querySelectorAll('.newsletter-form, .footer-newsletter');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;
      
      // Here you would typically send the email to a server
      console.log('Newsletter subscription:', email);
      
      // Show success message
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    });
  });

  // Search Functionality
  const searchInputs = document.querySelectorAll('.update_mail');
  
  searchInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const searchTerm = this.value.trim();
        
        if (searchTerm) {
          // Here you would typically implement search functionality
          console.log('Searching for:', searchTerm);
          alert(`Search functionality would look for: ${searchTerm}`);
        }
      }
    });
  });

  // Carousel Auto Play Control for Video Background
  const video = document.getElementById('myVideo');
  if (video) {
    video.play().catch(error => {
      console.log('Autoplay prevented:', error);
      // Show play button or handle autoplay restriction
    });
  }
});