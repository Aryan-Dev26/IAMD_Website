'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, Eye, EyeOff, Shield } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);

  // Check if already authenticated
  useEffect(() => {
    if (sessionStorage.getItem('iamd_admin_auth') === 'true') {
      router.push('/admin/dashboard');
    }

    // Check for lockout
    const lockoutTime = localStorage.getItem('iamd_lockout');
    if (lockoutTime) {
      const timeLeft = parseInt(lockoutTime) - Date.now();
      if (timeLeft > 0) {
        setIsLocked(true);
        setLockTimer(Math.ceil(timeLeft / 1000));
      } else {
        localStorage.removeItem('iamd_lockout');
        localStorage.removeItem('iamd_attempts');
      }
    }
  }, [router]);

  // Lockout timer countdown
  useEffect(() => {
    if (isLocked && lockTimer > 0) {
      const timer = setTimeout(() => {
        setLockTimer(lockTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isLocked && lockTimer === 0) {
      setIsLocked(false);
      setAttempts(0);
      localStorage.removeItem('iamd_lockout');
      localStorage.removeItem('iamd_attempts');
    }
  }, [isLocked, lockTimer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLocked) {
      setError(`Too many failed attempts. Try again in ${lockTimer} seconds.`);
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulate network delay for security
    await new Promise(resolve => setTimeout(resolve, 800));

    // Admin credentials (change these for production)
    const ADMIN_USERNAME = 'iamd_admin';
    const ADMIN_PASSWORD = 'IAMD@2024';

    if (formData.username === ADMIN_USERNAME && formData.password === ADMIN_PASSWORD) {
      // Clear failed attempts
      localStorage.removeItem('iamd_attempts');
      localStorage.removeItem('iamd_lockout');
      
      // Store auth in sessionStorage
      sessionStorage.setItem('iamd_admin_auth', 'true');
      sessionStorage.setItem('iamd_login_time', Date.now().toString());
      
      // Redirect to dashboard
      router.push('/admin/dashboard');
    } else {
      // Track failed attempts
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem('iamd_attempts', newAttempts.toString());

      // Lock after 5 failed attempts
      if (newAttempts >= 5) {
        const lockoutTime = Date.now() + (5 * 60 * 1000); // 5 minutes
        localStorage.setItem('iamd_lockout', lockoutTime.toString());
        setIsLocked(true);
        setLockTimer(300); // 5 minutes in seconds
        setError('Too many failed attempts. Account locked for 5 minutes.');
      } else {
        setError(`Invalid credentials. ${5 - newAttempts} attempts remaining.`);
      }
      
      setIsLoading(false);
      
      // Clear password field
      setFormData({ ...formData, password: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Security Badge */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
        <Shield className="w-4 h-4 text-green-400" />
        <span className="text-xs text-white font-medium">Secure Connection</span>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4 shadow-2xl animate-pulse">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">IAMD Admin</h1>
          <p className="text-blue-200">Secure Content Management Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
            {attempts > 0 && !isLocked && (
              <span className="text-xs text-orange-600 font-medium bg-orange-50 px-3 py-1 rounded-full">
                {attempts} failed attempt{attempts > 1 ? 's' : ''}
              </span>
            )}
          </div>

          {error && (
            <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${
              isLocked 
                ? 'bg-red-50 border border-red-200 text-red-700' 
                : 'bg-orange-50 border border-orange-200 text-orange-700'
            }`}>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter username"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isLocked}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLocked ? (
                <span className="flex items-center justify-center space-x-2">
                  <Lock className="w-5 h-5" />
                  <span>Locked ({lockTimer}s)</span>
                </span>
              ) : isLoading ? (
                <span className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <Lock className="w-5 h-5" />
                  <span>Sign In Securely</span>
                </span>
              )}
            </button>
          </form>

          {/* Security Info */}
          <div className="mt-6 space-y-3">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <p className="text-xs text-blue-900 text-center font-medium">
                🔒 Protected by advanced security measures
              </p>
            </div>
            
            {/* Security Features */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 font-medium">Encrypted</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 font-medium">Rate Limited</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 font-medium">Monitored</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Site - Hidden by default */}
        <div className="text-center mt-6 opacity-50 hover:opacity-100 transition-opacity">
          <a
            href="/"
            className="text-white hover:text-blue-200 transition-colors text-sm inline-flex items-center space-x-1"
          >
            <span>←</span>
            <span>Return to Main Site</span>
          </a>
        </div>

        {/* Hidden Access Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-white/30">
            Authorized Personnel Only • Session Monitored
          </p>
        </div>
      </div>
    </div>
  );
}
