# React Native Todo App

## Mô tả
Đây là một ứng dụng Todo được xây dựng bằng React Native và Expo, sử dụng TypeScript. Dự án bao gồm các tính năng như đăng nhập, đăng ký, xác thực, quản lý todo, và các thành phần giao diện người dùng.

## Tính năng chính
- **Xác thực người dùng**: Đăng nhập, đăng ký, xác thực OTP
- **Quản lý Todo**: Thêm, sửa, xóa các công việc
- **Giao diện tab**: Trang chủ, cài đặt, người dùng
- **Tích hợp API**: Sử dụng Axios để giao tiếp với backend
- **Component tái sử dụng**: Các button, input, loading overlay

## Yêu cầu hệ thống
- Node.js v20.14.0 (tải tại: https://nodejs.org/download/release/v20.14.0/)
- Expo CLI (cài đặt bằng `npm install -g @expo/cli`)
- Thiết bị Android/iOS hoặc emulator/simulator

## Cài đặt và chạy dự án
### Chế độ Development
1. Clone code từ repository
2. Cài đặt thư viện: `npm install`
3. Cập nhật file `.env` nếu cần thiết (ví dụ: cấu hình API)
4. Chạy dự án:
   - `npm start` hoặc `npm run dev` (chạy chung)
   - `npm run android` (chạy trên Android)
   - `npm run ios` (chạy trên iOS)
   - `npm run web` (chạy trên web)

Sau khi chạy, sử dụng app Expo Go trên thiết bị để quét mã QR và xem ứng dụng.

## Cấu trúc dự án
```
src/
├── app/                 # Các màn hình và layout (sử dụng expo-router)
│   ├── _layout.tsx      # Layout chính
│   ├── index.tsx        # Trang chủ
│   ├── (auth)/          # Nhóm màn hình xác thực
│   ├── (tabs)/          # Nhóm màn hình tab
│   ├── (user)/          # Nhóm màn hình người dùng
│   ├── like/            # Màn hình liên quan đến like
│   └── product/         # Màn hình sản phẩm
├── assets/              # Tài nguyên (hình ảnh, icon)
├── components/          # Các component tái sử dụng
│   ├── button/          # Component button
│   ├── input/           # Component input
│   ├── loading/         # Component loading
│   └── todo/            # Component liên quan đến todo
├── types/               # Định nghĩa TypeScript
└── utils/               # Utilities (API, constants, axios customize)
```

## Công nghệ sử dụng
- **React Native**: Framework chính
- **Expo**: Platform để phát triển và build app
- **TypeScript**: Ngôn ngữ lập trình
- **Expo Router**: Điều hướng
- **Axios**: HTTP client
- **React Navigation**: Điều hướng nâng cao

## Đóng góp
Nếu bạn muốn đóng góp cho dự án, vui lòng tạo issue hoặc pull request trên repository.

## Tác giả

## Giấy phép
Dự án này sử dụng giấy phép MIT. 
