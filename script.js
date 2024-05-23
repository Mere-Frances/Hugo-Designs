mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

const posters = [{
        id: 1,
        name: 'Audi Quattro',
        brand: 'Audi',
        description: 'Audi Quattro Sport 1980',
        price: 80,
        popularity: 9,
        bestSeller: '',
        images: [
            './images/audi1.jpg',
            './images/audi1.jpg',
            './images/audi1.jpg'
        ],
    },
    {
        id: 2,
        name: 'BMW Marlboro',
        brand: 'BMW',
        description: 'BMW M1 ProCar 1979',
        price: 100,
        popularity: 8,
        bestSeller: '',
        images: [
            './images/bmw1.jpg',
            './images/bmw1.jpg',
            './images/bmw1.jpg'
        ],
    },
    {
        id: 3,
        name: 'Bronco',
        brand: 'Bronco',
        description: '1974 Ford Bronco',
        price: 60,
        popularity: 5,
        bestSeller: '',
        images: [
            './images/bronco1.jpg',
            './images/bronco1.jpg',
            './images/bronco1.jpg'
        ],
    },
    {
        id: 4,
        name: 'The Icon',
        brand: 'Bronco',
        description: 'Red Ford Bronco',
        price: 80,
        popularity: 6,
        bestSeller: '',
        images: [
            './images/bronco2.jpg',
            './images/bronco2.jpg',
            './images/bronco2.jpg'
        ],
    },
    {
        id: 5,
        name: 'The Goliath',
        brand: 'Land Rover',
        description: 'Artic Land Rover Defender',
        price: 80,
        popularity: 8,
        bestSeller: '',
        images: [
            './images/defender1.jpg',
            './images/defender1.jpg',
            './images/defender1.jpg'
        ],
    },
    {
        id: 6,
        name: 'Defender Offroader',
        brand: 'Land Rover',
        description: 'British Empire Offroader',
        price: 80,
        popularity: 9,
        bestSeller: '',
        images: [
            './images/defender2.jpg',
            './images/defender2.jpg',
            './images/defender2.jpg'
        ],
    },
    {
        id: 7,
        name: 'Mighty Defender',
        brand: 'Land Rover',
        description: 'Mighty Land Rover Defender',
        price: 80,
        popularity: 5,
        bestSeller: '',
        images: [
            './images/defender3.jpg',
            './images/defender3.jpg',
            './images/defender3.jpg'
        ],
    },
    {
        id: 8,
        name: 'Artic Defender',
        brand: 'Land Rover',
        description: 'Artic Defender 110',
        price: 80,
        popularity: 7,
        bestSeller: '',
        images: [
            './images/defender4.jpg',
            './images/defender4.jpg',
            './images/defender4.jpg'
        ],
    },
    {
        id: 9,
        name: 'Niki Lauda 11',
        brand: 'limited',
        description: "Formula 1's Niki Lauda 11",
        price: 120,
        popularity: 11,
        bestSeller: '#1 Best Seller',
        images: [
            './images/ferrari1.jpg',
            './images/ferrari1.jpg',
            './images/ferrari1.jpg'
        ],
    },
    {
        id: 10,
        name: 'FJ45 Arctic Troop',
        brand: 'Toyota',
        description: 'Toyota Land Cruiser FJ45 Arctic Troop Carrier',
        price: 80,
        popularity: 5,
        bestSeller: '',
        images: [
            './images/fj1.jpg',
            './images/fj1.jpg',
            './images/fj1.jpg'
        ],
    },
    {
        id: 11,
        name: 'The Beast',
        brand: 'limited',
        description: 'Futuristic Overland 4X4 Geolander',
        price: 90,
        popularity: 11,
        bestSeller: '#2 Best Seller',
        images: [
            './images/geolander1.jpg',
            './images/geolander1.jpg',
            './images/geolander1.jpg'
        ],
    },
    {
        id: 12,
        name: 'Jeep Cherokee',
        brand: 'Jeep',
        description: 'Jeep Cherokee XJ',
        price: 80,
        popularity: 8,
        bestSeller: '',
        images: [
            './images/jeep1.jpg',
            './images/jeep1.jpg',
            './images/jeep1.jpg'
        ],
    },
    {
        id: 13,
        name: 'Jimmy',
        brand: 'Suzuki',
        description: '5 Door Jimmy, Suzuki',
        price: 80,
        popularity: 9,
        bestSeller: '',
        images: [
            './images/jimmy1.jpg',
            './images/jimmy1.jpg',
            './images/jimmy1.jpg'
        ],
    },
    {
        id: 14,
        name: 'Lancia Stratos',
        brand: 'limited',
        description: 'Lancia Stratos 73 Concept',
        price: 100,
        popularity: 10,
        bestSeller: '',
        images: [
            './images/lancia1.jpg',
            './images/lancia1.jpg',
            './images/lancia1.jpg'
        ],
    },
    {
        id: 15,
        name: 'Defender Camper',
        brand: 'Land Rover',
        description: 'Land Rover Defender 6x6 Camper',
        price: 80,
        popularity: 9,
        bestSeller: '',
        images: [
            './images/lr1.jpg',
            './images/lr1.jpg',
            './images/lr1.jpg'
        ],
    },
    {
        id: 16,
        name: 'Safari Camper',
        brand: 'Toyota',
        description: 'Toyota Land Cruiser 70 Series Camper',
        price: 80,
        popularity: 6,
        bestSeller: '',
        images: [
            './images/lr2.jpg',
            './images/lr2.jpg',
            './images/lr2.jpg'
        ],
    },
    {
        id: 17,
        name: 'Night Rider',
        brand: 'Toyota',
        description: 'Black Toyota Land Cruiser Prado 150',
        price: 80,
        popularity: 6,
        bestSeller: '',
        images: [
            './images/lr3.jpg',
            './images/lr3.jpg',
            './images/lr3.jpg'
        ],
    },
    {
        id: 18,
        name: 'Troopy',
        brand: 'Toyota',
        description: 'Tan HJ45 Land Cruiser Troopy',
        price: 60,
        popularity: 6,
        bestSeller: '',
        images: [
            './images/lr4.jpg',
            './images/lr4.jpg',
            './images/lr4.jpg'
        ],
    },
    {
        id: 19,
        name: 'Dream Rig',
        brand: 'Toyota',
        description: 'Land Crusier 70 series',
        price: 60,
        popularity: 7,
        bestSeller: '',
        images: [
            './images/lr5.jpg',
            './images/lr5.jpg',
            './images/lr5.jpg'
        ],
    },
    {
        id: 20,
        name: 'Cruise Control',
        brand: 'toyota',
        description: 'Basic White Toyota 70 Series',
        price: 80,
        popularity: 5,
        bestSeller: '',
        images: [
            './images/toyota11.jpg',
            './images/toyota11.jpg',
            './images/toyota11.jpg'
        ],
    },
    {
        id: 21,
        name: 'Pajero LWB',
        brand: 'Mitsubishi',
        // custom/limted
        description: '1983 Pajero LWB 5 door version',
        price: 80,
        popularity: 5,
        bestSeller: '',
        images: [
            './images/mitsubishi1.jpg',
            './images/mitsubishi1.jpg',
            './images/mitsubishi1.jpg'
        ],
    },
    {
        id: 22,
        name: 'The Mission',
        brand: 'limited',
        description: "NASA's Mars Ascent Vehicle",
        price: 100,
        popularity: 9,
        bestSeller: '',
        images: [
            './images/nasa1.jpg',
            './images/nasa1.jpg',
            './images/nasa1.jpg'
        ],
    },
    {
        id: 23,
        name: 'The Dakar',
        brand: 'porsche',
        description: 'The Dakar Built Porsche 911',
        price: 80,
        popularity: 6,
        bestSeller: '',
        images: [
            './images/porche1.jpg',
            './images/porche1.jpg',
            './images/porche1.jpg'
        ],
    },
    {
        id: 24,
        name: "Porsche 945'",
        brand: 'porsche',
        description: 'The Iconic Porsche 935 Racer',
        price: 80,
        popularity: 7,
        bestSeller: '',
        images: [
            './images/porche2.jpg',
            './images/porche2.jpg',
            './images/porche2.jpg'
        ],
    },
    {
        id: 25,
        name: 'The Bread Winner',
        brand: 'porsche',
        description: '2000 Porsche Carrera',
        price: 80,
        popularity: 7,
        bestSeller: '',
        images: [
            './images/porche3.jpg',
            './images/porche3.jpg',
            './images/porche3.jpg'
        ],
    },
    {
        id: 26,
        name: 'Audi Sport',
        brand: 'quattro',
        description: 'The Legendary Audi Quattro S1 Sport',
        price: 60,
        popularity: 5,
        bestSeller: '',
        images: [
            './images/quattro1.jpg',
            './images/quattro1.jpg',
            './images/quattro1.jpg'
        ],
    },
    {
        id: 27,
        name: 'Arctic Sleeper',
        brand: 'toyota',
        description: 'Toyota Land Cruiser Defender',
        price: 70,
        popularity: 3,
        bestSeller: '',
        images: [
            './images/toyota1.jpg',
            './images/toyota1.jpg',
            './images/toyota1.jpg'
        ],
    },
    {
        id: 28,
        name: 'Land Cruiser J40',
        brand: 'limited',
        description: 'Toyota J40 Land Cruiser',
        price: 60,
        popularity: 5,
        bestSeller: '',
        images: [
            './images/toyota3.jpg',
            './images/toyota3.jpg',
            './images/toyota3.jpg'
        ],
    },
    {
        id: 29,
        name: 'White Peak',
        brand: 'toyota',
        description: 'Icy Toyota Land Cruiser',
        price: 60,
        popularity: 3,
        bestSeller: '',
        images: [
            './images/toyota4.jpg',
            './images/toyota4.jpg',
            './images/toyota4.jpg'
        ],
    },
    {
        id: 30,
        name: '70 series',
        brand: 'toyota',
        description: 'Toyota Land Cruiser 70 series SWB',
        price: 70,
        popularity: 4,
        bestSeller: '',
        images: [
            './images/toyota5.jpg',
            './images/toyota5.jpg',
            './images/toyota5.jpg'
        ],
    },
    {
        id: 31,
        name: 'Sun Kissed',
        brand: 'toyota',
        description: 'Tan Toyota Land Cruiser 70 series SWB',
        price: 80,
        popularity: 5,
        bestSeller: '',
        images: [
            './images/toyota6.jpg',
            './images/toyota6.jpg',
            './images/toyota6.jpg'
        ],
    },
    {
        id: 32,
        name: 'Toyota Desert',
        brand: 'toyota',
        description: 'White & Tan Toyota Land Cruiser 70 series SWB',
        price: 60,
        popularity: 3,
        bestSeller: '',
        images: [
            './images/toyota7.jpg',
            './images/toyota7.jpg',
            './images/toyota7.jpg'
        ],
    },
    {
        id: 33,
        name: 'Back To Basics',
        brand: 'toyota',
        description: 'Simple Toyota Land Cruiser 70 series',
        price: 60,
        popularity: 3,
        bestSeller: '',
        images: [
            './images/toyota8.jpg',
            './images/toyota8.jpg',
            './images/toyota8.jpg'
        ],
    },
    {
        id: 34,
        name: 'Business In The Front...',
        brand: 'toyota',
        description: 'Toyota Land Cruiser 70 series',
        price: 70,
        popularity: 5,
        bestSeller: '',
        images: [
            './images/toyota9.jpg',
            './images/toyota9.jpg',
            './images/toyota9.jpg'
        ],
    },
    {
        id: 35,
        name: 'Clementine',
        brand: 'toyota',
        description: 'A Classic Toyota 70 Series',
        price: 80,
        popularity: 7,
        bestSeller: '',
        images: [
            './images/toyota10.jpg',
            './images/toyota10.jpg',
            './images/toyota10.jpg'
        ],
    },
];

const originalArray = [{
    id: 1,
    name: 'Audi Quattro',
    brand: 'Audi',
    description: 'Audi Quattro Sport 1980',
    price: 80,
    popularity: 9,
    bestSeller: '',
    images: [
        './images/audi1.jpg',
        './images/audi1.jpg',
        './images/audi1.jpg'
    ],
},
{
    id: 2,
    name: 'BMW Marlboro',
    brand: 'BMW',
    description: 'BMW M1 ProCar 1979',
    price: 100,
    popularity: 8,
    bestSeller: '',
    images: [
        './images/bmw1.jpg',
        './images/bmw1.jpg',
        './images/bmw1.jpg'
    ],
},
{
    id: 3,
    name: 'Bronco',
    brand: 'Bronco',
    description: '1974 Ford Bronco',
    price: 60,
    popularity: 5,
    bestSeller: '',
    images: [
        './images/bronco1.jpg',
        './images/bronco1.jpg',
        './images/bronco1.jpg'
    ],
},
{
    id: 4,
    name: 'The Icon',
    brand: 'Bronco',
    description: 'Red Ford Bronco',
    price: 80,
    popularity: 6,
    bestSeller: '',
    images: [
        './images/bronco2.jpg',
        './images/bronco2.jpg',
        './images/bronco2.jpg'
    ],
},
{
    id: 5,
    name: 'The Goliath',
    brand: 'Land Rover',
    description: 'Artic Land Rover Defender',
    price: 80,
    popularity: 8,
    bestSeller: '',
    images: [
        './images/defender1.jpg',
        './images/defender1.jpg',
        './images/defender1.jpg'
    ],
},
{
    id: 6,
    name: 'Defender Offroader',
    brand: 'Land Rover',
    description: 'British Empire Offroader',
    price: 80,
    popularity: 9,
    bestSeller: '',
    images: [
        './images/defender2.jpg',
        './images/defender2.jpg',
        './images/defender2.jpg'
    ],
},
{
    id: 7,
    name: 'Mighty Defender',
    brand: 'Land Rover',
    description: 'Mighty Land Rover Defender',
    price: 80,
    popularity: 5,
    bestSeller: '',
    images: [
        './images/defender3.jpg',
        './images/defender3.jpg',
        './images/defender3.jpg'
    ],
},
{
    id: 8,
    name: 'Artic Defender',
    brand: 'Land Rover',
    description: 'Artic Defender 110',
    price: 80,
    popularity: 7,
    bestSeller: '',
    images: [
        './images/defender4.jpg',
        './images/defender4.jpg',
        './images/defender4.jpg'
    ],
},
{
    id: 9,
    name: 'Niki Lauda 11',
    brand: 'limited',
    description: "Formula 1's Niki Lauda 11",
    price: 120,
    popularity: 11,
    bestSeller: '#1 Best Seller',
    images: [
        './images/ferrari1.jpg',
        './images/ferrari1.jpg',
        './images/ferrari1.jpg'
    ],
},
{
    id: 10,
    name: 'FJ45 Arctic Troop',
    brand: 'Toyota',
    description: 'Toyota Land Cruiser FJ45 Arctic Troop Carrier',
    price: 80,
    popularity: 5,
    bestSeller: '',
    images: [
        './images/fj1.jpg',
        './images/fj1.jpg',
        './images/fj1.jpg'
    ],
},
{
    id: 11,
    name: 'The Beast',
    brand: 'limited',
    description: 'Futuristic Overland 4X4 Geolander',
    price: 90,
    popularity: 11,
    bestSeller: '#2 Best Seller',
    images: [
        './images/geolander1.jpg',
        './images/geolander1.jpg',
        './images/geolander1.jpg'
    ],
},
{
    id: 12,
    name: 'Jeep Cherokee',
    brand: 'Jeep',
    description: 'Jeep Cherokee XJ',
    price: 80,
    popularity: 8,
    bestSeller: '',
    images: [
        './images/jeep1.jpg',
        './images/jeep1.jpg',
        './images/jeep1.jpg'
    ],
},
{
    id: 13,
    name: 'Jimmy',
    brand: 'Suzuki',
    description: '5 Door Jimmy, Suzuki',
    price: 80,
    popularity: 9,
    bestSeller: '',
    images: [
        './images/jimmy1.jpg',
        './images/jimmy1.jpg',
        './images/jimmy1.jpg'
    ],
},
{
    id: 14,
    name: 'Lancia Stratos',
    brand: 'limited',
    description: 'Lancia Stratos 73 Concept',
    price: 100,
    popularity: 10,
    bestSeller: '',
    images: [
        './images/lancia1.jpg',
        './images/lancia1.jpg',
        './images/lancia1.jpg'
    ],
},
{
    id: 15,
    name: 'Defender Camper',
    brand: 'Land Rover',
    description: 'Land Rover Defender 6x6 Camper',
    price: 80,
    popularity: 9,
    bestSeller: '',
    images: [
        './images/lr1.jpg',
        './images/lr1.jpg',
        './images/lr1.jpg'
    ],
},
{
    id: 16,
    name: 'Safari Camper',
    brand: 'Toyota',
    description: 'Toyota Land Cruiser 70 Series Camper',
    price: 80,
    popularity: 6,
    bestSeller: '',
    images: [
        './images/lr2.jpg',
        './images/lr2.jpg',
        './images/lr2.jpg'
    ],
},
{
    id: 17,
    name: 'Night Rider',
    brand: 'Toyota',
    description: 'Black Toyota Land Cruiser Prado 150',
    price: 80,
    popularity: 6,
    bestSeller: '',
    images: [
        './images/lr3.jpg',
        './images/lr3.jpg',
        './images/lr3.jpg'
    ],
},
{
    id: 18,
    name: 'Troopy',
    brand: 'Toyota',
    description: 'Tan HJ45 Land Cruiser Troopy',
    price: 60,
    popularity: 6,
    bestSeller: '',
    images: [
        './images/lr4.jpg',
        './images/lr4.jpg',
        './images/lr4.jpg'
    ],
},
{
    id: 19,
    name: 'Dream Rig',
    brand: 'Toyota',
    description: 'Land Crusier 70 series',
    price: 60,
    popularity: 7,
    bestSeller: '',
    images: [
        './images/lr5.jpg',
        './images/lr5.jpg',
        './images/lr5.jpg'
    ],
},
{
    id: 20,
    name: 'Cruise Control',
    brand: 'toyota',
    description: 'Basic White Toyota 70 Series',
    price: 80,
    popularity: 5,
    bestSeller: '',
    images: [
        './images/toyota11.jpg',
        './images/toyota11.jpg',
        './images/toyota11.jpg'
    ],
},
{
    id: 21,
    name: 'Pajero LWB',
    brand: 'Mitsubishi',
    // custom/limted
    description: '1983 Pajero LWB 5 door version',
    price: 80,
    popularity: 5,
    bestSeller: '',
    images: [
        './images/mitsubishi1.jpg',
        './images/mitsubishi1.jpg',
        './images/mitsubishi1.jpg'
    ],
},
{
    id: 22,
    name: 'The Mission',
    brand: 'limited',
    description: "NASA's Mars Ascent Vehicle",
    price: 100,
    popularity: 9,
    bestSeller: '',
    images: [
        './images/nasa1.jpg',
        './images/nasa1.jpg',
        './images/nasa1.jpg'
    ],
},
{
    id: 23,
    name: 'The Dakar',
    brand: 'porsche',
    description: 'The Dakar Built Porsche 911',
    price: 80,
    popularity: 6,
    bestSeller: '',
    images: [
        './images/porche1.jpg',
        './images/porche1.jpg',
        './images/porche1.jpg'
    ],
},
{
    id: 24,
    name: "Porsche 945'",
    brand: 'porsche',
    description: 'The Iconic Porsche 935 Racer',
    price: 80,
    popularity: 7,
    bestSeller: '',
    images: [
        './images/porche2.jpg',
        './images/porche2.jpg',
        './images/porche2.jpg'
    ],
},
{
    id: 25,
    name: 'The Bread Winner',
    brand: 'porsche',
    description: '2000 Porsche Carrera',
    price: 80,
    popularity: 7,
    bestSeller: '',
    images: [
        './images/porche3.jpg',
        './images/porche3.jpg',
        './images/porche3.jpg'
    ],
},
{
    id: 26,
    name: 'Audi Sport',
    brand: 'quattro',
    description: 'The Legendary Audi Quattro S1 Sport',
    price: 60,
    popularity: 5,
    bestSeller: '',
    images: [
        './images/quattro1.jpg',
        './images/quattro1.jpg',
        './images/quattro1.jpg'
    ],
},
{
    id: 27,
    name: 'Arctic Sleeper',
    brand: 'toyota',
    description: 'Toyota Land Cruiser Defender',
    price: 70,
    popularity: 3,
    bestSeller: '',
    images: [
        './images/toyota1.jpg',
        './images/toyota1.jpg',
        './images/toyota1.jpg'
    ],
},
{
    id: 28,
    name: 'Land Cruiser J40',
    brand: 'limited',
    description: 'Toyota J40 Land Cruiser',
    price: 60,
    popularity: 5,
    bestSeller: '',
    images: [
        './images/toyota3.jpg',
        './images/toyota3.jpg',
        './images/toyota3.jpg'
    ],
},
{
    id: 29,
    name: 'White Peak',
    brand: 'toyota',
    description: 'Icy Toyota Land Cruiser',
    price: 60,
    popularity: 3,
    bestSeller: '',
    images: [
        './images/toyota4.jpg',
        './images/toyota4.jpg',
        './images/toyota4.jpg'
    ],
},
{
    id: 30,
    name: '70 series',
    brand: 'toyota',
    description: 'Toyota Land Cruiser 70 series SWB',
    price: 70,
    popularity: 4,
    bestSeller: '',
    images: [
        './images/toyota5.jpg',
        './images/toyota5.jpg',
        './images/toyota5.jpg'
    ],
},
{
    id: 31,
    name: 'Sun Kissed',
    brand: 'toyota',
    description: 'Tan Toyota Land Cruiser 70 series SWB',
    price: 80,
    popularity: 5,
    bestSeller: '',
    images: [
        './images/toyota6.jpg',
        './images/toyota6.jpg',
        './images/toyota6.jpg'
    ],
},
{
    id: 32,
    name: 'Toyota Desert',
    brand: 'toyota',
    description: 'White & Tan Toyota Land Cruiser 70 series SWB',
    price: 60,
    popularity: 3,
    bestSeller: '',
    images: [
        './images/toyota7.jpg',
        './images/toyota7.jpg',
        './images/toyota7.jpg'
    ],
},
{
    id: 33,
    name: 'Back To Basics',
    brand: 'toyota',
    description: 'Simple Toyota Land Cruiser 70 series',
    price: 60,
    popularity: 3,
    bestSeller: '',
    images: [
        './images/toyota8.jpg',
        './images/toyota8.jpg',
        './images/toyota8.jpg'
    ],
},
{
    id: 34,
    name: 'Business In The Front...',
    brand: 'toyota',
    description: 'Toyota Land Cruiser 70 series',
    price: 70,
    popularity: 5,
    bestSeller: '',
    images: [
        './images/toyota9.jpg',
        './images/toyota9.jpg',
        './images/toyota9.jpg'
    ],
},
{
    id: 35,
    name: 'Clementine',
    brand: 'toyota',
    description: 'A Classic Toyota 70 Series',
    price: 80,
    popularity: 7,
    bestSeller: '',
    images: [
        './images/toyota10.jpg',
        './images/toyota10.jpg',
        './images/toyota10.jpg'
    ],
},
];

function populateProducts(productArray) {
    const products = document.getElementById('products');
    products.innerHTML = '';

    for (let i = 0; i < productArray.length; i++) {
        let imagesHtml = '';

        for (let j = 0; j < productArray[i].images.length; j++) {
            imagesHtml += `<img class="swiper-img" src="${productArray[i].images[j]}" alt="${productArray[i].name} value=${productArray.id}${j + 1}" />`;
        }
        products.innerHTML += `
        <div class="product-card">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">${imagesHtml}</div>
                    <div class="swiper-slide">${imagesHtml}</div>
                    <div class="swiper-slide">${imagesHtml}</div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <h4 class="product-name">${productArray[i].name}</h4>
            <p class="product-desc">${productArray[i].description}<br>
                <span class="best-seller">${productArray[i].bestSeller}</span>
            </p>
            <h5 class="product-price">NZD $${productArray[i].price}</h5>
            <div class="card-buttons">
                <a href="#" class="btn btn-primary">
                    <span class="text">Shop now</span>
                    <span class="tire-track"></span>
                </a>
                <i class="fa-solid fa-heart-circle-plus"></i>
            </div>
        </div>
        `;
    }
    const swipers = document.querySelectorAll('.swiper');
    swipers.forEach(swiperEl => {
        new Swiper(swiperEl, {
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })
    });
}

populateProducts(posters);


// ------------ BRAND FILTERING

const toyota = document.getElementById('toyota');
const landRover = document.getElementById('landRover');
const porsche = document.getElementById('porsche');
const bronco = document.getElementById('broncoCar');
const limited = document.getElementById('limited');

// TOYOTA FILTER
function toyotaBrands(posters) {
    return posters.filter(poster => poster.brand.toLowerCase() === 'toyota');
}
toyota.addEventListener('click', function () {
    const filterToyotaBrand = toyotaBrands(posters);
    populateProducts(filterToyotaBrand);
});

// LAND ROVER FILTER
function landRoverBrands(posters) {
    return posters.filter(poster => poster.brand.toLowerCase() === 'land rover');
}
landRover.addEventListener('click', function () {
    const filterLandRoverBrand = landRoverBrands(posters);
    populateProducts(filterLandRoverBrand);
});

// PORSCHE FILTER
function porscheBrands(posters) {
    return posters.filter(poster => poster.brand.toLowerCase() === 'porsche');
}

porsche.addEventListener('click', function () {
    const filterPorscheBrand = porscheBrands(posters);
    populateProducts(filterPorscheBrand);
});

// BRONCO FILTER
function broncoBrands(posters) {
    return posters.filter(poster => poster.brand.toLowerCase() === 'bronco');
}

bronco.addEventListener('click', function () {
    const filterBroncoBrand = broncoBrands(posters);
    populateProducts(filterBroncoBrand);
});

// LIMITED FILTER
function limitedBrands(posters) {
    return posters.filter(poster => poster.brand.toLowerCase() === 'limited');
}

limited.addEventListener('click', function () {
    const filterLimitedBrand = limitedBrands(posters);
    populateProducts(filterLimitedBrand);
});



// ------------ PRICE SORTING   

const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const sortPop = document.getElementById('sortPop');


function sortMinPrice(posters) {
    return posters.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceA - priceB;
    });
}

priceMin.addEventListener('click', function () {
    console.log('lowest button clicked');
    const lowestSort = sortMinPrice(posters);
    populateProducts(lowestSort);
});

function sortMaxPrice(posters) {
    return posters.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceB - priceA;
    });
}

priceMax.addEventListener('click', function () {
    console.log('highest button clicked');
    const highestSort = sortMaxPrice(posters);
    populateProducts(highestSort);
})

function sortPopular(posters) {
    return posters.sort((a, b) => {
        const popA = parseFloat(a.popularity);
        const popB = parseFloat(b.popularity);
        return popB - popA;
    });
}

sortPop.addEventListener('click', function () {
    console.log('popularity button working');
    const popularSort = sortPopular(posters);
    populateProducts(popularSort);
})

// REMOVE ALL FILTERS -----------------------

const removeAll = document.getElementById('removeAll');

function undoFilters() {
    return originalArray;
}

removeAll.addEventListener('click', function () {
    console.log('undo button working');
    const originalPosters = undoFilters();
    populateProducts(originalPosters);
})




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: 'true',


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});



window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [175.52353341733573, -39.07350110189637],
    zoom: 5
});

map.on('load', function () {
    map.resize();
});

// locations
const location1 = document.getElementById('marker1');
const location2 = document.getElementById('marker2');
const location3 = document.getElementById('marker3');

const marker = document.getElementById('customMarker');
const buttons = document.getElementById('buttons');
const pins = document.getElementById('pins')

const locations = [{
        name: 'Head Quarters',
        desc: 'Raglan, NZ',
        long: 174.92315864891268,
        lat: -37.84460735298411,
        zoom: 15
    },
    {
        name: 'Designer Office',
        desc: 'Wellington, NZ',
        long: 174.7182087269391,
        lat: -41.289410519166815,
        zoom: 15
    },
    {
        name: 'Marketing Office',
        desc: 'Tauranga, NZ',
        long: 176.1589577153412,
        lat: -37.68717625728334,
        zoom: 15
    }
];

// Fly To
function flyToLocation(long, lat, zoomSize) {
    map.flyTo({
        center: [long, lat],
        zoom: zoomSize,
        essential: true
    })
}

// making the byuttons
var locateButton = '';
for (let i = 0; i < locations.length; i++) {
    locateButton += `<button class="btn btn-primary fly-to-button" id="flyTo" onClick='flyToLocation(${locations[i].long},${locations[i].lat}, ${locations[i].zoom})'><span class="text">${locations[i].name}</span>
    <span class="tire-track"></span></button>`
    pins.innerHTML += `<i class="fa-solid fa-map-pin" id="${locations[i].name}"></i>`
    newPins(locations[i])
    // POPUP MODAL -------
    function newPins(pin) {
        var pinElem = document.getElementById(pin.name)
        new mapboxgl.Marker(pinElem)
            .setLngLat([pin.long, pin.lat])
            .setPopup(new mapboxgl.Popup({
                offset: 25
            }).setHTML(`<h3>${locations[i].name}</h3><p>${locations[i].desc}</p>`))
            .addTo(map);
    }
}


buttons.innerHTML = locateButton;

// giving the locastions


// ------------------ STYLING ------------------

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

// Add fullscreen control to the map.
map.addControl(new mapboxgl.FullscreenControl());

// Add scale control to the map.
map.addControl(new mapboxgl.ScaleControl());


// SLIDING MAP BOX

function myFunction() {
    document.getElementById('foo').setAttribute("class", "style1");
}

function closeFunction() {
    document.getElementById('foo').setAttribute("class", "slide-container");
}