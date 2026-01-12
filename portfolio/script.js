// ===== NAVIGATION =====
const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe all cards
document.querySelectorAll('.overview-card, .tech-category, .distribution-card').forEach(card => {
    observer.observe(card);
});

// ===== DEMO SECTION =====
const demoInput = document.getElementById('demoInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const demoResult = document.getElementById('demoResult');
const exampleChips = document.querySelectorAll('.example-chip');

// Example data for demo (simulated predictions)
const sentimentExamples = {
    'tích cực': {
        keywords: ['tăng', 'tốt', 'khả quan', 'lợi nhuận', 'tăng trưởng', 'mua', 'đầu tư', 'tích cực', 'tăng trần'],
        sentiment: 'Tích cực',
        confidence: 0.92,
        aspect: 'Diễn biến giá',
        probabilities: { positive: 92, neutral: 6, negative: 2 }
    },
    'tiêu cực': {
        keywords: ['giảm', 'rủi ro', 'thua lỗ', 'sụt', 'cắt lỗ', 'bán', 'tiêu cực', 'giảm sàn', 'lo lắng'],
        sentiment: 'Tiêu cực',
        confidence: 0.88,
        aspect: 'Chiến lược',
        probabilities: { positive: 5, neutral: 7, negative: 88 }
    },
    'bình thường': {
        keywords: ['báo cáo', 'công bố', 'kết quả', 'quý', 'năm', 'doanh thu', 'thông tin'],
        sentiment: 'Bình thường',
        confidence: 0.85,
        aspect: 'Kinh doanh',
        probabilities: { positive: 12, neutral: 85, negative: 3 }
    }
};

// Analyze sentiment based on keywords
function analyzeSentiment(text) {
    const lowerText = text.toLowerCase();

    // Count keyword matches for each sentiment
    let scores = {
        'tích cực': 0,
        'tiêu cực': 0,
        'bình thường': 0
    };

    for (const [sentiment, data] of Object.entries(sentimentExamples)) {
        data.keywords.forEach(keyword => {
            if (lowerText.includes(keyword)) {
                scores[sentiment]++;
            }
        });
    }

    // Determine dominant sentiment
    let maxScore = 0;
    let predictedSentiment = 'bình thường';

    for (const [sentiment, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            predictedSentiment = sentiment;
        }
    }

    // Get prediction data
    const prediction = sentimentExamples[predictedSentiment];

    // Determine aspect based on keywords
    let aspect = 'Khác';
    if (lowerText.match(/tăng|giảm|trần|sàn|giá|biến động/)) {
        aspect = 'Diễn biến giá';
    } else if (lowerText.match(/lợi nhuận|doanh thu|kinh doanh|tăng trưởng|báo cáo/)) {
        aspect = 'Kinh doanh';
    } else if (lowerText.match(/mua|bán|cắt lỗ|đầu tư|chiến lược/)) {
        aspect = 'Chiến lược';
    } else if (lowerText.match(/lo lắng|phấn khích|thất vọng|vui|buồn/)) {
        aspect = 'Cảm xúc';
    } else if (lowerText.match(/chính sách|thuế|quy định|luật/)) {
        aspect = 'Chính sách';
    } else if (lowerText.match(/họp|đại hội|cổ tức|sáp nhập/)) {
        aspect = 'Sự kiện';
    }

    return {
        sentiment: prediction.sentiment,
        confidence: prediction.confidence,
        aspect: aspect,
        probabilities: prediction.probabilities
    };
}

// Display results
function displayResults(result) {
    // Set sentiment with color
    const sentimentValue = document.getElementById('sentimentValue');
    sentimentValue.textContent = result.sentiment;
    sentimentValue.style.color = getSentimentColor(result.sentiment);

    // Set confidence
    const confidenceValue = document.getElementById('confidenceValue');
    confidenceValue.textContent = `${(result.confidence * 100).toFixed(1)}%`;

    // Set aspect
    const aspectValue = document.getElementById('aspectValue');
    aspectValue.textContent = result.aspect;

    // Set probability bars
    const probPositive = document.getElementById('probPositive');
    const probNeutral = document.getElementById('probNeutral');
    const probNegative = document.getElementById('probNegative');

    const probPositiveValue = document.getElementById('probPositiveValue');
    const probNeutralValue = document.getElementById('probNeutralValue');
    const probNegativeValue = document.getElementById('probNegativeValue');

    // Animate bars
    setTimeout(() => {
        probPositive.style.width = `${result.probabilities.positive}%`;
        probNeutral.style.width = `${result.probabilities.neutral}%`;
        probNegative.style.width = `${result.probabilities.negative}%`;

        probPositiveValue.textContent = `${result.probabilities.positive}%`;
        probNeutralValue.textContent = `${result.probabilities.neutral}%`;
        probNegativeValue.textContent = `${result.probabilities.negative}%`;
    }, 100);

    // Show result
    demoResult.style.display = 'block';

    // Scroll to result
    setTimeout(() => {
        demoResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 200);
}

// Get sentiment color
function getSentimentColor(sentiment) {
    switch (sentiment) {
        case 'Tích cực':
            return '#10b981';
        case 'Tiêu cực':
            return '#ef4444';
        case 'Bình thường':
            return '#3b82f6';
        default:
            return '#94a3b8';
    }
}

// Analyze button click
if (analyzeBtn) {
    analyzeBtn.addEventListener('click', () => {
        const text = demoInput.value.trim();

        if (!text) {
            alert('Vui lòng nhập bình luận để phân tích!');
            return;
        }

        // Show loading state
        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = '<span>Đang phân tích...</span>';

        // Simulate API call delay
        setTimeout(() => {
            const result = analyzeSentiment(text);
            displayResults(result);

            // Reset button
            analyzeBtn.disabled = false;
            analyzeBtn.innerHTML = `
                <span>Phân Tích</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
        }, 800);
    });
}

// Example chips click
exampleChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const text = chip.getAttribute('data-text');
        demoInput.value = text;

        // Auto analyze
        analyzeBtn.click();
    });
});

// Enter key to analyze
if (demoInput) {
    demoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            analyzeBtn.click();
        }
    });
}

// ===== ANIMATE BARS ON SCROLL =====
const chartBars = document.querySelectorAll('.bar');
const aspectFills = document.querySelectorAll('.aspect-fill');

const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const style = bar.getAttribute('style');
            const width = style.match(/width:\s*([\d.]+)%/);
            if (width) {
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width[1] + '%';
                }, 100);
            }
        }
    });
}, { threshold: 0.5 });

chartBars.forEach(bar => barObserver.observe(bar));
aspectFills.forEach(fill => barObserver.observe(fill));

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== COPY CODE FUNCTIONALITY =====
document.querySelectorAll('code').forEach(codeBlock => {
    codeBlock.style.cursor = 'pointer';
    codeBlock.title = 'Click to copy';

    codeBlock.addEventListener('click', () => {
        const text = codeBlock.textContent;
        navigator.clipboard.writeText(text).then(() => {
            // Show feedback
            const originalText = codeBlock.textContent;
            codeBlock.textContent = 'Copied!';
            codeBlock.style.color = '#10b981';

            setTimeout(() => {
                codeBlock.textContent = originalText;
                codeBlock.style.color = '';
            }, 1000);
        });
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images if any
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== EASTER EGG: KONAMI CODE =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s linear infinite';

        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===== CONSOLE MESSAGE =====
console.log('%c🚀 Vietnamese Stock Sentiment Analysis', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c📊 Portfolio Website v1.0', 'font-size: 14px; color: #8b5cf6;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'font-size: 12px; color: #94a3b8;');
console.log('%cTry the Konami Code! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'font-size: 10px; color: #ec4899;');

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Portfolio website loaded successfully!');

    // Add loaded class to body for animations
    document.body.classList.add('loaded');

    // Preload demo with first example
    if (exampleChips.length > 0 && demoInput) {
        const firstExample = exampleChips[0].getAttribute('data-text');
        demoInput.placeholder = `Nhập bình luận của bạn... \nVí dụ: "${firstExample}"`;
    }
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        analyzeSentiment,
        getSentimentColor
    };
}
