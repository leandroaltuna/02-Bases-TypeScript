
//console.log(process.env);

//console.log(process.env.PORT ?? 3000);

//const{SHELL} = process.env;
//console.log(SHELL);

const{SHELL, HOMEBREW_PREFIX, npm_lifecycle_script} = process.env;
//console.log({SHELL, HOMEBREW_PREFIX, npm_lifecycle_script});
//console.table({SHELL, HOMEBREW_PREFIX, npm_lifecycle_script});

//const characters = ['Flash','Superman','Batman'];
//const [, , batman] = characters;
//console.log(batman);

const characters = ['Flash','Superman', 'Green Lantern','Batman'];
const [, , , batman] = characters; // video about breakpoints