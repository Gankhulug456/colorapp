///////////////////////////Background Color
document.body.style.backgroundColor = '#fffae6'; 

///////////////////////////Image Frame
const rectangleFrame = document.createElement('div');
rectangleFrame.id = 'rectangleFrame';
rectangleFrame.style.position = 'absolute';
rectangleFrame.style.width = '700px'; 
rectangleFrame.style.height = '750px'; 
rectangleFrame.style.borderRadius = '45px'; 
rectangleFrame.style.backgroundColor = 'white';
rectangleFrame.style.bottom = '70px'; 
rectangleFrame.style.left = '13%';
document.body.appendChild(rectangleFrame);

///////////////////////////Color wheel Frame
const rectangleFrame2 = document.createElement('div');
rectangleFrame2.id = 'rectangleFrame2';
rectangleFrame2.style.position = 'absolute';
rectangleFrame2.style.width = '500px'; 
rectangleFrame2.style.height = '430px'; 
rectangleFrame2.style.borderRadius = '45px'; 
rectangleFrame2.style.backgroundColor = 'white';
rectangleFrame2.style.bottom = '65px'; 
rectangleFrame2.style.left = '64%';
document.body.appendChild(rectangleFrame2);


/////////////////////////////////Color Wheel
const wheel = document.createElement('canvas');
wheel.id = 'colorWheel';
wheel.width = 500;
wheel.height = 500;
wheel.style.position = 'absolute';
wheel.style.bottom = '30px'; 
wheel.style.left = '64%';
document.body.appendChild(wheel);


/////////////////////////////////IMAGE 
const imageElement = document.createElement('img');
imageElement.width = 350;
imageElement.height = 640;
imageElement.id = 'selectedImage';
imageElement.style.display = 'block'; 
imageElement.style.position = 'absolute';
imageElement.style.bottom = '115px'; 
imageElement.style.left = '23%';
document.body.appendChild(imageElement);
imageElement.src = 'images/0.png';


/////////////////////////////////Name text
const nameElement = document.createElement('div');
nameElement.id = 'colorName';
nameElement.style.fontSize = '40px'
nameElement.style.fontFamily = 'Rondana, sans-serif';
nameElement.style.fontWeight = 'bold';
nameElement.style.position = 'absolute';
nameElement.style.bottom = '750px'; 
nameElement.style.left = '65%';
nameElement.style.alignItems = 'center'
nameElement.style.flexDirection = 'column'
document.body.appendChild(nameElement);


/////////////////////////////////Color text
const infoElement = document.createElement('div');
infoElement.id = 'colorInfo';
infoElement.style.fontSize = '23px'
infoElement.style.fontFamily = 'Rondana, sans-serif';
infoElement.style.fontWeight = 'regular';
infoElement.style.position = 'absolute';
infoElement.style.bottom = '690px'; 
infoElement.style.left = '65%';

document.body.appendChild(infoElement);

/////////////////////////////////HEX text
const hexElement = document.createElement('div');
hexElement.id = 'hexCode';
hexElement.style.fontSize = '23px'
hexElement.style.fontFamily = 'Rondana, sans-serif';
hexElement.style.fontWeight = 'regular';
hexElement.style.position = 'absolute';
hexElement.style.bottom = '650px'; 
hexElement.style.left = '65%';
document.body.appendChild(hexElement);

/////////////////////////////////SKU text
const skuElement = document.createElement('div');
skuElement.id = 'colorSKU';
skuElement.style.fontSize = '23px'
skuElement.style.fontFamily = 'Rondana, sans-serif';
skuElement.style.fontWeight = 'regular';
skuElement.style.position = 'absolute';
skuElement.style.bottom = '610px'; 
skuElement.style.left = '65%';
document.body.appendChild(skuElement);


/////////////////////////////////Shop Button
const shopButton = document.createElement('button');
shopButton.id = 'shopButton';
shopButton.textContent = 'SHOP ALL';
shopButton.style.fontSize = '20px';
shopButton.style.fontFamily = 'Roboto, sans-serif';
shopButton.style.position = 'absolute';
shopButton.style.bottom = '540px'; 
shopButton.style.left = '65%';
shopButton.style.padding = '8px 20px';
shopButton.style.borderRadius = '100px';
shopButton.style.backgroundColor = '#f87705'; 
shopButton.style.color = 'white'; 
document.body.appendChild(shopButton);

shopButton.onclick = function() {
    window.open(link[0], '_blank');
};

/////////////////////////////////Canvas
wheel.style.backgroundColor = 'transparent';
const ctx = wheel.getContext('2d');
const centerX = wheel.width / 2;
const centerY = wheel.height / 2;
const radius = 120;

// const colors = [
//     "#CB0100", "#DE1619", "#E72F1D", "#F14700",
//     "#F74E1D", "#F67405",  "#E9C200", "#F3B400",
//     "#F7C603", "#F5CF6F", "#BECF5B", "#519F61",
//     "#06924D", "#5AABB1", "#91C2CC", "#005AA2",
//     "#40719A", "#090C23", "#150074", "#6C47B2",
//     "#7E67FE", "#990050", "#F2306E", "#EE9BB5"
// ];
const colors = [
    "#FF1A1A", // Brighter red
    "#FF3333", // Brighter lava red
    "#FF4747", // Brighter red
    "#FF5C00", // Brighter orange
    "#FF6E1D", // Brighter sunset silk gold-red
    "#FF8505", // Brighter orange
    "#FFD700", // Brighter yellow
    "#FFDB00", // Brighter yellow
    "#FFE033", // Brighter satin yellow
    "#FFE86F", // Brighter pastel banana
    "#CFFF5B", // Brighter green/lime
    "#66C285", // Brighter forest green
    "#0ACF4D", // Brighter green
    "#6BD4D6", // Brighter arctic teal
    "#A3D7E0", // Brighter slate grey
    "#0074D9", // Brighter sapphire blue
    "#4A91BC", // Brighter blue
    "#2A2AFF", // Brighter dark blue
    "#7D3CFF", // Brighter purple
    "#8A2BE2", // Brighter purple
    "#9B8CFE", // Brighter periwinkle
    "#FF1AC6", // Brighter magenta
    "#FF33A6", // Brighter magenta
    "#FF99C8"  // Brighter lotus pink
];

const names = [
    "Panchroma Silk Red",
    "Panchroma Matte Lava Red",
    "Panchroma Red",
    "Panchroma Silk Orange",
    "Panchroma Dual Silk Sunset Silk Gold-Red",
    "Panchroma Orange",
    "Panchroma Silk Yellow",
    "Panchroma Yellow",
    "Panchroma Satin Yellow",
    "Panchroma Matte Pastel Banana", 
    "Panchroma Temp Shift Green/ Lime", 
    "Panchroma Matte Forest Green",
    "Panchroma Green", 
    "Panchroma Matte Arctic Teal", 
    "Panchroma Marble Slate Grey", 
    "Panchroma Matte Sapphire Blue",
    "Panchroma Dual Matte Blue", 
    "Panchroma Galaxy Dark Blue", 
    "Panchroma Silk Purple", 
    "Panchroma Purple",
    "Panchroma Silk Periwinkle", 
    "Panchroma Silk Magenta", 
    "Panchroma Magenta", 
    "Panchroma Matte Lotus Pink"
];
const infos = [
    "Silk Red",
    "Lava Red", 
    "Red", 
    "Silk Orange",
    "Sunset Silk Gold-Red", 
    "Orange", 
    "Silk Yellow", 
    "Yellow",
    "Satin Yello", 
    "Matte Pastel Banana", 
    "Green/Lime", 
    "Forest Green",
    "Green", 
    "Arctic Teal", 
    "Slate Grey", 
    "Sapphire Blue",
    "Blue", 
    "Dark Blue", 
    "Silk Purple", 
    "Purple",
    "Silk Periwinkle", 
    "Silk Magenta", 
    "Magenta", 
    "Lotus Pink"
];
const skus = [
    "PA03019", "PM70826", "PA02004", "PA03015", 
     "PA03030", "PA02008", "PA03016", "PA02007", 
    "PA05001", "PM70865", "PA02070", "PM70846", 
    "PA02006", "PM70844", "PM70942", "PM70828", 
    "PA02062", "PA02014", "PA03007", "PA02009", 
    "PA03035", "PA03004", "PA02054", "PA02053"
]

const hex = [
    "#CB0100", "#DE1619", "#E72F1D", "#F14700",
    "#F74E1D", "#F67405",  "#E9C200", "#F3B400",
    "#F7C603", "#F5CF6F", "#BECF5B", "#519F61",
    "#06924D", "#5AABB1", "#91C2CC", "#005AA2",
    "#40719A", "#090C23", "#150074", "#6C47B2",
    "#7E67FE", "#990050", "#F2306E", "#EE9BB5"
];

const link = [
    `https://us.polymaker.com`, 
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`,
    `https://us.polymaker.com`

]
//////////////////Function to draw a segment of the color wheel
function drawArcSegment(color, angleStart, angleEnd) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, angleStart, angleEnd);
    ctx.lineWidth = 80; 
    ctx.strokeStyle = color;
    ctx.stroke();
}

///////////////// Function to draw the entire color wheel
function drawColorWheel() {
    const angleIncrement = (2 * Math.PI) / colors.length;
    let currentAngle = 0;
    for (let i = 0; i < colors.length; i++) {
        drawArcSegment(colors[i], currentAngle, currentAngle + angleIncrement);
        currentAngle += angleIncrement;
    }
}


wheel.addEventListener('click', function(event) {
    const rect = wheel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const angle = Math.atan2(y - centerY, x - centerX) + Math.PI;
    const colorIndex = Math.floor((angle + Math.PI) / (2 * Math.PI) * colors.length) % colors.length;
    const color = colors[colorIndex];

    imageElement.src = `images/${colorIndex}.png`; 
    imageElement.style.display = 'block';
    nameElement.textContent = names[colorIndex]; 
    infoElement.textContent = `Color: ${infos[colorIndex]}`; 
    hexElement.textContent = `HEX: ${hex[colorIndex]}`; 
    skuElement.textContent = `SKU: ${skus[colorIndex]}`; 
    links = link[colorIndex]
    shopButton.onclick = function() {
        window.open(links, '_blank');
    };
    console.log('Clicked color:', color, 'at index:', colorIndex, 'name', names[colorIndex], 'SKU', skus[colorIndex]);
});

drawColorWheel();


nameElement.textContent = names[0];
infoElement.textContent = `Color: ${infos[0]}`;
hexElement.textContent = `HEX: ${hex[0]}`;
skuElement.textContent = `SKU: ${skus[0]}`;