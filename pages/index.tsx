import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProfessionalExperience } from '@/types';
import { motion, MotionStyle, useAnimation } from "framer-motion";
import Image from 'next/image';
import Head from 'next/head';

const TopNavProfiles = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  margin-right: 70px;
  margin-top: 20px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
`;

const TopNavCodebase = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  margin-left: 40px;
  margin-top: 20px;
  position: absolute;
  top: 0;
  right: 100;
  z-index: 100;
`;


const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

const CenteredSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 80px 0;
  width: 50%;
  margin: auto;
`;

const ExperienceSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, max-content));
  gap: 10vh 6vw;
  justify-content: center;
  align-items: start;
  padding: 20px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: white;
  margin: 10px auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 50%;
  width: 20vh;
  height: 20vh;
  box-sizing: content-box;
`;

const ScrollContainer = styled.div`
  overflow-y: auto;
  max-height: 300px;
  width: 100%;
  padding: 10px;
  color: black;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f8f4f9; 
  }
  &::-webkit-scrollbar-thumb {
    background: #e0ded3;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #9a8c98;
  }
  scrollbar-face-color: #e0ded3;
  scrollbar-base-color: #f8f4f9;
  scrollbar-3dlight-color: #f8f4f9;
  scrollbar-highlight-color: #f8f4f9;
  scrollbar-track-color: #f8f4f9;
  scrollbar-arrow-color: #e0ded3;
  scrollbar-shadow-color: #f8f4f9;
  scrollbar-dark-shadow-color: #f8f4f9;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding-top: 33.33%;
`;

const GifContainer = styled.div`
  position: relative;
`;

const fontFamilyStyle = { fontFamily: "'Biotif', 'Segoe UI', 'Roboto', 'Arial', sans-serif" };

const cardVariants = {
  closed: {
    width: "18vh",
    height: "18vh",
    borderRadius: "50%",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  open: {
    width: "40vw",
    height: "35vh",
    borderRadius: "15px",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  }
};

function IntroductionSection() {
  return (
    <CenteredSection>
      <h2 style={{ ...fontFamilyStyle, fontWeight: 800, fontSize: 40, textAlign: 'center' }}>Hi, I&apos;m Tony!</h2>
      <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 16, marginBottom: 40, textAlign: 'center' }}>B.S (Hons) Computer Science & Math Minor</h3>
      <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        Currently seeking full-time roles
      </h3>
      <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 24, textAlign: 'center' }}>
        Previously @
        <a href="https://www.iata.org/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#4361ee' }}> IATA</a>,
        <a href="https://www.gm.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#4361ee' }}> General Motors</a>,
        <a href="https://www.birdandbe.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#4361ee' }}> Bird&Be</a>
      </h3>
      <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 24, textAlign: 'center' }}>
        and Co-founder of
        <a href="https://www.phaserx.ca" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#4361ee' }}> PhaseRx</a>
      </h3>
    </CenteredSection >
  );
}

function ExperienceCard({ experience }: { experience: ProfessionalExperience }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollContainer, setShowScrollContainer] = useState(false);
  const controls = useAnimation();

  const onCardAnimationComplete = () => {
    if (isOpen) {
      setTimeout(() => setShowScrollContainer(true), 0);
    }
  };

  const cardStyle: MotionStyle = {
    position: 'relative',
    cursor: 'pointer',
    padding: isOpen ? '40px' : '0',
  };

  useEffect(() => {
    const animateTextAndLogo = async () => {
      if (isOpen) {
        await controls.start({ opacity: 0 });
        await controls.start({ opacity: 1 });
      } else {
        await controls.start({ opacity: 0 });
      }
    };

    if (isOpen) {
      animateTextAndLogo();
      setShowScrollContainer(false);
    } else {
      animateTextAndLogo();
      setShowScrollContainer(false);
    }
  }, [isOpen, controls]);

  return (
    <Card
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={cardVariants}
      onClick={() => setIsOpen(!isOpen)}
      style={cardStyle}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onCardAnimationComplete}
      whileHover={!isOpen ? "hover" : undefined}
    >
      {!isOpen && (
        <Image
          src={`/logo/${experience.logo}`}
          alt={`${experience.company} logo`}
          layout="fill"
          objectFit="cover"
        />
      )}
      {isOpen && showScrollContainer && (
        <motion.div
          key={showScrollContainer ? 'visible' : 'hidden'}
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollContainer ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollContainer style={{ overflowY: isOpen ? 'auto' : 'hidden' }}>

            <h3 style={{ ...fontFamilyStyle, fontWeight: 600, fontSize: 20, marginBottom: 5 }}>
              <span style={{ fontWeight: 'bold', color: '#4361ee' }}>Company: </span>
              {experience.company}
            </h3>

            <h3 style={{ ...fontFamilyStyle, fontWeight: 600, fontSize: 20, marginBottom: 5 }}>
              <span style={{ fontWeight: 'bold', color: '#4361ee' }}>Role: </span>
              {experience.role}
            </h3>

            <h3 style={{ ...fontFamilyStyle, fontWeight: 600, fontSize: 20, marginBottom: 5 }}>
              <span style={{ fontWeight: 'bold', color: '#4361ee' }}>Year: </span>
              {experience.year}
            </h3>

            <h3 style={{ ...fontFamilyStyle, fontWeight: 600, fontSize: 20, marginBottom: 20 }}>
              <span style={{ fontWeight: 'bold', color: '#4361ee' }}>Key Skills: </span>
              {experience.skills}
            </h3>

            <h3 style={{ ...fontFamilyStyle, fontWeight: 'bold', fontSize: 24, color: '#4361ee', marginBottom: 10 }}>
              {experience.summary_title}
            </h3>

            <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 20, marginBottom: 20 }}>
              {experience.summary_paragraph}
            </h3>
            {
              experience.company == 'PhaseRx' && (
                <GifContainer style={{ marginBottom: 20, marginTop: 20 }}>
                  <Image
                    src={`/diagrams/${experience.diagram1}`}
                    alt="PhaseRx Video"
                    layout="responsive"
                    objectFit="contain"
                    objectPosition="cover"
                    width={800}
                    height={600}
                  />
                </GifContainer>
              )
            }
            <h3 style={{ ...fontFamilyStyle, fontWeight: 'bold', fontSize: 24, color: '#4361ee', marginBottom: 10 }}>
              {experience.background_title}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 500, fontSize: 22, color: 'black', marginBottom: 10 }}>
              {experience.background_subtitle}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 20, marginBottom: 10 }}>
              {experience.background_paragraph}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 500, fontSize: 22, color: 'black', marginBottom: 10 }}>
              {experience.about_title}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 20, marginBottom: 10 }}>
              {experience.about_paragraph}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 'bold', fontSize: 24, color: '#4361ee', marginBottom: 10, marginTop: 10 }}>
              {experience.project_title}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 20, marginBottom: 10 }}>
              {experience.project_summary}
            </h3>
            {
              experience.company !== 'PhaseRx' && (
                <ImageContainer style={{ marginBottom: 20, marginTop: 20 }}>
                  <Image
                    src={`/diagrams/${experience.diagram1}`}
                    alt={`${experience.company} diagram1`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </ImageContainer>
              )
            }
            <h3 style={{ ...fontFamilyStyle, fontWeight: 'bold', fontSize: 20, color: '#4361ee', marginBottom: 10, marginTop: 10 }}>
              {experience.project_subheading1}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 20, marginBottom: 10 }}>
              {experience.project_desc1}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 'bold', fontSize: 20, color: '#4361ee', marginBottom: 10 }}>
              {experience.project_subheading2}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 20, marginBottom: 10 }}>
              {experience.project_desc2}
            </h3>
            {
              experience.company !== 'PhaseRx' && (
                <ImageContainer style={{ marginBottom: 20, marginTop: 20 }}>
                  <Image
                    src={`/diagrams/${experience.diagram2}`}
                    alt={`${experience.company} diagram2`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </ImageContainer>
              )
            }
            <h3 style={{ ...fontFamilyStyle, fontWeight: 'bold', fontSize: 20, color: '#4361ee', marginBottom: 10 }}>
              {experience.project_subheading3}
            </h3>
            <h3 style={{ ...fontFamilyStyle, fontWeight: 400, fontSize: 20, marginBottom: 10 }}>
              {experience.project_desc3}
            </h3>
          </ScrollContainer>
        </motion.div>
      )}
    </Card>
  );
}

function ProfessionalExperienceDetails({ experience }: { experience: ProfessionalExperience[] }) {
  return (
    <ExperienceSection>
      {experience.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </ExperienceSection>
  );
}

function GetProfessionalExperience() {
  const [experience, setExperience] = useState<ProfessionalExperience[] | null>(null);
  const [loading, setIsLoading] = useState(false);

  const buttonVariants: any = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    floating: {
      y: ["-5%", "5%"],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
      },
    },
  };

  const fetchExperience = () => {
    setIsLoading(true);
    const url = `/api/experience`;
    axios
      .get(url)
      .then(({ data }) => {
        setExperience(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((e) => {
        const error = e.toJSON();
        console.error(error);
        alert('Something went wrong, please try again');
        setIsLoading(false);
      });
  };

  return (
    <>
      {!loading && !experience && (
        <ButtonContainer>
          <motion.div
            initial="floating"
            animate="floating"
            whileHover="hover"
            variants={buttonVariants}
            style={{ cursor: 'pointer', display: 'inline-block' }}
            onClick={fetchExperience}
          >
            <Image
              src="/buttons/Button1.svg"
              alt="Load Experience"
              width={330}
              height={70}
            />
          </motion.div>
        </ButtonContainer>
      )}
      {experience && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <ProfessionalExperienceDetails experience={experience} />
        </motion.div>
      )}
    </>
  );
}

function ProfessionalExperienceDisplay() {
  return (
    <>
      <Head>
        <title>Tony Yoon - Profile</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <TopNavCodebase
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={navVariants}
        transition={{ duration: 0.5 }}
      >
        <a style={{ ...fontFamilyStyle, fontWeight: 500, fontSize: 16, color: 'black', textAlign: 'center' }} href="https://github.com/doeyeon/tony-profile/blob/main/pages/index.tsx" target="_blank" rel="noopener noreferrer">View codebase for this site<br />(link to my github)</a>
      </TopNavCodebase >
      <TopNavProfiles
        initial="hidden"
        animate="visible"
        variants={navVariants}
        transition={{ duration: 0.5 }}
      >
        <a style={{ ...fontFamilyStyle, fontWeight: 500, fontSize: 20, color: 'black', marginRight: 30 }} href="https://www.linkedin.com/in/tony-yoon" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a style={{ ...fontFamilyStyle, fontWeight: 500, fontSize: 20, color: 'black' }} href="mailto:yoon.tony@outlook.com">Email</a>
      </TopNavProfiles >
      <IntroductionSection></IntroductionSection>
      <GetProfessionalExperience />
    </>
  );
}

export default ProfessionalExperienceDisplay;