
import React, {useState, useEffect} from "react";
import Gallery from 'react-photo-gallery';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import {
    Container,
} from "reactstrap";
const items = [
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_5ef076e42f2b4a4b80570698689eed4d~mv2.jpg/v1/fill/w_484,h_322,fp_0.50_0.50,q_90/afeca0_5ef076e42f2b4a4b80570698689eed4d~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 322
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_81cb749904954451b12ae09d3636ebc1~mv2.jpg/v1/fill/w_484,h_646,fp_0.50_0.50,q_90/afeca0_81cb749904954451b12ae09d3636ebc1~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 646
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_cff0db1877aa42909de84952a75348f5~mv2.jpg/v1/fill/w_484,h_646,fp_0.50_0.50,q_90/afeca0_cff0db1877aa42909de84952a75348f5~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 646
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_80a460e78b684e4484e7577f357dd016~mv2.jpg/v1/fill/w_484,h_606,fp_0.50_0.50,q_90/afeca0_80a460e78b684e4484e7577f357dd016~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 606
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_d24c17af5c4e4b37b858f164d65d9d0d~mv2.jpg/v1/fill/w_484,h_688,fp_0.50_0.50,q_90/afeca0_d24c17af5c4e4b37b858f164d65d9d0d~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 688
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_1ce937df7ece49deb55bddafec8d6a57~mv2.jpg/v1/fill/w_484,h_604,fp_0.50_0.50,q_90/afeca0_1ce937df7ece49deb55bddafec8d6a57~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 604
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_1c0f98e41f234ea2877b16ed0e421cb5~mv2.jpg/v1/fill/w_484,h_610,fp_0.50_0.50,q_90/afeca0_1c0f98e41f234ea2877b16ed0e421cb5~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 610
        }
    },
    { // Video item:
        itemId: 'sample-id',
        mediaUrl: 'https://www.youtube.com/embed/YWLPyRDblh4?autoplay=1&mute=0&controls=0&origin=https%3A%2F%2Fbarbarashikart.wixsite.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1',
        metaData: {
            type: 'video',
            width: 1920,
            height: 1080,
            // poster: 'https://static.wixstatic.com/media/afeca0_26f13d19be244ed88d5a3b4f2aee7340f003.jpg/v1/fill/w_432,h_768,fp_0.50_0.50,q_90/afeca0_26f13d19be244ed88d5a3b4f2aee7340f003.webp',
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_38ce8b19066c492482f31c56db355a40~mv2.jpg/v1/fill/w_494,h_658,fp_0.50_0.50,q_90/afeca0_38ce8b19066c492482f31c56db355a40~mv2.jpg',
        metaData: {
            type: 'image',
            width: 494,
            height: 658
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_23d001df24bd491e906a87d6f6e4832d~mv2.jpg/v1/fill/w_494,h_700,fp_0.50_0.50,q_90/afeca0_23d001df24bd491e906a87d6f6e4832d~mv2.jpg',
        metaData: {
            type: 'image',
            width: 494,
            height: 700
        }
    },
    { // Video item:
        itemId: 'sample-id',
        mediaUrl: 'https://video.wixstatic.com/video/afeca0_26f13d19be244ed88d5a3b4f2aee7340/480p/mp4/file.mp4',
        metaData: {
            type: 'video',
            width: 432,
            height: 768,
            poster: 'https://static.wixstatic.com/media/afeca0_26f13d19be244ed88d5a3b4f2aee7340f003.jpg/v1/fill/w_432,h_768,fp_0.50_0.50,q_90/afeca0_26f13d19be244ed88d5a3b4f2aee7340f003.webp',
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_024fecee53c84171ae37dcdbc66da064~mv2.jpg/v1/fill/w_484,h_646,fp_0.50_0.50,q_90/afeca0_024fecee53c84171ae37dcdbc66da064~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 646
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_c2ce7c914f5b432aa2a426d18daadb99~mv2.jpg/v1/fill/w_484,h_646,fp_0.50_0.50,q_90/afeca0_c2ce7c914f5b432aa2a426d18daadb99~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 646
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_0698d16f80d84e189a3ff1b4f2f6e87f~mv2.jpg/v1/fill/w_484,h_604,fp_0.50_0.50,q_90/afeca0_0698d16f80d84e189a3ff1b4f2f6e87f~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 604
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_48221a0ca69c40f5ab70fb8a2b57d886~mv2.jpg/v1/fill/w_484,h_606,fp_0.50_0.50,q_90/afeca0_48221a0ca69c40f5ab70fb8a2b57d886~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 606
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_194594ea011d4764b9b74e8c6377696d~mv2.jpg/v1/fill/w_484,h_604,fp_0.50_0.50,q_90/afeca0_194594ea011d4764b9b74e8c6377696d~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 604
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_549f5825d54845fb8c1cdb658899ce95~mv2.jpg/v1/fill/w_484,h_350,fp_0.50_0.50,q_90/afeca0_549f5825d54845fb8c1cdb658899ce95~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 350
        }
    },
    { // Image item:
        itemId: 'sample-id',
        mediaUrl: 'https://static.wixstatic.com/media/afeca0_686a7cc24e0e4ecf8267653aebab5d0e~mv2.jpg/v1/fill/w_484,h_718,fp_0.50_0.50,q_90/afeca0_686a7cc24e0e4ecf8267653aebab5d0e~mv2.jpg',
        metaData: {
            type: 'image',
            width: 484,
            height: 718
        }
    }
];
const options = {
    galleryLayout: -1,
    imageMargin: 10,
    collageDensity: 0.8,
    thumbnailSpacings: 10,
    gallerySize: 30,
    groupSize: 3,
    groupTypes: '1,2h,2v,3t,3b,3l,3r',
    enableInfiniteScroll: true,
    hoveringBehaviour: 'NEVER_SHOW',
    itemClick: 'nothing',
    overlayAnimation: 'NO_EFFECT',
    imageHoverAnimation: 'NO_EFFECT',
    imageLoadingMode: 'BLUR',
    scrollAnimation: 'NO_EFFECT',
    imageQuality: 90,
    videoPlay: 'auto',
    videoSpeed: '1',
    videoLoop: true,
};

function SectionButtons() {
    const [container, setContainer] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const handleResize = () => setContainer({width: window.innerWidth, height: window.innerHeight});
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    });
    return (
        <>
            <div className="section section-buttons">
                <ProGallery
                    container={container}
                    options={options}
                    items={items}
                />
            </div>
        </>
    );
}

export default SectionButtons;
