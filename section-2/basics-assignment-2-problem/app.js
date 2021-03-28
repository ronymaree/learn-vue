const app = Vue.createApp({
data(){
    return{
        alertText: 'This is an alert message',
        keyDnText: '',
        enterText: '',

    }
},
methods:{
    onClick(){
        return alert(this.alertText);
    },
    displayKeydnText(event){
        this.keyDnText = event.target.value;
    },
    displayEnterText(event){
        this.enterText = event.target.value;
    }

}
});

app.mount('#assignment');