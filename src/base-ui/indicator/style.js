import styled from "styled-components";


export const IndicatorWrapper = styled.div`
        overflow: hidden;
    
    .i-content {
        display: flex;
        position:relative;
        transition: all ease 0.2s;
        >* {
        /* 子元素不收缩 */
        flex-shrink: 0;
    }

    }
`