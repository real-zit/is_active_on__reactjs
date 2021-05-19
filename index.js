import styled, { css } from "styled-components";

const Avatar = ({ src, name, isActive, hasBadge }) => {
  return (
    <StyledWrapper isActive={isActive}>
      {hasBadge && <StyledBadge />}
      {src ? (
        <StyledImage src={src} alt={name} />
      ) : (
        <StyledSpan>{name}</StyledSpan>
      )}
    </StyledWrapper>
  );
};

export default Avatar;

const size = "80px";
const activeStyles = css`
  /* background: #262526; */
  background: linear-gradient(45deg, #21fce2, #0b8fe0);
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: -2px;
    left: -2px;
    width: calc(100%+4px);
    height: calc(100%+4px);
    border-radius: 50%;
  }
`;

const StyledWrapper = styled.span`
  display: block;
  position: relative;
  width: ${size};
  height: ${size};
  padding: 5px;
  border-radius: 50%;
  ${(p) => p.isActive && activeStyles};
`;

const avatarStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #21fce2;
`;

const StyledImage = styled.img`
  ${avatarStyles}
  object-fit:cover;
`;

const StyledSpan = styled.span`
  ${avatarStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
`;

const StyledBadge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: -6px;
  right: -2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #21fc6b;
`;
