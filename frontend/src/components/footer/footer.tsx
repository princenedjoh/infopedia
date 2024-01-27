import { AppTypography, Flex } from '../../styles/global'
import * as footerStyle from './footer.style'
import { BsInstagram, BsLinkedin, BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs'
import { TiSocialYoutube } from 'react-icons/ti'
import { FaTiktok } from 'react-icons/fa'
import { logos } from '../../assets'
import { navRoutes } from '../../router/router'
import { useNavigate } from 'react-router-dom'
import { SiThreadless } from 'react-icons/si'
import theme from '../../styles/theme'
import Tooltip from '@mui/material/Tooltip';

const socials = [
    {
        name : "instagram",
        icon : BsInstagram,
        route : "#"
    },
    {
        name : "linkedin",
        icon : BsLinkedin,
        route : "#"
    },
    {
        name : "facebook",
        icon : BsFacebook,
        route : "#"
    },
    {
        name : "twitter",
        icon : BsTwitter,
        route : "#"
    },
        {
        name : "youtube",
        icon : TiSocialYoutube,
        route : "#"
    },
    {
        name : "tiktok",
        icon : FaTiktok,
        route : "#"
    },
    {
        name : "threads",
        icon : SiThreadless,
        route : "#"
    },
]

interface propsType {
    rigid? : boolean
}

const Footer = ({rigid} : propsType) => {

    const navigate = useNavigate()
    const handleSocialClick = (link : string) => {
        window.open(link, '_blank')
    }

    return (
        <>
            <footerStyle.Main rigid={rigid}>
                <footerStyle.MainWrap>
                    <footerStyle.Socials>
                        {
                            socials.map((socialMap, index : number)=>{
                                return (
                                    <Tooltip 
                                        title={socialMap.name} 
                                        arrow placement='top'
                                        key={index}>
                                        <Flex width='fit-content' cursor='pointer'>
                                            <socialMap.icon 
                                                color={theme.colors2.gray.gray3}
                                                onClick={()=>handleSocialClick(socialMap.route)}/>
                                        </Flex>
                                    </Tooltip>
                                )
                            })
                        }
                    </footerStyle.Socials>
                    <footerStyle.Rights>
                        <AppTypography textColor={theme.colors2.gray.gray3}> © 2023 PrepRoom ALL RIGHTS RESERVED. </AppTypography>
                    </footerStyle.Rights>
                    <footerStyle.LogoIcon 
                        onClick={()=>{
                            navigate( navRoutes.find(route => route.name === 'home')!.path )
                        }}
                        src={logos.fullLogo}
                    />
                </footerStyle.MainWrap>
            </footerStyle.Main>
        </>
    )
}

export default Footer