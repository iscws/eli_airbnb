import styled from "styled-components"

const RightWrapper = styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
  color:${props => props.theme.text.primaryColor};
  font-weight: 600;
  
  .btns {
    display:flex;
    align-items: center;

    .btn {
      height:18px;
      line-height:18px;
      padding:12px 12px;
      border-radius:22px;
      cursor: pointer;
  
      &:hover {
        background-color: #f7f7f7;
        border-radius:22px;
      }
    }

   
  }
  .profiles {
      position:relative;
      display: flex;
      width: 77px;
      height: 42px;
      justify-content: space-evenly;
      align-items: center;
      margin:0 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 25px;
      background-color: #fff;
      cursor: pointer;   
      ${props => props.theme.mixin.boxShadow};
      
      .pannel {
        position:absolute;
        top:54px;
        right:0;
        padding:8px 0;
        width:240px;
        color:${props => props.theme.text.secondaryColor};
        font-weight:400;
        background-color: #fff;
        box-shadow: 0 0 6px  rgba(0,0,0,.18);
        border-radius:18px;
        overflow:hidden;
        .top {
          border-bottom:1px solid #dddddd;
          padding-bottom: 10px;
        }

        .bottom {
          padding-top: 10px;
        }
        .item {
          padding:12px 15px;

          &:hover {
            background-color: #f7f7f7;
          }
        }

        
      }

    }


`
export default RightWrapper