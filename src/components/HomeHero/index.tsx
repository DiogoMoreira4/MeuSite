import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/FotoHomeHero.jpeg';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto"></img>
      <div>
        <TextContainer>
          <h1> Olá</h1>
          <h2> O meu nome é Diogo Moreira </h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span>//Minha apresentação</span>
            <span>//Infos</span>{'\u007B'}
            <div>
              Nome: <span>Diogo</span>
            </div>
            <div>
              Nome: <span>Moreira</span>
            </div>
            {'\u007B'}
          </CodeItem>

        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
