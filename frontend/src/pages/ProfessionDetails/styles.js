import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;
export const TopImage = styled.div`
  background: url('https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg')
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 16rem;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.p`
  color: #fff;

  font-size: 4rem;
  font-weight: 600;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  background: #fff;
  height: 16rem;
  margin: 2rem 4rem;
  box-shadow: 2px 4px 13px #381e1e0a;
  border-radius: 3px;
  display: flex;
  padding: 1rem;

  &:nth-of-type('') {
    width: 90%;
  }
`;

export const TitleItem = styled.h5`
  color: #454b57;
  margin-top: 2rem;
  margin-left: 1rem;
  font-size: 2.3rem;
  font-weight: 600;
`;
export const TextItem = styled.p`
  color: #454b57;
  margin-left: 1rem;
  margin-top: 1rem;
  text-align: justify;
  margin: 10px;
`;
export const TextCall = styled.p`
  color: #353440;
  margin-left: 1rem;
  margin-top: 1rem;
`;
export const ButtonEntrar = styled.button`
  color: #353440;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 980px;
  margin: 0 auto;
`;

export const CardProfession = styled.div`
  width: 50%;
  margin: 10px;
  height: 350px;
  background: #fafcff;

  > a {
    border: 0;
    border-radius: 4px;
    height: 38px;
    font-size: 14px;
    background-color: #5c8df6;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    width: 120px;
    position: relative;
    top: 15px;
    padding: 9px 32px;
  }
`;

export const Back = styled.button`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 150px;
  height: 50px;
  background: #fafcff;
  border-radius: 5px;
`;
