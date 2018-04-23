import Generator from './generator/';

function generateCharacter(race, subrace, klass, background, alignment, age) {
  return Generator({
      race, subrace, class: klass, background, alignment, age
  });
}

export default generateCharacter;