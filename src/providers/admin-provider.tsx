"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AdminSettings {
    whatsapp: string;
    instagramUrl: string;
    ga4Id: string;
    pixelId: string;
    googleAdsId: string;
    siteTitle: string;
    siteDescription: string;
}

interface AdminContextType {
    settings: AdminSettings;
    updateSettings: (newSettings: Partial<AdminSettings>) => void;
    isAuthenticated: boolean;
    login: (password: string) => boolean;
    logout: () => void;
}

const defaultSettings: AdminSettings = {
    whatsapp: "5549988446685",
    instagramUrl: "https://www.instagram.com/artdesigntrafego/",
    ga4Id: "",
    pixelId: "",
    googleAdsId: "",
    siteTitle: "ArtDesign | Marketing & Tecnologia",
    siteDescription: "Agência de Marketing Digital e Tecnologia em Caçador/SC.",
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
    const [settings, setSettings] = useState<AdminSettings>(defaultSettings);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load from localStorage on client mount
        const savedSettings = localStorage.getItem("artdesign_settings");
        const savedAuth = localStorage.getItem("artdesign_auth");

        if (savedSettings) {
            setSettings({ ...defaultSettings, ...JSON.parse(savedSettings) });
        }
        if (savedAuth === "true") {
            setIsAuthenticated(true);
        }
        setIsLoaded(true);
    }, []);

    const updateSettings = (newSettings: Partial<AdminSettings>) => {
        const updated = { ...settings, ...newSettings };
        setSettings(updated);
        localStorage.setItem("artdesign_settings", JSON.stringify(updated));
    };

    const login = (password: string) => {
        // Senha simples mockada
        if (password === "admin123") {
            setIsAuthenticated(true);
            localStorage.setItem("artdesign_auth", "true");
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("artdesign_auth");
    };

    // Removed the conditional return to ensure context is always provided
    // Settings will be default until useEffect runs, which is fine and prevents 'useAdmin must be used within AdminProvider' error

    return (
        <AdminContext.Provider value={{ settings, updateSettings, isAuthenticated, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error("useAdmin must be used within an AdminProvider");
    }
    return context;
}
