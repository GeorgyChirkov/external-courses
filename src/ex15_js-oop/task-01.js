function Candy(name, weight) {
    this.name = name;
    this.weight = weight;
} 

function Gift() {
    this.candies = Array.prototype.slice.call(arguments)

    this.getWeight = function() {
        let summ = 0;
        for (let i = 0; i<this.candies.length; i++){
            summ += this.candies[i].weight
        }
        return summ
    }

    this.sortCandies = function(callback) {
        return this.candies.sort(callback)
    }

    this.findCandy = function(name) {
        return this.candies.filter(item => item.name.includes(name))
    }
}

const chocolate = new Candy("chocolate", 5);
const caramels = new Candy("caramels", 3);
const lollipops = new Candy("lollipops", 10);
const gummies = new Candy("gummies", 7);
const licorice = new Candy("licorice", 1);

const gift = new Gift(chocolate, caramels, lollipops, gummies, licorice);

console.log(gift.getWeight());
