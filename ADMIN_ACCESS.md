# 🔐 IAMD Admin Panel - Hidden Access Guide

## Overview
The IAMD website features a hidden admin panel for content management. This document outlines the secret access methods and security features.

---

## 🚪 Access Methods

### Method 1: Direct URL
Navigate directly to: `https://yourdomain.com/admin`

### Method 2: Keyboard Shortcut (Recommended)
Press `Ctrl + Shift + A` anywhere on the website to instantly access the admin login page.

### Method 3: Logo Click Sequence
Click the IAMD logo in the header **5 times within 2 seconds** to trigger admin access.

### Method 4: Footer Hidden Link
Look for a tiny dot (•) in the footer copyright section - it's a hidden link to the admin panel.

---

## 🔑 Default Credentials

**Username:** `iamd_admin`  
**Password:** `IAMD@2024`

> ⚠️ **IMPORTANT:** Change these credentials in production!  
> Edit: `iamd-website/app/admin/page.js` (lines 40-41)

---

## 🛡️ Security Features

### 1. Rate Limiting
- Maximum **5 failed login attempts** allowed
- After 5 failures, account locks for **5 minutes**
- Countdown timer shows remaining lockout time

### 2. Session Management
- Authentication stored in `sessionStorage`
- Auto-logout on browser close
- Login timestamp tracked

### 3. Attempt Tracking
- Failed attempts stored in `localStorage`
- Visual indicator shows remaining attempts
- Automatic reset after successful login

### 4. UI Security Indicators
- "Secure Connection" badge
- Encrypted/Rate Limited/Monitored status
- Session monitoring notice

---

## 📱 Admin Panel Features

Once logged in, you can manage:

1. **Dashboard** - Overview and quick stats
2. **Content Management** - Edit website content
3. **Bookings** - View and manage booking requests
4. **Gallery** - Upload and organize images
5. **Team Management** - Add/edit team members
6. **Blog Posts** - Create and publish articles

---

## 🔧 Customization

### Change Login Credentials
Edit `iamd-website/app/admin/page.js`:

```javascript
// Line 40-41
const ADMIN_USERNAME = 'your_username';
const ADMIN_PASSWORD = 'your_secure_password';
```

### Adjust Lockout Settings
Edit `iamd-website/app/admin/page.js`:

```javascript
// Line 56 - Change max attempts (default: 5)
if (newAttempts >= 5) {

// Line 57 - Change lockout duration (default: 5 minutes)
const lockoutTime = Date.now() + (5 * 60 * 1000);
```

### Disable Hidden Access Methods
Edit `iamd-website/components/layout/Header.js`:

```javascript
// Remove keyboard shortcut (lines 18-26)
// Remove logo click handler (lines 28-47)
```

---

## 🚨 Security Best Practices

1. **Change default credentials immediately**
2. **Use strong passwords** (12+ characters, mixed case, numbers, symbols)
3. **Enable HTTPS** in production
4. **Implement proper backend authentication** (this is client-side only)
5. **Add IP whitelisting** for admin routes
6. **Set up logging** for failed login attempts
7. **Regular security audits**

---

## 🔄 Session Timeout

Current implementation:
- Session persists until browser close
- No automatic timeout

To add timeout, edit `iamd-website/app/admin/dashboard/page.js`:

```javascript
useEffect(() => {
  const loginTime = sessionStorage.getItem('iamd_login_time');
  const timeout = 30 * 60 * 1000; // 30 minutes
  
  if (Date.now() - parseInt(loginTime) > timeout) {
    sessionStorage.removeItem('iamd_admin_auth');
    router.push('/admin');
  }
}, []);
```

---

## 📞 Support

For admin access issues:
- Check browser console for errors
- Clear localStorage/sessionStorage
- Wait for lockout timer to expire
- Contact system administrator

---

## 🎨 Admin UI Theme

The admin panel features:
- Dark gradient background (slate/blue/indigo)
- Animated background patterns
- Glassmorphism effects
- Smooth transitions
- Responsive design

---

**Last Updated:** November 22, 2025  
**Version:** 1.0.0
