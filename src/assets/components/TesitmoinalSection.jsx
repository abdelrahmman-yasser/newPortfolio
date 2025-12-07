import styled from "styled-components";

const Tesitmoinal = styled.div`
  padding: 16px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 25px;
    }
    @media (min-width: 768px) and (max-width: 923px) {
      gap: 15px;
    }
  }
`;
const TesitmoinalHeading = styled.h1`
  margin-top: 80px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 35px;
    font-size: 37px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 279px;
  padding: 40px;
  margin-right: 4px;
  border-radius: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: ${(props) => (props.$blackCard ? "white" : "#404040")};
  background-color: ${(props) => (props.$blackCard ? "black" : "white")};
  span {
    font-size: 17px;
    font-weight: 600;
    color: ${(props) => (props.$blackCard ? "white" : "black")};
  }

  @media (max-width: 768px) {
  }
`;

const Line = styled.div`
  width: 150px;
  border: 1px solid;
`;

const Opinion = styled.p`
  margin: 0;
`;

function TesitmoinalSection() {
  const clients = [
    {
      clientImg: "./images/client1.svg",
      clientOpinion:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      clientName: "Hossam Mo",
      clientJop: "Front end",
    },
    {
      clientImg: "./images/client2.svg",
      clientOpinion:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      clientName: "Flora sheen",
      clientJop: "Front end",
    },
    {
      clientImg: "./images/client1.svg",
      clientOpinion:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      clientName: "Zeyad karam",
      clientJop: "Works on the moon",
    },
  ];

  return (
    <>
      <Tesitmoinal>
        <TesitmoinalHeading>My Testimonial</TesitmoinalHeading>

        <div>
          {clients.map((client, index) => {
            return (
              <Card key={index} $blackCard={index === 1}>
                <img src={client.clientImg} alt={client.clientName} />
                <Opinion>{client.clientOpinion}</Opinion>
                <Line></Line>
                <span>{client.clientName}</span>
                <p>{client.clientJop}</p>
              </Card>
            );
          })}
        </div>
      </Tesitmoinal>
    </>
  );
}

export default TesitmoinalSection;
