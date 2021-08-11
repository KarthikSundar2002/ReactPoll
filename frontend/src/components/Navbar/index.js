
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  function handleLogOut() {
    sessionStorage.removeItem("user");
  }


  return (
    <>
      <Nav>

        <NavLink to="/teams">
          <h1>TeamPoll</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Polls' activeStyle>
            Polls
          </NavLink>
          <NavLink to='/teams' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/createTeam' activeStyle>Create Team</NavLink>
          <NavLink to='/joinTeam' activeStyle>Join Team</NavLink>
          <NavLink to='/CreatePoll' activeStyle>Create Poll</NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/signin' onClick={handleLogOut}>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;