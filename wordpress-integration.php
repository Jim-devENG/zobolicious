<?php
/**
 * Zobolicious WordPress Integration
 * 
 * This file contains all the necessary functions and hooks to integrate
 * the Zobolicious design into WordPress without creating a full theme.
 * 
 * Usage:
 * 1. Include this file in your WordPress theme's functions.php
 * 2. Use the provided components in your templates
 * 3. Customize the content through WordPress admin or custom fields
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue Zobolicious styles and scripts
 */
function zobolicious_enqueue_assets() {
    // Enqueue main CSS
    wp_enqueue_style(
        'zobolicious-main',
        get_template_directory_uri() . '/assets/css/zobolicious-main.css',
        array(),
        '1.0.0'
    );
    
    // Enqueue main JavaScript
    wp_enqueue_script(
        'zobolicious-main',
        get_template_directory_uri() . '/assets/js/zobolicious-main.js',
        array('jquery'),
        '1.0.0',
        true
    );
    
    // Localize script for AJAX
    wp_localize_script('zobolicious-main', 'zobolicious_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('zobolicious_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'zobolicious_enqueue_assets');

/**
 * Add custom post types for Zobolicious content
 */
function zobolicious_custom_post_types() {
    // Products Post Type
    register_post_type('zobo_products', array(
        'labels' => array(
            'name' => 'Products',
            'singular_name' => 'Product',
            'add_new' => 'Add New Product',
            'add_new_item' => 'Add New Product',
            'edit_item' => 'Edit Product',
            'new_item' => 'New Product',
            'view_item' => 'View Product',
            'search_items' => 'Search Products',
            'not_found' => 'No products found',
            'not_found_in_trash' => 'No products found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-cart',
        'rewrite' => array('slug' => 'products')
    ));
    
    // Team Members Post Type
    register_post_type('zobo_team', array(
        'labels' => array(
            'name' => 'Team Members',
            'singular_name' => 'Team Member',
            'add_new' => 'Add New Team Member',
            'add_new_item' => 'Add New Team Member',
            'edit_item' => 'Edit Team Member',
            'new_item' => 'New Team Member',
            'view_item' => 'View Team Member',
            'search_items' => 'Search Team Members',
            'not_found' => 'No team members found',
            'not_found_in_trash' => 'No team members found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-groups',
        'rewrite' => array('slug' => 'team')
    ));
}
add_action('init', 'zobolicious_custom_post_types');

/**
 * Add custom fields for pages and posts
 */
function zobolicious_add_custom_fields() {
    if (function_exists('acf_add_local_field_group')) {
        acf_add_local_field_group(array(
            'key' => 'group_zobolicious_hero',
            'title' => 'Hero Section',
            'fields' => array(
                array(
                    'key' => 'field_hero_title',
                    'label' => 'Hero Title',
                    'name' => 'hero_title',
                    'type' => 'text',
                    'default_value' => 'we\'re zobolicious'
                ),
                array(
                    'key' => 'field_hero_subtitle',
                    'label' => 'Hero Subtitle',
                    'name' => 'hero_subtitle',
                    'type' => 'textarea',
                    'default_value' => 'Since we started doing business back in 2020, we\'ve been committed to doing it in the right way.'
                ),
                array(
                    'key' => 'field_hero_button_text',
                    'label' => 'Button Text',
                    'name' => 'hero_button_text',
                    'type' => 'text',
                    'default_value' => 'the full story'
                ),
                array(
                    'key' => 'field_hero_button_link',
                    'label' => 'Button Link',
                    'name' => 'hero_button_link',
                    'type' => 'url'
                )
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'page_template',
                        'operator' => '==',
                        'value' => 'page-home.php'
                    )
                )
            )
        ));
        
        // Features Grid Fields
        acf_add_local_field_group(array(
            'key' => 'group_zobolicious_features',
            'title' => 'Features Grid',
            'fields' => array(
                array(
                    'key' => 'field_feature_1_title',
                    'label' => 'Feature 1 Title',
                    'name' => 'feature_1_title',
                    'type' => 'text',
                    'default_value' => 'our little bottles'
                ),
                array(
                    'key' => 'field_feature_1_text',
                    'label' => 'Feature 1 Text',
                    'name' => 'feature_1_text',
                    'type' => 'textarea'
                ),
                array(
                    'key' => 'field_feature_1_link',
                    'label' => 'Feature 1 Link',
                    'name' => 'feature_1_link',
                    'type' => 'url'
                ),
                array(
                    'key' => 'field_feature_1_button',
                    'label' => 'Feature 1 Button',
                    'name' => 'feature_1_button',
                    'type' => 'text',
                    'default_value' => 'read more'
                ),
                // Repeat for features 2-4...
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'page_template',
                        'operator' => '==',
                        'value' => 'page-home.php'
                    )
                )
            )
        ));
    }
}
add_action('acf/init', 'zobolicious_add_custom_fields');

/**
 * Handle contact form submission
 */
function zobolicious_handle_contact_form() {
    if (!wp_verify_nonce($_POST['zobo_contact_nonce'], 'zobo_contact_form')) {
        wp_die('Security check failed');
    }
    
    $name = sanitize_text_field($_POST['zobo_name']);
    $email = sanitize_email($_POST['zobo_email']);
    $subject = sanitize_text_field($_POST['zobo_subject']);
    $message = sanitize_textarea_field($_POST['zobo_message']);
    $newsletter = isset($_POST['zobo_newsletter']) ? 1 : 0;
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        wp_redirect(add_query_arg('contact_status', 'error', wp_get_referer()));
        exit;
    }
    
    // Send email
    $to = get_option('admin_email');
    $subject_line = 'Zobolicious Contact Form: ' . $subject;
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Subject: $subject\n";
    $body .= "Message: $message\n";
    $body .= "Newsletter: " . ($newsletter ? 'Yes' : 'No') . "\n";
    
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    
    $sent = wp_mail($to, $subject_line, $body, $headers);
    
    if ($sent) {
        // Save to database if needed
        $contact_data = array(
            'name' => $name,
            'email' => $email,
            'subject' => $subject,
            'message' => $message,
            'newsletter' => $newsletter,
            'date' => current_time('mysql')
        );
        
        // You could save this to a custom table or post type
        // add_option('zobo_contact_' . time(), $contact_data);
        
        wp_redirect(add_query_arg('contact_status', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('contact_status', 'error', wp_get_referer()));
    }
    
    exit;
}
add_action('admin_post_zobo_contact_form_submit', 'zobolicious_handle_contact_form');
add_action('admin_post_nopriv_zobo_contact_form_submit', 'zobolicious_handle_contact_form');

/**
 * Add custom menu locations
 */
function zobolicious_register_menus() {
    register_nav_menus(array(
        'zobo-primary' => 'Primary Navigation',
        'zobo-footer' => 'Footer Navigation'
    ));
}
add_action('init', 'zobolicious_register_menus');

/**
 * Custom shortcodes for Zobolicious components
 */
function zobolicious_hero_shortcode($atts) {
    $atts = shortcode_atts(array(
        'title' => get_field('hero_title') ?: 'we\'re zobolicious',
        'subtitle' => get_field('hero_subtitle') ?: 'Since we started doing business back in 2020...',
        'button_text' => get_field('hero_button_text') ?: 'the full story',
        'button_link' => get_field('hero_button_link') ?: home_url('/about')
    ), $atts);
    
    ob_start();
    ?>
    <section class="zobo-hero">
        <div class="zobo-hero-content">
            <h1 class="zobo-hero-title fade-in"><?php echo esc_html($atts['title']); ?></h1>
            <p class="zobo-hero-subtitle fade-in"><?php echo esc_html($atts['subtitle']); ?></p>
            <a href="<?php echo esc_url($atts['button_link']); ?>" class="zobo-button fade-in">
                <?php echo esc_html($atts['button_text']); ?>
            </a>
        </div>
    </section>
    <?php
    return ob_get_clean();
}
add_shortcode('zobo_hero', 'zobolicious_hero_shortcode');

function zobolicious_features_shortcode($atts) {
    ob_start();
    include get_template_directory() . '/components/features-grid.php';
    return ob_get_clean();
}
add_shortcode('zobo_features', 'zobolicious_features_shortcode');

function zobolicious_contact_form_shortcode($atts) {
    ob_start();
    include get_template_directory() . '/components/contact-form.php';
    return ob_get_clean();
}
add_shortcode('zobo_contact_form', 'zobolicious_contact_form_shortcode');

/**
 * Add theme support for various features
 */
function zobolicious_theme_support() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'zobolicious_theme_support');

/**
 * Customize WordPress admin for Zobolicious
 */
function zobolicious_admin_customization() {
    // Add custom admin styles
    wp_enqueue_style(
        'zobolicious-admin',
        get_template_directory_uri() . '/assets/css/zobolicious-admin.css',
        array(),
        '1.0.0'
    );
}
add_action('admin_enqueue_scripts', 'zobolicious_admin_customization');

/**
 * Add custom widgets
 */
function zobolicious_widgets_init() {
    register_sidebar(array(
        'name' => 'Zobolicious Sidebar',
        'id' => 'zobo-sidebar',
        'description' => 'Add widgets here to appear in the sidebar.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>'
    ));
}
add_action('widgets_init', 'zobolicious_widgets_init');

/**
 * Helper function to include components
 */
function zobolicious_get_component($component_name) {
    $component_path = get_template_directory() . '/components/' . $component_name . '.php';
    if (file_exists($component_path)) {
        include $component_path;
    } else {
        echo "<!-- Component not found: $component_name -->";
    }
}

/**
 * Helper function to get Zobolicious option
 */
function zobolicious_get_option($option_name, $default = '') {
    return get_option('zobolicious_' . $option_name, $default);
}

/**
 * Helper function to set Zobolicious option
 */
function zobolicious_set_option($option_name, $value) {
    return update_option('zobolicious_' . $option_name, $value);
} 