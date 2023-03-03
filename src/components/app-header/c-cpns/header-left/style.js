import styled from "styled-components"

const LeftWrapper = styled.div`
  flex:1;
  display:flex;
  .logo {
    cursor: pointer;
    color:${props => props.theme.color.primaryColor};
    cursor:pointer;
  }
`
export default LeftWrapper