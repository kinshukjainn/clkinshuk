import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css'
import App from './App.tsx'
import { createRoot } from "react-dom/client";

// Publishable access key : 

const clerkPublishablekey = import.meta.env.VITE_PUBLISHABLE_KEY as string;

if(!clerkPublishablekey) throw new Error("Missing clerk key");



createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey= {clerkPublishablekey} appearance={
      {
        baseTheme : undefined,
        variables : { 
          colorPrimary : "#10b981",
          colorText : "#ffffff",
          colorTextOnPrimaryBackground : "#ffffff",
          colorBackground : "#0f172a",
          colorInputBackground : "1e293b",
          colorInputText: "#ffffff",
          borderRadius : "0.75rem"
        },
        elements : { 
          formButtonPrimary : "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium rounded-full transition-all duration-300",
          card: "bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl",
          headerTitle: "text-white font-bold",
          headerSubtitle: "text-gray-300",
          socialButtonsBlockButton: 
            "border border-white/20 hover:border-emerald-500/50 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-full transition-all duration-300",
          formFieldInput: 
            "bg-slate-800/50 border-white/20 text-white placeholder:text-gray-400 rounded-full focus:border-emerald-500 focus:ring-emerald-500/20",
          footerActionLink: "text-emerald-400 hover:text-emerald-300",
        }
      }
    }
    >
      <BrowserRouter>
    <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
)
