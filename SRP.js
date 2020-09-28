class FoodService {
    constructor(id, name, date) {
        this.id = id;
        this.name = name;
        this.date = date;
    }

    addToStore() {
        if (!FoodExpiry.isExpired(this.date)) {
            // Add to store
            // console.log(this.date)
            console.log("add to store")
        } else {
            console.log("cancel")
        }
    }

}

class FoodExpiry {
    static isExpired(date) {
        const stringDateArray = date.split("/");
        console.log(stringDateArray)
        const foodDate = new Date(stringDateArray);
        console.log(foodDate)
        return foodDate >= new Date("03/03/2020");
    }
}

const main = () => {
    const food = new FoodService("3", "Admin", "02/03/2020");
    // console.log(food);
    food.addToStore();
}

main()