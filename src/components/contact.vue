<template>
 <!-- Info Section -->
     <section class="map-section">
        <div class="map-outer">
            <!-- <div class="map-canvas"
                data-zoom="12"
                data-lat="-37.817085"
                data-lng="144.955631"
                data-type="roadmap"
                data-hue="#ffc400"
                data-title="Envato"
                data-icon-path="images/icons/contact-map-marker.png"
                data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
            </div> -->
            <iframe class="map-canvas" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d141879.36187065678!2d3.546603226680022!3d6.484848721872889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d6.4638!2d3.550502!4m5!1s0x103b8c5555555555%3A0x750dbad8ff6d9b2d!2sbuzy%20dev%20technologies!3m2!1d6.4722659!2d3.6283624999999997!5e0!3m2!1sen!2sng!4v1638372787809!5m2!1sen!2sng" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </section>
    <!-- End Map Section -->


    <!-- Contact Section -->
    <section class="contact-section">
        <div class="auto-container">
            <div class="upper-box">
                <div class="row">
                    <div class="contact-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">
                            <span class="icon"><img src="images/icons/placeholder.svg" alt=""></span>
                            <h4>Address</h4>
                            <p>329 Queensberry Street, North<br> Melbourne VIC 3051, Australia.</p>
                        </div>
                    </div>
                    <div class="contact-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">
                            <span class="icon"><img src="images/icons/smartphone.svg" alt=""></span>
                            <h4>Call Us</h4>
                            <p><a href="#" class="phone">123 456 7890</a></p>
                        </div>
                    </div>
                    <div class="contact-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">
                            <span class="icon"><img src="images/icons/letter.svg" alt=""></span>
                            <h4>Email</h4>
                            <p><a href="#">contact.london@example.com</a></p>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Contact Form -->
            <div class="contact-form default-form">
                <h3>Leave A Message</h3>
                <!--Contact Form-->
                <form method="post" action="#" id="email-form">
                    <div class="row">
                        <div class="form-group col-lg-12 col-md-12 col-sm-12">
                            <div class="response"></div>
                        </div>

                        <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                            <label>Your Name</label>
                            <input type="text" name="username" class="username" placeholder="Your Name*" required>
                        </div>

                        <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                            <label>Your Email</label>
                            <input type="email" name="email" class="email" placeholder="Your Email*" required>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                            <label>Subject</label>
                            <input type="text" name="subject" class="subject" placeholder="Subject *" required>
                        </div>
                        
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                            <label>Your Message</label>
                            <textarea name="message" placeholder="Write your message..." required=""></textarea>
                        </div>
                        
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                            <button class="theme-btn btn-style-one" type="button" id="submit" name="submit-form">Send Massage</button>
                        </div>
                    </div>
                </form>
            </div>
            <!--End Contact Form -->
        </div>
    </section>
    <!-- Contact Section -->

    <!-- Call To Action -->
    <section class="call-to-action style-two">
        <div class="auto-container">
            <div class="outer-box">
                <div class="content-column">
                    <div class="sec-title">
                        <h2>Recruiting?</h2>
                        <div class="text">Advertise your jobs to millions of monthly users and search 15.8 million<br> CVs in our database.</div>
                        <a href="#" class="theme-btn btn-style-one bg-blue"><span class="btn-title">Start Recruiting Now</span></a>
                    </div>
                </div>

                <div class="image-column" style="background-image: url(images/resource/image-1.png);">
                    <figure class="image"><img src="images/resource/image-1.png" alt=""></figure>
                </div>
            </div>
        </div>
    </section>
    <!-- End Call To Action -->

    <!-- End Info Section -->
</template>

<script>
export default {
  name: 'loginapp'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
