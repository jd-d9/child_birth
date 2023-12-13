<template>
    <div class="bg-image-container four">
        <div class="container-fluid pb-4">
            <div class="row side-spacing mx-auto pt-0 pt-sm-5">
                <div class="col-xl-4 col-md-2 d-md-block"></div>
                <div class="col-xl-4 col-md-8 text-center">
                    <h2 class="text-center text-default text-size-default mb-4">רשימת נשאויות גנטיות</h2>
                    <div class="mx-auto position-relative">
                        <input type="text" class="form-input text-default w-100" placeholder="חיפוש חופשי">
                        <img src="../../../public/images/svg/search.svg" class="search-icon" alt="img" width="100%" height="auto">
                    </div>
                    <div class="mx-auto position-relative mt-4">
                        <div class="half-border">
                            <input type="text" class="form-input text-default border-transparent w-100" placeholder="חיפוש לפי שם הנשאות">
                        </div>
                        <img src="../../../public/images/svg/left.svg" class="search-icon" alt="img" width="100%" height="auto" style="cursor: pointer" @click.prevent="redirectToPage('/ten')">
                    </div>
                </div>
                <div class="col-xl-4 col-md-2 d-md-block"></div>
            </div>
            <div class="row side-spacing mx-auto pt-0">
                <div class="text-center">
                    <img src="../../../public/images/babies.png" class="babies-background" alt="img" width="100%" height="auto">
                </div>
            </div>
            <div class="footer-content">
                <div class="row">
                    <div class="col-sm-6 text-right">
                        <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                    </div>
                    <div class="col-sm-6">
                        <button class="btn-default btn-outlined text-default border-white" style="float: left" @click.prevent="redirectToPage('/five')">המשך ></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        redirectToPage(route) {
            this.$router.push(route);
        }
    },
}
</script>
