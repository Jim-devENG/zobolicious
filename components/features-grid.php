<!-- Zobolicious Features Grid Component -->
<section class="zobo-section zobo-section-gray">
    <div class="zobo-container">
        <div class="zobo-grid zobo-grid-4">
            <!-- Our Little Bottles -->
            <div class="zobo-card card-hover fade-in">
                <div class="zobo-card-icon">
                    <i class="fas fa-recycle"></i>
                </div>
                <h3 class="zobo-card-title">
                    <?php echo get_field('feature_1_title') ?: 'our little bottles'; ?>
                </h3>
                <p class="zobo-card-text">
                    <?php echo get_field('feature_1_text') ?: 'All our bottles are recyclable, and we work hard to make sure they\'re easy to recycle too. We\'ll raise a smoothie to that.'; ?>
                </p>
                <a href="<?php echo get_field('feature_1_link') ?: home_url('/planet#recycling'); ?>" class="zobo-card-link">
                    <?php echo get_field('feature_1_button') ?: 'read more'; ?>
                </a>
            </div>

            <!-- Sustainable Factory -->
            <div class="zobo-card card-hover fade-in">
                <div class="zobo-card-icon">
                    <i class="fas fa-industry"></i>
                </div>
                <h3 class="zobo-card-title">
                    <?php echo get_field('feature_2_title') ?: 'sustainable factory'; ?>
                </h3>
                <p class="zobo-card-text">
                    <?php echo get_field('feature_2_text') ?: 'Our Zobolender factory is powered by renewable energy and designed to be as sustainable as possible. It\'s where the magic happens.'; ?>
                </p>
                <a href="<?php echo get_field('feature_2_link') ?: home_url('/planet'); ?>" class="zobo-card-link">
                    <?php echo get_field('feature_2_button') ?: 'read more'; ?>
                </a>
            </div>

            <!-- Giving Back -->
            <div class="zobo-card card-hover fade-in">
                <div class="zobo-card-icon">
                    <i class="fas fa-heart"></i>
                </div>
                <h3 class="zobo-card-title">
                    <?php echo get_field('feature_3_title') ?: 'giving back'; ?>
                </h3>
                <p class="zobo-card-text">
                    <?php echo get_field('feature_3_text') ?: 'We give 10% of our profits to good causes. Because we believe that business should be a force for good in the world.'; ?>
                </p>
                <a href="<?php echo get_field('feature_3_link') ?: home_url('/promise'); ?>" class="zobo-card-link">
                    <?php echo get_field('feature_3_button') ?: 'read more'; ?>
                </a>
            </div>

            <!-- B Corp -->
            <div class="zobo-card card-hover fade-in">
                <div class="zobo-card-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <h3 class="zobo-card-title">
                    <?php echo get_field('feature_4_title') ?: 'b-corp certified'; ?>
                </h3>
                <p class="zobo-card-text">
                    <?php echo get_field('feature_4_text') ?: 'We\'re proud to be a B Corp, which means we meet the highest standards of social and environmental performance.'; ?>
                </p>
                <a href="<?php echo get_field('feature_4_link') ?: home_url('/b-corp'); ?>" class="zobo-card-link">
                    <?php echo get_field('feature_4_button') ?: 'read more'; ?>
                </a>
            </div>
        </div>
    </div>
</section> 