// TASK 1


// class Goods {
//     constructor (name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }



// TASK 2



// class Goods {
//     constructor (name, price, image, count) {
//         this.name = name;
//         this.price = price;
//         this.image = image;
//         this.count = count;
//     }
// }


// TASK 3



// class Goods {
//     constructor(name, price, image, count) {
//         this.name = name;
//         this.price = price;
//         this.image = image;
//         this.count = count;
//     }

//     draw() {
//         const div = document.createElement('div');
//         div.classList.add('goods');

//         const h1 = document.createElement('h1');
//         h1.textContent = this.name;

//         const p = document.createElement('p');
//         p.classList.add('price');
//         p.textContent = this.price;

//         const img = document.createElement('img');
//         img.src = this.image;
//         img.alt = this.name;

//         div.append(h1);
//         div.append(p);
//         div.append(img);

//         return div;
//     }
// }




// TASK 4


class Goods {
    constructor(name, price, image, count) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.count = count;
    }
    
    draw() {
        const div = document.createElement('div');
        div.classList.add('goods');

        const h1 = document.createElement('h1');
        h1.textContent = this.name;

        const p = document.createElement('p');
        p.classList.add('price');
        p.textContent = this.price;

        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;

        div.append(h1, p, img);

        return div;
    }
}


