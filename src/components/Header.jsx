import { HiOutlineMoon, HiArrowSmLeft } from "react-icons/hi";
import { ES, SA, US } from "country-flag-icons/react/3x2";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import ButttonIcon from "./ButttonIcon";
import { useState } from "react";
import LangItem from "./LangItem";
import useClickOutside from "../hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  span {
    line-height: 2.8rem;
    font-size: 1.6rem;
    color: var(--color-gray-700);
  }
`;

const ArrowButton = styled.button`
  background-color: (var--color-gray-300);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: var(--color-gray-100);
  }

  svg {
    font-size: 1.3rem;
    color: var(--color-gray-500);
  }
`;

const TicketId = styled.span`
  line-height: 2.8rem;
  font-size: 1.4rem;
  color: var(--color-gray);
`;

const ActionList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EditTitle = styled.span`
  line-height: 2.8rem;
  font-size: 1.4rem;
  color: var(--color-gray-700);
`;

const LangsContainer = styled.div`
  position: relative;
`;

const LangsList = styled.ul`
  position: absolute;
  background-color: var(--color-white);
  box-shadow: 5px 2px 5px 3px rgba(0, 0, 0, 0.3);
  margin-top: 1.2rem;
  top: 100%;
  width: 15rem;
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  overflow: hidden;
  z-index: 999;
  padding: 5px;
  background-color: #fff;

  body[dir="ltr"] & {
    right: 0;
  }

  body[dir="rtl"] & {
    left: 0;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid var(--color-gray-8);
    padding: 1.2rem 1.2rem;

    &:hover {
      background-color: #ddd;
      color: #0771de;
    }

    &:disabled {
      background-color: #ddd;
      color: #0771de;
    }

    svg {
      width: 2rem;
      aspect-ratio: 1;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const currentLangCode = Cookies.get("i18next");
  const [showLangs, setShowLangs] = useState(false);
  const ref = useClickOutside(() => setShowLangs(false));

  return (
    <HeaderStyles>
      <HeaderInfo>
        <ArrowButton>
          <HiArrowSmLeft />
        </ArrowButton>

        <TicketId>{t("ticketId", { id: "123" })}</TicketId>
      </HeaderInfo>

      <ActionList>
        <EditTitle>{t("edit")}</EditTitle>

        <ButttonIcon>
          <FaRegEdit />
        </ButttonIcon>

        <ButttonIcon>
          <HiOutlineMoon />
        </ButttonIcon>

        <LangsContainer ref={ref}>
          <ButttonIcon onClick={() => setShowLangs((prev) => !prev)}>
            <AiOutlineGlobal />
          </ButttonIcon>

          {showLangs && (
            <LangsList>
              <LangItem
                disabled={currentLangCode === "ar"}
                code="ar"
                setShowLangs={setShowLangs}
              >
                <SA />
                العربية
              </LangItem>

              <LangItem
                disabled={currentLangCode === "en"}
                code="en"
                setShowLangs={setShowLangs}
              >
                <US title="United States" />
                English
              </LangItem>

              <LangItem
                disabled={currentLangCode === "es"}
                code="es"
                setShowLangs={setShowLangs}
              >
                <ES title="España" />
                España
              </LangItem>
            </LangsList>
          )}
        </LangsContainer>
      </ActionList>
    </HeaderStyles>
  );
};

export default Header;
