const development = false
let urls;

if (development) {
  // development urls
  urls = {
    // BASE_URL: "http://192.168.41.1:8080/myapp/",
    // BASE_IMAGE_URL: "http://192.168.41.1:8080",
    BASE_URL: "http://localhost:8080/myapp/",
    BASE_IMAGE_URL: "http://localhost:8080",
  };
} else {
  // Production urls
  urls = {
    BASE_URL: "https://luxemoto.in/myapp/",
    BASE_IMAGE_URL: "https://luxemoto.in",
  };
}

export const { BASE_URL, BASE_IMAGE_URL } = urls;

export const POST_ENQUIRY_FORM = 'https://script.google.com/macros/s/AKfycbxMmJ0V3ruUw2-1MyT5GHGMxRP3PWpoNG88zeJqgACrktr0y0umh7ou3PJIET1sS_gsYg/exec';
