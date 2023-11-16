import styled from "styled-components";


const Title = styled.h1`
  font-family: 'Cafe24Supermagic-Bold-v1.0', sans-serif;
  font-size: 40px;
  margin: 0;
`
const Video = styled.video`
  width: 100%;
  height: auto; 
  margin-top: 40px;
`
const Image = styled.img`
  width: 100%;
  height: auto; 
  margin-top: 40px;
`

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #d8dbe7;
  border-radius: 20px;
  color: #3f3f3f;
  margin: 10px 0;
  padding: 2px 12px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'JeonjuCraftGoR', sans-serif;
`;

const Lightedp = styled.p`
  color: #808080;
`

const Lightedp2 = styled.p`
  color: #FF4500;
`

const Projects = () => {
  return(
    <div>
      <Title>Projects</Title>
      <>
        <Video src="/videos/tic-tac-toe-play.mp4" loop autoPlay muted />
        <ProjectTitle>TIC.TAC,TOE</ProjectTitle>
        <Lightedp>리액트를 학습하며 제작한 데스크탑 페이지입니다.</Lightedp>
        <p>게임 시작 시 입장 페이지를 도입하여 전체적인 사용자 경험을 향상시켰고,</p>
        <p>틱택토 게임의 플레이 방식을 개선하여 히스토리 추적 기능을 추가하였으며</p>
        <p>승자가 결정되면 팝업 창을 띄우도록 구현했습니다.</p>
        <a href="https://github.com/ahnji0520/tic-tac-toe" target="_blank" rel="noopener noreferrer">소스코드 보러가기</a>
      </>
      <>
        <Video src="/videos/todo-play.mp4" loop autoPlay muted />
        <ProjectTitle>TO DO LIST</ProjectTitle>
        <Lightedp>리액트를 학습하며 제작한 데스크탑 페이지입니다.</Lightedp>
        <p>CRUD(Create, Read, Update, Delete) 기능에 중점을 두고 구현했습니다.</p>
        <p>할 일 추가, 수정, 부분 삭제, 전체 삭제 등이 가능합니다.</p>
        <a href="https://github.com/ahnji0520/todo" target="_blank" rel="noopener noreferrer">소스코드 보러가기</a>
      </>
      <>
        <Image src="/images/lost-ku-picture.png"/>
        <ProjectTitle>고려대학교 분실물센터, 로스트KU</ProjectTitle>
        <Lightedp2>현재 Devkor에서 기획, 디자인, 프론트엔드를 맡아 진행중인 협업 프로젝트입니다.</Lightedp2>
        <p>로그인, 새로운 글 추가, 카테고리 등의 기본적 기능에 더하여</p>
        <p>분실/습득 위치와 메인화면 지도를 연동하는 것을 목표로 개발 중에 있습니다.</p>
        <a href="https://github.com/DevKor-github/lost-ku-front" target="_blank" rel="noopener noreferrer">소스코드 보러가기</a>
      </>
    </div>
  );
}

export default Projects;