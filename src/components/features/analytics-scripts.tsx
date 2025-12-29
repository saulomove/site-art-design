"use client";

import { useAdmin } from "@/providers/admin-provider";
import Script from "next/script";

export function AnalyticsScripts() {
    const { settings } = useAdmin();

    return (
        <>
            {/* GA4 */}
            {settings.ga4Id && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${settings.ga4Id}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${settings.ga4Id}');
            `}
                    </Script>
                </>
            )}

            {/* Meta Pixel is tricky with Next.js Script, implementing basic noscript fallback part is hard dynamically, but script part is ok */}
            {settings.pixelId && (
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${settings.pixelId}');
            fbq('track', 'PageView');
          `}
                </Script>
            )}

            {/* Google Ads */}
            {settings.googleAdsId && (
                <Script id="google-ads" strategy="afterInteractive">
                    {`
             // Mock Google Ads basic setup or conversion linker would go here
             // gtag('config', '${settings.googleAdsId}');
            `}
                </Script>
            )}
        </>
    );
}
