<!-- Zobolicious Contact Form Component -->
<div class="zobo-contact-form">
    <form class="zobo-form" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
        <?php wp_nonce_field('zobo_contact_form', 'zobo_contact_nonce'); ?>
        <input type="hidden" name="action" value="zobo_contact_form_submit">
        
        <div class="zobo-form-group">
            <label for="zobo_name" class="zobo-form-label">Name *</label>
            <input type="text" id="zobo_name" name="zobo_name" class="zobo-form-input" required>
        </div>
        
        <div class="zobo-form-group">
            <label for="zobo_email" class="zobo-form-label">Email *</label>
            <input type="email" id="zobo_email" name="zobo_email" class="zobo-form-input" required>
        </div>
        
        <div class="zobo-form-group">
            <label for="zobo_subject" class="zobo-form-label">Subject</label>
            <select id="zobo_subject" name="zobo_subject" class="zobo-form-select">
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="product">Product Question</option>
                <option value="careers">Careers</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
            </select>
        </div>
        
        <div class="zobo-form-group">
            <label for="zobo_message" class="zobo-form-label">Message *</label>
            <textarea id="zobo_message" name="zobo_message" class="zobo-form-textarea" rows="5" required></textarea>
        </div>
        
        <div class="zobo-form-group">
            <label class="zobo-form-checkbox">
                <input type="checkbox" name="zobo_newsletter" value="1">
                <span class="zobo-checkbox-text">I'd like to receive updates about Zobolicious</span>
            </label>
        </div>
        
        <div class="zobo-form-group">
            <button type="submit" class="zobo-button">Send Message</button>
        </div>
        
        <!-- Error/Success Messages -->
        <div class="zobo-form-messages">
            <?php if (isset($_GET['contact_status'])): ?>
                <?php if ($_GET['contact_status'] === 'success'): ?>
                    <div class="zobo-form-success">
                        <p>Thank you for your message! We'll get back to you soon.</p>
                    </div>
                <?php elseif ($_GET['contact_status'] === 'error'): ?>
                    <div class="zobo-form-error">
                        <p>Sorry, there was an error sending your message. Please try again.</p>
                    </div>
                <?php endif; ?>
            <?php endif; ?>
        </div>
    </form>
</div>

<style>
/* Contact Form Styles */
.zobo-contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.zobo-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.zobo-form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.zobo-form-label {
    font-weight: 500;
    color: #374151;
    font-size: 0.875rem;
}

.zobo-form-input,
.zobo-form-select,
.zobo-form-textarea {
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    transition: border-color 0.2s;
}

.zobo-form-input:focus,
.zobo-form-select:focus,
.zobo-form-textarea:focus {
    outline: none;
    border-color: var(--zobo-green-600);
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

.zobo-form-checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.zobo-checkbox-text {
    font-size: 0.875rem;
    color: #6b7280;
}

.zobo-form-messages {
    margin-top: 1rem;
}

.zobo-form-success {
    background-color: #f0fdf4;
    border: 1px solid #bbf7d0;
    color: #166534;
    padding: 1rem;
    border-radius: 0.375rem;
}

.zobo-form-error {
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    color: #dc2626;
    padding: 1rem;
    border-radius: 0.375rem;
}
</style> 