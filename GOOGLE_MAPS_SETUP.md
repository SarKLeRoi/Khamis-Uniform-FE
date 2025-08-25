# Google Maps Integration Setup

## Overview

This project now includes enhanced Google Maps support with better loading states, error handling, and accessibility features.

## Features Added

- ✅ **Enhanced Video Background**: Better Safari support with multiple formats and fallbacks
- ✅ **Interactive Google Maps**: Loading states, error handling, and responsive design
- ✅ **Accessibility**: ARIA labels, loading indicators, and keyboard navigation
- ✅ **RTL Support**: Proper right-to-left language support for Arabic and Hebrew
- ✅ **Mobile Responsive**: Optimized for all device sizes

## Video Background Improvements

- **Multiple Formats**: MP4 (Safari), WebM (Chrome/Firefox), OGV (older browsers)
- **Safari Support**: iOS-specific optimizations and fallbacks
- **Fallback Images**: Graceful degradation when video fails to load
- **Performance**: Preload metadata and optimized rendering

## Google Maps Enhancements

- **Loading States**: Visual feedback while map loads
- **Error Handling**: Graceful fallbacks and retry options
- **Interactive Elements**: Direct links to Google Maps app/website
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Screen reader support and keyboard navigation

## Optional: Google Maps API Key

For advanced features, you can add a Google Maps API key:

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new project or select existing one
3. Enable Maps JavaScript API and Maps Embed API
4. Create credentials (API Key)
5. Create `.env.local` file in your project root:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

## Browser Support

- **Chrome**: Full support with WebM video
- **Firefox**: Full support with WebM video
- **Safari**: Full support with MP4 video and iOS optimizations
- **Edge**: Full support with MP4 video
- **Mobile**: Responsive design with touch-friendly controls

## Performance Optimizations

- **Lazy Loading**: Maps load only when needed
- **Video Preload**: Metadata preloading for faster playback
- **Fallback Images**: Static images for slower connections
- **Responsive Images**: Optimized for different screen densities

## Accessibility Features

- **ARIA Labels**: Screen reader support for all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Loading Indicators**: Clear feedback for all loading states
- **Error Messages**: Descriptive error handling with retry options
- **RTL Support**: Proper right-to-left language support

## CSS Classes Added

- `.video-background` - Main video container
- `.background-video` - Video element styling
- `.map-container` - Maps container with enhanced styling
- `.map-loading` - Loading state display
- `.map-error` - Error state display
- `.map-actions` - Interactive map controls
- `.loading-spinner` - Animated loading indicator

## Usage

The enhanced components are automatically used throughout the application. No additional configuration is needed for basic functionality.

For advanced customization, modify the CSS variables in `styles/customization.css`.
