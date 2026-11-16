
/*
|--------------------------------------------------------------------------
| RENEWABLE MIRROR - STATIC ADVERTISEMENT STRIPS
|--------------------------------------------------------------------------
|
| TOTAL BANNERS: 4
| DISPLAY: 2 banners per row
|
| IMPORTANT:
| Banners automatically rotate nahi honge.
| Image sirf manually change karne par update hogi.
|
| IMAGE CHANGE:
| public/images/advertisements/ folder mein new image rakho.
| Neeche image path update karo.
|
| WEBSITE CHANGE:
| link mein advertiser ki website update karo.
|
|--------------------------------------------------------------------------
*/

const advertisementStrips = [
  // STRIP 01 - LEFT
  {
    id: 1,
    brand: "SolisStorage",
    image: "/images/advertisements/solis-storage.jpg",
    alt: "SolisStorage advertisement",
    link: "/contact",
  },

  // STRIP 02 - RIGHT
  {
    id: 2,
    brand: "Renewable Mirror",
    image: "/images/advertisements/renewable-mirror-ad.jpg",
    alt: "Renewable Mirror advertisement",
    link: "/contact",
  },

  // STRIP 03 - FUTURE USE
  {
    id: 3,
    brand: "KP Group",
    image: "/images/advertisements/kp-group.jpg",
    alt: "KP Group advertisement",
    link: "/contact",
  },

  // STRIP 04 - FUTURE USE
  {
    id: 4,
    brand: "Advertise Here",
    image: "/images/advertisements/advertise-here.jpg",
    alt: "Advertise with Renewable Mirror",
    link: "/contact",
  },
];

export default advertisementStrips;
