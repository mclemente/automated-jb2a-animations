export const particleDefaultValues = {
    explosion: {
        type: "explosion",
        speed: 0,
        repeat: 1,
        delay: 500,
        scale: 2,
        color01: "#FFFFFF",
        color02: "#FFFFFF",
        sprite: "modules/levels-3d-preview/assets/particles/dust.png",
        life: 500,
        emittersize: 1,
        alpha: 0.2,
        mass: 400,
        gravity: 2,
        rate: 10,
        explosion: {}
    },
    projectile: {
        type: "projectile",
        speed: 5,
        repeat: 1,
        arc: 2,
        delay: 500,
        scale: 0.7,
        color01: "#FFFFFF",
        color02: "#FFFFFF",
        sprite: "modules/levels-3d-preview/assets/particles/emberssmall.png",
        life: 500,
        emittersize: .0001,
        alpha: 0.5,
        mass: 100,
        gravity: 0,
        rate: 10,
        explosion: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            speed: 1,
            gravity: 2,
            life: 500,
            rate: 10,
            emittersize: 1,
            alpha: 0.5,
            mass: 100,
            sprite: "modules/levels-3d-preview/assets/particles/dust.png",
            scale: 1,
        },
    },
    ray: {
        type: "ray",
        speed: 5,
        repeat: 1,
        arc: 2,
        delay: 500,
        scale: 0.7,
        color01: "#FFFFFF",
        color02: "#FFFFFF",
        sprite: "modules/levels-3d-preview/assets/particles/emberssmall.png",
        life: 500,
        emittersize: .0001,
        alpha: 0.5,
        mass: 100,
        gravity: 0,
        rate: 10,
        explosion: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            speed: 1,
            gravity: 2,
            life: 500,
            rate: 10,
            emittersize: 1,
            alpha: 0.5,
            mass: 100,
            sprite: "modules/levels-3d-preview/assets/particles/dust.png",
            scale: 1,
        },
    },
    sprite: {
        type: "sprite",
        speed: 5,
        repeat: 1,
        delay: 0,
        scale: 0.7,
        color01: "#FFFFFF",
        sprite: "modules/levels-3d-preview/assets/particles/emberssmall.png",
        alpha: 0.7,
        explosion: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            speed: 1,
            gravity: 2,
            life: 500,
            rate: 10,
            emittersize: 1,
            alpha: 0.5,
            mass: 100,
            sprite: "modules/levels-3d-preview/assets/particles/dust.png",
            scale: 1,
        },
    },
}