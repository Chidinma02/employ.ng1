<template>
   <section class="page-title style-two">
        <div class="auto-container">
            <!-- Job Search Form -->
            <div class="job-search-form">
                <form method="post" action="https://creativelayers.net/themes/superio/job-list-v10.html">
                    <div class="row">
                        <!-- Form Group -->
                        <div class="form-group col-lg-4 col-md-12 col-sm-12">
                            <span class="icon flaticon-search-1"></span>
                            <input type="text" name="field_name" placeholder="Job title, keywords, or company">
                        </div>
                        
                        <!-- Form Group -->
                        <div class="form-group col-lg-3 col-md-12 col-sm-12 location">
                            <span class="icon flaticon-map-locator"></span>
                            <input type="text" name="field_name" placeholder="City or postcode">
                        </div>

                        <!-- Form Group -->
                        <div class="form-group col-lg-3 col-md-12 col-sm-12 location">
                            <span class="icon flaticon-briefcase"></span>
                            <select class="chosen-select">
                                <option value="">All Categories</option>
                                <option value="44">Accounting / Finance</option>
                                <option value="106">Automotive Jobs</option>
                                <option value="46">Customer</option>
                                <option value="48">Design</option>
                                <option value="47">Development</option>
                                <option value="45">Health and Care</option>
                                <option value="105">Marketing</option>
                                <option value="107">Project Management</option>
                            </select>
                        </div>

                        <!-- Form Group -->
                        <div class="form-group col-lg-2 col-md-12 col-sm-12 text-right">
                            <button type="submit" class="theme-btn btn-style-one">Find Jobs</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- Job Search Form -->
        </div>
    </section>
   
</template>

<script>
export default {
  name: 'search'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>