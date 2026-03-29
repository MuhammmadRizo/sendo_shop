'use client';
import { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface Toast { id: string; message: string; type: 'success' | 'error' | 'info'; }
interface ToastContextType { showToast: (message: string, type?: Toast['type']) => void; }

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export function useToast() { return useContext(ToastContext); }

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: Toast['type'] = 'success') => {
    const id = Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[300] flex flex-col gap-2">
        {toasts.map(toast => (
          <div key={toast.id} className="toast-enter flex items-center gap-3 bg-[#0D1226] text-white px-4 py-3 rounded-xl shadow-2xl max-w-xs">
            <CheckCircle size={16} className="text-[#00C2FF] flex-shrink-0" />
            <span className="text-sm font-medium flex-1">{toast.message}</span>
            <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} className="text-[#8E97B0] hover:text-white transition-colors">
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
