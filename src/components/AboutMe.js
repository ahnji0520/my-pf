import styled from "styled-components";

const Title = styled.h1`
  font-family: 'Cafe24Supermagic-Bold-v1.0', sans-serif;
  font-size: 40px;
  margin: 0;
`

const Container = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
`

const Image = styled.img`
  height: 280px;
  width: auto;
  border: 3px solid white;
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const AboutMe = () => {
  return(
    <Container>
      <Title>About Me</Title>
      <Div>
        <div>
          <p>안녕하세요!</p>
          <p>저는 고려대학교 컴퓨터학과 22학번 안지형입니다 &#58;&#62;</p>
          <p>최근 제게 있다고 자부하는 미적 감각(?)을 토대로</p>
          <p>사용자 경험을 개선하는 데 큰 흥미를 느끼고,</p>
          <p>열심히 프론트엔드 공부를 하고있습니다ㅎㅎ</p>
          <p>다양한 프로젝트를 경험하면서 기술적 역량을 향상시키고</p>
          <p>창의적이고 혁신적인 아이디어를 발전시켜 나가는 것이</p>
          <p>지금의 저의 목표입니다!</p>
        </div>
        <div>
          <Image src="/images/my-photo.jpg"/>
        </div>
      </Div>
  
    </Container>
  );
}

export default AboutMe;