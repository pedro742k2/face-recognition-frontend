const particlesOptions = {
    particles: {
        collisions: {
            enable: true,
        },
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1000,
            },
        },
        shape: {
            type: "images",
            image: [
                { src: "path/to/first/image.svg", height: 20, width: 20 },
                { src: "path/to/second/image.jpg", height: 20, width: 20 },
            ],
        },
        line_linked: {
            shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5,
            },
        },
    },
};

export default particlesOptions;
