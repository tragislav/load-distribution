import { FooterWrapper, FooterTitle, FooterLink } from './styled';

function Footer() {
  return (
    <FooterWrapper>
      <FooterTitle>
        Copyright © 2022 | Все права защищены, Поддержка веб-сервиса{' '}
        <FooterLink href="https://cit.vstu.by/">cit.vstu.by</FooterLink>
      </FooterTitle>
    </FooterWrapper>
  );
}

export default Footer;
