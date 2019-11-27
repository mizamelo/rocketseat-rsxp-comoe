import React from 'react';
import {
  Container,
  TopImage,
  Title,
  ListItem,
  TitleItem,
  TextItem,
  TextCall,
  Content,
  CardProfession,
  Back
} from './styles';
import { Link } from 'react-router-dom';

export default function DetailsProfission() {
  return (
    <Container>
      <TopImage>
        <Title>Programador Front-end</Title>
      </TopImage>
      <Content>
        <Back> Voltar</Back>
        <CardProfession>
          <TitleItem>Sobre a Profissão</TitleItem>
          <TextItem>
            Basicamente, o front-end desenvolve em HTML, CSS e JavaScript,
            produzindo o layout do produto digital e criando interatividade
            entre os elementos da página ou do aplicativo. Dessa forma, o
            profissional não está inserido num único time, mas costuma transitar
            entre as áreas de design, de desenvolvimento back-end, de
            infraestrutura e de QA. <br /> As atividades diárias variam de
            acordo com as fases de desenvolvimento do projeto. No início, a
            equipe prioriza a estruturação (front), definindo os padrões de
            código e documentando o projeto. Já durante o desenvolvimento, o
            profissional cria o layout, geralmente enviado pela equipe de design
            em PSD, e o transforma em código. Neste ponto é importante lembrar
            que o desenvolvedor utiliza JavaScript diariamente para adicionar
            interação às suas peças.
          </TextItem>
        </CardProfession>

        <CardProfession>
          <TitleItem>Mercado de Trabalho</TitleItem>
          <TextItem>
            De acordo com um levantamento feito pelo trampos.co em dezembro,
            Desenvolvedor(a) Front-end foi a função mais procurada pelas
            empresas em 2015. Para os líderes Caio e Felipe, a profissão cresce
            à medida que novas tecnologias surgem e se tornam populares. “O
            Flash por exemplo, que há poucos anos era amplamente utilizado,
            morreu e deu lugar a uma maior maturidade do JavaScript. Essa
            maturidade deu origem a novas ferramentas que impulsionam o
            desenvolvimento web, mas que podem daqui a alguns anos, serem
            substituídas por outras tecnologias”, contam. A dupla acredita que,
            independente das mudanças, a área está evoluindo numa velocidade
            incrível, que valoriza cada vez mais o usuário e traz soluções mais
            robustas.
          </TextItem>
          <TextItem>QUANTO GANHA?</TextItem>
          <TextItem>
            Conforme os dados das oportunidades divulgadas no trampos.co, a
            faixa salarial de um Desenvolvedor Front-end varia entre R$ 2.000 e
            R$ 4.500. Já a bolsa para estagiários normalmente é de R$ 1.500. Os
            salários para profissionais Sênior podem chegar a R$ 10.000.
          </TextItem>
        </CardProfession>
      </Content>
    </Container>
  );
}
