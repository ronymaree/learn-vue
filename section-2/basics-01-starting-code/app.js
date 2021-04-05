const app = Vue.createApp({
    data() {
        return {
            courseGoalA: '<h4>Helloo</h4>',
            courseGoalB: 'Yoyoyo',
            vueLink: 'https://www.google.com'
        }
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();

            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
