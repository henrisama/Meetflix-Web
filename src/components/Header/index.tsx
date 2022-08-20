import {
  HeaderDiv,
  HeaderLink,
  HeaderLinks,
  LogoutButton,
  HeaderSearchBar,
  SearchField,
} from "./styled";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderLinks>
        <HeaderLink to="/browser">Browser</HeaderLink>
        <HeaderLink to="/wish">Wish</HeaderLink>
        <HeaderLink to="/watched">Watched</HeaderLink>
        <HeaderLink to="/explore">Explore</HeaderLink>
      </HeaderLinks>
      <HeaderSearchBar>
        <SearchField type="text" placeholder="search" />
        <LogoutButton />
      </HeaderSearchBar>
    </HeaderDiv>
  );
};

export default Header;
