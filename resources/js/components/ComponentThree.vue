<template>
    <div class="bg-image-container three">
        <div class="container-fluid">
            <div class="row side-spacing mx-auto">
                <div class="col-xl-6 col-lg-7">
                    <h2 class="text-default text-size-default">הדרך להורות</h2>
                    <h1 class="text-default text-large">מתחילה אצלנו</h1>
                    <h5 class="text-default mt-4 mb-2">החזון שלנו הוא לעזור לך להגשים את החלום שלך ולהביא ילדים לעולם. תפקידנו הוא לגייס את התורמים האיכותיים ביותר ולספק מנת זרע טיפולית באיכות גבוהה. על מנת להצליח במשימה זו,</h5>
                    <h5 class="text-default mt-4 mb-2">כדי לשמר את הזרע על ידי הקפאה, אנו משתמשים בטכנולוגיה ובנהלים העדכניים ביותר ומאחסנים את חלקי הזרע בבנק הזרע שלנו בתנאים המתאימים והבטוחים ביותר.</h5>
                    <h5 class="text-default mt-4 mb-2">אנו עורכים בדיקות קפדניות מאוד לתורמים פוטנציאליים הכוללים בדיקה רפואית מקיפה של התורם, תשאול של רקע רפואי ונפשי אישי ומשפחתי ומבחן אישיות.</h5>
                    <h5 class="text-default mt-4 mb-2">אז כמו שהבנת, אתה בידיים טובות וכל מה שנותר לך זה לבחור את התורם שהכי מתאים לך</h5>
                    <h5 class="text-default mt-4 mb-2">ומשם נתקדם.</h5>
                </div>
                <div class="col-xl-6 col-lg-5 d-none d-lg-block"></div>
            </div>
            <div class="footer-content">
                <div class="row">
                    <div class="col-sm-6 text-right">
                        <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                    </div>
                    <div class="col-sm-6 text-lg-end text-start">
                        <button class="btn-default btn-bg-white text-default" @click.prevent="redirectToPage('/four')">המשך ></button>
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
