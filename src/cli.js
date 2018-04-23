import generateCharacter from './index';

module.exports = function LifeCLI (configArguments) {
    try {
        const character = generateCharacter(configArguments[0], configArguments[1], configArguments[2], configArguments[3], configArguments[4]);
        console.log(character);
    } catch (error) {
        console.error(error);
    }
};