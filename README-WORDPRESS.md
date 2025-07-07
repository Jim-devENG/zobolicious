# Zobolicious WordPress Integration Guide

This guide explains how to integrate the Zobolicious design into your WordPress website without creating a full theme.

## 📁 Project Structure

```
zobolicious/
├── assets/
│   ├── css/
│   │   └── zobolicious-main.css          # Main stylesheet
│   ├── js/
│   │   └── zobolicious-main.js           # Main JavaScript
│   └── images/
│       └── logo.png                      # Logo and images
├── components/
│   ├── header.php                        # Header component
│   ├── footer.php                        # Footer component
│   ├── hero-section.php                  # Hero section component
│   ├── features-grid.php                 # Features grid component
│   └── contact-form.php                  # Contact form component
├── wordpress-integration.php             # WordPress functions and hooks
└── README-WORDPRESS.md                   # This file
```

## 🚀 Quick Start

### 1. Copy Files to Your Theme

Copy the following files to your WordPress theme directory:

```bash
# Copy assets
cp -r assets/ /path/to/your/theme/

# Copy components
cp -r components/ /path/to/your/theme/

# Copy integration file
cp wordpress-integration.php /path/to/your/theme/
```

### 2. Include Integration File

Add this line to your theme's `functions.php`:

```php
// Include Zobolicious integration
require_once get_template_directory() . '/wordpress-integration.php';
```

### 3. Use Components in Templates

Include components in your WordPress templates:

```php
<?php
// Include header
include get_template_directory() . '/components/header.php';

// Your page content here
?>

<!-- Include footer -->
<?php include get_template_directory() . '/components/footer.php'; ?>
```

## 🎨 Using Components

### Header Component

The header includes:

- Responsive navigation
- Dropdown menus
- Mobile menu
- WordPress integration

```php
<?php include get_template_directory() . '/components/header.php'; ?>
```

### Hero Section

Customizable hero section with ACF fields:

```php
<?php include get_template_directory() . '/components/hero-section.php'; ?>
```

**ACF Fields:**

- `hero_title` - Main heading
- `hero_subtitle` - Subtitle text
- `hero_button_text` - Button text
- `hero_button_link` - Button URL

### Features Grid

Four-column features grid with customizable content:

```php
<?php include get_template_directory() . '/components/features-grid.php'; ?>
```

**ACF Fields:**

- `feature_1_title`, `feature_1_text`, `feature_1_link`, `feature_1_button`
- `feature_2_title`, `feature_2_text`, `feature_2_link`, `feature_2_button`
- `feature_3_title`, `feature_3_text`, `feature_3_link`, `feature_3_button`
- `feature_4_title`, `feature_4_text`, `feature_4_link`, `feature_4_button`

### Contact Form

WordPress-integrated contact form:

```php
<?php include get_template_directory() . '/components/contact-form.php'; ?>
```

### Footer Component

Complete footer with navigation and social links:

```php
<?php include get_template_directory() . '/components/footer.php'; ?>
```

## 📝 Shortcodes

Use these shortcodes in your WordPress content:

```php
[zobo_hero title="Custom Title" subtitle="Custom subtitle"]
[zobo_features]
[zobo_contact_form]
```

## 🎯 Custom Post Types

The integration creates these custom post types:

### Products (`zobo_products`)

- Title, content, featured image, excerpt
- URL: `/products/`

### Team Members (`zobo_team`)

- Title, content, featured image
- URL: `/team/`

## 🔧 Customization

### Colors

Modify CSS variables in `zobolicious-main.css`:

```css
:root {
  --zobo-green-50: #f0fdf4;
  --zobo-green-100: #dcfce7;
  --zobo-green-200: #bbf7d0;
  --zobo-green-300: #86efac;
  --zobo-green-400: #4ade80;
  --zobo-green-500: #22c55e;
  --zobo-green-600: #16a34a;
  --zobo-green-700: #15803d;
  --zobo-green-800: #166534;
  --zobo-green-900: #14532d;
}
```

### Navigation

Register custom menus in WordPress admin:

- Primary Navigation (`zobo-primary`)
- Footer Navigation (`zobo-footer`)

### Contact Form

The contact form automatically:

- Validates input
- Sends email to admin
- Shows success/error messages
- Includes spam protection

## 📱 Responsive Design

The design is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔌 WordPress Integration Features

### Automatic Features

- ✅ WordPress head/footer hooks
- ✅ SEO meta tags
- ✅ Open Graph tags
- ✅ Admin bar compatibility
- ✅ WordPress menu integration
- ✅ Contact form processing
- ✅ Custom post types
- ✅ ACF field integration
- ✅ Shortcode support

### JavaScript Features

- ✅ Mobile menu toggle
- ✅ Smooth scrolling
- ✅ FAQ accordion
- ✅ Form validation
- ✅ Scroll animations
- ✅ Video player controls

## 🛠️ Development

### Adding New Components

1. Create component file in `components/` directory
2. Use WordPress functions for URLs and data
3. Include in templates with `include get_template_directory() . '/components/component-name.php';`

### Custom Fields

Use Advanced Custom Fields (ACF) for content management:

```php
<?php echo get_field('field_name', 'default_value'); ?>
```

### Helper Functions

```php
// Get component
zobolicious_get_component('component-name');

// Get/set options
zobolicious_get_option('option_name', 'default');
zobolicious_set_option('option_name', 'value');
```

## 📋 Requirements

- WordPress 5.0+
- PHP 7.4+
- Advanced Custom Fields (ACF) plugin (recommended)
- Modern web browser

## 🎨 Design Features

- Clean, minimal design inspired by Innocent Drinks
- Green color scheme with CSS variables
- Responsive grid layouts
- Smooth animations and transitions
- Accessible navigation
- Mobile-first approach

## 🔒 Security

- Nonce verification for forms
- Input sanitization
- XSS protection
- CSRF protection
- Secure file includes

## 📞 Support

For integration help:

1. Check this README
2. Review the component files
3. Check WordPress error logs
4. Verify file permissions

## 📄 License

This integration is designed for the Zobolicious project and maintains the original design integrity while providing WordPress compatibility.
