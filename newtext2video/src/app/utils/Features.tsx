
import { navbarname } from "./Navbar"
export const fetures_title = "Benefits of AI Video from text"
import { MdOutlineSettingsVoice,MdVideoLibrary, } from "react-icons/md";
import { MdOutlineHighQuality } from "react-icons/md";
import { GiReceiveMoney  } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
export const fetures_description = "Transform text, prompts, and documents into professional-quality videos with just a few clicks"
export const features_data = [
    {
        id: 1,
        title: 'AI Text to Video & Image Generation',
        description: 'Convert text into engaging videos and generate stunning images using advanced AI technology. Customize scenes, add effects, and create high-quality content effortlessly.',
        icon: <MdVideoLibrary size={24} />,
        bgcolor:"blue"
    },
    {
        id: 2,
        title: 'Voice & Background Music Integration',
        description: 'Add realistic voiceovers and background music to your videos. Choose from a variety of tracks or upload your own audio to enhance your content.',
        icon: <MdOutlineSettingsVoice size={24}  />,
        bgcolor:"green"
    },
    {
        id: 3,
        title: 'Video Customization & Branding',
        description: 'Generate videos optimized for YouTube Shorts and ads with customizable backgrounds, logos, and positions. Easily scale video production and maintain high quality without needing extensive experience.',
        icon:<MdOutlineHighQuality size={24} />,
        bgcolor:"orange"
    },
    {
        id: 4,
        title: 'Scale Video Production',
        description: 'Easily create a high volume of videos, supporting scalable content strategies for growing audiences — without compromising on quality or timing.',
        icon: < FaPeopleLine  size={24} />,
        bgcolor:"black"
    },
    {
        id: 5,
        title: 'Cost-Effective',
        description: 'Save on overhead costs such as staffing, equipment, and software licenses, making high-quality video production more affordable',
        icon: <GiReceiveMoney  size={24} />,
        bgcolor:"red"
    },
    {
        id: 6,
        title: 'No Experience Necessary',
        description: `${navbarname} is designed to be user-friendly for beginners while still delivering the powerful features professionals need.`,
        icon: <FaRegUser size={24} />,
        bgcolor:"#db2d88"
    }
      ]