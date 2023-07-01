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
          description="Fabio era um jovem trabalhador que tinha um amor profundo pela música, que
          apesar de trabalhar duro para sustentar a si mesmo e sua família, Fabio sempre encontrava 
          tempo para se dedicar à sua paixão pela música. Ele gostava de ouvir diversos gêneros, 
          desde o rock clássico até a música eletrônica, passando pelo jazz e pelo blues. A cada 
          canção que escutava, ele sentia uma conexão única com as emoções e histórias que as músicas 
          contavam."
          image={fabioDescription}
        />
      </SwiperSlide>

      <SwiperSlide>
        <DescriptionScreen
          description="Jhessy era uma jovem apaixonada por música dona de uma linda voz, apesar de ter
           um talento inegável, Jhessy era uma pessoa tímida. Ela cantava apenas em sua casa, para sua 
           família e amigos mais próximos. A timidez a impedia de compartilhar sua voz com o mundo, mas, 
           secretamente, ela sonhava em um dia poder subir em um palco e emocionar uma plateia com suas 
           canções."
          image={jhessyDescription}
          align="right"
        />
      </SwiperSlide>

      <SwiperSlide>
        <DescriptionScreen
          description="Em um belo dia, os caminhos de Fabio e Jhessy finalmente se cruzaram. Enquanto Fabio dormia, 
            seus ouvidos foram capturados por uma voz doce e poderosa que ecoava pelo local, era Jhessy, que foi 
            apresentada pelo destino à casa de Fábio. Fabio ficou impressionado com o talento de Jhessy, seus olhos se 
            encontraram voltados para uma linda garota de forma inexplicável, despertando-o um romance por Jhessy."
        />
      </SwiperSlide>

      <SwiperSlide>
        <FoldedScreen
          leftTitle="A aproximação"
          leftDescription="A partir daquele momento, a música começou a fluir entre eles. Fábio e Jhessy tocavam e 
            cantavam juntos, como se estivessem destinados a conviverem juntos pelo resto da vida. Eles conversavam 
            bastante e se empolgavam quando conheciam uma nova música que os tocavam."
          leftImage="https://media.tenor.com/2o076SAKH2MAAAAC/love-you.gif"
          rightTitle="O início do Amor"
          rightDescription="Com o passar do tempo, Fábio e Jhessy descobriram não apenas uma conexão musical profunda, 
            mas também um vínculo pessoal significativo. Eles compartilhavam sonhos, ambições e um amor incondicional. 
            O Amor entre cresceu tanto, que logo começaram a namorar, momento em que ambos ficaram muitos felizes por
            terem se encontrado."
          rightImage="https://media.tenor.com/6oxZrxQ9ZYMAAAAC/kiss-love.gif"
        />
      </SwiperSlide>

      <SwiperSlide>
        <TransitionScreen
          title="A distância"
          description="Fábio recebeu uma oportunidade única de estudar em uma renomada universidade em outra cidade, ele sabia
            que essa seria uma chance de crescimento pessoal e profissional, mas também estava ciente dos desafios que encontraria
            ao manter o relacionamento à distância, pois teria que deixar sua amada em sua cidade natal para conquistar seu objetivo."
        />
      </SwiperSlide>

      <SwiperSlide>
        <FoldedScreen
          leftTitle="A difuculdade"
          leftDescription="Com o coração apertado, Fábio partiu em busca de seus sonhos, enquanto Jhessy permaneceu na cidade natal, 
            apoiando-o em sua jornada. Ambos sabiam que o relacionamento exigiria esforço, comunicação constante e confiança para superar 
            a distância física. Fábio mergulhou de cabeça nos estudos, aproveitando ao máximo sua experiência acadêmica. Ele se dedicava a 
            aprender e crescer, mas sempre encontrava um tempo para Jhessy em sua rotina agitada. Eles sempre trocavam mensagens no dia a dia
            para evitar que a distância os consumissem."
          leftImage="https://media.tenor.com/taaDcnbqRe0AAAAM/como-voce-me-deixou-hoje-que-fiz-eu.gif"
          rightTitle="O apoio"
          rightDescription="Enquanto isso, Jhessy também continuou a desenvolver sua carreira musical. Ela seguiu fazendo shows, mantendo-se 
            conectada com Fábio através de mensagens. Jhessy sentia a falta de Fábio, mas acreditava firmemente no potencial dele e na jornada 
            que ele estava trilhando. Não era fácil para Jhessy manter um relacionamento a distância, pois ela tinha medo de ser magoada. Mesmo
            com todos os receios, Jhessy acreditou que tudo iria dar certo e foi até o fim da jornada, com muita garra, determinação, fé e força."
          rightImage="https://media.tenor.com/Alfw1pU62qgAAAAi/triste.gif"
        />
      </SwiperSlide>

      <SwiperSlide>
        <DescriptionScreen
          description="À medida que os meses se transformaram em anos, Fábio e Jhessy aprenderam a valorizar cada pequeno momento que passavam 
            juntos e a fortalecer ainda mais a conexão que compartilhavam. A distância serviu como um teste de fogo para o amor deles, mostrando que, 
            mesmo separados geograficamente, podiam enfrentar os desafios e permanecer unidos. Enquanto Fábio se aproximava da formatura, ele começou 
            a pensar em seu futuro. Ele percebeu que, além do sucesso acadêmico, seu verdadeiro desejo era estar ao lado de Jhessy novamente. Desse modo
            Fábio se esforçou muito para finalizar seus estudos e voltar para os braços de seu grande Amor."
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
