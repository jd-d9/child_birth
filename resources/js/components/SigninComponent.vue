<template>
    <div class="bg-image-container">
        <div class="container-fluid pt-5">
            <div class="row mt-2">
                <div class="col-5 px-0">
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
                <div class="col-7 px-0"></div>
            </div>
            <div class="footer-content">
                <div class="row">
                    <div class="col-6 text-right">
                        <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                    </div>
                    <div class="col-6">
                        <button class="btn-default btn-outlined text-default" style="float: left" @click.prevent="redirectToPage">המשך ></button>
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
        redirectToPage() {
            this.$router.push('/second');
        }
    },
}
</script>
