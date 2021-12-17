<template>
   
     <footer class="main-footer" v-if="!['loginapp', 
     'register','candidate'
     ,'employedash',
     'profiledashboard',
        'CApplied',
        'CResume',
        'Cshort',
        ,'cvmanager'
     ].includes($route.name)" >
        <div class="auto-container">
            <!--Widgets Section-->
            <div class="widgets-section wow fadeInUp">
                <div class="row">
                    <div class="big-column col-xl-4 col-lg-3 col-md-12">
                        <div class="footer-column about-widget">
                            <div class="logo"><a href="#"><img src="../assets/employ.png" alt="" class="logo"></a></div>
                            <p class="phone-num"><span>Call us </span><a href="thebeehost%40support.html">+234 818 000 0459</a></p>
                            <p class="address"> KM 42, Lekki-Epe Expressway, Opposite Children's Place Plaza, By Alfa Bus-stop, Sangotedo Ajah Lekki, Lagos<br><a href="mailto:buzydevtechnologies@gmail.com" class="email">buzydevtechnologies@gmail.com</a></p>
                        </div>
                    </div>

                    <div class="big-column col-xl-8 col-lg-9 col-md-12">
                        <div class="row">
                            <div class="footer-column col-lg-3 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
                                    <h4 class="widget-title">For Candidates</h4>
                                    <div class="widget-content">
                                        <ul class="list">
                                            <li><a href="#">Browse Jobs</a></li>
                                            <li><a href="#">Browse Categories</a></li>
                                            <li><a href="#">Candidate Dashboard</a></li>
                                            <li><a href="#">Job Alerts</a></li>
                                            <li><a href="#">My Bookmarks</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

       
                            <div class="footer-column col-lg-3 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
                                    <h4 class="widget-title">For Employers</h4>
                                    <div class="widget-content">
                                        <ul class="list">
                                            <li><a href="#">Browse Candidates</a></li>
                                            <li><a href="#">Employer Dashboard</a></li>
                                            <li><a href="#">Add Job</a></li>
                                            <li><a href="#">Job Packages</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="footer-column col-lg-3 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
                                    <h4 class="widget-title">About Us</h4>
                                    <div class="widget-content">
                                        <ul class="list">
                                            <li><a href="#">Job Page</a></li>
                                            <li><a href="#">Job Page Alternative</a></li>
                                            <li><a href="#">Resume Page</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div class="footer-column col-lg-3 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
                                    <h4 class="widget-title">Helpful Resources</h4>
                                    <div class="widget-content">
                                        <ul class="list">
                                            <li><a href="#">Site Map</a></li>
                                            <li><a href="#">Terms of Use</a></li>
                                            <li><a href="#">Privacy Center</a></li>
                                            <li><a href="#">Security Center</a></li>
                                            <li><a href="#">Accessibility Center</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <!--Bottom-->
        <div class="footer-bottom">
            <div class="auto-container">
                <div class="outer-box">
                    <div class="copyright-text">© 2021 <a href="#">Employ.ng</a>. All Right Reserved.</div>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll To Top -->
        <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"></span></div>
    </footer>
    
</template>

<script>
export default {
  name: 'footerapp'
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{
  width:200px;
  height:50px;
}
</style>
