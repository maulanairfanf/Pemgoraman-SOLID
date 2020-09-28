class Kucing {

    constructor(color = null, height = null, length = null, weight = null) {
        this._color = color;
        this._height = height;
        this._length = length;
        this._weight = weight;
    }

    purring(){
       
        console.log("Meow...")
    }

    eat(){
        this.weight = this.weight + 1;
    }

    set color(value) {
        this._color = value;
    }

    get color() {
        return this._color;
    }

    set height(value) {
        this._height = value;
    }

    get height() {
        return this._height;
    }

    set length(value) {
        this._length = value;
    }

    get length() {
        return this._length
    }

    set weight(value) {
        this._weight = value;
    }

    get weight() {
        return this._weight;
    }
}

const main = () => {
    const persian = new Kucing();
    persian.color = "Putih";
    persian.height = 24.0;
    persian.length = 46.0;
    persian.weight = 2.0;
    const bengal = new Kucing("Coklat", 22.0, 39.0, 2.3);
    const anggora = new Kucing("Abu-abu", 25.0, 41.0, 2.4);
    anggora.purring()
    // console.log(anggora.purring())
    console.log(persian)
    console.log(bengal)
}

main()
