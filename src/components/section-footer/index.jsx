import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
    const { name } = props;
    let message = '查看更多';
    if (name) {
        message = `查看更多${name}的房源`
    }

    const navigate = useNavigate();
    function moreClickHandle() {
        navigate("/entires");
    }
    return (
        <FooterWrapper color={name ? "#00848A" : "#000"}>
            <div className="info" onClick={moreClickHandle}>
                <span className="text">{message}</span>
                <IconMoreArrow />
            </div>
        </FooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter