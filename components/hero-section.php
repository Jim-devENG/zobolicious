<!-- Zobolicious Hero Section Component -->
<section class="zobo-hero">
    <div class="zobo-hero-content">
        <h1 class="zobo-hero-title fade-in">
            <?php echo get_field('hero_title') ?: 'we\'re zobolicious'; ?>
        </h1>
        <p class="zobo-hero-subtitle fade-in">
            <?php echo get_field('hero_subtitle') ?: 'Since we started doing business back in 2020, we\'ve been committed to doing it in the right way - standing up for what matters and leaving things better than we find them.'; ?>
        </p>
        <?php if (get_field('hero_button_text') && get_field('hero_button_link')): ?>
            <a href="<?php echo get_field('hero_button_link'); ?>" class="zobo-button fade-in">
                <?php echo get_field('hero_button_text'); ?>
            </a>
        <?php else: ?>
            <a href="<?php echo home_url('/about'); ?>" class="zobo-button fade-in">
                the full story
            </a>
        <?php endif; ?>
    </div>
</section> 