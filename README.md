# QueryOptimizer_2.0
# 🔍 ML Query Optimizer - Chrome Extension

A lightweight Chrome extension that uses machine learning to optimize your queries for token efficiency and clarity — perfect for reducing costs and improving performance when working with LLMs like GPT or Claude.

---

## 🚀 Tech Stack

| Category            | Technology Used                 |
|---------------------|----------------------------------|
| 💡 Frontend         | HTML, CSS, Vanilla JS            |
| 🧠 ML Model         | [@xenova/transformers](https://github.com/xenova/transformers.js) (ONNX-based) |
| 🧩 Model Architecture | MiniLM-L6-v2 (quantized for speed) |
| 📦 Bundler          | Webpack 5                        |
| ⚙️ Chrome API       | Manifest V3                      |

The ML model is bundled locally using [ONNX Runtime Web](https://onnxruntime.ai/) via Transformers.js. No external API calls are made — everything runs entirely in your browser.

---

## ✨ Features & Functionalities

- ✅ **Real-time Query Optimization**: Converts verbose or filler-heavy queries into concise, LLM-efficient phrasing.
- 🧠 **Local Sentence Embedding**: Uses MiniLM embeddings for semantic analysis.
- 💬 **FAQ Matching**: Matches common questions against an FAQ set using cosine similarity.
- ✂️ **Token Reduction Tracking**: Displays before & after token counts and percentage saved.
- 🔧 **Pattern-Based Fallback**: Works even when models fail by using regular expressions to simplify input.
- 🔒 **Fully Offline**: No internet connection or API key required.
- 🧪 **Test Examples**: Preloaded sample queries to test different input styles.
- 🔁 **Web-Accessible Resources**: All model files are bundled and declared in the manifest for smooth Chrome access.

---

## 📦 How to Use This Repo

> 🚨 **Requirements**: Node.js, npm, and Git installed.

---

### 1. **Clone the Repo**

```bash
git clone https://github.com/your-username/query-optimizer-chrome-extension.git
cd query-optimizer-chrome-extension
