<template>
    <div class="bg-image-container first">
        <div class="container-fluid pt-5">
            <div class="row mt-2">
                <div class="col-xl-5 col-lg-6 col-md-8 mx-auto pe-lg-0">
                    <div class="signin-form mt-5">
                        <div class="bg-default">
                            <h2 class="text-center text-size-default">להתחלת התהליך</h2>
                            <h2 class="text-center text-size-default">נא מלאי את הפרטים</h2>
                            <form class="form mt-5">
                                <input type="text" placeholder="שם פרטי ושם משפחה" class="form-input text-white d-block w-100 text-end my-4">
                                <input type="text" placeholder="ת.ז" class="form-input text-white d-block w-100 text-end my-4">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-6 d-none d-lg-block d-xl-block"></div>
            </div>
            <div class="footer-content">
                <div class="row">
                    <div class="col-sm-6 text-right">
                        <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                    </div>
                    <div class="col-sm-6">
                        <button class="btn-default btn-outlined text-default" style="float: left" @click.prevent="redirectToPage('/second')">המשך ></button>
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
