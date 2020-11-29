const app = Vue.createApp({
    data() {
        return {
            myName: 'Rony Maree',
            myAge: 26,
            myImgSrc: 'https://www.mercedes-benz.com/en/vehicles/passenger-cars/_jcr_content/root/grid_copy/grid-par/griditem_copy/image/MQ6-8-image-20200129142634/00-mercedes-benz-passenger-cars-art-calender-2019-2560x1440.jpeg'
        };
    },

    methods: {
        calcAgeInYears(year){
            const age = this.myAge;
            return age + year;
        }, 
        favNum(){
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
    
});

app.mount('#assignment');