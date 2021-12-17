<template>
      <div class="sidebar-backdrop"></div>

    <!-- User Sidebar -->
    <div class="user-sidebar">

        <div class="sidebar-inner">
            <ul class="navigation">
                <li><a href="candidate-dashboard.html"> <i class="la la-home"></i> Dashboard</a></li>
                <li><a href="candidate-dashboard-profile.html"><i class="la la-user-tie"></i>My Profile</a></li>
                <li><a href="candidate-dashboard-resume.html"><i class="la la-file-invoice"></i>My Resume</a></li>
                <li><a href="candidate-dashboard-applied-job.html"><i class="la la-briefcase"></i> Applied Jobs </a></li>
                <li><a href="candidate-dashboard-job-alerts.html"><i class="la la-bell"></i>Job Alerts</a></li>
                <li class="active"><a href="candidate-dashboard-shortlisted-resume.html"><i class="la la-bookmark-o"></i>Shortlisted Jobs</a></li>
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
                <h3>Shorlisted Jobs</h3>
                <div class="text">Ready to jump back in?</div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <!-- Ls widget -->
                    <div class="ls-widget">
                        <div class="tabs-box">                        
                            <div class="widget-title">
                                <h4>My Favorite Jobs</h4>

                                <div class="chosen-outer">
                                     <!--Tabs Box-->
                                     <select class="chosen-select">
                                        <option>Last 6 Months</option>
                                        <option>Last 12 Months</option>
                                        <option>Last 16 Months</option>
                                        <option>Last 24 Months</option>
                                        <option>Last 5 year</option>
                                    </select>
                                </div>
                            </div>

                            <div class="widget-content">
                                <div class="table-outer">
                                    <table class="default-table manage-job-table">
                                        <thead>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Date Applied</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>
                                                    <!-- Job Block -->
                                                    <div class="job-block">
                                                        <div class="inner-box">
                                                            <div class="content">
                                                                <span class="company-logo"><img src="images/resource/company-logo/1-1.png" alt=""></span>
                                                                <h4><a href="#">Senior Full Stack Engineer, Creator Success</a></h4>
                                                                <ul class="job-info">
                                                                    <li><span class="icon flaticon-briefcase"></span> Segment</li>
                                                                    <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Dec 5, 2020</td>
                                                <td class="status">Active</td>
                                                <td>
                                                    <div class="option-box">
                                                        <ul class="option-list">
                                                            <li><button data-text="View Aplication"><span class="la la-eye"></span></button></li>
                                                            <li><button data-text="Delete Aplication"><span class="la la-trash"></span></button></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <!-- Job Block -->
                                                    <div class="job-block">
                                                        <div class="inner-box">
                                                            <div class="content">
                                                                <span class="company-logo"><img src="images/resource/company-logo/1-2.png" alt=""></span>
                                                                <h4><a href="#">Senior Product Designer</a></h4>
                                                                <ul class="job-info">
                                                                    <li><span class="icon flaticon-briefcase"></span> Segment</li>
                                                                    <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Dec 5, 2020</td>
                                                <td class="status">Active</td>
                                                <td>
                                                    <div class="option-box">
                                                        <ul class="option-list">
                                                            <li><button data-text="View Aplication"><span class="la la-eye"></span></button></li>
                                                            <li><button data-text="Delete Aplication"><span class="la la-trash"></span></button></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <!-- Job Block -->
                                                    <div class="job-block">
                                                        <div class="inner-box">
                                                            <div class="content">
                                                                <span class="company-logo"><img src="images/resource/company-logo/1-3.png" alt=""></span>
                                                                <h4><a href="#">Sr. Full Stack Engineer</a></h4>
                                                                <ul class="job-info">
                                                                    <li><span class="icon flaticon-briefcase"></span> Segment</li>
                                                                    <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Dec 5, 2020</td>
                                                <td class="status">Active</td>
                                                <td>
                                                    <div class="option-box">
                                                        <ul class="option-list">
                                                            <li><button data-text="View Aplication"><span class="la la-eye"></span></button></li>
                                                            <li><button data-text="Delete Aplication"><span class="la la-trash"></span></button></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <!-- Job Block -->
                                                    <div class="job-block">
                                                        <div class="inner-box">
                                                            <div class="content">
                                                                <span class="company-logo"><img src="images/resource/company-logo/1-4.png" alt=""></span>
                                                                <h4><a href="#">Product Manager, Studio</a></h4>
                                                                <ul class="job-info">
                                                                    <li><span class="icon flaticon-briefcase"></span> Segment</li>
                                                                    <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Dec 5, 2020</td>
                                                <td class="status">Active</td>
                                                <td>
                                                    <div class="option-box">
                                                        <ul class="option-list">
                                                            <li><button data-text="View Aplication"><span class="la la-eye"></span></button></li>
                                                            <li><button data-text="Delete Aplication"><span class="la la-trash"></span></button></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
  name: "sdash"
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
