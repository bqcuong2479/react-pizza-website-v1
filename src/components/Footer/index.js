import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank'
                                aria-lable="Facebook" rel='noopener noreferrer'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                                aria-lable="Instagram" rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                                aria-lable="Youtube" rel='noopener noreferrer'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                                aria-lable="Twitter" rel='noopener noreferrer'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                                aria-lable="Linkedin" rel='noopener noreferrer'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer >
    )
}

export default Footer
