<!-- Zobolicious Header Component - WordPress Integration Ready -->
<!DOCTYPE html>
<html lang="<?php echo get_bloginfo('language'); ?>">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    
    <!-- WordPress Head -->
    <?php wp_head(); ?>
    
    <!-- Zobolicious Styles -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/zobolicious-main.css">
    
    <!-- Custom Meta Tags -->
    <meta name="description" content="<?php echo get_bloginfo('description'); ?>">
    <meta name="keywords" content="zobolicious, smoothies, juices, healthy drinks, sustainable">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); ?>">
    <meta property="og:description" content="<?php echo get_bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo get_permalink(); ?>">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.ico">
</head>

<body <?php body_class(); ?>>
    <!-- Navigation -->
    <nav class="zobo-nav">
        <div class="zobo-nav-container">
            <div class="zobo-nav-content">
                <!-- Logo -->
                <div class="zobo-logo-container">
                    <a href="<?php echo home_url(); ?>" class="zobo-logo">
                        zobolicious
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="zobo-nav-desktop">
                    <div class="zobo-nav-menu">
                        <!-- About Us Dropdown -->
                        <div class="zobo-nav-dropdown">
                            <button class="zobo-nav-button">
                                about us
                            </button>
                            <div class="zobo-dropdown-menu">
                                <a href="<?php echo home_url('/about'); ?>" class="zobo-dropdown-item">our story</a>
                                <a href="<?php echo home_url('/b-corp'); ?>" class="zobo-dropdown-item">b-corp</a>
                                <a href="<?php echo home_url('/promise'); ?>" class="zobo-dropdown-item">our promise</a>
                            </div>
                        </div>

                        <!-- Products Dropdown -->
                        <div class="zobo-nav-dropdown">
                            <button class="zobo-nav-button">
                                products
                            </button>
                            <div class="zobo-dropdown-menu">
                                <a href="<?php echo home_url('/products#smoothies'); ?>" class="zobo-dropdown-item">smoothies</a>
                                <a href="<?php echo home_url('/products#juices'); ?>" class="zobo-dropdown-item">juices</a>
                                <a href="<?php echo home_url('/products#kids'); ?>" class="zobo-dropdown-item">kids</a>
                                <a href="<?php echo home_url('/products#shots'); ?>" class="zobo-dropdown-item">shots</a>
                            </div>
                        </div>

                        <!-- Our Impact Dropdown -->
                        <div class="zobo-nav-dropdown">
                            <button class="zobo-nav-button">
                                our impact
                            </button>
                            <div class="zobo-dropdown-menu">
                                <a href="<?php echo home_url('/people'); ?>" class="zobo-dropdown-item">people</a>
                                <a href="<?php echo home_url('/planet'); ?>" class="zobo-dropdown-item">planet</a>
                                <a href="<?php echo home_url('/nutrition'); ?>" class="zobo-dropdown-item">nutrition</a>
                            </div>
                        </div>

                        <!-- Direct Links -->
                        <a href="<?php echo home_url('/careers'); ?>" class="zobo-nav-link">careers</a>
                        <a href="<?php echo home_url('/contact'); ?>" class="zobo-nav-link">contact</a>
                        <a href="<?php echo home_url('/big-knit'); ?>" class="zobo-nav-link">big knit</a>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <div class="zobo-mobile-menu-container">
                    <button id="mobile-menu-button" class="zobo-mobile-menu-button">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="zobo-mobile-menu">
            <div class="zobo-mobile-menu-content">
                <a href="<?php echo home_url('/about'); ?>" class="zobo-mobile-link">about us</a>
                <a href="<?php echo home_url('/products'); ?>" class="zobo-mobile-link">products</a>
                <a href="<?php echo home_url('/people'); ?>" class="zobo-mobile-link">people</a>
                <a href="<?php echo home_url('/planet'); ?>" class="zobo-mobile-link">planet</a>
                <a href="<?php echo home_url('/careers'); ?>" class="zobo-mobile-link">careers</a>
                <a href="<?php echo home_url('/contact'); ?>" class="zobo-mobile-link">contact</a>
                <a href="<?php echo home_url('/big-knit'); ?>" class="zobo-mobile-link">big knit</a>
            </div>
        </div>
    </nav>

    <!-- Main Content Wrapper -->
    <main class="zobo-main-content"> 