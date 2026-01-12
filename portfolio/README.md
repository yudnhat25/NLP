# 🌐 Portfolio Website - Vietnamese Stock Sentiment Analysis

> Trang web portfolio chuyên nghiệp để showcase dự án phân tích cảm xúc thị trường chứng khoán

## 📋 Tổng Quan

Đây là một **single-page portfolio website** được thiết kế để trình bày toàn bộ quy trình thực hiện dự án phân tích cảm xúc từ A đến Z, bao gồm:

- ✅ Giới thiệu dự án và mục tiêu
- ✅ Quy trình thực hiện chi tiết (6 bước)
- ✅ Kết quả và so sánh models
- ✅ Tech stack sử dụng
- ✅ Demo chatbot tương tác

## 🎨 Thiết Kế

### Đặc Điểm Nổi Bật

- **Modern Dark Theme** với gradient colors (blue → purple → pink)
- **Smooth Animations** khi scroll và hover
- **Responsive Design** hoạt động tốt trên mọi thiết bị
- **Interactive Elements** với demo sentiment analysis
- **Professional Layout** với typography và spacing chuẩn

### Color Palette

```css
Primary:   #6366f1 (Indigo)
Secondary: #ec4899 (Pink)
Accent:    #8b5cf6 (Purple)
Success:   #10b981 (Green)
Warning:   #f59e0b (Orange)
Error:     #ef4444 (Red)
```

## 📁 Cấu Trúc Files

```
portfolio/
├── index.html      # HTML structure
├── styles.css      # Styling & animations
├── script.js       # Interactive features
└── README.md       # File này
```

## 🚀 Cách Sử Dụng

### 1. Mở Trực Tiếp

```bash
# Mở file trong trình duyệt
start portfolio/index.html  # Windows
open portfolio/index.html   # Mac
xdg-open portfolio/index.html  # Linux
```

Hoặc kéo thả file `index.html` vào trình duyệt.

### 2. Chạy Local Server (Khuyến nghị)

```bash
# Sử dụng Python
cd portfolio
python -m http.server 8000

# Hoặc sử dụng Node.js
npx http-server -p 8000

# Mở trình duyệt tại: http://localhost:8000
```

### 3. Deploy Lên Web

#### GitHub Pages
```bash
# 1. Push code lên GitHub
git add portfolio/
git commit -m "Add portfolio website"
git push origin main

# 2. Vào Settings > Pages
# 3. Chọn branch main và folder /portfolio
# 4. Website sẽ có tại: https://username.github.io/repo-name/
```

#### Netlify
```bash
# 1. Kéo thả folder portfolio vào netlify.com
# 2. Hoặc connect với GitHub repo
# 3. Deploy tự động
```

#### Vercel
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
cd portfolio
vercel

# 3. Follow prompts
```

## ✨ Tính Năng

### Navigation
- Fixed navbar với blur effect
- Smooth scroll đến các sections
- Active link highlighting
- Mobile responsive menu

### Hero Section
- Animated gradient background
- Stats showcase (69% accuracy, 2500+ data, 6 models)
- Call-to-action buttons
- Scroll indicator

### Workflow Timeline
- 6 bước chi tiết với icons
- Fade-in animations khi scroll
- Tech tags cho mỗi bước
- Time estimates

### Results Section
- Animated bar charts so sánh accuracy
- Detailed metrics table
- Distribution charts (sentiment & aspect)
- Color-coded performance indicators

### Tech Stack
- Categorized technologies
- Hover effects
- Icons cho mỗi category

### Demo Section
- **Interactive chatbot demo**
- Keyword-based sentiment analysis
- Real-time results display
- Example chips để test nhanh
- Probability distribution visualization

## 🎯 Demo Features

### Sentiment Analysis Logic

Demo sử dụng keyword matching để phân tích sentiment:

**Tích cực:** tăng, tốt, khả quan, lợi nhuận, tăng trưởng, mua, đầu tư  
**Tiêu cực:** giảm, rủi ro, thua lỗ, sụt, cắt lỗ, bán, lo lắng  
**Bình thường:** báo cáo, công bố, kết quả, quý, năm, doanh thu

### Aspect Detection

- **Diễn biến giá:** tăng, giảm, trần, sàn, giá, biến động
- **Kinh doanh:** lợi nhuận, doanh thu, kinh doanh, tăng trưởng
- **Chiến lược:** mua, bán, cắt lỗ, đầu tư
- **Cảm xúc:** lo lắng, phấn khích, thất vọng
- **Chính sách:** chính sách, thuế, quy định
- **Sự kiện:** họp, đại hội, cổ tức, sáp nhập

## 🎨 Customization

### Thay Đổi Colors

Edit trong `styles.css`:

```css
:root {
    --primary: #6366f1;      /* Màu chính */
    --secondary: #ec4899;    /* Màu phụ */
    --accent: #8b5cf6;       /* Màu nhấn */
    /* ... */
}
```

### Thay Đổi Content

Edit trong `index.html`:

- **Hero Title:** Tìm `.hero-title`
- **Stats:** Tìm `.hero-stats`
- **Workflow Steps:** Tìm `.timeline-item`
- **Results Data:** Tìm `.metrics-table`

### Thêm Animations

Edit trong `script.js`:

```javascript
// Thêm observer cho elements mới
observer.observe(document.querySelector('.your-element'));
```

## 📱 Responsive Breakpoints

```css
Desktop:  > 1024px
Tablet:   768px - 1024px
Mobile:   < 768px
```

## 🐛 Troubleshooting

### CSS không load
- Kiểm tra đường dẫn `<link>` trong `index.html`
- Clear browser cache (Ctrl + Shift + R)

### JavaScript không chạy
- Mở Console (F12) để xem errors
- Kiểm tra đường dẫn `<script>` trong `index.html`

### Fonts không hiển thị
- Kiểm tra kết nối internet (Google Fonts)
- Hoặc download fonts về local

### Demo không hoạt động
- Kiểm tra Console errors
- Đảm bảo `script.js` đã load
- Test với example chips

## 🎓 Học Thêm

### HTML/CSS/JS Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Design Inspiration
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)
- [Awwwards](https://www.awwwards.com/)

## 🔧 Advanced Features

### Add Google Analytics

Thêm vào `<head>` trong `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Contact Form

Sử dụng [Formspree](https://formspree.io/) hoặc [Netlify Forms](https://www.netlify.com/products/forms/).

### Connect Real API

Thay thế `analyzeSentiment()` trong `script.js`:

```javascript
async function analyzeSentiment(text) {
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    return await response.json();
}
```

## 📊 Performance

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimization Tips
- ✅ Minify CSS/JS cho production
- ✅ Optimize images (WebP format)
- ✅ Enable browser caching
- ✅ Use CDN cho static assets

## 🎁 Easter Eggs

### Konami Code
Nhập: ⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ B A

→ Kích hoạt rainbow animation! 🌈

### Console Messages
Mở Console (F12) để xem welcome messages và tips.

## 📝 License

MIT License - Free to use and modify

## 👨‍💻 Author

**Vietnamese Stock Sentiment Analysis Project**  
Version: 1.0  
Created: 2026-01-12

## 🙏 Credits

- **Fonts:** [Google Fonts](https://fonts.google.com/) (Inter, JetBrains Mono)
- **Icons:** Emoji (Unicode)
- **Inspiration:** Modern portfolio designs from Dribbble & Awwwards

## 📞 Support

Nếu gặp vấn đề:
1. Check Console (F12) for errors
2. Đọc Troubleshooting section
3. Open issue trên GitHub
4. Email: your.email@example.com

---

<div align="center">

**Made with ❤️ for Vietnamese Stock Market Analysis**

[⬆ Back to Top](#-portfolio-website---vietnamese-stock-sentiment-analysis)

</div>
