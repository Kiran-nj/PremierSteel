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

export const POST_ENQUIRY_FORM = 'https://script.google.com/macros/s/AKfycbyAQ04smCYj90yuDeyx-6AQQVLgQC9i1_ljnXFrH9EvuP8luAGcPVwEF3LP6XtGNDZ2Mg/exec';
