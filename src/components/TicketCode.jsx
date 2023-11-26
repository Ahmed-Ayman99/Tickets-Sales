import { useTranslation } from "react-i18next";
import { LuSend } from "react-icons/lu";
import styled from "styled-components";
import QRCode from "react-qr-code";

const TicketCodeStyles = styled.div`
  padding: 1.5rem 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: end;

  body[dir="rtl"] & {
    flex-direction: row-reverse;
  }
`;

const Figure = styled.figure`
  width: 8.2rem;
  aspect-ratio: 1/1;
  background-color: #333;
  overflow: hidden;
  border-radius: var(--border-radius-tiny);
`;

const DiscountAction = styled.div`
  gap: 1.7rem;
  display: flex;
  align-items: end;

  body[dir="rtl"] & {
    flex-direction: row-reverse;
  }
`;

const Discount = styled.p`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  color: #fff;
  font-weight: 600;

  span:nth-child(1) {
    font-size: 1.4rem;
    line-height: 1.67rem;
    text-transform: capitalize;
  }

  span:nth-child(2) {
    font-size: 1.8rem;
    line-height: 2.194remd;
  }
`;

const ShareButton = styled.button`
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  border: 1px solid var(--color-gray-0);
  color: var(--color-gray-0);
  background-color: transparent;
  transition: all 0.3s ease-in;

  padding: 0.6rem;
  line-height: 1.44rem;
  font-size: 1.4rem;
  letter-spacing: 0.5px;

  body[dir="rtl"] & {
    flex-direction: row-reverse;

    svg {
      transform: rotate(-90deg);
    }
  }

  &:hover {
    background-color: var(--color-gray-0);
    color: var(--color-gray-700);
  }

  & svg {
    font-size: 1.6rem;
  }
`;

const TicketCode = () => {
  const { t } = useTranslation();

  return (
    <TicketCodeStyles>
      <Figure>
        <QRCode
          style={{
            height: "auto",
            width: "100%",
            padding: "3.5px",
            background: "#fff",
          }}
          value="VALUE"
          viewBox={`0 0 256 256`}
        />
      </Figure>

      <DiscountAction>
        <ShareButton>
          {t("share")}
          <LuSend />
        </ShareButton>

        <Discount>
          <span>{t("discount")}</span> <span>{t("percentage")}</span>
        </Discount>
      </DiscountAction>
    </TicketCodeStyles>
  );
};

export default TicketCode;
