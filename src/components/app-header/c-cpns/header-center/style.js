import styled from "styled-components"

const CenterWrapper = styled.div`
  .search-bar {
    display:flex;
    align-items:center;
    padding-left: 10px;
    width:300px;
    height: 48px;
    border:1px solid #ccc;
    border-radius:22px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    box-sizing:border-box;
    cursor: pointer;

    .text {
        flex:1;
        padding-left: 10px;
        font-weight: 600;
    }
    .icon {
        margin:7px 7px 7px 0;
        padding:10px;
        border-radius:50%;
        color:#fff;
        background-color: ${props => props.theme.color.primaryColor};
    }

    ${props => props.theme.mixin.boxShadow}
  }
`
export default CenterWrapper