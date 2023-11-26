import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import styled, { css } from "styled-components";
import ButttonIcon from "./ButttonIcon";
import Cookies from "js-cookie";

const PagesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const PagesCounts = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const PageButton = styled.button`
  color: var(--color-black);
  background-color: transparent;
  border-radius: var(--border-radius-tiny);
  width: 2.7rem;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.35rem;
  line-height: 13.5px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: var(--color-brand);
    color: var(--color-gray-0);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: var(--color-brand);
      color: var(--color-gray-0);
    `}
`;

const Pagination = ({ onNext, onPrev, pagesCount, currentPage, onClick }) => {
  const currentLangCode = Cookies.get("i18next");

  return (
    <PagesContainer>
      <PagesCounts>
        <ButttonIcon onClick={onPrev} disabled={currentPage === 1}>
          {currentLangCode === "ar" ? (
            <RiArrowRightSLine />
          ) : (
            <RiArrowLeftSLine />
          )}
        </ButttonIcon>

        {Array.from({ length: pagesCount }).map((page, ind) => (
          <PageButton
            key={ind}
            active={ind + 1 === currentPage}
            disabled={ind + 1 === currentPage}
            onClick={() => onClick(ind + 1)}
          >
            {ind + 1}
          </PageButton>
        ))}
      </PagesCounts>

      <ButttonIcon onClick={onNext} disabled={currentPage === pagesCount}>
        {currentLangCode === "ar" ? (
          <RiArrowLeftSLine />
        ) : (
          <RiArrowRightSLine />
        )}
      </ButttonIcon>
    </PagesContainer>
  );
};

export default Pagination;
