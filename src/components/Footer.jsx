import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <h1>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/mhmdali102"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mhmd Ali Hsen
        </a>
      </h1>
      <nav>
        <ul>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: rgb(var(--bg-main));
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid rgb(var(--gray));
  border-bottom: 0;
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(var(--fg-main), 70%);

  & a {
    text-decoration: underline;
    &:hover {
      transition: color var(--transition-d) var(--transition-tf);
      color: rgb(var(--fg-main));
    }
  }
`;

export default Footer;
