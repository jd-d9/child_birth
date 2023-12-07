<template>
    <div class="bg-image-container nine">
        <div class="bg-image-blur"></div>
        <div class="container-fluid h-100">
            <div class="row pt-0 side-spacing align-items-center h-100">
                <div class="col-5 px-0 mx-auto text-center">
                    <div class="signin-form">
                        <div class="bg-default">
                            <h5 class="text-center text-white">לשימוש המשרד בלבד</h5>
                            <h2 class="text-center text-size-default">לאיפוס יש להקיש קוד</h2>
                            <form class="form mt-3">
                                <input type="text" placeholder="קוד" class="form-input text-white d-block w-100 text-end my-4">
                                <button class="btn-default bg-white text-default mt-5" @click.prevent="redirectToPage('/signin')">אישור ></button>
                            </form>
                        </div>
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
