<template>
    <div class="bg-image-container three">
        <div class="container-fluid pt-5">
            <div class="row side-spacing">
                <div class="col-5 px-0">
                    <h2 class="text-right text-default text-size-default">הדרך להורות</h2>
                    <h1 class="text-right text-default text-large">מתחילה אצלנו</h1>
                    <h5 class="text-right text-default mt-4 mb-2">החזון שלנו הוא לעזור לך להגשים את החלום שלך ולהביא ילדים לעולם. תפקידנו הוא לגייס את התורמים האיכותיים ביותר ולספק מנת זרע טיפולית באיכות גבוהה. על מנת להצליח במשימה זו,</h5>
                    <h5 class="text-right text-default mt-4 mb-2">כדי לשמר את הזרע על ידי הקפאה, אנו משתמשים בטכנולוגיה ובנהלים העדכניים ביותר ומאחסנים את חלקי הזרע בבנק הזרע שלנו בתנאים המתאימים והבטוחים ביותר.</h5>
                    <h5 class="text-right text-default mt-4 mb-2">אנו עורכים בדיקות קפדניות מאוד לתורמים פוטנציאליים הכוללים בדיקה רפואית מקיפה של התורם, תשאול של רקע רפואי ונפשי אישי ומשפחתי ומבחן אישיות.</h5>
                    <h5 class="text-right text-default mt-4 mb-2">אז כמו שהבנת, אתה בידיים טובות וכל מה שנותר לך זה לבחור את התורם שהכי מתאים לך</h5>
                    <h5 class="text-right text-default mt-4 mb-2">ומשם נתקדם.</h5>
                </div>
                <div class="col-7 px-0"></div>
            </div>
            <div class="row footer-content">
                <div class="col-6 text-right">
                    <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                </div>
                <div class="col-6">
                    <button class="btn-default btn-bg-white text-default" @click.prevent="redirectToPage">המשך ></button>
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
            this.$router.push('/four');
        }
    },
}
</script>
