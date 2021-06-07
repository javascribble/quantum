Number.random = (max = 1, min = 0) => Math.random() * (max - min) + min;

Number.clamp = (value, max = 1, min = 0) => Math.min(Math.max(value, min), max);