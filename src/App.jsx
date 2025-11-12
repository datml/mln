import React from 'react';
import './App.css';
import NotebookScene from './components/NotebookScene';

// Import book cover images từ assets
import book1 from './assets/book_1.png';
import book2 from './assets/book_2.png';
import book3 from './assets/book_3.png';
import book4 from './assets/book_4.png';
import book5 from './assets/book_5.png';
import book6 from './assets/book_6.png';
import book7 from './assets/book_7.png';
import book8 from './assets/book_8.png';

function App() {
  const notebooks = [
    {
      id: 1,
      title: 'Sổ tay 1: Giá trị Hàng hóa (W = C + V + M)',
      description: 'Bìa sổ này thể hiện dòng chảy của giá trị: từ máy móc (C) và sức lao động (V) kết hợp lại để tạo ra sản phẩm mới. Trực quan hóa công thức W = C + V + M, cho thấy rõ ràng M (giá trị thặng dư) chính là phần giá trị mới dôi ra, được tạo ra từ sức lao động.',
      coverImage: book1,
      charm: 'Dây chuyền sản xuất'
    },
    {
      id: 2,
      title: 'Sổ tay 2: Sức lao động (V)',
      description: 'Bìa sổ tôn vinh yếu tố con người (sức lao động V) – nguồn gốc duy nhất của giá trị mới. Dùng hình ảnh một chiếc đồng hồ chia ngày lao động làm hai phần: "Thời gian lao động tất yếu" (để trả lương cho bạn) và "Thời gian lao động thặng dư" (phần bạn làm không công cho tư bản, tạo ra M).',
      coverImage: book2,
      charm: 'Đồng hồ'
    },
    {
      id: 3,
      title: 'Sổ tay 3: Tư bản bất biến (C)',
      description: 'Bìa sổ tập trung vào máy móc và nguyên liệu (C). Mô tả một hệ thống công nghiệp, nhấn mạnh rằng tư bản bất biến là điều kiện cần của sản xuất, nhưng nó chỉ bảo toàn và chuyển dịch giá trị của mình vào sản phẩm, chứ không tự sinh ra giá trị mới.',
      coverImage: book3,
      charm: 'Bánh răng'
    },
    {
      id: 4,
      title: "Sổ tay 4: Giá trị thặng dư (M và m')",
      description: "Bìa sổ dùng hình ảnh ẩn dụ về sự mất cân bằng (như cái cân lệch) để thể hiện sự bóc lột. Lột tả bản chất của tỷ suất giá trị thặng dư (m'): nó so sánh trực quan khối V (tiền lương) nhỏ bé với khối M (lợi nhuận) khổng lồ mà người lao động tạo ra.",
      coverImage: book4,
      charm: 'Cái cân lệch'
    },
    {
      id: 5,
      title: 'Sổ tay 5: Bài bạ hàng hóa',
      description: 'Bìa sổ này thể hiện một sản phẩm hoàn hảo nhưng lại đổ cái bóng của người công nhân kiệt sức. Nó minh họa cách chúng ta "sùng bái" hàng hóa, chỉ thấy giá trị của nó, mà quên mất rằng đằng sau vẻ hào nhoáng đó là toàn bộ sức lao động và các mối quan hệ xã hội bị che giấu.',
      coverImage: book5,
      charm: 'Mặt nạ/Bóng người'
    },
    {
      id: 6,
      title: 'Sổ tay 6: Tích lũy & Bất bình đẳng',
      description: 'Bìa sổ này cho thấy một "bong bóng" xa hoa, lấp lánh lơ lửng phía trên một thế giới bị chia cắt. Nó thể hiện hậu quả thực tế của việc tích lũy giá trị thặng dư: tạo ra sự tiêu dùng xa xỉ cho một số ít, đồng thời đào sâu thêm khoảng cách giàu nghèo và sự phân chia rõ rệt trong xã hội.',
      coverImage: book6,
      charm: 'Kim tự tháp/Bong bóng'
    },
    {
      id: 7,
      title: 'Sổ tay 7: Tích lũy vs. Tiêu dùng',
      description: 'Bìa sổ tay thể hiện một dòng chảy giá trị (M) lớn bị chia làm hai ngả. Một ngả (Quỹ tiêu dùng) chảy về phía các biểu tượng xa xỉ (biệt thự, xe sang). Ngả còn lại (Quỹ tích lũy) chảy ngược về nhà máy, làm nó phình to ra, tượng trưng cho việc tái đầu tư và mở rộng sản xuất.',
      coverImage: book7,
      charm: 'Dòng chảy hai ngả'
    },
    {
      id: 8,
      title: 'Sổ tay 8: Giá trị thặng dư Siêu ngạch',
      description: 'Bìa sổ tay thể hiện một "cuộc đua" giữa các nhà máy. Một nhà máy rõ ràng hiện đại và hiệu quả hơn (có giá trị cá biệt thấp). Nhà máy này đang tạo ra một khối lợi nhuận lớn vượt trội (gọi là GTTD Siêu ngạch) so với các đối thủ. Hình ảnh này thể hiện động lực cạnh tranh và lợi thế tạm thời do công nghệ.',
      coverImage: book8,
      charm: 'Cuộc đua nhà máy'
    }
  ];

  return (
    <div className="app">
      {/* Section A: Tiêu đề & Giới thiệu */}
      <section className="hero-section">
        <div className="container">
          <h1 className="main-title">Sổ tay Kỹ thuật số: Bóc tách Giá trị thặng dư</h1>
          <p className="subtitle">
            Khám phá lý thuyết Giá trị thặng dư của Mác qua 8 cuốn sổ tay 3D tương tác, 
            mỗi cuốn được trang bị bookmark 3D độc đáo
          </p>
        </div>
      </section>

      {/* Section 1: Lý do */}
      <section className="content-section reason-section">
        <div className="container">
          <h2 className="section-title">1. Lý do</h2>
          <div className="section-content">
            <p>
              Chúng tôi nhận thấy Lý luận Giá trị thặng dư của Mác tuy quan trọng nhưng lại trừu tượng và khô khan. 
              Trong thời đại số, cần một cách tiếp cận mới. Sản phẩm "Sổ tay Kỹ thuật số" này ra đời để hiện đại hóa 
              và trực quan hóa lý thuyết, biến các khái niệm phức tạp thành những hình ảnh ẩn dụ, dễ hiểu, phù hợp 
              với cách tiếp thu thông tin nhanh của giới trẻ.
            </p>
          </div>
        </div>
      </section>

      {/* Section B: Khu vực tương tác 3D & Mô tả sản phẩm */}
      <section className="notebooks-section">
        <div className="container">
          <h2 className="section-title">2. Sản phẩm</h2>
          <div className="section-content product-intro">
            <p>
              Đây là một website giới thiệu 8 cuốn sổ tay, mỗi cuốn "bóc tách" một khái niệm cốt lõi 
              (và được trang bị bookmark 3D tương ứng):
            </p>
          </div>

          {/* 4 Notebooks - mỗi cuốn riêng biệt */}
          <div className="notebooks-grid">
            {notebooks.map((notebook) => (
              <div key={notebook.id} className="notebook-item">
                <div className="notebook-3d-wrapper">
                  <NotebookScene 
                    bookNumber={notebook.id}
                    coverImage={notebook.coverImage}
                  />
                  <p className="interaction-hint">
                    🖱️ Kéo để xoay • 📖 Click để lật trang
                  </p>
                </div>
                <div className="notebook-info">
                  <h3 className="notebook-title">{notebook.title}</h3>
                  <p className="notebook-description">{notebook.description}</p>
                  <div className="bookmark-badge">
                    <span className="badge-icon">🔖</span>
                    <span className="badge-text">Bookmark 3D: {notebook.charm}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Section 3: Ứng dụng AI */}
      <section className="content-section ai-section">
        <div className="container">
          <h2 className="section-title">3. Ứng dụng AI</h2>
          <div className="section-content">
            <p>Chúng tôi phân định vai trò rõ ràng:</p>
            
            <div className="role-grid">
              <div className="role-card">
                <h3>🧑‍🎓 Sinh viên (Trí tuệ & Sáng tạo)</h3>
                <ul>
                  <li>Nghiên cứu, chắt lọc 4 khái niệm cốt lõi</li>
                  <li>Quyết định ý tưởng trực quan (Art Direction: dùng "cái cân", "dòng chảy", "bookmark charm")</li>
                  <li>Viết prompt chi tiết để "chỉ đạo" AI</li>
                  <li>Lập trình (HTML/CSS/React) để hoàn thiện website</li>
                </ul>
              </div>
              
              <div className="role-card">
                <h3>🤖 AI (Công cụ thực thi)</h3>
                <ul>
                  <li>Sử dụng Gemini tạo 4 bìa sổ và hỗ trợ tạo 4 charm 3D</li>
                  <li>Sử dụng Gemini / ChatGPT để brainstorm ý tưởng và hỗ trợ code</li>
                  <li><strong>AI là "người họa sĩ", sinh viên là "giám đốc sáng tạo"</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tính thu hút */}
      <section className="content-section attract-section">
        <div className="container">
          <h2 className="section-title">4. Tính thu hút</h2>
          <div className="section-content">
            <div className="attract-grid">
              <div className="attract-item">
                <h3>📚 Ứng dụng</h3>
                <p>Là một công cụ học tập (Study Tool) trực quan, thay thế ghi chú truyền thống.</p>
              </div>
              
              <div className="attract-item">
                <h3>✨ Thu hút</h3>
                <p>
                  Thiết kế đẹp, 3D tương tác (xoay, lật), và các bookmark charm độc đáo tạo sự tò mò.
                </p>
              </div>
              
              <div className="attract-item">
                <h3>🔄 Tương tác (Viral)</h3>
                <p>
                  Các hình ảnh ẩn dụ (đặc biệt là "cái cân m'") rất dễ hiểu, gây ấn tượng mạnh và dễ dàng 
                  được chụp lại để chia sẻ lên mạng xã hội, tạo ra thảo luận.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Sổ tay Kỹ thuật số - Dự án học thuật về Lý thuyết Giá trị thặng dư</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
