"use client";

interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

class Analytics {
  private isInitialized = false;

  init() {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    // Initialize analytics here (Google Analytics, Mixpanel, etc.)
    this.isInitialized = true;
    
    // Add to global window object for error boundary access
    (window as any).analytics = this;
  }

  track(eventName: string, properties?: Record<string, any>) {
    if (typeof window === 'undefined') return;

    try {
      // Console log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Track:', eventName, properties);
      }

      // Track AI chat interactions
      if (eventName === 'ai_chat_interaction') {
        this.trackAIChatInteraction(properties?.action || 'unknown');
      }

      // Track navigation
      if (eventName === 'navigation_click') {
        this.trackNavigation(properties?.destination || 'unknown');
      }

      // Track form submissions
      if (eventName === 'form_submission') {
        this.trackFormSubmission(properties?.form_type || 'unknown');
      }

      // Track Core Web Vitals
      if (eventName === 'core_web_vital') {
        this.trackCoreWebVital(properties);
      }

      // Send to actual analytics service here
      // Example: gtag('event', eventName, properties);
      
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  trackPageView(path: string) {
    this.track('page_view', {
      page_path: path,
      page_title: document.title,
      timestamp: Date.now()
    });
  }

  trackAIChatInteraction(action: string) {
    this.track('ai_chat_interaction', {
      action,
      timestamp: Date.now(),
      session_id: this.getSessionId()
    });
  }

  trackNavigation(destination: string) {
    this.track('navigation_click', {
      destination,
      source: window.location.pathname,
      timestamp: Date.now()
    });
  }

  trackFormSubmission(formType: string) {
    this.track('form_submission', {
      form_type: formType,
      page: window.location.pathname,
      timestamp: Date.now()
    });
  }

  trackCoreWebVital(metric: any) {
    this.track('core_web_vital', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      timestamp: Date.now()
    });
  }

  trackError(error: Error, errorInfo?: any) {
    this.track('error', {
      message: error.message,
      stack: error.stack,
      error_info: errorInfo,
      page: window.location.pathname,
      timestamp: Date.now()
    });
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('shah_media_session_id');
    if (!sessionId) {
      sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      sessionStorage.setItem('shah_media_session_id', sessionId);
    }
    return sessionId;
  }

  identify(userId: string, traits?: Record<string, any>) {
    if (typeof window === 'undefined') return;

    this.track('user_identified', {
      user_id: userId,
      traits,
      timestamp: Date.now()
    });
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Auto-initialize
if (typeof window !== 'undefined') {
  analytics.init();
}

// Web Vitals tracking
export function trackWebVitals() {
  if (typeof window === 'undefined') return;

  // Use a more robust approach that works with different web-vitals versions
  try {
    // Use dynamic import with type assertion for compatibility
    import('web-vitals')
      .then((webVitals: any) => {
        // Try newer API (v3+)
        if (webVitals.onCLS) {
          webVitals.onCLS?.(analytics.trackCoreWebVital.bind(analytics));
          webVitals.onFID?.(analytics.trackCoreWebVital.bind(analytics));
          webVitals.onFCP?.(analytics.trackCoreWebVital.bind(analytics));
          webVitals.onLCP?.(analytics.trackCoreWebVital.bind(analytics));
          webVitals.onTTFB?.(analytics.trackCoreWebVital.bind(analytics));
        }
        // Try older API (v2)
        else if (webVitals.getCLS) {
          webVitals.getCLS?.(analytics.trackCoreWebVital.bind(analytics));
          webVitals.getFID?.(analytics.trackCoreWebVital.bind(analytics));
          webVitals.getFCP?.(analytics.trackCoreWebVital.bind(analytics));
          webVitals.getLCP?.(analytics.trackCoreWebVital.bind(analytics));
          webVitals.getTTFB?.(analytics.trackCoreWebVital.bind(analytics));
        } else {
          console.info('Web Vitals: No compatible API found');
        }
      })
      .catch(() => {
        // Silently fail if web-vitals is not available
        console.info('Web Vitals: Package not available');
      });
  } catch (error) {
    console.info('Web Vitals: Tracking skipped');
  }
}

// Hook for React components
export function useAnalytics() {
  return {
    track: analytics.track.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackAIChatInteraction: analytics.trackAIChatInteraction.bind(analytics),
    trackNavigation: analytics.trackNavigation.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    identify: analytics.identify.bind(analytics)
  };
}
