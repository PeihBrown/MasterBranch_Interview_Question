## 🚀 Technologies

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Recharts](https://recharts.org/) - Charting Library
- [SVGR](https://react-svgr.com/) - SVG to React Component Converter

## 📁 Project Structure

```
src/
├── app/                    # Application layer
│   ├── routes/            # Application routes
│   ├── app.tsx            # Main application component
│   ├── provider.tsx       # Global providers
│   └── router.tsx         # Router configuration
├── assets/                # Static files (images, fonts)
├── components/            # Shared components
├── config/               # Global configurations
├── features/             # Feature-based modules
├── hooks/                # Shared hooks
├── lib/                  # Reusable libraries
├── stores/               # Global state stores
├── types/                # Shared types
└── utils/                # Utility functions
```

### Feature Module Structure

Each feature module under `src/features/` follows this structure:

```
feature-name/
├── assets/              # Feature-specific assets
├── components/          # Feature-specific components
├── hooks/               # Feature-specific hooks
├── types/               # Feature-specific types
├── stores/              # Feature-specific stores
└── data                 # data mock
```

----- Interview Question -----

## 1. Data Structure & API Design
### Event Data Structure
interface Event {
  id: string
  title: string
  type: 'appointment' | 'webinar'
  startTime: string // ISO string
  endTime: string // ISO string
  timezone: string
  clientInfo?: {
    name: string
    avatar?: string
  }
  description?: string
  recurringRule?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
    interval: number
    endDate?: string
    exceptions?: string[] // dates to skip
  }
}

### Tại Sao?
   - Cấu trúc sự kiện hỗ trợ cả cuộc hẹn và webinar
   - Các trường tùy chọn cho phép linh hoạt theo yêu cầu
   - Hỗ trợ múi giờ cho sử dụng quốc tế

## 2a. Recurring Events Implementation
### Approach 1
 - Lưu trữ sự kiện định kỳ dưới dạng template
 - Tạo các sự kiện dựa trên template và khoảng thời gian nhất định
 - Ưu điểm: Thao tác đọc nhanh, truy vấn đơn giản
 - Nhược điểm: Tốn nhiều dung lượng lưu trữ, hơi khó update

VD:
// Template Event
{
  id: "template_123",
  title: "Weekly Meeting",
  recurringRule: {
  frequency: "weekly",
  interval: 1,
  endDate: "2024-12-31"
}
}
// Generated Events
[
  { id: "event_1", templateId: "template_123", date: "2024-01-01" },
  { id: "event_2", templateId: "template_123", date: "2024-01-08" },
  ...
]

### Approach 2
 - Lưu sự kiện + rule
 - Tính toán các sự kiện trên thực tế
 - Ưu điểm: Tiết kiệm dung lượng lưu trữ, dễ update
 - Nhược điểm: query phức tạp hơn, tính toán nhiều hơn

VD:
{
  id: "event_123",
  title: "Weekly Meeting",
  startDate: "2024-01-01",
  rule: "FREQ=WEEKLY;INTERVAL=1;UNTIL=20241231"
}

## 5. Future Development Plans
1. **Feature Enhancements**:
   - Drag-and-drop event management
     + Kéo thả để di chuyển events giữa các ngày
     + Resize event để thay đổi thời gian
     + Hỗ trợ copy/paste events
   - Advanced recurring event patterns
     + Hỗ trợ các pattern phức tạp (vd: thứ 2 và thứ 4 hàng tuần)
     + Exceptions cho recurring events
     + Custom recurrence rules
   - Calendar sharing & collaboration
     + Chia sẻ calendar với team/nhóm
     + Phân quyền view/edit
     + Real-time collaboration
   - External calendar integrations
     + Google Calendar
     + Outlook Calendar
     + Apple Calendar
     + Các nền tảng booking khác

2. **Technical Improvements**:
   - Performance Optimization
     + Virtual scrolling cho large calendars
     + Lazy loading cho events
     + Caching strategy tối ưu
     + Code splitting
   - Testing & Quality
     + Unit tests cho business logic
     + Integration tests cho API calls
     + E2E tests cho user flows
     + Performance monitoring
   - Mobile Experience
     + PWA support
     + Offline functionality
     + Touch gestures
     + Mobile-specific optimizations
   - Real-time Features
     + WebSocket cho updates
     + Conflict resolution
     + Sync across devices
     + Notification system