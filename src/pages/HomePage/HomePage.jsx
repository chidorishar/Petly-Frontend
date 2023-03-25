import donateIcon from './donate.jpg';
import { DonateImg } from './HomePage.styled';
import { Heading } from './HomePage.styled';
import { Section } from './HomePage.styled';
const HomePage = () => {
  return (
    <Section>
      
        <Heading> Take good care of your small pets   
          <a
              href="https://happypaw.ua/ua/assistance"
              target="_blank"
              rel="noopener noreferrer"
            >
              < DonateImg src={donateIcon} alt="donate" /> 
            </a>  </Heading>
      
    </Section>
  );
};

export default HomePage;