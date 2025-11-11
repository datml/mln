# Hướng dẫn thêm hình ảnh bìa sổ

Để hoàn thiện website, bạn cần thêm 4 file hình ảnh bìa sổ vào thư mục `src/assets/`:

## Các file cần thêm:
1. `book_1.png` - Bìa Sổ tay 1: Giá trị Hàng hóa (W = C + V + M)
   - Chủ đề: Dây chuyền sản xuất, dòng chảy giá trị
   - Charm: Dây chuyền sản xuất (chain links)

2. `book_2.png` - Bìa Sổ tay 2: Sức lao động (V)
   - Chủ đề: Đồng hồ chia thời gian (tất yếu vs thặng dư)
   - Charm: Đồng hồ

3. `book_3.png` - Bìa Sổ tay 3: Tư bản bất biến (C)
   - Chủ đề: Máy móc, bánh răng công nghiệp
   - Charm: Bánh răng

4. `book_4.png` - Bìa Sổ tay 4: Giá trị thặng dư (M và m')
   - Chủ đề: Cái cân lệch (V nhỏ vs M lớn)
   - Charm: Cái cân lệch

## Kích thước khuyến nghị:
- Tỷ lệ: 2:3 (ví dụ: 400x600px hoặc 600x900px)
- Định dạng: PNG với nền trong suốt hoặc nền màu
- Độ phân giải: 72-150 DPI

## Tạm thời:
Hiện tại code sẽ hiển thị các file SVG placeholder trong thư mục assets. 
Khi bạn có các file PNG thật, chỉ cần:
1. Đặt chúng vào `src/assets/`
2. Đảm bảo tên file chính xác: book_1.png, book_2.png, book_3.png, book_4.png
3. Website sẽ tự động load chúng

## Lưu ý:
- Code đã được cấu hình để load từ `src/assets/book_1.png` đến `book_4.png`
- Nếu file không tồn tại, sẽ hiển thị lỗi hoặc ảnh trống
- Bạn có thể sử dụng AI (Gemini, DALL-E, Midjourney) để tạo các bìa sổ theo mô tả trên
