    </main>
    <!-- End Main Content Wrapper -->

    <!-- Footer -->
    <footer class="zobo-footer">
        <div class="zobo-footer-content">
            <div class="zobo-footer-grid">
                <!-- About Section -->
                <div class="zobo-footer-section">
                    <h3>about zobolicious</h3>
                    <ul class="zobo-footer-links">
                        <li><a href="<?php echo home_url('/about'); ?>">our story</a></li>
                        <li><a href="<?php echo home_url('/b-corp'); ?>">b-corp</a></li>
                        <li><a href="<?php echo home_url('/promise'); ?>">our promise</a></li>
                        <li><a href="<?php echo home_url('/nutrition'); ?>">nutrition</a></li>
                    </ul>
                </div>

                <!-- Products Section -->
                <div class="zobo-footer-section">
                    <h3>our products</h3>
                    <ul class="zobo-footer-links">
                        <li><a href="<?php echo home_url('/products#smoothies'); ?>">smoothies</a></li>
                        <li><a href="<?php echo home_url('/products#juices'); ?>">juices</a></li>
                        <li><a href="<?php echo home_url('/products#kids'); ?>">kids</a></li>
                        <li><a href="<?php echo home_url('/products#shots'); ?>">shots</a></li>
                    </ul>
                </div>

                <!-- Impact Section -->
                <div class="zobo-footer-section">
                    <h3>our impact</h3>
                    <ul class="zobo-footer-links">
                        <li><a href="<?php echo home_url('/people'); ?>">people</a></li>
                        <li><a href="<?php echo home_url('/planet'); ?>">planet</a></li>
                        <li><a href="<?php echo home_url('/big-knit'); ?>">big knit</a></li>
                    </ul>
                </div>

                <!-- Contact Section -->
                <div class="zobo-footer-section">
                    <h3>get in touch</h3>
                    <ul class="zobo-footer-links">
                        <li><a href="<?php echo home_url('/contact'); ?>">contact us</a></li>
                        <li><a href="<?php echo home_url('/careers'); ?>">careers</a></li>
                        <li><a href="<?php echo home_url('/faqs'); ?>">faqs</a></li>
                        <li><a href="<?php echo home_url('/legal'); ?>">legal</a></li>
                    </ul>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="zobo-footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> Zobolicious. All rights reserved. | 
                   <a href="<?php echo home_url('/legal/privacy'); ?>">Privacy Policy</a> | 
                   <a href="<?php echo home_url('/legal/terms'); ?>">Terms of Service</a> | 
                   <a href="<?php echo home_url('/legal/cookies'); ?>">Cookie Policy</a>
                </p>
                
                <!-- Social Media Links -->
                <div class="zobo-social-links">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Zobolicious Scripts -->
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/zobolicious-main.js"></script>
    
    <!-- WordPress Footer -->
    <?php wp_footer(); ?>
</body>
</html> 