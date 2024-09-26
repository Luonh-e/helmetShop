Giới thiệu
Đây là một ứng dụng web được xây dựng bằng React dành cho cửa hàng mũ bảo hiểm, với chức năng hiển thị danh sách các sản phẩm mũ bảo hiểm bán chạy. Dữ liệu sản phẩm được lưu trữ trên Google Sheets và ứng dụng sử dụng API từ Google Sheets để lấy dữ liệu.

Để quản lý dữ liệu hiệu quả, dự án sử dụng **TanStack Query** (trước đây gọi là React Query) để xử lý việc gọi API, caching, đồng bộ và cập nhật dữ liệu. `TanStack Query` đơn giản hóa việc quản lý dữ liệu từ server trong ứng dụng bằng cách cung cấp các tính năng mạnh mẽ như:
- **Tự động cập nhật dữ liệu trong nền**: Giúp dữ liệu luôn mới mà không cần phải làm mới thủ công.
- **Caching dữ liệu**: Cải thiện hiệu năng bằng cách lưu trữ dữ liệu đã tải, tránh các yêu cầu lặp lại không cần thiết.
- **Tự động thử lại khi có lỗi**: Xử lý các yêu cầu không thành công và đảm bảo giao diện luôn phản ánh trạng thái chính xác của dữ liệu.

Để quản lý trạng thái chung của ứng dụng như các tuỳ chọn của người dùng hoặc trạng thái giỏ hàng, ứng dụng sử dụng **useContext**

url: http://luonh.io.vn/
