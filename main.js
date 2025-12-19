document.addEventListener('DOMContentLoaded', () => {
    console.clear(); // Clean console

    // 🚀 Cool Welcome Message in Console
    console.log("%c🚀 Welcome to Muhammad Usman - AI Engineer Portfolio 🚀", 
        "font-size: 18px; font-weight: bold; color: #00ffff; background: #000; padding: 15px; border-radius: 12px; border: 2px solid #00ffff;");
    console.log("%c👨‍💻 Built with passion using HTML, CSS & JavaScript", 
        "font-size: 14px; color: #d600ff; font-style: italic;");
    console.log("%c📬 Contact: manoousman469@gmail.com | +92-3007515751", 
        "font-size: 14px; color: #00ffff;");

    // 1. Active Navigation Link
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath || 
            (currentPath === "" && link.getAttribute('href') === "index.html")) {
            link.classList.add('active');
        }
    });

    // 2. Header Scroll Effect - Glassy on Scroll
    const header = document.querySelector('header');
    const scrollThreshold = 80;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.style.background = 'rgba(10, 10, 30, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 8px 32px rgba(0, 255, 255, 0.15)';
            header.style.borderBottom = '1px solid rgba(0, 255, 255, 0.4)';
        } else {
            header.style.background = 'rgba(10, 10, 30, 0.6)';
            header.style.backdropFilter = 'blur(15px)';
            header.style.boxShadow = 'none';
            header.style.borderBottom = '1px solid rgba(0, 255, 255, 0.25)';
        }
    });

    // 3. Page Load Fade-In Animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 4. Contact Form Submission (Only on contact.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('senderName').value.trim();
            const email = document.getElementById('senderEmail').value.trim();
            const subject = document.getElementById('messageSubject').value.trim();
            const message = document.getElementById('messageBody').value.trim();

            // Basic validation
            if (!name || !email || !subject || !message) {
                alert("⚠️ Please fill in all fields before sending.");
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("⚠️ Please enter a valid email address.");
                return;
            }

            // Construct email body
            const emailBody = `
Hi Muhammad Usman,

You have a new message from your portfolio:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from Portfolio Contact Form on ${new Date().toLocaleDateString()}
            `.trim();

            // Open default email client
            const mailtoLink = `mailto:manoousman469@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;

            // Success feedback
            setTimeout(() => {
                alert("✅ Success! Your email app has opened with the message ready.\n\nPlease click 'Send' in your email client.\n\nThank you!");
            }, 500);

            // Reset form
            contactForm.reset();
        });
    }

    // 5. Optional: Add subtle glow to active/hover nav items (extra polish)
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (!link.classList.contains('active')) {
                link.style.textShadow = '0 0 20px rgba(0, 255, 255, 0.6)';
            }
        });
        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.style.textShadow = 'none';
            }
        });
    });
});