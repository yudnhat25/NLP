# 📊 QUY TRÌNH DỰ ÁN PHÂN TÍCH CẢM XÚC THỊ TRƯỜNG CHỨNG KHOÁN

## 🎯 Tổng Quan Dự Án

Dự án này xây dựng hệ thống phân tích cảm xúc (Sentiment Analysis) từ các bình luận về thị trường chứng khoán Việt Nam, sử dụng kết hợp AI generative (Gemini) và các mô hình Machine Learning/Deep Learning.

---

## 🔄 SƠ ĐỒ QUY TRÌNH TỔNG THỂ

```
┌─────────────────────────────────────────────────────────────────────┐
│                        DỮ LIỆU THÔ (RAW DATA)                       │
│                          Data.json (3.4MB)                          │
│                    VIC_price.csv (Giá cổ phiếu)                     │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    BƯỚC 1: KIỂM TRA & GÁN NHÃN                      │
│                        CheckData.ipynb                              │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ • Đọc dữ liệu thô từ Data.json                                │ │
│  │ • Sử dụng Gemini AI (gemma-3-27b-it)                          │ │
│  │ • Lọc bỏ: spam, tục tĩu, nội dung không liên quan            │ │
│  │ • Gán nhãn:                                                   │ │
│  │   - Sentiment: Tích cực/Tiêu cực/Bình thường                 │ │
│  │   - Aspect: Giá/Kinh doanh/Chính sách/Cảm xúc/...            │ │
│  │ • Xuất: Data_T9_Labeled_Final.json                            │ │
│  └───────────────────────────────────────────────────────────────┘ │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  BƯỚC 2: PHÂN TÍCH KHÁM PHÁ DỮ LIỆU                 │
│                         EDA_Data.ipynb                              │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ • Thống kê mô tả (describe statistics)                        │ │
│  │ • Phân bố nhãn (sentiment & aspect distribution)              │ │
│  │ • Phân tích độ dài văn bản                                    │ │
│  │ • Word Cloud & từ khóa phổ biến                               │ │
│  │ • Tương quan giữa sentiment và giá cổ phiếu                   │ │
│  │ • Phát hiện outliers & missing values                         │ │
│  │ • Visualizations: biểu đồ, heatmap, timeline                  │ │
│  └───────────────────────────────────────────────────────────────┘ │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    BƯỚC 3: XỬ LÝ & CHUẨN BỊ DỮ LIỆU                │
│                  (Thực hiện trong các file model)                   │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ • Làm sạch văn bản (text cleaning)                            │ │
│  │ • Tokenization (tách từ tiếng Việt)                           │ │
│  │ • Loại bỏ stopwords                                           │ │
│  │ • Chuẩn hóa (lowercase, remove special chars)                 │ │
│  │ • Feature extraction:                                         │ │
│  │   - TF-IDF (cho ML)                                           │ │
│  │   - Word Embeddings (cho DL)                                  │ │
│  │   - PhoBERT embeddings (cho transformer)                      │ │
│  │ • Train/Test split (80/20 hoặc 70/30)                         │ │
│  └───────────────────────────────────────────────────────────────┘ │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
                ▼                ▼                ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   BƯỚC 4A: ML    │  │   BƯỚC 4B: DL    │  │  BƯỚC 4C: BERT   │
│MachineLearning   │  │ DeepLearning     │  │  PhoBertModel    │
│   Model.ipynb    │  │   Model.ipynb    │  │     .ipynb       │
└──────────────────┘  └──────────────────┘  └──────────────────┘
        │                     │                      │
        └─────────────────────┼──────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    BƯỚC 5: SO SÁNH & ĐÁNH GIÁ                       │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ • Metrics: Accuracy, Precision, Recall, F1-Score              │ │
│  │ • Confusion Matrix                                            │ │
│  │ • ROC-AUC Curve                                               │ │
│  │ • Chọn mô hình tốt nhất                                       │ │
│  │ • Lưu model (.pkl, .h5, .pt)                                  │ │
│  └───────────────────────────────────────────────────────────────┘ │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    BƯỚC 6: TRIỂN KHAI ỨNG DỤNG                      │
│                         Chat_bot.ipynb                              │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ • Load mô hình đã train                                       │ │
│  │ • Xây dựng chatbot interface                                  │ │
│  │ • Dự đoán sentiment real-time                                 │ │
│  │ • Tích hợp với API/Web interface                              │ │
│  │ • Hiển thị kết quả & insights                                 │ │
│  └───────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📁 CHI TIẾT CÁC FILE TRONG DỰ ÁN

### 1️⃣ **CheckData.ipynb** - Data Labeling & Cleaning
**Mục đích:** Làm sạch và gán nhãn dữ liệu thô

**Input:**
- `Data.json` - Dữ liệu bình luận thô chưa xử lý

**Process:**
1. Đọc dữ liệu JSON
2. Kết nối Gemini AI API (gemma-3-27b-it)
3. Xử lý theo batch (20 items/batch)
4. Lọc bỏ:
   - Nội dung tục tĩu, phản cảm
   - Spam quảng cáo
   - Chào hỏi xã giao vô nghĩa
   - Rác/nonsense
5. Gán nhãn cho dữ liệu hợp lệ:
   - **Sentiment:** Tích cực / Tiêu cực / Bình thường
   - **Aspect:** Diễn biến giá / Kinh doanh / Chính sách / Cảm xúc / Chiến lược / Sự kiện / Khác

**Output:**
- `Data_T9_Labeled_Final.json` - Dữ liệu đã được gán nhãn

**Công nghệ:**
- Google Generative AI (Gemini)
- Pandas, JSON
- Temperature = 0.0 (để AI nghiêm túc, không sáng tạo)

---

### 2️⃣ **EDA_Data.ipynb** - Exploratory Data Analysis
**Mục đích:** Khám phá và hiểu sâu về dữ liệu

**Input:**
- `Data_T9_Labeled_Final.json` - Dữ liệu đã gán nhãn
- `VIC_price.csv` - Dữ liệu giá cổ phiếu VIC

**Phân tích thực hiện:**

#### 📊 Thống kê mô tả
- Tổng số mẫu
- Phân bố theo sentiment (%)
- Phân bố theo aspect (%)
- Độ dài trung bình của văn bản

#### 📈 Visualizations
- **Bar charts:** Phân bố sentiment & aspect
- **Pie charts:** Tỷ lệ các nhãn
- **Word Cloud:** Từ khóa phổ biến theo từng sentiment
- **Timeline:** Xu hướng sentiment theo thời gian
- **Correlation:** Mối liên hệ giữa sentiment và giá cổ phiếu

#### 🔍 Phân tích chuyên sâu
- Từ khóa đặc trưng cho từng sentiment
- Phân tích độ dài văn bản
- Phát hiện outliers
- Missing values & data quality check

**Output:**
- Insights về dữ liệu
- Biểu đồ & visualizations
- Báo cáo EDA

---

### 3️⃣ **MachineLearningModel.ipynb** - Traditional ML Models
**Mục đích:** Xây dựng mô hình ML cổ điển

**Input:**
- `Data_T9_Labeled_Final.json`

**Preprocessing:**
1. Text cleaning (làm sạch văn bản)
2. Tokenization (tách từ tiếng Việt - VnCoreNLP/PyVi)
3. Remove stopwords
4. TF-IDF Vectorization

**Models được thử nghiệm:**
- ✅ **Logistic Regression**
- ✅ **Naive Bayes** (MultinomialNB)
- ✅ **Support Vector Machine (SVM)**
- ✅ **Random Forest**
- ✅ **XGBoost**
- ✅ **LightGBM**

**Hyperparameter Tuning:**
- Grid Search CV
- Random Search CV
- Cross-validation (5-fold)

**Evaluation Metrics:**
- Accuracy
- Precision, Recall, F1-Score (macro & weighted)
- Confusion Matrix
- Classification Report

**Output:**
- Trained models (.pkl files)
- Performance comparison table
- Best model selection

---

### 4️⃣ **DeepLearningModel.ipynb** - Deep Learning Models
**Mục đích:** Xây dựng mô hình Deep Learning

**Input:**
- `Data_T9_Labeled_Final.json`

**Preprocessing:**
1. Text cleaning
2. Tokenization
3. Word Embeddings:
   - Word2Vec (tự train hoặc pre-trained)
   - GloVe
   - FastText

**Architectures:**
- 🧠 **LSTM** (Long Short-Term Memory)
  - Bidirectional LSTM
  - Stacked LSTM
- 🧠 **GRU** (Gated Recurrent Unit)
- 🧠 **CNN** (Convolutional Neural Network)
  - 1D CNN for text
- 🧠 **CNN-LSTM Hybrid**
- 🧠 **Attention Mechanism**

**Training Configuration:**
- Loss: Categorical Crossentropy
- Optimizer: Adam
- Batch size: 32/64
- Epochs: 50-100 (với early stopping)
- Callbacks: ModelCheckpoint, EarlyStopping, ReduceLROnPlateau

**Regularization:**
- Dropout layers
- L2 regularization
- Batch Normalization

**Output:**
- Trained models (.h5, .keras files)
- Training history (loss & accuracy curves)
- Best model weights

---

### 5️⃣ **PhoBertModel.ipynb** - Vietnamese BERT Model
**Mục đích:** Sử dụng transformer model chuyên cho tiếng Việt

**Input:**
- `Data_T9_Labeled_Final.json`

**Model Architecture:**
- 🤖 **PhoBERT** (Pre-trained Vietnamese BERT)
  - vinai/phobert-base
  - vinai/phobert-large

**Approach:**
1. **Fine-tuning PhoBERT:**
   - Load pre-trained PhoBERT
   - Add classification head
   - Fine-tune on labeled data

2. **Feature Extraction:**
   - Use PhoBERT embeddings
   - Train classifier on top

**Training Strategy:**
- Learning rate: 2e-5 to 5e-5
- Warmup steps
- Gradient accumulation
- Mixed precision training (FP16)

**Optimization:**
- AdamW optimizer
- Linear learning rate schedule with warmup
- Gradient clipping

**Output:**
- Fine-tuned PhoBERT model
- Tokenizer
- State-of-the-art performance metrics

---

### 6️⃣ **Chat_bot.ipynb** - Chatbot Application
**Mục đích:** Triển khai ứng dụng chatbot phân tích sentiment

**Input:**
- Trained models (từ bước 4)
- User input (real-time)

**Features:**
1. **Sentiment Prediction:**
   - Nhập bình luận → Dự đoán sentiment
   - Hiển thị confidence score

2. **Aspect Detection:**
   - Phân loại chủ đề của bình luận

3. **Interactive Interface:**
   - Gradio / Streamlit UI
   - Chat-like experience

4. **Batch Analysis:**
   - Upload file → Phân tích hàng loạt
   - Export kết quả

5. **Insights & Visualization:**
   - Thống kê sentiment theo thời gian
   - Trending topics
   - Alert cho sentiment tiêu cực đột biến

**Deployment Options:**
- Local: Jupyter Notebook
- Web: Streamlit/Gradio
- API: FastAPI/Flask
- Cloud: Hugging Face Spaces, Google Colab

---

## 🔧 CÔNG NGHỆ & THƯ VIỆN SỬ DỤNG

### Data Processing
```python
- pandas
- numpy
- json
```

### NLP & Text Processing
```python
- VnCoreNLP / PyVi (Vietnamese tokenization)
- underthesea (Vietnamese NLP)
- nltk
- spacy
- transformers (Hugging Face)
```

### Machine Learning
```python
- scikit-learn
- xgboost
- lightgbm
```

### Deep Learning
```python
- tensorflow / keras
- pytorch
- gensim (Word2Vec)
```

### Visualization
```python
- matplotlib
- seaborn
- plotly
- wordcloud
```

### AI APIs
```python
- google-generativeai (Gemini)
```

### Deployment
```python
- gradio
- streamlit
- fastapi
- flask
```

---

## 📊 LUỒNG DỮ LIỆU CHI TIẾT

```
Data.json (Raw)
    │
    ├─→ [CheckData.ipynb]
    │       │
    │       └─→ Gemini AI Processing
    │               │
    │               └─→ Data_T9_Labeled_Final.json
    │
    └─→ [EDA_Data.ipynb]
            │
            ├─→ Statistics & Insights
            ├─→ Visualizations
            └─→ Data Quality Report
                    │
                    ├─→ [MachineLearningModel.ipynb]
                    │       │
                    │       ├─→ TF-IDF Features
                    │       ├─→ Train: LR, SVM, RF, XGB...
                    │       └─→ best_ml_model.pkl
                    │
                    ├─→ [DeepLearningModel.ipynb]
                    │       │
                    │       ├─→ Word Embeddings
                    │       ├─→ Train: LSTM, GRU, CNN...
                    │       └─→ best_dl_model.h5
                    │
                    └─→ [PhoBertModel.ipynb]
                            │
                            ├─→ PhoBERT Fine-tuning
                            └─→ phobert_finetuned/
                                    │
                                    └─→ [Chat_bot.ipynb]
                                            │
                                            └─→ Production Chatbot
```

---

## 🎯 HƯỚNG DẪN THỰC HIỆN TỪNG BƯỚC

### Bước 1: Chuẩn bị môi trường
```bash
# Tạo virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Cài đặt dependencies
pip install pandas numpy matplotlib seaborn
pip install scikit-learn xgboost lightgbm
pip install tensorflow torch transformers
pip install google-generativeai
pip install underthesea vncorenlp
pip install gradio streamlit
```

### Bước 2: Gán nhãn dữ liệu
```bash
# Chạy CheckData.ipynb
jupyter notebook CheckData.ipynb

# Hoặc convert sang .py và chạy
jupyter nbconvert --to script CheckData.ipynb
python CheckData.py
```

### Bước 3: Phân tích dữ liệu
```bash
# Chạy EDA_Data.ipynb
jupyter notebook EDA_Data.ipynb
```

### Bước 4: Train models (song song)
```bash
# Có thể chạy song song 3 notebooks
jupyter notebook MachineLearningModel.ipynb
jupyter notebook DeepLearningModel.ipynb
jupyter notebook PhoBertModel.ipynb
```

### Bước 5: So sánh & chọn model tốt nhất
- Xem kết quả từ 3 notebooks
- So sánh metrics
- Chọn model có F1-score cao nhất

### Bước 6: Deploy chatbot
```bash
# Chạy Chat_bot.ipynb
jupyter notebook Chat_bot.ipynb

# Hoặc deploy với Streamlit
streamlit run chatbot_app.py
```

---

## 📈 KẾT QUẢ MONG ĐỢI

### Performance Benchmarks
| Model Type | Expected Accuracy | F1-Score | Training Time |
|-----------|------------------|----------|---------------|
| Logistic Regression | 75-80% | 0.73-0.78 | < 1 min |
| SVM | 78-82% | 0.76-0.80 | 2-5 min |
| Random Forest | 80-84% | 0.78-0.82 | 3-7 min |
| XGBoost | 82-86% | 0.80-0.84 | 5-10 min |
| LSTM | 84-88% | 0.82-0.86 | 20-40 min |
| CNN-LSTM | 85-89% | 0.83-0.87 | 25-45 min |
| PhoBERT | **88-92%** | **0.86-0.90** | 1-2 hours |

---

## 🚀 TIPS & BEST PRACTICES

### 1. Data Quality
- ✅ Luôn kiểm tra data quality trước khi train
- ✅ Cân bằng dataset nếu có class imbalance
- ✅ Sử dụng stratified split để giữ tỷ lệ nhãn

### 2. Model Training
- ✅ Bắt đầu với baseline model đơn giản (Logistic Regression)
- ✅ Sử dụng cross-validation để đánh giá
- ✅ Lưu lại tất cả experiments (MLflow, Weights & Biases)

### 3. Hyperparameter Tuning
- ✅ Dùng Grid Search cho không gian nhỏ
- ✅ Dùng Random Search hoặc Bayesian Optimization cho không gian lớn
- ✅ Theo dõi overfitting với validation set

### 4. Deployment
- ✅ Versioning cho models
- ✅ A/B testing trước khi deploy production
- ✅ Monitoring model performance trong production

---

## 📞 TROUBLESHOOTING

### Vấn đề thường gặp:

**1. Gemini API Rate Limit**
```python
# Solution: Tăng sleep time giữa các batch
SLEEP_TIME = 5  # thay vì 2
```

**2. Out of Memory khi train DL**
```python
# Solution: Giảm batch size
batch_size = 16  # thay vì 32
```

**3. PhoBERT quá chậm**
```python
# Solution: Sử dụng phobert-base thay vì phobert-large
model_name = "vinai/phobert-base"
```

**4. Accuracy thấp**
- Kiểm tra data quality
- Thử data augmentation
- Tăng số lượng training data
- Thử ensemble methods

---

## 📚 TÀI LIỆU THAM KHẢO

- [PhoBERT Paper](https://arxiv.org/abs/2003.00744)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [Vietnamese NLP Resources](https://github.com/undertheseanlp/underthesea)
- [Sentiment Analysis Best Practices](https://www.tensorflow.org/tutorials/text/text_classification_rnn)

---

## 👥 CONTRIBUTORS & MAINTENANCE

**Dự án:** Phân tích cảm xúc thị trường chứng khoán Việt Nam  
**Ngày tạo:** 2026  
**Version:** 1.0  

---

**🎉 Chúc bạn thành công với dự án!**
