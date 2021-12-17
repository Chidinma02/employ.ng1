<template>
      <div class="sidebar-backdrop"></div>

     <div class="user-sidebar">

        <div class="sidebar-inner">
            <ul class="navigation">
                <li><a href="candidate-dashboard.html"> <i class="la la-home"></i> Dashboard</a></li>
                <li><a href="candidate-dashboard-profile.html"><i class="la la-user-tie"></i>My Profile</a></li>
                <li class="active"><a href="candidate-dashboard-resume.html"><i class="la la-file-invoice"></i>My Resume</a></li>
                <li><a href="candidate-dashboard-applied-job.html"><i class="la la-briefcase"></i> Applied Jobs </a></li>
                <li><a href="candidate-dashboard-job-alerts.html"><i class="la la-bell"></i>Job Alerts</a></li>
                <li><a href="candidate-dashboard-shortlisted-resume.html"><i class="la la-bookmark-o"></i>Shortlisted Jobs</a></li>
                <li><a href="candidate-dashboard-cv-manager.html"><i class="la la-file-invoice"></i> CV manager</a></li>
                <li><a href="dashboard-packages.html"><i class="la la-box"></i>Packages</a></li>
                <li><a href="dashboard-messages.html"><i class="la la-comment-o"></i>Messages</a></li>
                <li><a href="dashboard-change-password.html"><i class="la la-lock"></i>Change Password</a></li>
                <li><a href="dashboard-profile.html"><i class="la la-user-alt"></i>View Profile</a></li>
                <li><a href="index.html"><i class="la la-sign-out"></i>Logout</a></li>
                <li><a href="dashboard-delete.html"><i class="la la-trash"></i>Delete Profile</a></li>
            </ul>

            <div class="skills-percentage">
                <h4>Skills Percentage</h4>
                <p>Put value for "Cover Image" field to increase your skill up to "85%"</p>
                
                <!-- Pie Graph -->
                <div class="pie-graph">
                    <div class="graph-outer">
                        <input type="text" class="dial" data-fgColor="#7367F0" data-bgColor="transparent" data-width="234" data-height="234" data-linecap="normal"  value="30">
                        <div class="inner-text count-box"><span class="count-text txt" data-stop="30" data-speed="2000"></span>%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End User Sidebar -->

    <!-- Dashboard -->
    <section class="user-dashboard">
        <div class="dashboard-outer">
            <div class="upper-title-box">
                <h3>My Resume</h3>
                <div class="text">Ready to jump back in?</div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <!-- Ls widget -->
                    <div class="ls-widget">
                        <div class="tabs-box">                        
                            <div class="widget-title">
                                <h4>My Profile</h4>
                            </div>

                            <div class="widget-content">
                                 <form class="default-form">
                                    <div class="row">
                                        <!-- Input -->
                                        <div class="form-group col-lg-6 col-md-12">
                                            <label>Select Your CV</label>
                                            <select class="chosen-select">
                                                <option>My CV</option>
                                            </select>
                                        </div>

                                        <!-- About Company -->
                                        <div class="form-group col-lg-12 col-md-12">
                                            <label>Description</label>
                                            <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                                        </div>

                                        <div class="form-group col-lg-12 col-md-12">
                                            <!-- Resume / Education -->
                                            <div class="resume-outer">
                                                <div class="upper-title">
                                                    <h4>Education</h4>
                                                    <button class="add-info-btn"><span class="icon flaticon-plus"></span> Add Aducation</button>
                                                </div>
                                                <!-- Resume BLock -->
                                                <div class="resume-block">
                                                    <div class="inner">
                                                        <span class="name">M</span>
                                                        <div class="title-box">
                                                            <div class="info-box">
                                                                <h3>Bachlors in Fine Arts</h3>
                                                                <span>Modern College</span>
                                                            </div>
                                                            <div class="edit-box">
                                                                <span class="year">2012 - 2014</span>
                                                                <div class="edit-btns">
                                                                    <button><span class="la la-pencil"></span></button>
                                                                    <button><span class="la la-trash"></span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br> ipsum primis in faucibus.</div>
                                                    </div>
                                                </div>

                                                <!-- Resume BLock -->
                                                <div class="resume-block">
                                                    <div class="inner">
                                                        <span class="name">H</span>
                                                        <div class="title-box">
                                                            <div class="info-box">
                                                                <h3>Computer Science</h3>
                                                                <span>Harvard University</span>
                                                            </div>
                                                            <div class="edit-box">
                                                                <span class="year">2008 - 2012</span>
                                                                <div class="edit-btns">
                                                                    <button><span class="la la-pencil"></span></button>
                                                                    <button><span class="la la-trash"></span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br> ipsum primis in faucibus.</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Resume / Work & Experience -->
                                            <div class="resume-outer theme-blue">
                                                <div class="upper-title">
                                                    <h4>Work & Experience</h4>
                                                    <button class="add-info-btn"><span class="icon flaticon-plus"></span> Add Work</button>
                                                </div>
                                                <!-- Resume BLock -->
                                                <div class="resume-block">
                                                    <div class="inner">
                                                        <span class="name">S</span>
                                                        <div class="title-box">
                                                            <div class="info-box">
                                                                <h3>Product Designer</h3>
                                                                <span>Spotify Inc.</span>
                                                            </div>
                                                            <div class="edit-box">
                                                                <span class="year">2012 - 2014</span>
                                                                <div class="edit-btns">
                                                                    <button><span class="la la-pencil"></span></button>
                                                                    <button><span class="la la-trash"></span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br> ipsum primis in faucibus.</div>
                                                    </div>
                                                </div>

                                                <!-- Resume BLock -->
                                                <div class="resume-block">
                                                    <div class="inner">
                                                        <span class="name">D</span>
                                                        <div class="title-box">
                                                            <div class="info-box">
                                                                <h3>Sr UX Engineer</h3>
                                                                <span>Dropbox Inc.</span>
                                                            </div>
                                                            <div class="edit-box">
                                                                <span class="year">2012 - 2014</span>
                                                                <div class="edit-btns">
                                                                    <button><span class="la la-pencil"></span></button>
                                                                    <button><span class="la la-trash"></span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br> ipsum primis in faucibus.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group col-lg-6 col-md-12">
                                            <div class="uploading-outer">
                                                <div class="uploadButton">
                                                    <input class="uploadButton-input" type="file"  name="attachments[]" accept="image/*, application/pdf" id="upload" multiple/>
                                                    <label class="uploadButton-button ripple-effect" for="upload">Add Portfolio</label>
                                                    <span class="uploadButton-file-name"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group col-lg-12 col-md-12">
                                            <!-- Resume / Awards -->
                                            <div class="resume-outer theme-yellow">
                                                <div class="upper-title">
                                                    <h4>Awards</h4>
                                                    <button class="add-info-btn"><span class="icon flaticon-plus"></span> Awards</button>
                                                </div>
                                                <!-- Resume BLock -->
                                                <div class="resume-block">
                                                    <div class="inner">
                                                        <span class="name"></span>
                                                        <div class="title-box">
                                                            <div class="info-box">
                                                                <h3>Perfect Attendance Programs</h3>
                                                                <span></span>
                                                            </div>
                                                            <div class="edit-box">
                                                                <span class="year">2012 - 2014</span>
                                                                <div class="edit-btns">
                                                                    <button><span class="la la-pencil"></span></button>
                                                                    <button><span class="la la-trash"></span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br> ipsum primis in faucibus.</div>
                                                    </div>
                                                </div>


                                                <!-- Resume BLock -->
                                                <div class="resume-block">
                                                    <div class="inner">
                                                        <span class="name"></span>
                                                        <div class="title-box">
                                                            <div class="info-box">
                                                                <h3>Top Performer Recognition</h3>
                                                                <span></span>
                                                            </div>
                                                            <div class="edit-box">
                                                                <span class="year">2012 - 2014</span>
                                                                <div class="edit-btns">
                                                                    <button><span class="la la-pencil"></span></button>
                                                                    <button><span class="la la-trash"></span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br> ipsum primis in faucibus.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Search Select -->
                                        <div class="form-group col-lg-6 col-md-12">
                                            <label>Skills </label>
                                            <select data-placeholder="Categories" class="chosen-select multiple" multiple tabindex="4"> 
                                              <option value="Banking">Banking</option> 
                                              <option value="Digital&Creative">Digital & Creative</option> 
                                              <option value="Retail">Retail</option> 
                                              <option value="Human Resources">Human Resources</option> 
                                              <option value="Management">Management</option> 
                                            </select>
                                        </div>

                                        <!-- Input -->
                                        <div class="form-group col-lg-12 col-md-12">
                                            <button class="theme-btn btn-style-one">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
    <!-- End Dashboard -->

    <!-- Copyright -->
    <div class="copyright-text">
        <p>© 2021 Superio. All Right Reserved.</p>
    </div>

</template>
<script>
export default {
  name: "dashboardres"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l {
  font-size: 30px;
}
.count {
  position: absolute;
  /* right: -8px; */
  /* top: -4px; */
  height: 16px;
  width: 16px;
  background: #1967d2;
  border-radius: 50%;
  color: #ffffff;
  line-height: 16px;
  font-size: 14px;
}
.lo {
  height: 50px;
}



</style>
