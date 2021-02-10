
var shoppingList = new Vue({
    el: "#shoppingList",
    data: {
        newItem: "",
        newLink: "",
        shoppingList: [
            {name: "Sean christ - White noise", link: "https://www.youtube.com/watch?v=glxVwGfI2r4&list=RDglxVwGfI2r4&start_radio=1"},
            
        ],
    },

    methods: {
        clearAll: function() {
            this.shoppingList = []
            this.save()
        },
        deleteItem: function(key) {
            this.shoppingList.splice(key, 1)
            this.save()
            console.log(key);
        },
        addItem: function(e) {
            
            if(this.newItem !== ""){
                e.preventDefault();
                this.shoppingList.push({
                    name: this.newItem,
                    link: this.newLink,
                })
                this.newItem = ""
                this.newLink = ""
                this.save()
            }
        },
        save: function() {
            localStorage.shoppingList = JSON.stringify(this.shoppingList)
        },
    },
    mounted() {
        if(localStorage.shoppingList){
            this.shoppingList = JSON.parse(localStorage.shoppingList)
        }
    },
})