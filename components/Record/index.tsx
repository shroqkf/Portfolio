import styled from "styled-components";
import { Container, flexCenter, media } from "../../styles/theme";
import { nanoid } from "nanoid";

const records = [
  {
    id: "2022",
    contents: [
      {
        id: "1",
        title: "MAMA",
        kr:
          "홍익대학교 경영대학 마케팅경진 대회" +
          "(My Attractive Marketing Awards)",
        info: "본상 수상",
        date: "2022.08.20-2022.11.25",
      },
    ],
  },
  {
    id: "2023",
    contents: [
      {
        id: "1",
        title: "HICC",
        kr: "홍익대학교 중앙컴퓨터동아리 HICC 운영진",
        info: "전체 행사 기획 및 세미나 운영",
        date: "2023.03.10-2024.03.01",
      },
      {
        id: "2",
        title: "UMC",
        kr: "대학생 연합 개발 동아리 UMC 5기 FE Challenger",
        info: "홍익대 지부 FE 스터디장",
        date: "2023.09.10-2024.02.23",
      },
    ],
  },
  {
    id: "2024",
    contents: [
      {
        id: "1",
        title: "Codeit boost",
        kr: "IT 부트캠프 동아리 Codeit boost 1기 홍익대 FE Manager",
        info: "홍익대학교 전체 행사 기획 및 FE 운영",
        date: "2024.02.26-current",
      },
      {
        id: "2",
        title: "ICT 멘토링 한이음",
        kr: "클라우드 네이티브 및 개발 프로젝트",
        info: "멘티",
        date: "2024.03.05-2024.10.18",
      },
      {
        id: "3",
        title: "SOPT",
        kr: "대학생연합 IT벤처창업 동아리 35기 WEB",
        info: "WEB 공부 및 프로젝트 참여",
        date: "2024.09.25-current",
      },
    ],
  },
];

const Record = () => {
  return (
    <Wrapper>
      {records.map((record) => (
        <div key={nanoid()} className="container">
          <div>
            <Title title={record.id}>{record.id}</Title>
            {record.contents.map((content) => (
              <div className="box" key={nanoid()}>
                <div className="title">
                  <div>{content.title}</div>
                  <div className="kr">{content.kr}</div>
                </div>
                <div className="info">{content.info}</div>
                <div className="date">{content.date}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  .container {
    width: 100%;
    height: 70rem;
    position: sticky;
    top: 10rem;

    ${media.mobile} {
      background-color: #000;
      top: 5rem;
      border-radius: 1.5rem;
    }

    .box {
      width: 35rem;
      margin-top: 5rem;

      ${media.mobile} {
        margin-top: 3rem;
      }

      .title {
        ${flexCenter};
        justify-content: space-between;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;

        ${media.mobile} {
          font-size: 2rem;
        }

        .kr {
          font-weight: 300;
          font-size: 1.2rem;
          line-height: 1.7rem;
        }
      }
      .info {
        margin-top: 0.4rem;
        font-size: 1.8rem;
        line-height: 2.2rem;

        ${media.mobile} {
          font-size: 1.5rem;
        }
      }
      .date {
        margin-top: 0.4rem;
        text-align: end;
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }
    &:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }
`;

const Title = styled.div<{ title: string }>`
  text-align: start;
  font-weight: bold;
  font-size: 6.4rem;
  line-height: 7.8rem;
  color: transparent;
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.white};
  position: relative;

  ${media.mobile} {
    font-size: 5rem;
    margin-top: 1rem;
  }

  ::after {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: -0.4rem;
    top: -0.4rem;
    -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.red};
    opacity: 0.7;

    ${media.mobile} {
      left: -0.2rem;
      top: -0.2rem;
    }
  }
  ::before {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: 0.4rem;
    top: 0.4rem;
    -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.blue};
    opacity: 0.7;

    ${media.mobile} {
      left: 0.2rem;
      top: 0.2rem;
    }
  }
`;

export default Record;
