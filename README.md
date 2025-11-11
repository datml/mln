# 📚 Sổ tay Kỹ thuật số: Bóc tách Giá trị thặng dư

Một trang web học thuật tương tác trực quan hóa Lý thuyết Giá trị thặng dư của Mác thông qua 4 cuốn sổ tay 3D có thể xoay và lật trang.

## ✨ Tính năng chính

### 🎯 4 Cuốn sổ tay 3D tương tác
Mỗi cuốn sổ đại diện cho một khái niệm cốt lõi:

1. **Sổ 1: Giá trị Hàng hóa (W = C + V + M)**
   - 🔖 Bookmark: Dây chuyền sản xuất
   - Trực quan hóa dòng chảy giá trị

2. **Sổ 2: Sức lao động (V)**
   - 🔖 Bookmark: Đồng hồ
   - Phân chia thời gian tất yếu & thặng dư

3. **Sổ 3: Tư bản bất biến (C)**
   - 🔖 Bookmark: Bánh răng
   - Chuyển dịch giá trị, không tạo giá trị mới

4. **Sổ 4: Giá trị thặng dư (M và m')**
   - 🔖 Bookmark: Cái cân lệch
   - So sánh V (tiền lương) vs M (lợi nhuận)

### 🎮 Tương tác 3D
- **Xoay 360°**: Kéo chuột để xoay và xem mọi góc cạnh của sổ
- **Lật trang**: Click vào sổ để mở và xem hiệu ứng lật trang 3D
- **Bookmark động**: Các bookmark 3D lung lay theo chuyển động

## 🚀 Cài đặt & Chạy

### Yêu cầu
- Node.js 18+ 
- npm hoặc yarn

### Bước 1: Cài đặt dependencies
```bash
npm install
```

### Bước 2: Chạy development server
```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:5173`

### Bước 3: Build production
```bash
npm run build
```

## 📁 Cấu trúc Project

```
mln/
├── src/
│   ├── components/
│   │   ├── Bookmark3D.jsx      # Component bookmark 3D với 4 charm khác nhau
│   │   ├── Notebook3D.jsx       # Component sổ tay 3D với animation lật trang
│   │   └── NotebookScene.jsx    # Scene 3D với lighting & controls
│   ├── assets/                  # Nơi đặt book_1.png đến book_4.png
│   ├── App.jsx                  # Main app component với các sections
│   ├── App.css                  # Styling cho toàn bộ trang
│   └── main.jsx                 # Entry point
├── public/
│   ├── book_1.svg               # Placeholder cover 1
│   ├── book_2.svg               # Placeholder cover 2
│   ├── book_3.svg               # Placeholder cover 3
│   └── book_4.svg               # Placeholder cover 4
└── BOOK_COVERS_README.md        # Hướng dẫn thêm bìa sổ
```

## 🎨 Thêm hình ảnh bìa sổ

⚠️ **Quan trọng**: Hiện tại project đang sử dụng SVG placeholder.

Để thêm bìa sổ thật (PNG do AI tạo):
1. Đặt 4 file PNG vào `src/assets/`:
   - `book_1.png` - Bìa Giá trị Hàng hóa
   - `book_2.png` - Bìa Sức lao động
   - `book_3.png` - Bìa Tư bản bất biến
   - `book_4.png` - Bìa Giá trị thặng dư

2. Cập nhật `src/App.jsx`:
```javascript
// Thay đổi từ:
const book1 = '/book_1.svg';

// Thành:
import book1 from './assets/book_1.png';
```

Chi tiết xem file `BOOK_COVERS_README.md`

## 🛠️ Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **Three.js** - 3D rendering engine
- **@react-three/fiber** - React renderer cho Three.js
- **@react-three/drei** - Helper components cho R3F

## 📖 Sections của Website

1. **Hero Section**: Tiêu đề & giới thiệu
2. **Lý do**: Giải thích tại sao cần hiện đại hóa lý thuyết Mác
3. **Sản phẩm**: 4 sổ tay 3D tương tác với mô tả chi tiết
4. **Ứng dụng AI**: Phân định vai trò sinh viên & AI
5. **Tính thu hút**: Giải thích tính ứng dụng & viral của sản phẩm

## 🎓 Mục đích giáo dục

Website này được tạo ra như một công cụ học tập hiện đại để:
- Trực quan hóa các khái niệm kinh tế chính trị phức tạp
- Biến lý thuyết trừu tượng thành hình ảnh ẩn dụ dễ hiểu
- Thu hút giới trẻ tiếp cận kiến thức học thuật qua công nghệ 3D

## 📝 License

Dự án học thuật - Sử dụng cho mục đích giáo dục

---

**Made with ❤️ for modern education**
