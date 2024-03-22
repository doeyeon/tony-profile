import styled from 'styled-components';
import { getProfessionalExperience } from '@/helperFunctions/getExperience';
import { useState, useEffect } from 'react';
import { ProfessionalExperience } from '@/types';
import { motion, MotionStyle, useAnimation } from "framer-motion";
import Image from 'next/image';
import Head from 'next/head';

const TopNavLinkedin = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  margin-right: 10vw;
  margin-top: 20px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
`;

const TopNavEmail = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  margin-right: 5vw;
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
  gap: 10vh 5vw;
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
    background: #e9ecef; 
  }
  &::-webkit-scrollbar-thumb {
    background: #4361ee;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #9a8c98;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
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

const cardVariants = {
  closed: {
    width: "19vh",
    height: "19vh",
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
    width: "41vw",
    height: "35vh",
    borderRadius: "12px",
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
      <h2 style={{ fontWeight: 600, fontSize: 56, textAlign: 'center' }}>Hi, I&apos;m Tony</h2>
      <h3 style={{ fontWeight: 400, fontSize: 22, marginBottom: 40, textAlign: 'center', color: '#495057' }}>B.S (Hons) Computer Science w/ math minor</h3>
      <h3 style={{ fontWeight: 400, fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        Not currently seeking full-time roles
      </h3>
      <h3 style={{ fontWeight: 400, fontSize: 24, textAlign: 'center' }}>
        Previously @
        <a href="https://www.iata.org/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#072ac8' }}> IATA</a>,
        <a href="https://www.gm.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#1e96fc' }}> General Motors</a>,
        <a href="https://www.birdandbe.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#7400b8' }}> Bird&Be</a>
      </h3>
      <h3 style={{ fontWeight: 400, fontSize: 24, textAlign: 'center' }}>
        and Co-founder of
        <a href="https://www.phaserx.ca" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#ef476f' }}> PhaseRx</a>
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

            <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 5 }}>
              <span style={{ fontWeight: 'bold', color: '#4361ee' }}>Company: </span>
              {experience.company}
            </h3>

            <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 5 }}>
              <span style={{ fontWeight: 'bold', color: '#4361ee' }}>Role: </span>
              {experience.role}
            </h3>

            <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 5 }}>
              <span style={{ fontWeight: 'bold', color: '#4361ee' }}>Year: </span>
              {experience.year}
            </h3>

            <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 20 }}>
              <span style={{ fontWeight: 'bold', color: '#4361ee' }}>Key Skills: </span>
              {experience.skills}
            </h3>
            {
              experience.company == 'PhaseRx' && (
                <ButtonContainer>
                  <a style={{ fontWeight: 600, fontSize: 18, color: 'black', marginRight: 30 }} href="https://phaserx-casestudy.notion.site/Changing-Prescription-Management-With-A-Dropbox-d215f8f2574046f0bd8eb2ef57a0a1e0?pvs=4" target="_blank" rel="noopener noreferrer">Click to see case study</a>
                </ButtonContainer>
              )
            }

            <h3 style={{ fontWeight: 'bold', fontSize: 18, color: '#4361ee', marginBottom: 10 }}>
              {experience.summary_title}
            </h3>

            <h3 style={{ fontWeight: 400, fontSize: 18, marginBottom: 20 }}>
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
            <h3 style={{ fontWeight: 'bold', fontSize: 22, color: '#4361ee', marginBottom: 10 }}>
              {experience.background_title}
            </h3>
            <h3 style={{ fontWeight: 500, fontSize: 20, color: 'black', marginBottom: 10 }}>
              {experience.background_subtitle}
            </h3>
            <h3 style={{ fontWeight: 400, fontSize: 18, marginBottom: 10 }}>
              {experience.background_paragraph}
            </h3>
            <h3 style={{ fontWeight: 500, fontSize: 20, color: 'black', marginBottom: 10 }}>
              {experience.about_title}
            </h3>
            <h3 style={{ fontWeight: 400, fontSize: 18, marginBottom: 10 }}>
              {experience.about_paragraph}
            </h3>
            <h3 style={{ fontWeight: 'bold', fontSize: 22, color: '#4361ee', marginBottom: 10, marginTop: 10 }}>
              {experience.project_title}
            </h3>
            <h3 style={{ fontWeight: 400, fontSize: 18, marginBottom: 10 }}>
              {experience.project_summary}
            </h3>
            {
              experience.company !== 'PhaseRx' && (
                <ImageContainer style={{ marginBottom: 18, marginTop: 20 }}>
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
            <h3 style={{ fontWeight: 'bold', fontSize: 18, color: '#4361ee', marginBottom: 10, marginTop: 10 }}>
              {experience.project_subheading1}
            </h3>
            <h3 style={{ fontWeight: 400, fontSize: 18, marginBottom: 10 }}>
              {experience.project_desc1}
            </h3>
            <h3 style={{ fontWeight: 'bold', fontSize: 18, color: '#4361ee', marginBottom: 10 }}>
              {experience.project_subheading2}
            </h3>
            <h3 style={{ fontWeight: 400, fontSize: 18, marginBottom: 10 }}>
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
            <h3 style={{ fontWeight: 'bold', fontSize: 18, color: '#4361ee', marginBottom: 10 }}>
              {experience.project_subheading3}
            </h3>
            <h3 style={{ fontWeight: 400, fontSize: 18, marginBottom: 10 }}>
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

function GetProfessionalExperience({ experience }: { experience: ProfessionalExperience[] }) {
  const [isShown, setIsShown] = useState(false);

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

  const toggleExperienceVisibility = () => setIsShown(!isShown);
  return (
    <>
      {!isShown && (
        <ButtonContainer>
          <motion.div
            initial="floating"
            animate="floating"
            whileHover="hover"
            variants={buttonVariants}
            style={{ cursor: 'pointer', display: 'inline-block' }}
            onClick={toggleExperienceVisibility}
          >
            <h1 style={{ fontWeight: 400, fontSize: 24, textAlign: 'center' }}>Click here to discover my work ↓</h1>
          </motion.div>
        </ButtonContainer>
      )}
      {isShown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ProfessionalExperienceDetails experience={experience} />
        </motion.div>
      )}
    </>
  );
}

function ProfessionalExperienceDisplay({ experience }: { experience: ProfessionalExperience[] }) {
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
        <a style={{ fontWeight: 500, fontSize: 16, color: 'black', textAlign: 'center' }} href="https://github.com/doeyeon/tony-profile/blob/main/pages/index.tsx" target="_blank" rel="noopener noreferrer">View codebase for this site<br />(link to my github)</a>
      </TopNavCodebase >
      <TopNavLinkedin
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={navVariants}
        transition={{ duration: 0.5 }}
      >
        <a style={{ fontWeight: 500, fontSize: 20, color: 'black', marginRight: 30 }} href="https://www.linkedin.com/in/tony-yoon" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </TopNavLinkedin >
      <TopNavEmail
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={navVariants}
        transition={{ duration: 0.5 }}
      >
        <a style={{ fontWeight: 500, fontSize: 20, color: 'black' }} href="mailto:yoon.tony@outlook.com">Email</a>
      </TopNavEmail >
      <IntroductionSection></IntroductionSection>
      <GetProfessionalExperience experience={experience} />
    </>
  );
}

//Using getStaticProps() to load all contents when page is rendered
export async function getStaticProps() {
  let experienceData: ProfessionalExperience[] = [];

  //Directly imported getProfessionalExperience() to bypass using axios to get 'api/experience'
  try {
    experienceData = await getProfessionalExperience();
  } catch (error) {
    console.error('Failed to fetch experience data:', error);
  }

  return {
    props: {
      experience: experienceData,
    }
  };
}

export default ProfessionalExperienceDisplay;