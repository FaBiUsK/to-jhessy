import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Cover from "./components/Cover";
import TransitionScreen from "./components/TransitionScreen";
import DescriptionScreen from "./components/DescriptionScreen";
import FoldedScreen from "./components/FoldedScreen";

import fabioDescription from "assets/photo_10.jpg";
import jhessyDescription from "assets/photo_11.jpg";

const Book: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={25}
      slidesPerView={1}
      mousewheel={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Cover />
      </SwiperSlide>

      <SwiperSlide>
        <TransitionScreen
          title="O início"
          description="Fábio e Jhessy, duas almas apaixonadas pela música, tiveram o destino
            unido por meio do som de um violão. Suas histórias individuais se
            entrelaçaram quando suas melodias se encontraram em um acaso do
            destino."
        />
      </SwiperSlide>

      <SwiperSlide>
        <DescriptionScreen
          description="Fábio, um jovem talentoso e dedicado, era conhecido em sua cidade
            como um exímio violonista. Suas mãos habilidosas produziam acordes
            que encantavam os corações dos que o ouviam. Ele passava horas e
            horas tocando seu instrumento, deixando que a música falasse por ele
            quando as palavras não eram suficientes."
          image={fabioDescription}
        />
      </SwiperSlide>

      <SwiperSlide>
        <DescriptionScreen
          description="Jhessy, por sua vez, era uma cantora em ascensão. Desde muito jovem, sua 
            voz cativante e emocional havia chamado a atenção de todos que a escutavam. Ela 
            sonhava em compartilhar sua paixão pela música com alguém que pudesse acompanhá-la, 
            alguém cujo som de um violão pudesse se fundir perfeitamente com sua voz."
          image={jhessyDescription}
          align="right"
        />
      </SwiperSlide>

      <SwiperSlide>
        <DescriptionScreen
          description="Em uma bela tarde de verão, os caminhos de Fábio e Jhessy se 
            cruzaram em um parque local, onde ambos costumavam encontrar refúgio em meio à natureza. Fábio, 
            sentado em um banco, dedilhava seu violão com a melodia de uma canção que compusera recentemente. 
            Jhessy, que passava pelo parque, foi atraída pela música e se aproximou cautelosamente. Seus 
            olhos se encontraram e, em um momento mágico, souberam que aquele encontro não era por acaso. Jhessy 
            timidamente perguntou se poderia se juntar a Fábio, e ele, com um sorriso acolhedor, convidou-a para 
            sentar-se ao seu lado."
        />
      </SwiperSlide>

      <SwiperSlide>
        <FoldedScreen
          leftTitle="A aproximação"
          leftDescription="A partir daquele momento, a música começou a fluir entre eles. Fábio e Jhessy tocavam e 
            cantavam juntos, como se estivessem destinados a fazer música em conjunto. Suas vozes se entrelaçavam, 
            harmonizando-se de forma natural e trazendo emoção a cada nota. O violão de Fábio acompanhava perfeitamente 
            a melodia da voz de Jhessy, criando um conjunto único e poderoso."
          leftImage="https://media.tenor.com/2o076SAKH2MAAAAC/love-you.gif"
          rightTitle="O início do Amor"
          rightDescription="Com o passar do tempo, Fábio e Jhessy descobriram não apenas uma conexão musical profunda, 
            mas também um vínculo pessoal significativo. Eles compartilhavam sonhos, ambições e um amor incondicional pela 
            música. Enquanto tocavam juntos, exploravam novos horizontes e inspiravam-se mutuamente a alcançar novos patamares 
            artísticos."
          rightImage="https://media.tenor.com/6oxZrxQ9ZYMAAAAC/kiss-love.gif"
        />
      </SwiperSlide>

      <SwiperSlide>
        <TransitionScreen
          title="A distância"
          description="Fábio recebeu uma oportunidade única de estudar em uma renomada universidade em outra cidade, ele sabia
            que essa seria uma chance de crescimento pessoal e profissional, mas também estava ciente dos desafios que encontraria
            ao manter o relacionamento à distância."
        />
      </SwiperSlide>

      <SwiperSlide>
        <FoldedScreen
          leftTitle="A difuculdade"
          leftDescription="Com o coração apertado, Fábio partiu em busca de seus sonhos, enquanto Jhessy permaneceu na cidade natal, 
            apoiando-o em sua jornada. Ambos sabiam que o relacionamento exigiria esforço, comunicação constante e confiança para superar 
            a distância física. Fábio mergulhou de cabeça nos estudos, aproveitando ao máximo sua experiência acadêmica. Ele se dedicava a 
            aprender e crescer, mas sempre encontrava um tempo para Jhessy em sua rotina agitada. Eles estabeleceram um cronograma regular 
            de chamadas de vídeo e mensagens, compartilhando suas vidas diárias, desafios e conquistas."
          leftImage="https://media.tenor.com/taaDcnbqRe0AAAAM/como-voce-me-deixou-hoje-que-fiz-eu.gif"
          rightTitle="O apoio"
          rightDescription="Jhessy, por sua vez, apoiava Fábio de longe. Ela o incentivava a perseguir seus sonhos e lembrava-o 
            constantemente do amor e apoio que sentia por ele. Jhessy encontrou consolo em sua família e amigos, mantendo-se ocupada com 
            seus próprios estudos e atividades. Ela sabia que precisava continuar avançando em sua própria vida enquanto Fábio estava fora.
            Embora houvesse momentos de tristeza e saudade, Fábio e Jhessy encontravam forças para superar as barreiras da distância. Eles 
            planejavam visitas regulares, aproveitando ao máximo o tempo que tinham juntos."
          rightImage="https://media.tenor.com/Alfw1pU62qgAAAAi/triste.gif"
        />
      </SwiperSlide>

      <SwiperSlide>
        <DescriptionScreen
          description="À medida que os meses se transformaram em anos, Fábio e Jhessy aprenderam a valorizar cada pequeno momento que passavam 
            juntos e a fortalecer ainda mais a conexão que compartilhavam. A distância serviu como um teste de fogo para o amor deles, mostrando que, 
            mesmo separados geograficamente, podiam enfrentar os desafios e permanecer unidos. Enquanto Fábio se aproximava da formatura, ele começou 
            a pensar em seu futuro. Ele percebeu que, além do sucesso acadêmico, seu verdadeiro desejo era estar ao lado de Jhessy novamente. Assim, 
            ele tomou a decisão de voltar para a cidade natal após a conclusão da faculdade."
        />
      </SwiperSlide>

      <SwiperSlide>
        <TransitionScreen
          title="O retorno"
          description="No dia em que Fábio retornou, eles se abraçaram com força, incapazes de conter a felicidade de estarem finalmente juntos novamente. 
          Eles perceberam que a distância só fortaleceu seu amor e apreciação."
        />
      </SwiperSlide>

      <SwiperSlide>
        <TransitionScreen
          title="Página em branco..."
          description="Mude a página ->"
        />
      </SwiperSlide>

      <SwiperSlide>
        <TransitionScreen
          title="Mais uma em branco..."
          description="Mude a página ->"
        />
      </SwiperSlide>

      <SwiperSlide>
        <TransitionScreen
          title="Continuação"
          description="Existem muitas páginas em branco dessa história para serem contruídas, cada página é importante 
            e representa um pouco dessa linda história, porém, para que a história possa se completar, é necessário dar
            mais um passo importante."
          buttonText="Próximo passo"
          buttonLink={() => window.location.assign("/quiz")}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Book;
