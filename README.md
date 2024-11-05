# Helmet Store - React Web Application
**Helmet Store** là một ứng dụng web được xây dựng bằng React, phục vụ cho cửa hàng bán mũ bảo hiểm với chức năng hiển thị danh sách các sản phẩm bán chạy nhất. Dữ liệu sản phẩm được lưu trữ trên **Google Sheets** và được truy xuất thông qua **Google Sheets API** để hiển thị trên giao diện người dùng.

### Quản lý dữ liệu với TanStack Query
Để tối ưu hóa việc quản lý dữ liệu, dự án sử dụng **TanStack Query** (trước đây là React Query) để xử lý:
- **Gọi API**: Kết nối và lấy dữ liệu từ Google Sheets.
- **Caching dữ liệu**: Giảm thiểu số lần gọi API bằng cách lưu trữ dữ liệu đã tải.
- **Đồng bộ và cập nhật trong nền**: Dữ liệu được tự động cập nhật mà không cần tải lại trang.

### Quản lý trạng thái với Context API
Để quản lý **global state** như các tùy chọn người dùng, trạng thái giỏ hàng ứng dụng sử dụng **Context API** của React. **Context API** giúp chia sẻ và quản lý trạng thái chung giữa các component mà không cần truyền props qua nhiều cấp độ, giúp mã nguồn dễ bảo trì và mở rộng.

> **Truy cập ứng dụng tại:** [Helmet Store](http://luonh.io.vn/) Xoá s trong 'https:' => 'http:' nếu không truy cập được
